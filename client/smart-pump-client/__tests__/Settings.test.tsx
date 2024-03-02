import { Provider } from "react-redux";

import SettingsPage from "@/app/settings/page";
import { setAuth, store } from "@/redux";
import { render, fireEvent } from "@testing-library/react";

describe("Settings form and balace modal", () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <SettingsPage />
      </Provider>
    );
  });

  it("toggles the user infomation form", () => {
    const { getByText, queryByRole } = component;

    expect(queryByRole("form")).toBeNull();

    fireEvent.click(getByText("Edit"));

    expect(queryByRole("form")).toBeInTheDocument();
  });

  it("opens and closes the balance modal", () => {
    const { getByText, queryByText } = component;

    expect(queryByText(/Your balance is:/i)).toBeNull();

    fireEvent.click(getByText("Balance"));

    expect(queryByText(/Your balance is:/i)).toBeInTheDocument();
  });
});

describe("Settings page", () => {
  it("loads information on the form of the authenticated user", () => {
    const user = {
      age: 111,
      eyeColor: "s",
      name: {
        first: "a234",
        last: "Briggssss",
      },
      company: "TESTING",
      email: "henderson.briggs@geeknet.net",
      phone: "123",
      address: "121 National Drive, Cotopaxi, Michigan, 8240",
    };

    store.dispatch(setAuth({ isAuthorized: true, user }));

    const { getByText, getAllByRole, getByRole } = render(
      <Provider store={store}>
        <SettingsPage />
      </Provider>
    );

    fireEvent.click(getByText("Edit"));

    expect(getByText("⚙️ Settings")).toBeInTheDocument();

    const textBoxes = getAllByRole("textbox");
    const numberInput = getByRole("spinbutton");

    const addressInput = textBoxes.find((input) => input.id === "address");
    const companyInput = textBoxes.find((input) => input.id === "company");
    const emailInput = textBoxes.find((input) => input.id === "email");
    const eyeColorInput = textBoxes.find((input) => input.id === "eye-color");
    const firstNameInput = textBoxes.find((input) => input.id === "first-name");
    const lastNameInput = textBoxes.find((input) => input.id === "last-name");
    const phoneInput = textBoxes.find((input) => input.id === "phone");

    // @ts-ignore Jest library error to fix. It works fine
    expect(addressInput?.value).toBe(user.address);
    // @ts-ignore Jest library error to fix. It works fine
    expect(Number(numberInput?.value)).toBe(user.age);
    // @ts-ignore Jest library error to fix. It works fine
    expect(companyInput?.value).toBe(user.company);
    // @ts-ignore Jest library error to fix. It works fine
    expect(emailInput?.value).toBe(user.email);
    // @ts-ignore Jest library error to fix. It works fine
    expect(eyeColorInput?.value).toBe(user.eyeColor);
    // @ts-ignore Jest library error to fix. It works fine
    expect(firstNameInput?.value).toBe(user.name.first);
    // @ts-ignore Jest library error to fix. It works fine
    expect(lastNameInput?.value).toBe(user.name.last);
    // @ts-ignore Jest library error to fix. It works fine
    expect(phoneInput?.value).toBe(user.phone);
  });
});

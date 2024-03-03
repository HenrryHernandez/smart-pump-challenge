import server from "../src/server.js";
import request from "supertest";

describe("Validate token", () => {
  test("error (token not found)", async () => {
    const response = await request(server).get("/api/user").send();

    expect(response.statusCode).toBe(404);
  });

  test("error (token not found)", async () => {
    const token = "token=aninvalidone";

    const response = await request(server)
      .get("/api/user")
      .send()
      .set("Cookie", token);

    expect(response.statusCode).toBe(401);
  });
});

describe("User", () => {
  test("get information - success", async () => {
    const userData = { email: "test.user@gmail.com", password: "asd123" };

    const loginResponse = await request(server)
      .post("/api/auth/login")
      .send(userData);

    const token = loginResponse.header["set-cookie"];

    const response = await request(server)
      .get("/api/user")
      .send()
      .set("Cookie", token);

    expect(response.statusCode).toBe(200);
  });

  test("update information - success", async () => {
    const userData = { email: "test.user@gmail.com", password: "asd123" };
    const dataToUpdate = { eyeColor: "purple" };

    const loginResponse = await request(server)
      .post("/api/auth/login")
      .send(userData);

    const token = loginResponse.header["set-cookie"];

    const response = await request(server)
      .put("/api/user")
      .send(dataToUpdate)
      .set("Cookie", token);

    expect(response.statusCode).toBe(200);
  });
});

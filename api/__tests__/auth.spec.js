import server from "../src/server.js";
import request from "supertest";

describe("Login", () => {
  test("successful login", async () => {
    const userData = { email: "test.user@gmail.com", password: "asd123" };

    const response = await request(server)
      .post("/api/auth/login/")
      .send(userData);

    expect(response.statusCode).toBe(200);
  });

  test("unsuccessful login - no information", async () => {
    const userData = { email: "", password: "" };

    const response = await request(server)
      .post("/api/auth/login/")
      .send(userData);

    expect(response.statusCode).toBe(400);
  });

  test("unsuccessful login - user doesn't exist or is inactive", async () => {
    const userData = { email: "test.user.2@gmail.com", password: "asd123" };

    const response = await request(server)
      .post("/api/auth/login/")
      .send(userData);

    expect(response.statusCode).toBe(404);
  });

  test("unsuccessful login - incorrect password", async () => {
    const userData = { email: "test.user@gmail.com", password: "asdf1234" };

    const response = await request(server)
      .post("/api/auth/login/")
      .send(userData);

    expect(response.statusCode).toBe(404);
  });
});

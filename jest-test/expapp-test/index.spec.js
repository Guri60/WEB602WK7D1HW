const request = require("supertest");
const app = require("./index");

describe("Test todo methods", () => {

  test("Returns all todos", async () => {

    const response = await request(app)
      .get("/todo")
      .expect(200);

    expect(response.body.length).toBe(3);

  });

  test("Returns todo with id 2", async () => {

    const response = await request(app)
      .get("/todo/2")
      .expect(200);

    expect(response.body.todo)
      .toBe("Get pizza for dinner");

  });

});

describe("Test external API", () => {

  test("Should retrieve a joke", async () => {

    const response = await request(app)
      .get("/joke")
      .expect(200);

    expect(response.body.value)
      .toBeTruthy();

  });

});
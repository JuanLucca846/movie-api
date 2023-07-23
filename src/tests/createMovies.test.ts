import request from "supertest";
import server from "../server";

describe("Places API", () => {
  it("should create a movie", async () => {
    const createResponse = await request(server).post("/movies").send({
      name: "Movie 1",
      category: "Movie",
      duration: 120,
      price: 35,
    });

    expect(createResponse.status).toBe(201);
    expect(createResponse.body).toHaveProperty("id");
  });

  it("should get all movies", async () => {
    await request(server).post("/movies").send({
      name: "Movie 2",
      category: "Movie",
      duration: 120,
      price: 35,
    });

    await request(server).post("/movies").send({
      name: "Movie 3",
      category: "Movie",
      duration: 120,
      price: 35,
    });

    const getResponse = await request(server).get("/movies");

    expect(getResponse.status).toBe(200);
    expect(getResponse.body).toBeInstanceOf(Array);
  });

  it("should get a specific movie", async () => {
    const createResponse = await request(server).post("/movies").send({
      name: "Movie 4",
      category: "Movie",
      duration: 120,
      price: 35,
    });

    const movieId = createResponse.body.id;

    const getResponse = await request(server).get(`/movies/${movieId}`);

    expect(getResponse.status).toBe(200);
    expect(getResponse.body).toHaveProperty("name", "Movie 4");
  });

  it("should edit a movie", async () => {
    const createResponse = await request(server).post("/movies").send({
      name: "Movie 5",
      category: "Movie",
      duration: 120,
      price: 35,
    });

    const movieId = createResponse.body.id;

    const editResponse = await request(server)
      .put(`/movies/${movieId}`)
      .send({
        name: "Movie 6",
        category: "Movie",
        duration: 120,
        price: 35,
      })
      .set("Content-Type", "application/json");

    expect(editResponse.status).toBe(200);
    expect(editResponse.body).toHaveProperty("name", "Movie 6");
  });

  it("should delete a movie", async () => {
    const createResponse = await request(server).post("/movies").send({
      name: "Movie 7",
      category: "Movie",
      duration: 100,
      price: 25,
    });

    const movieId = createResponse.body.id;

    const deleteResponse = await request(server).delete(`/movies/${movieId}`);

    expect(deleteResponse.status).toBe(204);
  });
});

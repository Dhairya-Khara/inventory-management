const request = require("supertest")
const app = require('../src/express')

//Test to create item named "Hammer" with quantity 25
test("Create new item", async () => {
    await request(app).post("/createItem").field("name", "Hammer").field("stock", 25).field("id", "1").field("createdAt", 1).expect(200)
})

//Test to check item with same id fails to be stored in database
test("Check item same id", async () => {
    await request(app).post("/createItem").field("name", "Screwdriver").field("stock", 36).field("id", "1").field("createdAt", 2).expect(400)
})

//Test to check if item created above can be updated
test("Update item created above", async () => {
    await request(app).patch("/updateItem?id=1").field("name", "Screwdriver").field("stock", 70).field("createdAt", 3).expect(200)
})

//Test to check if the created item above has been stored correctly, and is being returned when called for it
test("Get item created above", async () => {
    await request(app).get("/singleItem?id=1").expect(200).expect("Content-type", /json/)
})

//Test to delete item created above
test("Delete item created above", async () => {
    await request(app).post("/deleteItem?id=1").expect(200)
})
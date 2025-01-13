import { Hono } from "hono";

const customer = new Hono();

customer.get("/", (c) => c.json({ message: "Welcome to the customer API." }));
customer.get("/:id", (c) =>
  c.json({
    customerId: c.req.param("id"),
    name: "John Doe",
    email: "xxx@gmail.com",
    phone: "1234567890",
  })
);

export default customer;

import { Hono } from "hono";

const orders = new Hono();

orders.get("/", (c) => c.json({ message: "Welcome to the order API." }));

export default orders;

import { Hono } from "hono";
import routers from "./routers";
import { serve } from "bun";

const app = new Hono();

app.route("/", routers);

export default app;

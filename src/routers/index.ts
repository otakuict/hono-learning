import { Hono } from "hono";
import customer from "./customer";
import order from "./order";

const router = new Hono();

router.route("/customer", customer);
router.route("/order", order);

export default router;

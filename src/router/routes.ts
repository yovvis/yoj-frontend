import { RouteRecordRaw } from "vue-router";
import menuRoutes from "@/router/menuroutes";
import userRoutes from "@/router/userroutes";

export const routes: Array<RouteRecordRaw> = [...menuRoutes, ...userRoutes];

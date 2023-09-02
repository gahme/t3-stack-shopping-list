import { createTRPCRouter } from "../trpc";
import SuperJSON from "superjson";
import { itemRouter } from "./itemRouter";

export const router = createTRPCRouter({
    item: itemRouter,
});
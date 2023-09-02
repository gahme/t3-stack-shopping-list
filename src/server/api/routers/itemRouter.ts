import {z} from "zod";

import {createTRPCRouter, publicProcedure} from "~/server/api/trpc";


export const itemRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ctx}) => {
        return ctx.prisma.shoppingList.findMany();
    }
    ),
    getOne: publicProcedure
        .input(z.object({id: z.string()}))
        .query(({input, ctx}) => {
            return ctx.prisma.shoppingList.findUnique({where: {id: input.id}});
        }
        ),
    create: publicProcedure
        .input(z.object({id: z.string(), name: z.string(), checked: z.boolean()}))
        .query(({input, ctx}) => {
            return ctx.prisma.shoppingList.create({data: input})
        }
        ),
    update: publicProcedure
        .input(z.object({id: z.string(), name: z.string(), checked: z.boolean()}))
        .query(({input, ctx}) => {
            return ctx.prisma.shoppingList.update({where: {id: input.id}, data: input})
        }
        ),
    delete: publicProcedure
        .input(z.object({id: z.string()}))
        .query(({input, ctx}) => {
            return ctx.prisma.shoppingList.delete({where: {id: input.id}})
        }
        ),
});
import {knex as setupKnex, Knex } from "knex";
import { env } from "./env";

export const config: Knex.Config = {
    client: 'sqlite3',
    connection: {
        filename: env.data.DATABASE_URL
    },
    useNullAsDefault: true
}

export const knex = setupKnex(config)

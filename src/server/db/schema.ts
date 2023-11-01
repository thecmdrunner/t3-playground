// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  bigint,
  index,
  mysqlTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator((name) => `t3-playground_${name}`);

export const projects = mysqlTable(
  "projects",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    userId: varchar("userId", { length: 256 }),
    name: varchar("name", { length: 256 }),
    description: varchar("description", { length: 512 }),
    createdAt: timestamp("createdAt")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (table) => ({
    userIdIndex: index("user_id_idx").on(table.userId),
    nameIndex: index("name_idx").on(table.name),
  }),
);

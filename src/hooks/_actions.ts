"use server";

import { db } from "@/server/db";
import { projects } from "@/server/db/schema";
import { auth } from "@clerk/nextjs";
import { InferSelectModel } from "drizzle-orm";

export async function getUserProjects() {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized!");

  // Simulate a slow db query
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await db.query.projects.findMany({
    where: (p, { eq }) => eq(p.userId, userId),
  });
}

// return [
//   {
//     id: 1,
//     name: "Project 1",
//     description: "This is project 1",
//     userId: userId,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
// ] satisfies InferSelectModel<typeof projects>[];

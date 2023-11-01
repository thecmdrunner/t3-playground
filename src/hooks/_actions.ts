"use server";

import { db } from "@/server/db";
import { auth } from "@clerk/nextjs";

export async function getUserProjects() {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized!");

  // Simulate a slow db query
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await db.query.projects.findMany({
    where: (p, { eq }) => eq(p.userId, userId),
  });
}

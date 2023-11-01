"use client";

import { useProjects } from "@/hooks/useProjects";

export default function ProjectsShowcase() {
  const { data, isLoading } = useProjects();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {data ? (
        data.map((project) => {
          return (
            <div
              key={project.id}
              className="flex w-full max-w-xs grow flex-col gap-4 rounded-xl bg-white/10 p-5 hover:bg-white/20"
            >
              <div className="flex items-center justify-between text-2xl font-bold">
                <span>{project.name}</span>
                <span>→</span>
              </div>
              <div className="text-lg">{project.description}</div>
            </div>
          );
        })
      ) : (
        <div>No projects found</div>
      )}
    </>
  );
}

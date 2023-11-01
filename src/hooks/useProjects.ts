import { useQuery } from "@tanstack/react-query";
import { getUserProjects } from "./_actions";

export const useProjects = () => {
  return useQuery({
    queryKey: ["user_projects_query"],

    queryFn: getUserProjects,
  });
};

import { ProjectModel } from "@/generated/prisma/models";
import prisma from "./prisma";
import { ProjectDto } from "./projects.types";

export async function getProjects(): Promise<ProjectDto[]> {
  const projects = await prisma.project.findMany();
  console.log("db: projects findMany", projects);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return projects.map((project: ProjectModel) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    createdAt: project.createdAt,
  }));
}

export async function getProjectStats(): Promise<void> {
  const projectStats = await prisma.projectStat.findMany();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("db: projectStats findMany", projectStats);
}

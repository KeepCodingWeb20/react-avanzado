import { ProjectDto } from "@/lib/projects.types";
import { LikeButton } from "./like-button";

export function ProjectCard({ project }: { project: ProjectDto }) {
  return (
    <article className="rounded-lg border border-gray-200 p-4">
      <h2 className="text-lg font-bold">{project.title}</h2>
      <p className="text-sm text-gray-500">{project.description}</p>
      <p className="text-sm text-gray-500">
        {project.createdAt.toLocaleDateString()}
      </p>
      <LikeButton projectId={project.id} likes={project.likes} />
    </article>
  );
}

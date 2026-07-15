import { getProjects } from "@/lib/projects";
import { ProjectCard } from "./project-card";

export default async function ProjectSection() {
  const projects = await getProjects();

  return (
    <>
      {projects.length === 0 ? (
        <p>No hay proyectos todavía.</p>
      ) : (
        <section className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      )}
    </>
  );
}

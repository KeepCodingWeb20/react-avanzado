import { getProjects } from "@/lib/projects";
import { ProjectCard } from "../components/project-card";

export default async function DashboardPage() {
  const projects = await getProjects();

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">Proyectos</h1>

      {projects.length === 0 ? (
        <p>No hay proyectos todavía.</p>
      ) : (
        <section className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      )}
    </main>
  );
}

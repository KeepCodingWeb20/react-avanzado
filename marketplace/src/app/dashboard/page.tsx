import ProjectSection from "../components/project-section";
import { CreateProjectForm } from "../components/forms/create-project-form";
import { getProjects } from "@/lib/projects";

export default async function DashboardPage() {
  const projects = await getProjects();

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">Proyectos</h1>

      <CreateProjectForm />

      <ProjectSection projects={projects} />
    </main>
  );
}

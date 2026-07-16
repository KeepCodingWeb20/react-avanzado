import { Suspense } from "react";
import ProjectSection from "../components/project-section";
import ProjectStatSection from "../components/project-stat-section";
import { CreateProjectForm } from "../components/forms/create-project-form";
import { getProjects } from "@/lib/projects";

export default async function DashboardPage() {
  const projects = await getProjects();

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">Proyectos</h1>

      <CreateProjectForm />

      <Suspense
        fallback={
          <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-10 w-full">
            Cargando estadísticas...
          </div>
        }
      >
        <ProjectStatSection />
      </Suspense>

      <ProjectSection projects={projects} />
    </main>
  );
}

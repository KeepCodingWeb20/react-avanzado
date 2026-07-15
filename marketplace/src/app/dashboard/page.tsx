import { Suspense } from "react";
import ProjectSection from "../components/project-section";
import ProjectCardSkeleton from "../components/project-card-skeleton";
import ProjectStatSection from "../components/project-stat-section";

export default function DashboardPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">Proyectos</h1>

      <Suspense
        fallback={
          <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-10 w-full">
            Cargando estadísticas...
          </div>
        }
      >
        <ProjectStatSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="grid gap-4 md:grid-cols-3">
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </div>
        }
      >
        <ProjectSection />
      </Suspense>
    </main>
  );
}

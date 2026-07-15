import { getProjectStats } from "@/lib/projects";

export default async function ProjectStatSection() {
  await getProjectStats();

  return (
    <section>
      <h2>Estadísticas del proyecto</h2>
    </section>
  );
}

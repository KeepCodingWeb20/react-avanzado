import { ProjectCard } from "@/app/components/project-card";
import { getProjectById, getProjectIds } from "@/lib/projects";
import { Metadata } from "next";

export const dynamic = "force-static";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  const projectIds = await getProjectIds();
  return projectIds.map((id) => ({ id: id.toString() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const projectDetail = await getProjectById(Number(id));

  if (!projectDetail) {
    throw new Error("No hay proyecto");
  }

  return {
    title: projectDetail.title,
    description: projectDetail.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>; // Siempre debe ser string
}) {
  const { id } = await params;

  const projectDetail = await getProjectById(Number(id));

  if (!projectDetail) {
    return <div>Proyecto no encontrado o no tienes acceso</div>;
  }

  return <ProjectCard project={projectDetail} />;
}

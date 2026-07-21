"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type ProjectActionState = {
  status: "idle" | "error" | "success";
  message: string;
  fieldErrors: {
    title?: string[];
    description?: string[];
  };
};

export async function createProject(
  _previousState: ProjectActionState,
  formData: FormData,
): Promise<ProjectActionState> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const rawTitle = formData.get("title");
  const rawDescription = formData.get("description");
  const title = typeof rawTitle === "string" ? rawTitle.trim() : "";
  const description =
    typeof rawDescription === "string" ? rawDescription.trim() : "";

  const fieldErrors: ProjectActionState["fieldErrors"] = {};

  if (typeof rawTitle !== "string") {
    fieldErrors.title = ["El título debe ser texto."];
  } else if (title.length < 3 || title.length > 80) {
    fieldErrors.title = ["El título debe tener entre 3 y 80 caracteres."];
  }

  if (typeof rawDescription !== "string") {
    fieldErrors.description = ["La descripción debe ser texto."];
  } else if (description.length < 3 || description.length > 500) {
    fieldErrors.description = [
      "La descripción debe tener entre 10 y 500 caracteres.",
    ];
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos indicados.",
      fieldErrors,
    };
  }

  await prisma.project.create({
    data: { title, description, likes: 0 },
  });

  revalidatePath("/dashboard");

  return {
    status: "success",
    message: "Proyecto creado",
    fieldErrors: {},
  };
}

export async function likeProject(projectId: number): Promise<void> {
  await prisma.project.update({
    where: { id: projectId },
    data: { likes: { increment: 1 } },
  });

  revalidatePath("/dashboard");
}

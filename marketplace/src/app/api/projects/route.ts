import prisma from "@/lib/prisma";
import { getProjects } from "@/lib/projects";

// GET /api/projects
export async function GET() {
  console.log("GET projects");

  const projects = await getProjects();

  return Response.json({ data: projects });
}

type FieldErrors = {
  title?: string[];
  description?: string[];
};

// POST /api/projects
export async function POST(request: Request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Debes enviar un body con JSON válido" },
      { status: 400 },
    );
  }

  // Deberíamos comprobar si "body" es un object, no es null y es un array

  const payload = body as Record<string, unknown>;
  const titleRaw = payload.title;
  const descriptionRaw = payload.description;

  const title = typeof titleRaw === "string" ? titleRaw : null;
  const description =
    typeof descriptionRaw === "string" ? descriptionRaw : null;

  const fieldErrors: FieldErrors = {};

  if (!title) {
    if (title === "") {
      fieldErrors.title = ["El campo título es obligatorio"];
    } else {
      fieldErrors.title = ["El título debe ser de tipo texto"];
    }
  }

  if (!description) {
    fieldErrors.description = ["La descripción debe ser de tipo texto"];
  }

  if (Object.keys(fieldErrors).length > 0) {
    return Response.json(
      { error: "Revisa los campos indicados", fieldErrors },
      { status: 400 },
    );
  }

  const project = await prisma.project.create({
    data: { title: title!, description: description! },
  });

  return new Response();
}

"use client";

import { helloAction } from "@/app/dashboard/actions";

export function HelloForm() {
  console.log("HelloForm component");

  return (
    <form action={helloAction} className="flex gap-2">
      <label htmlFor="username">Nombre</label>
      <input id="username" name="username" className="border" />
      <button type="submit">Enviar</button>
    </form>
  );
}

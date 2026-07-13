// Crea un componente que renderiza el contenido de servidor

"use client";

import { useState } from "react";

interface ClientShellProps {
  children: React.ReactNode;
}

export default function ClientShell({ children }: ClientShellProps) {
  const [time] = useState(new Date().toLocaleTimeString());

  return (
    <div className="mt-4 px-4 py-2 bg-gray-600 text-white rounded">
      <h3 className="font-bold mb-2">User Profile (Client Component) {time}</h3>
      {children}
    </div>
  );
}

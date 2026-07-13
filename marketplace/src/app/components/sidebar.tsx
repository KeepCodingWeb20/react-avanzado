// Create a sidebar component that is used in the app

import Link from "next/link";

export default function Sidebar() {
  const currentTime = new Date().getTime();

  return (
    <aside className="w-64 h-full bg-gray-100">
      <h1>Sidebar Content</h1>
      <nav className="flex flex-col gap-2">
        <Link href="/">Home</Link>
      </nav>
      <p>Current Time: {currentTime}</p>
    </aside>
  );
}

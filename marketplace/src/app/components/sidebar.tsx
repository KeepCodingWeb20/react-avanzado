// Create a sidebar component that is used in the app

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import ClientShell from "./client-shell";
import UserProfile from "./user-profile";

export default function Sidebar() {
  const currentTime = new Date().getTime();

  return (
    <aside className="w-64 h-full bg-gray-100 dark:bg-gray-800">
      <h1 className="text-white dark:text-gray-100">Sidebar Content</h1>
      <nav className="flex flex-col gap-2">
        <Link href="/" className="underline">
          Home
        </Link>
      </nav>
      <p>Current Time: {currentTime}</p>
      <ThemeToggle />
      <ClientShell>
        <UserProfile />
      </ClientShell>
    </aside>
  );
}

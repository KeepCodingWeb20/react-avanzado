import { cookies } from "next/headers";

export default async function UserProfile() {
  const cookieStore = await cookies();
  const displayName = cookieStore.get("demo-user")?.value;

  // Claim = key + value

  return <p>{displayName || "No user profile"}</p>;
}

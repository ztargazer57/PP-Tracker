import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import WeeklySubmissionsClient from "./WeeklySubmissionsClient";

export default async function WeeklySubmissionsPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth");
  }

  return <WeeklySubmissionsClient />;
}

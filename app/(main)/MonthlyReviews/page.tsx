import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import MonthlyReviewsClient from "./MonthlyReviewsClient";

export default async function MonthlyReviewsPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth");
  }

  return <MonthlyReviewsClient />;
}

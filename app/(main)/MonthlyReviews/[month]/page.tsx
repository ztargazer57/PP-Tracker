import { getSubmissionsByMonth } from "@/lib/logic";
import MasonryGrid from "./MasonryGrid";

export default async function MonthPage({
  params,
}: {
  params: Promise<{ month: string }>;
}) {
  const { month } = await params;
  const submissions = await getSubmissionsByMonth(month);

  if (submissions.length === 0) {
    return <p className="p-4">No submissions found for {month}</p>;
  }

  return <MasonryGrid submissions={submissions} month={month} />;
}

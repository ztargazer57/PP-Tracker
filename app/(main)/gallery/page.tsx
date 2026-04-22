import { Card } from "@/components/ui/card";
import { getAllWeeklySubmissions } from "@/lib/logic";

export const dynamic = "force-dynamic";

function formatGroupLabel(dateValue: Date | string) {
  const date = new Date(dateValue);
  return date.getFullYear().toString();
}

function formatDisplayDate(dateValue: Date | string) {
  const date = new Date(dateValue);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function groupByYear(submissions: any[]) {
  const grouped = new Map<string, any[]>();

  for (const submission of submissions) {
    const key = formatGroupLabel(submission.date);

    if (!grouped.has(key)) {
      grouped.set(key, []);
    }

    grouped.get(key)!.push(submission);
  }

  return Array.from(grouped.entries()).sort(
    ([yearA], [yearB]) => Number(yearB) - Number(yearA)
  );
}

export default async function GalleryPage() {
  const submissions = await getAllWeeklySubmissions();
  const grouped = groupByYear(submissions);

  return (
    <div className="w-full min-h-screen p-5 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div>
          <h1 className="text-3xl font-semibold">Gallery</h1>
          <p className="text-sm text-muted-foreground">
            All submissions categorized by year
          </p>
        </div>

        {grouped.length === 0 ? (
          <Card className="p-6">
            <p>No submissions yet.</p>
          </Card>
        ) : (
          grouped.map(([label, items]) => (
            <section key={label} className="space-y-4">
              <h2 className="text-2xl font-medium">{label}</h2>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((submission) => (
                  <Card key={submission.id} className="overflow-hidden p-0">
                    {submission.image ? (
                      <img
                        src={submission.image}
                        alt={submission.title ?? "Submission image"}
                        className="h-64 w-full object-cover"
                      />
                    ) : (
                      <div className="h-64 w-full bg-muted flex items-center justify-center text-sm text-muted-foreground">
                        No image
                      </div>
                    )}

                    <div className="space-y-2 p-4">
                      <p className="text-xs text-muted-foreground">
                        {formatDisplayDate(submission.date)}
                      </p>

                      <h3 className="text-lg font-semibold line-clamp-1">
                        {submission.title || "Untitled"}
                      </h3>

                      {submission.description && (
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {submission.description}
                        </p>
                      )}

                      <div className="flex items-center justify-between text-sm">
                        <span>Week {submission.weekNumber}</span>
                        {submission.hoursSpent != null && (
                          <span>{submission.hoursSpent} hrs</span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}

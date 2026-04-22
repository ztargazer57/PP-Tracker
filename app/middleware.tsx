export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/", "/weeklySubmissions", "/gallery", "monthlyReviews"],
};

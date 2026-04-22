import { DailyRoutineHistory } from "@/components/DailyRoutineHistory";
import DailyRoutineWidget from "@/components/DailyRoutineWidget";
import GalleryCard from "@/components/GalleryCard";
import Notes from "@/components/Notes";
import SavingsWidget from "@/components/SavingsWidget";
import Streak from "@/components/Streak";
import { Card } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerSession();
  if (!session) {
    redirect("/auth");
  }
  redirect("/dashboard");
  return (
    <></>
  );
}

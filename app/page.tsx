import { DailyRoutineHistory } from "@/components/DailyRoutineHistory";
import DailyRoutineWidget from "@/components/DailyRoutineWidget";
import GalleryCard from "@/components/GalleryCard";
import Notes from "@/components/Notes";
import SavingsWidget from "@/components/SavingsWidget";
import Streak from "@/components/Streak";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full min-h-30 grid grid-cols-1 gap-7 p-4 px-1 sm:px-1 md:p-4 lg:p-4 lg:grid-cols-[330px_1fr]">
      <Card className="h-fit w-full p-4 sm:p-5 lg:p-2">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 xl:grid-cols-1">
          <div className="w-full rounded-lg grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
            <DailyRoutineWidget />
            <Streak />
          </div>

          <div className="w-full rounded-lg overflow-hidden">
            <DailyRoutineHistory />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 place-items-center gap-7 sm:grid-cols-2">
        <GalleryCard />

        <Card className="min-h-full w-full max-w-85 sm:max-w-full md:max-w-full lg:max-w-full grid grid-cols-1 gap-0 p-0">
            <Notes></Notes>
          <div className="mt-auto ml-auto h-10 min-w-fit w-38 rounded-tr-0 rounded-br-lg rounded-tl-3xl rounded-bl-3xl bg-gray-400/60 text-black text-xl shadow-md px-3 py-2 flex justify-end">
            Never Forget
          </div>
        </Card>

        <Card className="min-h-full w-full max-w-full sm:max-w-full md:max-w-full lg:max-w-full p-0 sm:col-span-2">
            <SavingsWidget/>
        </Card>
      </div>
    </div>
  );
}

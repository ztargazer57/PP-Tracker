import DailyRoutineWidget from "@/components/DailyRoutineWidget";
import Streak from "@/components/Streak";
import { Card } from "@/components/ui/card";
import { Textarea} from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 gap-7 p-5 lg:grid-cols-[330px_1fr]">
      <Card className="min-h-fit h-full px-5 grid  gap-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-1">
        <div className="w-full mx-auto max-w-85 sm:max-w-full md:max-w-full lg:max-w-full max-h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1">
          <DailyRoutineWidget />
          <Streak />
        </div>
        <Card className=" w-full min-h-80 h-full "></Card>
      </Card>
      <div className="grid grid-cols-1 place-items-center gap-7 sm:grid-cols-2">
        <Card className="min-h-90 w-full max-w-85 sm:max-w-full md:max-w-full lg:max-w-full p-0">
          <img
            src="/uploads/2026-03-28"
            alt="Placeholder"
            className="h-90 object-cover hover:scale-105 transition-all duration-300"
          />
          <div className="absolute flex justify-items-center h-10 min-w-fit w-36  rounded-tl-lg rounded-bl-0 rounded-tr-2xl rounded-br-2xl bg-black/60 text-xl shadow-md px-3 py-2" >Favorites</div>
        </Card>
        <Card className="min-h-90 w-full max-w-85 sm:max-w-full md:max-w-full lg:max-w-full grid grid-cols-1 gap-0 p-0">
            <Textarea className="bg-input/0! transition-none! focus-visible:ring-0! focus-visible:border-0! border-none min-h-70 sm:max-w-full md:max-w-full lg:max-w-full p-7"></Textarea>
            <div className="mt-auto ml-auto h-10 min-w-fit w-38 rounded-tr-0 rounded-br-lg rounded-tl-3xl rounded-bl-3xl bg-gray-400/60 text-black text-xl shadow-md px-3 py-2 flex justify-end">Never Forget</div>
        </Card>
        <Card className="min-h-90 w-full max-w-full sm:max-w-full md:max-w-full lg:max-w-full p-0 sm:col-span-2" />
      </div>
    </div>
  );
}

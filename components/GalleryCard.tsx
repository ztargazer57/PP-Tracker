"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { fetchGalleryCover } from "@/lib/system";
import GalleryCoverPickerDialog from "@/components/GalleryCoverPickerDialog";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";

export default function GalleryCard() {
  const [cover, setCover] = useState<string>("");

  async function loadCover() {
    try {
      const data = await fetchGalleryCover();
      setCover(getCloudinaryImageUrl(data?.picUrl || ""));
    } catch (error) {
      console.error("Failed to load gallery cover:", error);
    }
  }

  useEffect(() => {
    loadCover();
  }, []);

  return (
    <div className="w-full max-w-85 sm:max-w-full md:max-w-full lg:max-w-full">
      <div className="relative">
        <Link href="/gallery">
          <Card className="group relative min-h-100 w-full overflow-hidden p-0 cursor-pointer">
            {cover ? (
              <img
                src={cover}
                alt="Gallery cover"
                className="h-100 w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="h-90 w-full bg-zinc-900 flex items-center justify-center text-zinc-400 text-lg transition-all duration-300 group-hover:scale-105">
                No gallery cover selected
              </div>
            )}

            <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/30" />

            <div className="absolute flex items-center h-10 min-w-fit w-32 rounded-tl-lg rounded-bl-0 rounded-tr-2xl rounded-br-2xl bg-black/60 text-xl shadow-md px-3 py-2 text-white">
              Gallery
            </div>
          </Card>
        </Link>

        <div className="absolute top-3 right-3 z-20">
          <GalleryCoverPickerDialog onSaved={loadCover} />
        </div>
      </div>
    </div>
  );
}

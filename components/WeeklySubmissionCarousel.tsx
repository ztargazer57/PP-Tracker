"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getRandomWeeklySubmissions } from "@/lib/system";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";

export function CarouselSize() {
  const [items, setItems] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function load() {
      try {
        const data = await getRandomWeeklySubmissions();
        setItems(data);
      } catch (err) {
        console.error("Carousel load error:", err);
      }
    }
    load();
  }, []);

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2500,
          stopOnInteraction: false,
        }),
      ]}
      opts={{ align: "start" }}
      className="w-full"
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem
            key={item.id}
            className="place-items-center sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="p-0 w-fit h-fit hover:scale-105 transition-all duration-300">
                <CardContent className="flex flex-col w-fit h-fit p-0 overflow-hidden">
                  {item.image ? (
                    <img
                      src={getCloudinaryImageUrl(item.image)}
                      alt={item.title || "Submission"}
                      className="w-80 h-60 object-cover hover:scale-105 transition-all duration-300"
                    />
                  ) : (
                    <div className="h-32 flex items-center justify-center bg-gray-200">
                      No Image
                    </div>
                  )}

                  <div className="p-3 absolute text-white bottom-0 rounded-bl-xl bg-linear-to-r from-black to-black/0 ">
                    <p className="text-sm font-semibold">
                      {item.title || "Untitled"}
                    </p>
                    <p className="text-xs text-gray-300">
                      {item.date ? new Date(item.date).toLocaleDateString() : "Unknown Date"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

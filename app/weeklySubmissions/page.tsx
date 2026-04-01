"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { weeklySubmissionFormSchema } from "../schema/weeklySubmission";
import { CarouselSize } from "@/components/WeeklySubmissionCarousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import {
  fetchWeeklySubmissionsSubmit,
  fetchWeeklySubmissionStatus,
} from "@/lib/system";
import { float32 } from "zod/v4-mini";
import { postWeeklySubmission } from "@/lib/logic";

type WeeklySubmissionData = {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  hoursSpent?: number | null;
  date?: string | Date | null;
  weekNumber?: number | null;
};

export default function WeeklySubmissionsPage() {
  const [loading, setLoading] = useState(true);
  const [existingImage, setExistingImage] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const form = useForm<z.input<typeof weeklySubmissionFormSchema>>({
    resolver: zodResolver(weeklySubmissionFormSchema),
    defaultValues: {
      title: "",
      hoursSpent: undefined,
      description: "",
      date: new Date(),
      weekNumber: "",
      image: undefined,
    },
  });

  useEffect(() => {
    async function loadData() {
      try {
        const res: WeeklySubmissionData = await fetchWeeklySubmissionStatus();

        setExistingImage(res.image ?? null);

        form.reset({
          title: res.title ?? "",
          description: res.description ?? "",
          hoursSpent: res.hoursSpent ?? undefined,
          date: res.date ? new Date(res.date) : new Date(),
          weekNumber: res.weekNumber ? res.weekNumber : undefined,
          image: undefined,
        });
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [form]);

  useEffect(() => {
    return () => {
      if (previewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const displayImage = previewUrl || existingImage;

  if (loading) {
    return <>Loading...</>;
  }

  async function onSubmit(data: z.infer<typeof weeklySubmissionFormSchema>) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", String(data.description));
    formData.append("hoursSpent", String(data.hoursSpent));
    formData.append("date", new Date(data.date).toISOString());
    formData.append("weekNumber", String(data.weekNumber));

    if (data.image instanceof File) {
      formData.append("image", data.image);
    } else if (existingImage) {
      formData.append("existingImage", existingImage);
    }
    const req = await fetchWeeklySubmissionsSubmit(formData);
  }
  return (
    <div>
      <div className="px-5 py-3">
        <h1>Submissions</h1>
      </div>

      <div className="min-w-full">
        <CarouselSize />
      </div>

      <h1 className="px-5 py-3">This Week's Submission</h1>

      {/* Weekly Submissiom Form */}

      <form id="form-weeklySub" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <div className="grid grid-cols-1 sm:grid-cols-2 p-3 gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                {/* Title */}
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        className="max-w-80"
                        placeholder="Title"
                        {...field}
                        id="form-weeklySub-title"
                        aria-invalid={fieldState.invalid}
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                {/* Time Duration */}
                <div className="m-w-40">
                  <Controller
                    name="hoursSpent"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <Select
                          value={field.value?.toString() ?? ""}
                          onValueChange={(value) =>
                            field.onChange(parseFloat(value))
                          }
                        >
                          <SelectTrigger
                            id="form-weeklySub-time"
                            aria-invalid={fieldState.invalid}
                          >
                            <SelectValue placeholder="Select Duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 hour</SelectItem>
                            <SelectItem value="1.5">
                              1 hour 30 minutes
                            </SelectItem>
                            <SelectItem value="2">2 hours</SelectItem>
                            <SelectItem value="2.5">
                              2 hours 30 minutes
                            </SelectItem>
                            <SelectItem value="3">3 hours</SelectItem>
                            <SelectItem value="3.5">
                              3 hours 30 minutes
                            </SelectItem>
                            <SelectItem value="4">4 hours</SelectItem>
                            <SelectItem value="4.5">
                              4 hours 30 minutes
                            </SelectItem>
                            <SelectItem value="5">+5 hours above</SelectItem>
                          </SelectContent>
                        </Select>

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>
              </div>

              {/* Description */}
              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Textarea
                      {...field}
                      id="form-weeklySub-desc"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      className="min-h-60"
                      placeholder="Description"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Date */}
              <div className="flex">
                <Controller
                  name="date"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        value={
                          field.value instanceof Date
                            ? field.value.toISOString().split("T")[0]
                            : ""
                        }
                        className="text-gray-400 border-0 max-w-50"
                        type="date"
                        id="form-weeklySub-date"
                        aria-invalid={fieldState.invalid}
                        autoComplete="off"
                        disabled
                        readOnly
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                {/* Week Number */}
                <div className="ml-auto">
                  <Controller
                    name="weekNumber"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <Input
                          type="number"
                          className="max-w-30 bg-white"
                          placeholder="Week No."
                          {...field}
                          readOnly
                          disabled
                          id="form-weeklySub-week"
                          autoComplete="off"
                          aria-invalid={fieldState.invalid}
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* File Upload Group */}
            <div className="flex flex-col gap-5 w-full items-center justify-center">
              {/* Image Preview */}
              <div className="min-h-60 max-h-fit min-w-full">
                {displayImage ? (
                  <img
                    src={displayImage}
                    alt="Preview"
                    className="mt-3 h-70 w-fit rounded-md mx-auto object-cover"
                  />
                ) : (
                  <div className="h-full w-70 flex items-center justify-center mx-auto border-2 rounded-xl">
                    <p className="text-gray-400 text-sm">Image goes here...</p>
                  </div>
                )}
              </div>

              {/* Image Upload */}
              <div className="flex gap-3">
                <div className="max-w-30">
                  <Controller
                    name="image"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <div className="space-y-2">
                          <label
                            htmlFor="image-upload"
                            className="inline-flex cursor-pointer items-center rounded-lg border-2 bg-blue-600 text-white px-2 py-1 text-sm hover:opacity-90"
                          >
                            Upload image
                          </label>

                          <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              field.onChange(file);

                              if (previewUrl?.startsWith("blob:")) {
                                URL.revokeObjectURL(previewUrl);
                              }

                              if (file) {
                                setPreviewUrl(URL.createObjectURL(file));
                              } else {
                                setPreviewUrl(null);
                              }
                            }}
                            aria-invalid={fieldState.invalid}
                          />

                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </div>
                      </Field>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <Button className="ml-auto border-2 border-green-600 bg-green-600/10 hoverbluereen-600/60 text-white text-sm">Save</Button>
              </div>
            </div>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}

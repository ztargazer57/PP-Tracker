"use client";

import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ImagePlus,
  Pencil,
  X,
} from "lucide-react";

import { weeklySubmissionFormSchema } from "../../../schema/weeklySubmission";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  fetchManageWeeklySubmissions,
  updateManageWeeklySubmission,
} from "@/lib/system";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";

type WeeklySubmissionRow = {
  id: number;
  title: string | null;
  description: string | null;
  image: string | null;
  hoursSpent: number | null;
  date: string;
  year: number;
  weekNumber: number;
};

type ManageWeeklySubmissionsResponse = {
  items: WeeklySubmissionRow[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    completedCount: number;
    missingCount: number;
  };
};

type EditFormValues = z.input<typeof weeklySubmissionFormSchema>;

const ROWS_PER_PAGE = 10;

export default function WeeklySubmissionsManageClient() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [rows, setRows] = useState<WeeklySubmissionRow[]>([]);
  const [selected, setSelected] = useState<WeeklySubmissionRow | null>(null);
  const [existingImage, setExistingImage] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState<ManageWeeklySubmissionsResponse["meta"]>({
    page: 1,
    pageSize: ROWS_PER_PAGE,
    total: 0,
    totalPages: 1,
    completedCount: 0,
    missingCount: 0,
  });

  const form = useForm<EditFormValues>({
    resolver: zodResolver(weeklySubmissionFormSchema),
    defaultValues: {
      title: "",
      hoursSpent: undefined,
      description: "",
      date: new Date(),
      weekNumber: undefined,
      image: undefined,
    },
  });

  const loadRows = useCallback(async (page: number) => {
    try {
      setLoading(true);
      const data: ManageWeeklySubmissionsResponse =
        await fetchManageWeeklySubmissions(page, ROWS_PER_PAGE);

      setRows(data.items);
      setMeta(data.meta);
      setCurrentPage(data.meta.page);
    } catch (error) {
      console.error(error);
      alert("Failed to load weekly submissions.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRows(currentPage);
  }, [currentPage, loadRows]);

  useEffect(() => {
    return () => {
      if (previewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  function formatLocalDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function formatDisplayDate(date: string | Date) {
    const d = new Date(date);
    return d.toLocaleDateString();
  }

  function getStatus(row: WeeklySubmissionRow) {
    const hasContent =
      !!row.title?.trim() ||
      !!row.description?.trim() ||
      !!row.image?.trim() ||
      row.hoursSpent !== null;

    return hasContent ? "Completed" : "Missing";
  }

  function openModal(row: WeeklySubmissionRow) {
    setSelected(row);
    setExistingImage(row.image ?? null);

    if (previewUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);

    form.reset({
      title: row.title ?? "",
      description: row.description ?? "",
      hoursSpent: row.hoursSpent ?? undefined,
      date: row.date ? new Date(row.date) : new Date(),
      weekNumber: row.weekNumber ?? undefined,
      image: undefined,
    });
  }

  function closeModal() {
    setSelected(null);
    setExistingImage(null);

    if (previewUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(previewUrl);
    }

    setPreviewUrl(null);

    form.reset({
      title: "",
      hoursSpent: undefined,
      description: "",
      date: new Date(),
      weekNumber: undefined,
      image: undefined,
    });
  }

  async function uploadToCloudinary(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/cloudinary/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to upload image.");
    }

    return result.secure_url as string;
  }

  async function onSubmit(data: z.infer<typeof weeklySubmissionFormSchema>) {
    if (!selected) return;

    try {
      setSaving(true);

      let imageUrl = existingImage ?? "";

      if (data.image instanceof File) {
        imageUrl = await uploadToCloudinary(data.image);
      }

      const payload = {
        title: data.title,
        description: String(data.description ?? ""),
        hoursSpent: Number(data.hoursSpent ?? 0),
        date: new Date(data.date).toISOString(),
        image: imageUrl,
      };

      const updated = await updateManageWeeklySubmission(selected.id, payload);

      setRows((prev) =>
        prev.map((row) => (row.id === updated.id ? updated : row)),
      );

      await loadRows(currentPage);
      closeModal();
    } catch (error) {
      console.error(error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to update weekly submission.",
      );
    } finally {
      setSaving(false);
    }
  }

  const displayImage = previewUrl || existingImage;

  const totalPages = meta.totalPages;
  const completedCount = meta.completedCount;
  const missingCount = meta.missingCount;

  const startRow = meta.total === 0 ? 0 : (currentPage - 1) * meta.pageSize + 1;
  const endRow = Math.min(currentPage * meta.pageSize, meta.total);

  function goToPreviousPage() {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  }

  function goToNextPage() {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  }

  function goToPage(page: number) {
    setCurrentPage(page);
  }

  function renderPaginationButtons() {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");

      pages.push(totalPages);
    }

    return pages.map((page, index) => {
      if (page === "...") {
        return (
          <span
            key={`ellipsis-${index}`}
            className="px-2 text-sm text-muted-foreground"
          >
            ...
          </span>
        );
      }

      const isActive = page === currentPage;

      return (
        <Button
          key={page}
          type="button"
          variant={isActive ? "default" : "outline"}
          size="sm"
          onClick={() => goToPage(page)}
          className="h-9 min-w-9 px-3"
        >
          {page}
        </Button>
      );
    });
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                Manage Weekly Submissions
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Review, edit, and backfill weekly entries.
              </p>
            </div>

            <Link href="/weeklySubmissions">
              <Button
                variant="outline"
                className="gap-2 border-border bg-background text-foreground hover:bg-accent"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Weekly
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="h-26 animate-pulse rounded-2xl border border-border bg-card" />
          <div className="h-26 animate-pulse rounded-2xl border border-border bg-card" />
          <div className="h-26 animate-pulse rounded-2xl border border-border bg-card" />
        </div>
        <div className="h-155 animate-pulse rounded-2xl border border-border bg-card" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Manage Weekly Submissions
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Review, edit, and backfill weekly entries.
            </p>
          </div>

          <Link href="/weeklySubmissions">
            <Button
              variant="outline"
              className="gap-2 border-border bg-background text-foreground hover:bg-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Weekly
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Total Weeks</p>
          <p className="mt-2 text-3xl font-semibold text-foreground">
            {meta.total}
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Completed</p>
          <p className="mt-2 text-3xl font-semibold text-foreground">
            {completedCount}
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Missing</p>
          <p className="mt-2 text-3xl font-semibold text-foreground">
            {missingCount}
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card shadow-sm">
        <div className="border-b border-border px-4 py-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">
            Submission Table
          </h2>
          <p className="text-sm text-muted-foreground">
            Click a row to open the editor.
          </p>
        </div>

        <div className="grid gap-3 p-4 sm:hidden">
          {rows.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-background p-6 text-center text-sm text-muted-foreground">
              No weekly submissions found.
            </div>
          ) : (
            rows.map((row) => {
              const status = getStatus(row);

              return (
                <button
                  key={row.id}
                  type="button"
                  onClick={() => openModal(row)}
                  className="rounded-xl border border-border bg-background p-4 text-left transition hover:bg-accent/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">
                        Year {row.year} · Week {row.weekNumber}
                      </p>
                      <h3 className="mt-1 truncate font-medium text-foreground">
                        {row.title?.trim() || "Untitled"}
                      </h3>
                    </div>

                    <span
                      className={`inline-flex shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium ${
                        status === "Completed"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border-amber-500/30 bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      {status}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Date</p>
                      <p className="mt-1 text-foreground">
                        {formatDisplayDate(row.date)}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">Hours</p>
                      <p className="mt-1 text-foreground">
                        {row.hoursSpent ?? "—"}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>

        <div className="hidden sm:block">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="border-b border-border text-muted-foreground">
                  <th className="px-6 py-4 text-left font-medium">Year</th>
                  <th className="px-6 py-4 text-left font-medium">Week</th>
                  <th className="px-6 py-4 text-left font-medium">Date</th>
                  <th className="px-6 py-4 text-left font-medium">Title</th>
                  <th className="px-6 py-4 text-left font-medium">Hours</th>
                  <th className="px-6 py-4 text-left font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="h-24 px-6 text-center text-muted-foreground"
                    >
                      No weekly submissions found.
                    </td>
                  </tr>
                ) : (
                  rows.map((row) => {
                    const status = getStatus(row);

                    return (
                      <tr
                        key={row.id}
                        onClick={() => openModal(row)}
                        className="group cursor-pointer border-b border-border transition hover:bg-accent/40"
                      >
                        <td className="px-6 py-4 font-medium text-foreground">
                          {row.year}
                        </td>

                        <td className="px-6 py-4 text-foreground">
                          {row.weekNumber}
                        </td>

                        <td className="px-6 py-4 text-muted-foreground">
                          {formatDisplayDate(row.date)}
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground">
                              {row.title?.trim() || "Untitled"}
                            </span>
                            <Pencil className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                          </div>
                        </td>

                        <td className="px-6 py-4 text-muted-foreground">
                          {row.hoursSpent ?? "—"}
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${
                              status === "Completed"
                                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                                : "border-amber-500/30 bg-amber-500/10 text-amber-400"
                            }`}
                          >
                            {status}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-t border-border px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-medium text-foreground">{startRow}</span> to{" "}
              <span className="font-medium text-foreground">{endRow}</span> of{" "}
              <span className="font-medium text-foreground">{meta.total}</span>{" "}
              submissions
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                Prev
              </Button>

              {renderPaginationButtons()}

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="gap-1"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
          <div className="flex h-[100dvh] items-end justify-center p-0 sm:min-h-screen sm:items-center sm:p-4">
            <div className="flex h-[100dvh] w-full flex-col overflow-hidden rounded-none border border-border bg-card shadow-2xl sm:h-auto sm:max-h-[95vh] sm:max-w-6xl sm:rounded-2xl">
              <div className="flex items-start justify-between border-b border-border px-4 py-4 sm:px-6 sm:py-5">
                <div className="pr-3">
                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    Edit Weekly Submission
                  </div>

                  <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                    Year {selected.year} · Week {selected.weekNumber}
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Update the selected weekly submission using the same layout
                    as your standard weekly form.
                  </p>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="shrink-0 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-6">
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FieldGroup>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.95fr] lg:gap-8">
                      <div className="space-y-5">
                        <div className="flex flex-col gap-3 sm:flex-row">
                          <Controller
                            name="title"
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field
                                data-invalid={fieldState.invalid}
                                className="flex-1"
                              >
                                <Input
                                  className="w-full border-border bg-background"
                                  placeholder="Title"
                                  {...field}
                                  id="manage-weekly-title"
                                  aria-invalid={fieldState.invalid}
                                  autoComplete="off"
                                />
                                {fieldState.invalid && (
                                  <FieldError errors={[fieldState.error]} />
                                )}
                              </Field>
                            )}
                          />

                          <div className="sm:w-56">
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
                                      id="manage-weekly-time"
                                      aria-invalid={fieldState.invalid}
                                      className="border-border bg-background"
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
                                      <SelectItem value="5">
                                        +5 hours above
                                      </SelectItem>
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

                        <Controller
                          name="description"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <Textarea
                                {...field}
                                id="manage-weekly-desc"
                                aria-invalid={fieldState.invalid}
                                autoComplete="off"
                                className="min-h-[220px] border-border bg-background sm:min-h-[320px]"
                                placeholder="Description"
                              />
                              {fieldState.error && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </Field>
                          )}
                        />

                        <div className="flex flex-col gap-3 sm:flex-row">
                          <Controller
                            name="date"
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field data-invalid={fieldState.invalid}>
                                <Input
                                  value={
                                    field.value instanceof Date
                                      ? formatLocalDate(field.value)
                                      : ""
                                  }
                                  className="w-full border-border bg-muted text-muted-foreground sm:w-56"
                                  type="date"
                                  id="manage-weekly-date"
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

                          <Controller
                            name="weekNumber"
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field data-invalid={fieldState.invalid}>
                                <Input
                                  type="number"
                                  className="w-full border-border bg-muted text-foreground sm:w-32"
                                  placeholder="Week No."
                                  {...field}
                                  readOnly
                                  disabled
                                  id="manage-weekly-week"
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

                      <div className="flex flex-col gap-5">
                        <div className="rounded-2xl border border-border bg-background/50 p-4">
                          <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                            <ImagePlus className="h-4 w-4" />
                            Artwork Preview
                          </div>

                          <div className="flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 p-3 sm:min-h-[360px]">
                            {displayImage ? (
                              <img
                                src={
                                  displayImage.startsWith("blob:")
                                    ? displayImage
                                    : getCloudinaryImageUrl(displayImage)
                                }
                                alt="Preview"
                                className="max-h-[220px] w-auto rounded-xl border border-border object-cover shadow-sm sm:max-h-[360px]"
                              />
                            ) : (
                              <p className="text-sm text-muted-foreground">
                                No image uploaded yet
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                          <Controller
                            name="image"
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field data-invalid={fieldState.invalid}>
                                <div className="space-y-2">
                                  <label
                                    htmlFor="manage-image-upload"
                                    className="flex w-full cursor-pointer items-center justify-center rounded-md border border-border bg-secondary px-3 py-2 items-center text-sm font-medium text-secondary-foreground transition hover:bg-secondary/80 sm:w-auto"
                                  >
                                    Upload image
                                  </label>

                                  <input
                                    id="manage-image-upload"
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
                                        setPreviewUrl(
                                          URL.createObjectURL(file),
                                        );
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

                          <div className="flex ml-auto w-full gap-3 sm:w-auto">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={closeModal}
                              className="flex-1 border-border sm:flex-none"
                            >
                              Cancel
                            </Button>

                            <Button
                              type="submit"
                              disabled={saving}
                              className="flex-1 sm:min-w-24 sm:flex-none"
                            >
                              {saving ? "Saving..." : "Save Changes"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FieldGroup>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

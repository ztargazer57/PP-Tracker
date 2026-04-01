import * as z from "zod";

export const weeklySubmissionFormSchema = z.object({
    title: z
    .string()
    .min(3, "Title must be atleast 3 characters.")
    .max(25, "Title must be at most 25 characters."),
    description: z
    .string()
    .max(250, "Description can only have at most 250 characters.")
    .optional(),
    image: z
    .instanceof(File, { message: "Select an image" })
    .refine((file) => file.type.startsWith("image/"), {
        message: "File must be an image",
    })
    .optional(),
    hoursSpent: z
    .float64({
        error: (issue) =>
            issue.input === undefined
        ? "Please select a duration"
        : "Duration must be type float"
    }),
    date: z
    .date(),
    weekNumber: z
    .number()
})

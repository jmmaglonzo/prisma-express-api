import { z } from "zod";

export const postGoalSchema = z.object({
  text: z.string().min(3, { message: "Text must be at least 3 characters long." }).trim(),
});
export const patchGoalSchema = z.object({
  text: z
    .string()
    .min(3, { message: "Text must be at least 3 characters long." })
    .trim()
    .optional(),
});

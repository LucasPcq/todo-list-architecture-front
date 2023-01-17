import { z } from "zod";

export const UpdateTodoDtoValidator = z.object({
  label: z.string().min(5).max(50).optional(),
  endDate: z.string().optional(),
  isCompleted: z.boolean().optional(),
});

export type UpdateTodoDto = z.infer<typeof UpdateTodoDtoValidator>;

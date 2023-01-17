import { z } from "zod";

export const InsertTodoDtoValidator = z.object({
  label: z.string().min(5).max(50),
  endDate: z.string(),
});

export type InsertTodoDto = z.infer<typeof InsertTodoDtoValidator>;

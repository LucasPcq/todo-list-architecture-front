import { z } from "zod";

export const FetchTodoDtoValidator = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
  end_date: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type FetchTodoDto = z.infer<typeof FetchTodoDtoValidator>;

import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Жарактуу email киргизиңиз"),
  password: z.string().min(6, "Сырсөз кеминде 6 символ"),
});

export const registerSchema = z.object({
  fullName: z.string().min(2, "Аты кеминде 2 символ"),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["STUDENT", "TEACHER", "PARENT"]),
  inviteCode: z.string().optional(),
});

export const submissionSchema = z.object({
  dailyPlanId: z.string().optional(),
  planItemId: z.string().optional(),
  pagesRead: z.number().min(0),
  repetitionCount: z.number().int().min(0),
  notes: z.string().optional(),
});

export const reviewSchema = z.object({
  submissionId: z.string(),
  decision: z.enum(["APPROVED", "REJECTED", "NEEDS_REVISION"]),
  feedback: z.string().optional(),
});

export const dailyPlanSchema = z.object({
  groupId: z.string().optional(),
  studentId: z.string().optional(),
  planDate: z.string(),
  title: z.string().min(1),
  notes: z.string().optional(),
  items: z.array(
    z.object({
      type: z.enum(["READ", "MEMORIZE", "REVISE", "LISTEN"]),
      surahStart: z.number().int().optional(),
      ayahStart: z.number().int().optional(),
      surahEnd: z.number().int().optional(),
      ayahEnd: z.number().int().optional(),
      targetPages: z.number().optional(),
      targetRepetitions: z.number().int().optional(),
      orderIndex: z.number().int().default(0),
    })
  ),
});

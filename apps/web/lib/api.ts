import type { ApiResponse } from "@noorjourney/shared";

export function apiSuccess<T>(data: T, meta?: Record<string, unknown>): ApiResponse<T> {
  return { data, error: null, meta };
}

export function apiError(message: string): ApiResponse<null> {
  return { data: null, error: message };
}

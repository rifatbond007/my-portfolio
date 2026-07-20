import { z } from "zod";

/**
 * Schema for the portfolio contact form.
 * Shared between the web form and the API so validation lives in one place.
 */
export const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(200),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  // Honeypot — must be empty. Bots fill every field; humans never see this.
  company: z.string().max(0).optional().default(""),
  // Cloudflare Turnstile token from the client widget.
  turnstileToken: z.string().min(1, "CAPTCHA required"),
});

export type ContactInput = z.infer<typeof ContactSchema>;

/**
 * Subset of fields safe to surface in error messages and store in DB.
 * Excludes honeypot and CAPTCHA token.
 */
export type ContactRecord = Pick<
  ContactInput,
  "name" | "email" | "subject" | "message"
>;

export const RATE_LIMIT_PER_WINDOW = 5;
export const RATE_LIMIT_WINDOW_SECONDS = 600; // 10 minutes

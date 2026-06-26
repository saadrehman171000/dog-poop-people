import { z } from "zod";

export const serviceRequestSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required."),
    email: z.email("Enter a valid email address."),
    phone: z.string().min(1, "Phone number is required."),
    address: z.string().min(1, "Property address is required."),
    serviceType: z.enum(["one-time", "weekly"], {
      error: "Choose a service type.",
    }),
    dogs: z.enum(["1", "2", "3", "4", "5+"], {
      error: "Choose the number of dogs.",
    }),
    yardSize: z.enum(["under-quarter", "exact-quarter", "over-quarter"], {
      error: "Choose a yard size.",
    }),
    loudounCounty: z.boolean().refine((value) => value, {
      message: "Please confirm this property is in Loudoun County, VA.",
    }),
    accessNotes: z.string().optional(),
    message: z.string().optional(),
  })
  .refine((data) => data.yardSize !== "over-quarter", {
    message: "At this time, we only service dog areas up to 1/4 acre.",
    path: ["yardSize"],
  });

export const contactSchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  email: z.email("Enter a valid email address."),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required."),
});

export type ServiceRequestFormValues = z.infer<typeof serviceRequestSchema>;
export type ContactFormValues = z.infer<typeof contactSchema>;

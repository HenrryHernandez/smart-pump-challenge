import * as z from "zod";

export const UpdateUserInformationSchema = z
  .object({
    age: z
      .number()
      .or(z.string().regex(/\d+/).transform(Number))
      .refine((n) => n > 0, { message: "Invalid age" }),
    eyeColor: z.string().trim().min(1, { message: "Eye color required" }),
    name: z.object({
      first: z.string().trim().min(1, { message: "First name required" }),
      last: z.string().trim().min(1, { message: "Last name required" }),
    }),
    company: z.string().trim().min(1, { message: "Company required" }),
    phone: z.string().trim().min(1, { message: "Phone required" }),
    address: z.string().trim().min(1, { message: "Address required" }),
    email: z.string().optional(),
    password: z.string().trim().optional(),
    confirmPassword: z.string().trim().optional(),
    picture: z.string().optional(),
  })
  .refine(
    (data) => {
      console.log(data);
      if (data.password && data.password.trim().length > 0) {
        console.log(1);
        if (!data.confirmPassword || data.confirmPassword !== data.password) {
          console.log(2);
          return false;
        }
      }

      return true;
    },
    {
      message: "Passwords do not match.",
      path: ["confirmPassword"],
    }
  );

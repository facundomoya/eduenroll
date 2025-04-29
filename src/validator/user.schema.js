import { z } from "zod";

export const userSchema= z.object({
    user_name: z.string().min(1),
    password: z.string().min(5).max(20),
})

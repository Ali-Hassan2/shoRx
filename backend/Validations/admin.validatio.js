const { z } = require("zod");

const adminValidation = z.object({
  name: z.string().min(5, { message: "Name should be 5 chars long." }),
  email: z
    .string()
    .min(10, { message: "Email must be at least 10 characters long." })
    .regex(/^[a-zA-Z]+[0-9]+@shorx\.com$/, {
      message: "Email must match the format: name123@shorx.com",
    }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

module.exports = adminValidation;

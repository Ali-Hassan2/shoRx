const z = require("zod");

const chatvalidation = z.object({
  prompt: z.string().trim().min(1, { message: "Prompt is required." }),
});

module.exports = chatvalidation;

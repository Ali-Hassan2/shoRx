const { z } = require("zod");

const commentValidation = z.object({
  blog_id: z.string().min(1, "Blog ID is required."),
  text: z
    .string()
    .min(1, "Comment text is required.")
    .max(500, "Comment should not exceed 500 characters."),
});

module.exports = commentValidation;

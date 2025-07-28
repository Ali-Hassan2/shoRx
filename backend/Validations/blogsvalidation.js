const { z } = require("zod");

const blogValidation = z.object({
  title: z.string().min(1, "Title is required."),
  content: z
    .string()
    .min(1, "Content is required.")
    .max(1500, "Content must be less than or equal to 1500 characters."),
  image: z.string().url("Image must be a valid URL.").optional(),
  author: z.string().min(1, "Author (admin ID) is required."),
  category: z.string().min(1, "Category is required."),
  publish_Date: z
    .string()
    .datetime("Publish date must be a valid ISO date string."),
  update_Date: z
    .string()
    .datetime("Update date must be a valid ISO date string."),
  summary: z.string().min(1, "Summary is required."),
  slug: z.string().min(1, "Slug is required."),
  likes: z.string().min(0).optional(),
  likedIP: z
    .string()
    .regex(
      /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/,
      "Liked IP must be a valid IPv4 address."
    )
    .optional(),
});

module.exports = blogValidation;

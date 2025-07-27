const chatvalidation = require("../Validations/chatvalidation");
const dotenv = require("dotenv");
const sendresponse = require("../Utils/sendresponse");
const axios = require("axios");

dotenv.config();

const gettingresponses = async (req, res) => {
  const cvalidation = chatvalidation.safeParse(req.body);
  if (!cvalidation.success) {
    return sendresponse(
      res,
      401,
      false,
      "Please provide a valid prompt",
      null,
      cvalidation.error.issues.map((err) => err?.message)
    );
  }

  const prompt = cvalidation.data.prompt;
  console.log("The prompt is:", prompt);

  try {
    const baseURL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.LLM_KEY}`;

    const instruction =
      "You are a professional pharmacy assistant. Only answer questions related to medicine, pharmacy, drugs, dosages, side effects, diseases, and prescriptions. If the question is outside this domain, politely respond: 'I'm a pharmacy assistant. Please ask something related to pharmacy or medical topics.'";

    const llm_response = await axios.post(baseURL, {
      contents: [
        {
          role: "user",
          parts: [{ text: instruction }],
        },
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const reply = llm_response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      return sendresponse(res, 404, false, "No response from LLM.");
    }

    return sendresponse(
      res,
      200,
      true,
      "Response received successfully.",
      reply
    );
  } catch (error) {
    console.log("The error is:", error?.response?.data || error.message);
    return sendresponse(res, 500, false, "Internal Server Error", null, [
      error?.response?.data || error?.message,
    ]);
  }
};

module.exports = { gettingresponses };

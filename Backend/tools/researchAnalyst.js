    const axios = require("axios");
    require("dotenv").config();

    async function researchAnalyst(icp, signals, company) {
    try {
        const prompt = `
    You are an AI sales research analyst.

    Company: ${company}

    Growth Signals:
    ${signals.join("\n")}

    Ideal Customer Profile:
    ${icp}

    Write a professional 2 paragraph account brief explaining:
    1. What the company’s growth signals indicate.
    2. Why this company might benefit from our solution.

    Make the explanation clear and business-focused.
    `;

        const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
            contents: [
            {
                parts: [{ text: prompt }],
            },
            ],
        },
        );

        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Gemini API Error:", error.response?.data || error.message);

        return "Account research could not be generated.";
    }
    }

    module.exports = researchAnalyst;

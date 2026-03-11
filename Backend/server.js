require("dotenv").config();

const express = require("express");
const cors = require("cors");
const runAgent = require("./agent");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/run-agent", async (req, res) => {
  try {
    console.log("Incoming body:", req.body);

    if (!req.body) {
      return res.status(400).json({ error: "Request body missing" });
    }

    const { icp, company, email } = req.body || {};

    if (!icp || !company || !email) {
      return res.status(400).json({
        error: "icp, company and email are required",
      });
    }

    const result = await runAgent(icp, company, email);

    res.json(result);
  } catch (error) {
    console.error("Server Error:", error);

    res.status(500).json({
      error: "Agent execution failed",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

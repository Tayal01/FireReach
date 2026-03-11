const signalHarvester = require("./tools/signalHarvestor");
const researchAnalyst = require("./tools/researchAnalyst");
const outreachSender = require("./tools/outReachSender");

async function runAgent(icp, company, email) {
  try {
    // STEP 1 — Capture Signals
    console.log("Capturing signals for:", company);

    const signalData = await signalHarvester(company);

    // STEP 2 — Research Analysis
    console.log("Generating account brief");

    const brief = await researchAnalyst(icp, signalData.signals, company);

    // STEP 3 — Generate Outreach Email
    const emailMessage = `
Hi,
I noticed a few growth signals from ${company}:

${signalData.signals.map(s => "• " + s).join("\n")}

${brief}

We specialize in cybersecurity training designed for rapidly
growing startups. Our programs help engineering teams adopt
secure coding practices and reduce security risks while scaling.

If this sounds relevant, I would love to share more details.

Best regards,
Lakshay Tayal
2310990808
FireReach AI
`;

    // STEP 4 — Send Email
    console.log("Sending outreach email");

    const sendStatus = await outreachSender(email, emailMessage);

    // Final Result
    return {
      company: company,
      signals: signalData.signals,
      accountBrief: brief,
      emailStatus: sendStatus,
    };
  } catch (error) {
    console.error("Agent Error:", error);

    return {
      error: "Agent execution failed",
    };
  }
}

module.exports = runAgent;

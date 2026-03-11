# FireReach – Autonomous Outreach Agent

## Overview

FireReach is a simple autonomous outreach system built to help sales and GTM teams save time.  
Usually, sales teams spend a lot of time researching companies, finding growth signals, and writing outreach emails manually. This project tries to automate that process.

In this system, the user enters an Ideal Customer Profile (ICP), a company name, and a target email. The agent then collects some growth signals about the company, analyzes them using AI, and generates a short account brief. Based on this research, the system also creates a personalized outreach email and sends it automatically.

The main idea of this project is to show how an AI agent can use different tools step by step to complete a task.

---

## Logic Flow

The FireReach agent works in a simple sequence of steps.

1. The user enters three inputs:
   - ICP (Ideal Customer Profile)
   - Target company
   - Target email address

2. The system first calls **tool_signal_harvester**.  
   This tool collects some growth signals related to the company, such as hiring activity or team expansion.

3. Next, the system calls **tool_research_analyst**.  
   This tool uses the Gemini API to analyze the signals along with the ICP and generate a short two-paragraph account brief.

4. After that, the system creates a personalized outreach email that references the growth signals of the company.

5. Finally, the system calls **tool_outreach_automated_sender**, which sends the email automatically using Nodemailer.

---

## Agent Toolchain

This project uses three tools that work one after another:

Signal Harvester → Research Analyst → Outreach Sender

Each tool performs a specific task. First the system collects signals, then it analyzes them using AI, and finally it sends the outreach email automatically.
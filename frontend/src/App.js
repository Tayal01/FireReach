import React, { useState } from "react";
import axios from "axios";

function App() {
  const [icp, setIcp] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runAgent = async () => {
    try {
      setLoading(true);

      const response = await axios.post("https://firereach-q6mo.onrender.com", {
        icp,
        company,
        email,
      });

      setResult(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "60px",
        fontFamily: "Arial",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "0 auto",
        margin: 0,
        overflow: "hidden",
      }}
    >
      <h2>FireReach Autonomous Outreach</h2>

      <div style={{ marginTop: "10px" }}>
        <input
          placeholder="Ideal Customer Profile"
          value={icp}
          onChange={(e) => setIcp(e.target.value)}
          style={{ width: "400px", padding: "10px" }}
        />

        <br />
        <br />

        <input
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ width: "400px", padding: "10px" }}
        />

        <br />
        <br />

        <input
          placeholder="Target Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "400px", padding: "10px" }}
        />

        <br />
        <br />

        <button
          onClick={runAgent}
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Run FireReach Agent
        </button>
      </div>

      {loading && <p>Running AI agent...</p>}

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h3>Signals</h3>
          <ul>
            {result.signals.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <h3>Account Brief</h3>
          <p>{result.accountBrief}</p>

          <h3>Email Status</h3>
          <p>{result.emailStatus}</p>
        </div>
      )}
    </div>
  );
}

export default App;

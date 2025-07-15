import { useState, useEffect } from "react";

function ChangeMode() {
  const [isDark, setIsDark] = useState(false);

  // Change body background when mode changes
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#121212" : "#ffffff";
    document.body.style.color = isDark ? "#f5f5f5" : "#000000";
  }, [isDark]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={() => setIsDark(!isDark)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: isDark ? "#333" : "#ddd",
          color: isDark ? "#fff" : "#000",
          border: "none",
          borderRadius: "8px",
        }}
      >
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default ChangeMode;

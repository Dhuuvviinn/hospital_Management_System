// Loader.jsx
export function Loader() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}>
      <div style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: "2.5px solid #e5e7eb",
        borderTopColor: "#378ADD",
        animation: "spin 1.2s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}
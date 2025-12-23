function Toggle({ label, value, onToggle }) {
  return (
    <div className="setting-row">
      <span>{label}</span>
      <button
        className={`toggle-btn ${value ? "on" : "off"}`}
        onClick={onToggle}
      >
        {value ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Toggle;
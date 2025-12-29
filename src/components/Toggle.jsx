function Toggle({ label, value, onToggle }) {
  return (
    <div className="setting-row">
      <span>{label}</span>
      <div className="button-spacer">
        <button
          className={`toggle-btn ${value ? "on" : "off"} on-perm`}
          onClick={onToggle}
          >
          ON
        </button>
          <button
          className={`toggle-btn ${value ? "off" : "on"} off-perm`}
          onClick={onToggle}
          >
          OFF
        </button>
      </div>
    </div>
  );
}

export default Toggle;
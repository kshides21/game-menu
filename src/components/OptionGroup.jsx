function OptionGroup({ label, options, selected, onSelect }) {
  return (
    <div className="setting-row">
      <span>{label}</span>

      <div className="option-group">
        {options.map(opt => (
          <button
            key={opt.value}
            className={`option-btn ${
              selected === opt.value ? "selected" : ""
            } ${opt.value}-perm`}
            onClick={() => onSelect(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
export default OptionGroup;
function AddTaskModal({
  show,
  onClose,
  onSubmit,
  title,
  setTitle,
  description,
  setDescription,
  statusType,
  setStatusType,
  loading,
  error,
}) {
  if (!show) return null;

  return (
    <div className="modal-backdrop" style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div className="modal" style={{
        background: "#fff", padding: 24, borderRadius: 8, minWidth: 300
      }}>
        <h3>Create New Task</h3>
        <form onSubmit={onSubmit}>
          <label>
            Title:
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Status:
            <select
              value={statusType}
              onChange={e => setStatusType(e.target.value)}
            >
              <option value="Backlog">Backlog</option>
              <option value="To Do">To Do</option>
              <option value="Ready for review">Ready for review</option>
              <option value="Done">Done</option>
            </select>
          </label>
          <br />
          {error && <div style={{ color: "red" }}>{error}</div>}
          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create"}
          </button>
          <button type="button" onClick={onClose} style={{ marginLeft: 8 }}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;
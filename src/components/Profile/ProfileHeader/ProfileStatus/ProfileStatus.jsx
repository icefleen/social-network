import React, { useEffect, useState } from "react";

const ProfileStatus = ({ initialStatus, updateStatus }) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    setStatus(initialStatus);
  }, [initialStatus]);

  const activateEditMode = () => setEditMode(true);

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status);
  };

  const handleStatusChange = (event) => setStatus(event.target.value);

  return editMode ? (
    <input
      onBlur={deactivateEditMode}
      autoFocus={true}
      type="text"
      value={status}
      onChange={handleStatusChange}
    />
  ) : (
    <span onClick={activateEditMode}>{status || "No status here"}</span>
  );
};

export default ProfileStatus;

import React, { useEffect, useState } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => setEditMode(true);

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
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
    <span onClick={activateEditMode}>{props.status || "No status here"}</span>
  );
};

export default ProfileStatus;

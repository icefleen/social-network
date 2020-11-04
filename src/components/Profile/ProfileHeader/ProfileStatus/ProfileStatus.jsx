import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  toggleEditMode(editMode) {
    this.setState({
      editMode,
    });
  }

  render() {
    return this.state.editMode ? (
      <input
        onBlur={() => this.toggleEditMode(false)}
        autoFocus={true}
        type="text"
        value={this.props.status}
      />
    ) : (
      <span onClick={() => this.toggleEditMode(true)}>{this.props.status}</span>
    );
  }
}

export default ProfileStatus;

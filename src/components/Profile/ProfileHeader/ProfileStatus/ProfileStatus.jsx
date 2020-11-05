import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  toggleEditMode = (editMode) => {
    this.setState({
      editMode,
    });

    if (!editMode) {
      this.props.updateStatus(this.state.status);
    }
  };

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  };

  render() {
    return this.state.editMode ? (
      <input
        onBlur={() => this.toggleEditMode(false)}
        autoFocus={true}
        type="text"
        value={this.state.status}
        onChange={this.onStatusChange}
      />
    ) : (
      <span onClick={() => this.toggleEditMode(true)}>
        {this.props.status || "No status here"}
      </span>
    );
  }
}

export default ProfileStatus;

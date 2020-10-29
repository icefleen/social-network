import React from "react";
import axios from "axios";
import People from "./People";

import { connect } from "react-redux";
import {
  appendPeople,
  clearPeople,
  follow,
  toggleFetching,
  unfollow,
} from "../../redux/peopleReducer";

class PeopleAPI extends React.Component {
  componentDidMount = () => {
    this.loadUsers(0);
  };

  componentWillUnmount = () => {
    this.props.clearPeople();
  };

  loadUsers = (offset) => {
    this.props.toggleFetching(true);

    axios.get(`/api/users?offset=${offset}&limit=3`).then((response) => {
      this.props.toggleFetching(false);
      this.props.appendPeople(response.data.items);
    });
  };

  render = () => {
    return (
      <People
        className={this.props.className}
        peopleState={this.props.peopleState}
        loadUsers={this.loadUsers}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  };
}

const mapStateToProps = (state) => ({
  peopleState: state.peopleState,
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  appendPeople,
  clearPeople,
  toggleFetching,
})(PeopleAPI);

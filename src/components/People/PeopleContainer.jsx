import { connect } from "react-redux";
import {
  appendPeopleActionCreator,
  clearPeopleActionCreator,
  followActionCreator,
  unfollowActionCreator,
} from "../../redux/peopleReducer";
import People from "./People";

const mapStateToProps = (state) => ({
  peopleState: state.peopleState,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(followActionCreator(userId)),
  unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
  appendPeople: (people) => dispatch(appendPeopleActionCreator(people)),
  clearPeople: () => dispatch(clearPeopleActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(People);

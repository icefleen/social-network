import Messenger from "./Messenger";

import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/messengerReducer";

import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  messengerState: state.messengerState,
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: () => dispatch(addMessageActionCreator()),
  updateNewMessageText: (newText) =>
    dispatch(updateNewMessageTextActionCreator(newText)),
});

const MessengerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messenger);

export default MessengerContainer;

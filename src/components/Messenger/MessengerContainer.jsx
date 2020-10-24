import Messenger from "./Messenger";

import { addMessage, updateNewMessageText } from "../../redux/messengerReducer";

import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  messengerState: state.messengerState,
});

const MessengerContainer = connect(mapStateToProps, {
  addMessage,
  updateNewMessageText,
})(Messenger);

export default MessengerContainer;

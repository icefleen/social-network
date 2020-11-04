import Messenger from "./Messenger";

import { addMessage, updateNewMessageText } from "../../redux/messengerReducer";

import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => ({
  messengerState: state.messengerState,
});

export default compose(
  connect(mapStateToProps, {
    addMessage,
    updateNewMessageText,
  }),
  withAuthRedirect
)(Messenger);

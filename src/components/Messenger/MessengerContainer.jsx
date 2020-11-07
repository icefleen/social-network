import Messenger from "./Messenger";

import { addMessage } from "../../redux/messengerReducer";

import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

import { reset } from "redux-form";
import {
  getDialogs,
  getMessages,
} from "../../redux/selectors/messengerSelectors";

const mapStateToProps = (state) => ({
  dialogs: getDialogs(state),
  messages: getMessages(state),
});

export default compose(
  connect(mapStateToProps, {
    addMessage,
    reset,
  }),
  withAuthRedirect
)(Messenger);

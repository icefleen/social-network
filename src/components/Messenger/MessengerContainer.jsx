import Messenger from "./Messenger";

import { addMessage } from "../../redux/messengerReducer";

import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

import { reset } from "redux-form";

const mapStateToProps = (state) => ({
  messengerState: state.messengerState,
});

export default compose(
  connect(mapStateToProps, {
    addMessage,
    reset,
  }),
  withAuthRedirect
)(Messenger);

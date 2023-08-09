
import propTypes from "prop-types";

function Notification(props) {
  const { message = "" } = props;

  return (
    <p>{message}</p>
  );
}

Notification.propTypes = {
  message: propTypes.string.isRequired
};

export default Notification;

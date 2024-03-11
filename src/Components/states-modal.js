import { Alert } from "react-bootstrap";
import AprRejBtn from "./bth";

function StatesModal({ id, state }) {
  if (state === 0) {
    return <AprRejBtn requestId={id} />;
  } else if (state === 1) {
    return <Alert className="alert-success">Заявка одобрена</Alert>;
  } else if (state === 2) {
    return <Alert className="alert-danger">Заявка отклонена</Alert>;
  } else {
    return<Alert className="alert-info">Архив</Alert>;
  }
}

export default StatesModal;

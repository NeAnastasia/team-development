import {Container} from "react-bootstrap";
import KeyCard from "../Components/key-card";
import { Link } from "react-router-dom";
import KeyModal from "../Components/key-modal";


function Profile() {

  return (
    <Container>
        <KeyCard/>
        <Link>
            Cоздать ключ
        </Link>
        <KeyModal/>
    </Container>
  );
}

export default Profile;

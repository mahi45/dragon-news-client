import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle />
        Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub></FaGithub> Login with Github
      </Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook>Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter>
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram>Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;

import { Row, Col } from "react-bootstrap";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND } from "../utils/mutations";

const PubHeader = ({ username, userParam }) => {
  const [addFriend] = useMutation(ADD_FRIEND, {
    update(cache, { data: { addFriend } }) {
      cache.modify({
        fields: {
          me(existingMeData) {
            return addFriend;
          },
        },
      });
    },
  });

  const handleClick = async (addUsername) => {
    if (addUsername !== Auth.getProfile().data.username) {
      try {
        await addFriend({
          variables: { username: addUsername },
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  <Row className="pub-header">
    <Col xs={12}>
      <h2 className="pub-name">
        <span>
          <i className="fas fa-hat-cowboy fa-sm pub-user-icon"></i>
        </span>
        {userParam ? `${username}'s` : "your"} profile
        <button className="btn ml-auto" onClick={() => handleClick(username)}>
          <span className="pub-add-friend-btn">
            <i className="fas fa-user-plus fa-sm"></i>
          </span>
        </button>
      </h2>
    </Col>
  </Row>;
};

export default PubHeader;

import { Row, Col } from "react-bootstrap";
import EmbeddedVideo from "../components/EmbeddedVideo";
import Stats from "./Stats";

const PubFriends = ({ user }) => {
  const showLatestPerformance = (performances) => {
    if (performances.length) {
      const { title, url } = performances[0];
      return <EmbeddedVideo title={title} artist={user.username} url={url} />;
    }
  };

  return (
    <Row>
      <Col className="pub-friends">
        <div className="friend-count">
          <h3>{user.username} has ... </h3>
          <Stats user={user} />
          <Row>
            <Col>
              <div className="performance-video">
                {showLatestPerformance(user.performances)}
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default PubFriends;

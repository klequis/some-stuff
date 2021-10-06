import { Col } from "react-bootstrap";
import { LinkList } from "./LinkList";

export const List = ({ list, username, textRuns }) => {
  const { hasListText, noListHeaderText, noListLinkText } = textRuns;
  return (
    <Col xs={12} md={4}>
      <div className="pub-play-list">
        {list.length ? (
          <>
            <p className="publist-header">
              {username}
              <br />
              {hasListText}
            </p>
            <LinkList list={list} toPrefix={"/playlist/"} />
          </>
        ) : (
          <>
            <p className="publist-header">
              {username}
              <br />
              {noListHeaderText}
            </p>
            <p className="pub-li no-info">{noListLinkText}</p>
          </>
        )}
      </div>
    </Col>
  );
};

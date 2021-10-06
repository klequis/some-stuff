import { Row } from "react-bootstrap";
import List from "./List";

const PubPlayList = ({ user }) => {
  return (
    <Row>
      <List
        list={user.playlists}
        username={user.username}
        textRuns={{
          hasListText: "created these playlists:",
          noListHeaderText: "has no playlists!",
          noListLinkText: "nothing to see here",
        }}
      />
      <List
        list={user.partyPlaylists}
        username={user.username}
        textRuns={{
          hasListText: "is in these parties:",
          noListHeaderText: "is not in a party",
          noListLinkText: "invite them to party!",
        }}
      />
      <List
        list={user.performances}
        username={user.username}
        textRuns={{
          hasListText: "latest performances",
          noListHeaderText: "no performances yet",
          noListLinkText: "stay tuned!",
        }}
      />
    </Row>
  );
};
export default PubPlayList;

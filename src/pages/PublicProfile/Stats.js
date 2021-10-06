import { Row, Col } from "react-bootstrap";

export const Stats = ({ user }) => {
  const publicSongCount = user.playlists.reduce((total, playlist) => {
    return total + playlist.songs.length;
  }, 0);

  return (
    <Row>
      <Col xs={6} md={3}>
        <span className="stats-number pub-stats">{user.friendCount} </span>{" "}
        <br></br>
        {user.friendCount === 1 ? "friend" : "friends"}
      </Col>
      <Col xs={6} md={3}>
        <span className="stats-number pub-stats">{user.playlistCount} </span>
        <br></br>
        {user.playlistsCount === 1 ? "public playlist" : "public playlists"}
      </Col>
      <Col xs={6} md={3}>
        <span className="stats-number pub-stats">{publicSongCount} </span>
        <br></br>
        {publicSongCount === 1
          ? "song in public playlists"
          : "songs in public playlists"}
      </Col>
      <Col xs={6} md={3}>
        <span className="stats-number pub-stats">{user.performanceCount} </span>
        <br></br>
        {user.performanceCount === 1
          ? "public performance"
          : "public performances"}
      </Col>
    </Row>
  );
};

export default Stats;

import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";

import PubHeader from "./PubHeader";
import PubFriends from "./PubFriends";

const PublicProfile = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  const user = data.user;

  console.log("PP USER", user);

  return (
    <Container className="public-profile">
      <PubHeader username={user.username} userParam={userParam} />
      <PubFriends user={user} />
    </Container>
  );
};

export default PublicProfile;

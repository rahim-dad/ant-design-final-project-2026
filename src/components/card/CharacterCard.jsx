import React from "react";
import {
  Card,
  Avatar,
  Badge,
  Button,
  Typography,
} from "antd";

import { Link } from "react-router-dom";

const { Title } = Typography;

function CharacterCard({ character }) {
  const getStatusColor = () => {
    switch (character.status) {
      case "Alive":
        return "blue";
      case "Dead":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <Card
      hoverable
      style={{
        borderRadius: 12,
        textAlign: "center",
        height: "100%",
      }}
    >
      <Avatar
        src={character.image}
        size={120}
        style={{
          marginBottom: 20,
        }}
      />

      <Title
        level={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          marginBottom: 20,
        }}
      >
        <span>{character.name}</span>

        <Badge color={getStatusColor()} />
      </Title>

      <Link to={`/profile/${character.id}`}>
        <Button type="primary">
          View Profile
        </Button>
      </Link>
    </Card>
  );
}

export default CharacterCard;
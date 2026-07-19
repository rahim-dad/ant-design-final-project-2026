import React, { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Spin,
  message,
  Badge,
} from "antd";

import { ArrowLeftOutlined } from "@ant-design/icons";

import { useNavigate, useParams } from "react-router-dom";

import CharacterImage from "../../components/Image";
import CharacterTypography from "../../components/Typography";

import { getCharacter } from "../../services/api";

function Profile() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [character, setCharacter] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    try {
      setLoading(true);

      const data = await getCharacter(id);

      setCharacter(data);

      saveRecentlyVisited(data);
    } catch (error) {
      message.error("Failed to load character.");
    } finally {
      setLoading(false);
    }
  };

  const saveRecentlyVisited = (character) => {
    let recent =
      JSON.parse(localStorage.getItem("recentCharacters")) || [];

    recent = recent.filter((item) => item.id !== character.id);

    recent.unshift(character);

    if (recent.length > 5) {
      recent.pop();
    }

    localStorage.setItem(
      "recentCharacters",
      JSON.stringify(recent)
    );
  };

  const getStatusColor = () => {
    if (!character) return "default";

    if (character.status === "Alive") return "blue";

    if (character.status === "Dead") return "red";

    return "gray";
  };

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: 100,
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  if (!character) return null;

  return (
    <>
      <Button
        type="primary"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate("/")}
        style={{
          marginBottom: 30,
        }}
      >
        Back to Homepage
      </Button>

      <Card>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} md={8}>
            <CharacterImage src={character.image} />
          </Col>

          <Col xs={24} md={16}>
            <h1>
              <Badge color={getStatusColor()} />

              {character.name}
            </h1>

            <CharacterTypography
              label="Status :"
              value={character.status}
            />

            <CharacterTypography
              label="Species :"
              value={character.species}
            />

            <CharacterTypography
              label="Gender :"
              value={character.gender}
            />

            <CharacterTypography
              label="Location :"
              value={character.location.name}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Profile;
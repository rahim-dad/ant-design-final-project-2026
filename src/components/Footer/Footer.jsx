import React, { useEffect, useState } from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Avatar,
  Empty,
} from "antd";
import { Link, useLocation } from "react-router-dom";

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

function Footer() {
  const [recentCharacters, setRecentCharacters] = useState([]);
  const location = useLocation();

  const loadRecentCharacters = () => {
    const data =
      JSON.parse(localStorage.getItem("recentCharacters")) || [];

    setRecentCharacters(data);
  };

  useEffect(() => {
    loadRecentCharacters();
  }, [location]);

  useEffect(() => {
    const handleStorage = () => {
      loadRecentCharacters();
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <AntFooter
      style={{
        background: "#ffffff",
        marginTop: 40,
        borderTop: "1px solid #e8e8e8",
      }}
    >
      <Title level={4}>
        Recently Visited Profiles
      </Title>

      {recentCharacters.length === 0 ? (
        <Empty description="No recently visited profiles." />
      ) : (
        <Row gutter={[16, 16]}>
          {recentCharacters.map((character) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              key={character.id}
            >
              <Link to={`/profile/${character.id}`}>
                <Card hoverable>
                  <Avatar
                    src={character.image}
                    size={70}
                  />

                  <div
                    style={{
                      marginTop: 12,
                    }}
                  >
                    <Text strong>
                      {character.name}
                    </Text>
                  </div>

                  <div
                    style={{
                      marginTop: 6,
                    }}
                  >
                    <Text type="secondary">
                      {character.status}
                    </Text>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </AntFooter>
  );
}

export default Footer;
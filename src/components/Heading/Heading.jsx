import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function Heading() {
  return (
    <Title
      level={2}
      style={{
        textAlign: "center",
        marginBottom: 40,
      }}
    >
      Rick and Morty Characters
    </Title>
  );
}

export default Heading;
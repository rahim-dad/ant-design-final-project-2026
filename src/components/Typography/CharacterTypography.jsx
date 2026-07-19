import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

function CharacterTypography({
  label,
  value,
}) {
  return (
    <div
      style={{
        marginBottom: 12,
      }}
    >
      <Text strong>
        {label}
      </Text>

      <Text
        style={{
          marginLeft: 8,
        }}
      >
        {value}
      </Text>
    </div>
  );
}

export default CharacterTypography;
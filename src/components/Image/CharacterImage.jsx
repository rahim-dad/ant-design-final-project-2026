import React from "react";
import { Image } from "antd";

function CharacterImage({ src }) {
  return (
    <Image
      src={src}
      alt="Character"
      preview={false}
      width="100%"
      height={250}
      style={{
        objectFit: "cover",
      }}
    />
  );
}

export default CharacterImage;
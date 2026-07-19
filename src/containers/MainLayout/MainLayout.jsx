import React, { useState } from "react";
import { Layout } from "antd";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const { Content } = Layout;

function MainLayout({ children }) {
  const [searchText, setSearchText] = useState("");

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <Content
        style={{
          maxWidth: "1400px",
          width: "100%",
          margin: "30px auto",
          padding: "0 20px",
        }}
      >
        {React.cloneElement(children, {
          searchText,
        })}
      </Content>

      <Footer />
    </Layout>
  );
}

export default MainLayout;
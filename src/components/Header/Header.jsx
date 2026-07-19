import React from "react";
import {
  Layout,
  Typography,
  Input,
  Row,
  Col,
} from "antd";

import { useLocation } from "react-router-dom";

const { Header: AntHeader } = Layout;
const { Title } = Typography;
const { Search } = Input;

function Header({ searchText, setSearchText }) {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <AntHeader
      style={{
        background: "#ffffff",
        padding: "20px 30px",
        height: "auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        gutter={[20, 20]}
      >
        <Col>
          <Title
            level={2}
            style={{
              margin: 0,
              color: "#1677ff",
            }}
          >
            Rick & Morty
          </Title>
        </Col>

        {isHomePage && (
          <Col xs={24} sm={18} md={10}>
            <Search
              placeholder="Search character..."
              allowClear
              enterButton="Search"
              size="large"
              value={searchText}
              onChange={handleChange}
              onSearch={handleSearch}
            />
          </Col>
        )}
      </Row>
    </AntHeader>
  );
}

export default Header;
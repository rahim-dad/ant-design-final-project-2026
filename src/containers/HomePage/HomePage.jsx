import React, { useEffect, useState } from "react";
import { Row, Col, Spin, Empty, message } from "antd";

import CharacterCard from "../../components/card";
import Pagination from "../../components/Pagination";

import { getCharacters } from "../../services/api";

function HomePage({ searchText }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCharacters, setTotalCharacters] = useState(0);

  const fetchCharacters = async () => {
    try {
      setLoading(true);

      const data = await getCharacters(currentPage, searchText);

      setCharacters(data.results);
      setTotalCharacters(data.info.count);
    } catch (error) {
      setCharacters([]);
      message.error("Character not found.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [currentPage, searchText]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 100,
          }}
        >
          <Spin size="large" />
        </div>
      ) : characters.length === 0 ? (
        <Empty
          description="No Character Found"
          style={{
            marginTop: 100,
          }}
        />
      ) : (
        <>
          <Row gutter={[24, 24]}>
            {characters.map((character) => (
              <Col
                key={character.id}
                xs={24}
                sm={12}
                md={8}
                lg={6}
              >
                <CharacterCard character={character} />
              </Col>
            ))}
          </Row>

          <Pagination
            current={currentPage}
            total={totalCharacters}
            onChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}

export default HomePage;
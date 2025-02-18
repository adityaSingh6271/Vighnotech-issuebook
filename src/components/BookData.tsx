import React from "react";
import { Row, Col, Typography, Form, Input } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 10px;
`;

const BookData: React.FC = () => {
  return (
    <div
      style={{
        padding: "16px",
        fontFamily: "Josefin Sans, sans-serif",
        margin: 20,
      }}
    >
      
    </div>
  );
};

export default BookData;

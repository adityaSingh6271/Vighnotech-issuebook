import React from "react";
import { Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

interface PageHeaderProps {
  pageTitle: string;
  userName?: string;
  breadcrumbText?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  pageTitle,
  userName = "Username",
  breadcrumbText = "Page name",
}) => {
  return (
    <div
      style={{
        padding: "16px",
        fontFamily: "Josefin Sans, serif",
        margin: 20,
      }}
    >
      <Row justify="space-between" align="middle">
        {/* Left side: Title & Username */}
        <Col>
          <Title level={3} style={{ margin: 0, fontSize: 26, fontWeight: "bolder" }}>
            {pageTitle}
          </Title>
          <Text type="secondary">{userName}</Text>
        </Col>
      </Row>

      {/* Breadcrumb or additional info */}
      <Row style={{ marginTop: 8 }}>
        <Col>
          <Text style={{ color: "black" }} type="secondary">
            {breadcrumbText} &gt; <strong>{breadcrumbText}</strong>
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default PageHeader;

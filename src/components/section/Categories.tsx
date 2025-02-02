"use client"; // Mark this component as a Client Component

import { useGetCategoriesQuery } from "@/services/fakeStoreApi";
import { Card, Row, Col, Spin, Typography } from "antd";
import Link from "next/link"; // Import the Link component

const Categories = () => {
  const { Title } = Typography;
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();

  if (isLoading) return <Spin size="large" />;
  if (isError) return <div>Error fetching categories</div>;

  return (
    <>
      <Title level={2}>Categories</Title>
      <Row
        gutter={[
          { xs: 6, sm: 16, md: 32, lg: 32 },
          { xs: 6, sm: 16, md: 32, lg: 32 },
        ]}
      >
        {categories?.map((category: string) => (
          <Col
            key={category}
            xs={24}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            flex={"auto"}
          >
            {/* Wrap the Card with Link */}
            <Link href={`/categories/${category}`} passHref>
              <Card bordered hoverable>
                <Title level={4}>{category.toUpperCase()}</Title>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Categories;

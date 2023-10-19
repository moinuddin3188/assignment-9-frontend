"use client";

import { Button, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { useAppDispatch } from "@/redux/hooks";
import { addCategory } from "@/redux/slices/serviceFilterSlice";
import { useRouter } from "next/navigation";

const CategoryEvent = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { data, isLoading } = useCategoriesQuery({
    page: 1,
    limit: 6,
    sortBy: "createdAt",
    sortOrder: "asc",
  });
  const categories = data?.categories;

  return (
    <section style={{ padding: "0px 200px", marginTop: "100px" }}>
      <h1
        style={{ textAlign: "center", fontStyle: "italic", fontSize: "3rem" }}
      >
        Service Categories
      </h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {categories?.map((category, index) => (
          <Col
            onClick={() => {
              dispatch(addCategory(category?.id));
              router.push("/services");
            }}
            key={category?.id}
            className="gutter-row"
            span={4}
          >
            <Card
              hoverable
              cover={<img alt="example" src={`/category-${index}.jpg`} />}
              actions={[
                <h5
                  style={{ color: "#DD4026", cursor: "pointer", margin: "0" }}
                  key="more"
                >
                  Explore <ArrowRightOutlined />
                </h5>,
              ]}
            >
              <Meta
                title={<h4 style={{ margin: "0" }}>{category?.title}</h4>}
              />
            </Card>
          </Col>
        ))}

        {/* --------  One Category --------
        <Col className="gutter-row" span={4}>
          <Card
            hoverable
            cover={<img alt="example" src="/new-earrings.jpg" />}
            actions={[
              <h5
                style={{ color: "#DD4026", cursor: "pointer", margin: "0" }}
                key="more"
              >
                Explore <ArrowRightOutlined />
              </h5>,
            ]}
          >
            <Meta
              title={<h4 style={{ textAlign: "center", margin: "0" }}>Ring</h4>}
            />
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card
            hoverable
            cover={<img alt="example" src="/new-earrings.jpg" />}
            actions={[
              <h5
                style={{ color: "#DD4026", cursor: "pointer", margin: "0" }}
                key="more"
              >
                Explore <ArrowRightOutlined />
              </h5>,
            ]}
          >
            <Meta
              title={<h4 style={{ textAlign: "center", margin: "0" }}>Ring</h4>}
            />
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card
            hoverable
            cover={<img alt="example" src="/new-earrings.jpg" />}
            actions={[
              <h5
                style={{ color: "#DD4026", cursor: "pointer", margin: "0" }}
                key="more"
              >
                Explore <ArrowRightOutlined />
              </h5>,
            ]}
          >
            <Meta
              title={<h4 style={{ textAlign: "center", margin: "0" }}>Ring</h4>}
            />
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card
            hoverable
            cover={<img alt="example" src="/new-earrings.jpg" />}
            actions={[
              <h5
                style={{ color: "#DD4026", cursor: "pointer", margin: "0" }}
                key="more"
              >
                Explore <ArrowRightOutlined />
              </h5>,
            ]}
          >
            <Meta
              title={<h4 style={{ textAlign: "center", margin: "0" }}>Ring</h4>}
            />
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card
            hoverable
            cover={<img alt="example" src="/new-earrings.jpg" />}
            actions={[
              <h5
                style={{ color: "#DD4026", cursor: "pointer", margin: "0" }}
                key="more"
              >
                Explore <ArrowRightOutlined />
              </h5>,
            ]}
          >
            <Meta
              title={<h4 style={{ textAlign: "center", margin: "0" }}>Ring</h4>}
            />
          </Card>
        </Col> */}
      </Row>
    </section>
  );
};

export default CategoryEvent;

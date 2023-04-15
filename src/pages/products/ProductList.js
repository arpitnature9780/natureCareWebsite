import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useSelector } from "react-redux";

const ProductList = () => {
  const [list, setList] = useState([]);

  const { data } = useSelector((state) => {
    return { data: state?.ProductReducer?.productList
    }
  })
  useEffect(() => {
   setList(data)
  }, []);

  return (
    <div className="my-5">
      <Container>
        <Row>
          {list &&
            list?.map((product, i) => {
              return (
                <Col lg="3" key={i}>
                  <Card className="pokemon-card">
                    <Link
                      href={{
                        pathname: `/products/${product.id}`,
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={product.image.src}
                        alt="Card image cap"
                      />
                    </Link>
                    <Card.Body>
                      <p className="pokemon-number">₹ {product.price}</p>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
        }
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;

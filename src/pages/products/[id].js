import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Popup } from "@/component/popup/Popup";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import LoadingSpinner from "@/component/spinner/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "@/redux/slices/productSlice";

const PokemonDetail = () => {
  const { query } = useRouter();
  const [opened, setOpened] = useState(false);

  const { data } = useSelector((state) => {
    return { data: state?.ProductReducer?.singleProduct };
  });

  useEffect(() => {
    dispatch(getProduct(query.id));
  }, [query.id]);
  const dispatch = useDispatch();

  console.log(42,data)
  return (
    <div className="detail-page-wrapper my-5">
      <Container>
        <Row>
          <Col lg="12">
            <h1 className="name-tag-name">
              {data?.title}
            </h1>
          </Col>
          <Col lg="5">
            <div className="pokemon-image-wrapper">
              <img src={data?.image?.src} alt=""  width="400px" />
            </div>
          </Col>
          <Col lg="7">
            <div className="pokemon-info">{data?.description}</div>
            <ul className="pokemon-detail">
              <li>
              Category : <span> {data?.category}</span>
              </li>
              <li>
                Price: <span>{data?.price}</span>
              </li>
              <li>
                Rating: <span>{data?.rating?.rate}</span>
              </li>
              <li>
                No. of sale product : <span>{data?.rating?.count}</span>
              </li>
            </ul>

            <Button
              className="load-more-btn"
              onClick={() => {
                setOpened(true);
              }}
            >Buy Now</Button>
          </Col>
        </Row>
      </Container>
      {opened && (
        <Popup
          id={query.id}
          name={query.name}
          opened={opened}
          setOpened={setOpened}
        />
      )}
    </div>
  );
};

export default PokemonDetail;

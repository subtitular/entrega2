import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-paginate";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

//import "./Home.css";

interface Product {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 3;
  const pagesVisited = pageNumber * productsPerPage;

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    axios
      .get<Product[]>("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => (
      <div className="card m-3 p-6 col-3">
        <img
          className="card-img-top mt-3"
          src={product.thumbnailUrl}
          alt="Card image"
        ></img>
        <div key={product.id} className="product">
          <h2>{product.title}</h2>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    ));

  return (
    <Container className="home">
      <h1>Tienda de productos del Poli</h1>
      <Row>{displayProducts}</Row>
      <Pagination
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </Container>
  );
};

export default Home;

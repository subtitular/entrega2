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
  title: string;
  body: string;
}


const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageNumber, setPageNumber] = useState(0);


  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;


  const pageCount = Math.ceil(products.length / productsPerPage);


  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };


  useEffect(() => {
    axios
      .get<Product[]>("https://jsonplaceholder.typicode.com/posts")
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
      <div key={product.id} className="product">
        <h2>{product.title}</h2>
        <p>{product.body}</p>
      </div>
    ));


  return (
    <Container className="home">
      <h1>Home</h1>
      <Button variant="primary">
        <FaSignInAlt />
        Iniciar sesión
      </Button>
      <Row>
        <Col>{displayProducts}</Col>
      </Row>
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




import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Heading = styled.h1`
    text-align: center;
    font-weight: 900;
`;


const Products = () => {
  return (
    <>
    <Heading>Best Sellers</Heading>
    <Container>
      {popularProducts.map((item)=>(
        <Product item = {item} key = {item.id} />
      ))}  
    </Container>
    </>
  );
}

export default Products
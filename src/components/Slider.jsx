import React from 'react'
import {useState} from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import {sliderItems} from '..//data'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    justify-content: center;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    flex: 100;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #${(props)=>props.bg};
    
`;
const ImgContainer = styled.div`
    flex: 1;
    padding: 30px;
`;


const Title = styled.h1`
    flex: 1;
`;
const Desc = styled.p`
    margin: 10px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
     padding: 10px;
     font-size: 20px;
     margin-top: 10px;
     background-color: teal;
     cursor: pointer;
     color: white;
     border: none;
     border-radius: 2px; 
`;

const Image = styled.img`
    height: 30rem;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Slider = () => {
const [slideIndex, setSlideIndex] = useState(0)
const handleClick = (direction) => {
    if (direction==="left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }else{
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
};
  return (
    <Container >
    <Arrow direction = "left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined/>
    </Arrow>
        <Wrapper slideIndex =  {slideIndex}>
        {sliderItems.map((item)=>(
            <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/> 
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
        ))}
        </Wrapper>
    <Arrow direction = "right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined/>
    </Arrow>    
    </Container>
  )
}

export default Slider
import styled from "styled-components";
import { Instagram, Facebook, Twitter, LinkedIn, MailOutline, Phone, Room } from '@material-ui/icons'

const Container = styled.div`
    display: flex;
`
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
    padding-left: 10px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    margin-bottom: 10px;
    width: 50%;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Title = styled.h3`
    margin: 20px 0;
`;
const Payment = styled.img`
    width: 50%;
`;
const Footer = () => {
    return (
      <Container>
      <Left>
        <Logo>E-Kart</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam praesentium incidunt laborum recusandae placeat, libero quas dolorem magnam delectus!</Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <LinkedIn/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <Twitter/>
            </SocialIcon>
        </SocialContainer>
      </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Careers</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight:"10px"}}/>L401 Noida, Greater Noida</ContactItem>
            <ContactItem> <Phone style={{marginRight:"10px"}}/>8077470278</ContactItem>
            <ContactItem>  <MailOutline style={{marginRight:"10px"}}/>contact@ekart.com</ContactItem>
            <Payment src="https://i.ibb.co/QM2LkSL/payment.jpg"></Payment>
        </Right>
      </Container>
    )
  }

export default Footer
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on orders above Rs. 500
    </Container>
  )
}

export default Announcement
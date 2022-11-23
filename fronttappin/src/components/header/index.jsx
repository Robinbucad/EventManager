import { Container, Navbar } from "react-bootstrap"

function Header(){
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
            Robin Bucad Villanueva
          </Navbar.Brand>

          <Navbar.Brand >
            Event Management
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default Header
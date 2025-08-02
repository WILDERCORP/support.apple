import Link from 'next/link';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Support.Apple</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link>About</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main content area of your support.apple app.</p>
        <Link href="/about" passHref legacyBehavior>
          <Button variant="primary">Go to About</Button>
        </Link>
      </Container>
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <Container>
          <small>&copy; {new Date().getFullYear()} Support.Apple. All rights reserved.</small>
        </Container>
      </footer>
    </>
  );
}
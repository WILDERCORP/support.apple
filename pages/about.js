import Link from 'next/link';
import { Button, Container } from 'react-bootstrap';

export default function About() {
  return (
    <Container className="mt-5">
      <h1>About Page</h1>
      <Link href="/" passHref legacyBehavior>
        <Button variant="secondary">Back to Home</Button>
      </Link>
    </Container>
  );
}
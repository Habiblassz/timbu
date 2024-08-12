import { Button, Container, Navbar, Modal } from "react-bootstrap";

function NavbarComponent() {
	return (
		<Navbar expand="sm">
			<Navbar.Brand href="/">Ecommerce store</Navbar.Brand>
			<Navbar.Toggle className="justify-content-end" />
			<Button>Cart 0 Items</Button>
		</Navbar>
	);
}

export default NavbarComponent;

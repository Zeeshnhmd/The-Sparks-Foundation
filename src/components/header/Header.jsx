import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
	return (
		<div>
			<Navbar
				className=" py-3"
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				fixed="top"
			>
				<Container>
					<Navbar.Brand href="#home">Basic bank</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<Nav.Link href="#deets">Home</Nav.Link>
							<Nav.Link href="#memes">About</Nav.Link>
							<Nav.Link href="#memes">Contact Us</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;

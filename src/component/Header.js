import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/fav">Favourit</Nav.Link>
                        </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header

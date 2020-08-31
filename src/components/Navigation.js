import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Navigation = (props) => {
    
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
  
        return (
            <div className="">

                <Navbar className="navigation" dark extended="md">
                    <NavbarBrand href="/">Happy Hour Foundation</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="#landing">Landing</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#intro">Introduction</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#vision">Vision and Mission</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#contact">Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                        {/* <NavbarText>Team</NavbarText> */}
                    </Collapse>
                </Navbar>     
            </div>
        )
    
}

export default withRouter(Navigation);
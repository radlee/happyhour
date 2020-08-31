import React, { Component } from 'react';

import { Container } from 'reactstrap';

class ContactForm extends Component {

    render() {
        return(
            <div id="contact">
                <Container>
                    <h1 className="h1">Contact Us</h1>
                    <hr className="heading-horizon" />
                    <h2 className="insta">Email: hhourfoundation@gmail.com</h2>
                    <h2 className="insta">Facebook: @hhourfoundation</h2>
                    <h2 className="insta">Instagram: @hhourfoundation</h2>
                </Container>
            </div>

            
        )
    }
}

export default ContactForm;


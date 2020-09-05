import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import hhf2 from '../../media/logo512.jpg';


const TeamList = (props) => {
    return (
        <div className="container" id="intro">
            <br />
            <h1 className="h1">Introduction</h1>
            <hr className="heading-horizon" />
            <br />
            <Container>
                <Row>
                    <Col sm="6">
                        <div>
                            <Media>
                                <Media className="profile-pic" left>
                                    <Media className="Media" object src={hhf2} alt="Happy Hour" />
                                </Media>
                            </Media>
                        </div> 
                    </Col>
                    <Col sm="6">
                        <div>
                            <Media body>
                                <Media className="media-heading" heading>
                                    The Driving Force behind Happy Hour.
                                </Media>
                                <br />
                                <h5>Happy Hour was formed and founded by Mr Tanduxolo Mathandi Stungu on 12 April 2013 
                                    and its name entered into the register on 21 June 2013 and registration number is 122-847 
                                    NPO and registration document was signed by Mr Bok of department of social development. 
                                    Its shortened name is HHF.
                                </h5>
                                
                                <p className="paragraph">
                                    Happy Hour exists in its own right, separately from its members changes, it can countinue with 
                                    other office beares. Members do not have rights over things or money that belong to the Happy Hour 
                                    Foundation. Members can get paid for their expenses on behalf of Happy Hour.
                                </p>
                                 
                            </Media>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TeamList;
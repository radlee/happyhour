import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';



const Sponsors = (props) => {
    return (
        <div className="container" id="vision">
            <br />
            <h1 className="h1">Our Vision and Mission</h1>
            <hr className="heading-horizon" />
            <br />
            <Container>
                <Row>
                    <Col sm="6">
                        <div>
                            <Card className="notice-sponsor">
                                <CardHeader className="heading"> Our Mission</CardHeader>
                                <CardBody>
                                    <CardTitle className="monochrome">To assist individuals to overcome their challenges. To bring trust and smile by continue with our daily deeds of kindness  our life saving work by touching  another persons' life problem when it really metters helping them.</CardTitle>
                                    <CardText className="card-text"> 
                                      To teach people about different diseases. To fight abuse and conflicts. To open soup kitchen for our homeless brothers  and sisters.
                                    </CardText>
                                </CardBody>
                                <CardFooter>To promote support Youth Development in sport and to open centers of help throughout the country. </CardFooter>
                            </Card>
                        </div>
                    </Col>
                    <Col sm="6">
                        <div>
                            <Card className="notice-sponsor">
                                <CardHeader className="heading">Our Vission</CardHeader>
                                <CardBody>
                                    <CardTitle className="monochrome">Is a word where the community live together with hope and have equal opportunities of help and grow up with prospects rather than problems.</CardTitle>
                                </CardBody>
                                <CardFooter>It is a home of kindness in our lifetime</CardFooter>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Sponsors;
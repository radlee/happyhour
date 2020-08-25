import React from 'react';
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import hhf2 from '../../media/hhf2.jpg';


const TeamList = (props) => {
    return (
        <div className="container">
            <br />
            <h1 className="h1">Introduction</h1>
            <hr className="heading-horizon" />
            <br />
            <ListGroup className="team" flush>
                <ListGroupItem>
                    <Media>
                        <Media className="profile-pic" left>
                            <Media className="Media" object src={hhf2} height="104px" alt="Happy Hour" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Happy Hour - Soup kitchen
                            </Media>
                            <h5>Details about the soup schedule.</h5>
                            Cape Town
                        </Media>
                    </Media>
                </ListGroupItem>
                
            </ListGroup>
        </div>
    );
}

export default TeamList;
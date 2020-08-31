import React from 'react';
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import hhf2 from '../../media/logo512.jpg';


const TeamList = (props) => {
    return (
        <div className="container" id="intro">
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
                                The Driving Force behind Happy Hour.
                            </Media>
                            <h5>Happy Hour was formed and founded by Mr Tanduxolo Mathandi Stungu on 12 April 2013 
                                and its name entered into the register on 21 June2013 and registration number is 122-847 
                                NPO and registration document was signed by Mr Bok of department of social development. 
                                Its shortened name is HHF.
                            </h5>
                                Happy Hour exists in its own right, separately from its members changes, it can countinue with 
                                other office beares. Members do not have rights over things or money that belong to the Happy Hour 
                                Foundation. Members can get paid for their expenses on behalf of Happy Hour.
                        </Media>
                    </Media>
                </ListGroupItem>
                
            </ListGroup>
        </div>
    );
}

export default TeamList;
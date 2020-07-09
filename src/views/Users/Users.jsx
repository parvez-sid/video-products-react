import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, ListGroup, ListGroupItem } from "reactstrap";
import ApiHandler from '../../ApiHandler';


class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : [],
        }
    }

    //get users
    componentDidMount(){
        var that = this;
        ApiHandler.getUsers(function(response){
            if(response.status === 200){
            that.setState({
                users : response.data
            })
            }
        })
    }
    render() {
        let userList = this.state.users.map((user) =>
            <ListGroupItem key={user._id} tag="a" href="#">{user.name}</ListGroupItem>
        );
        return(
            <>
            <Container>
                <Jumbotron>
                    <Row>
                        <Col>
                            <h1>Users</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <ListGroup>
                                {userList}
                            </ListGroup>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
            </>
        )
    }
}
export default Users;
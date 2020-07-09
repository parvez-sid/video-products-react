import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Form, FormGroup, Label, Input, Button } from "reactstrap";
import swal from 'sweetalert';
import ApiHandler from '../../ApiHandler';
import { Redirect } from "react-router-dom";

class RegisterUser extends Component {
    constructor(props){
        super(props);
        this.state={
            username : '',
            email: '',
            mobile : '',
            password : '',
        }
    }

    handleRegister (e) {
        e.preventDefault();
        e.stopPropagation();
        var self = this;
        var state = this.state;

        var payload={
            name : state.username,
            email : state.email,
            password : state.password,
            phone_number : state.mobile,
        };
        ApiHandler.signUp(payload, function (response){
            if(response.status === 200){
              swal("Success!", response.data+"!", "success")
              .then(()=>{
                window.location = '/';
              })
            }
            else {
              swal('Oops',response.response.data.message,'error')
            }
        })
    }

    // Input field value
    handleInputValue=(event)  => {
        this.setState({[event.target.name] : event.target.value})
    }

    // Register User
    // handleRegisration = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     var self = this;
    //     var state = this.state;
    //     var formData = new FormData();

    //     formData.append('name',state.username)
    //     formData.append('email',state.email)
    //     formData.append('phone_number',state.mobile)
    //     formData.append('password', state.password)
    
    //     ApiHandler.signUp(formData, function (response){
    //         console.log('formdata', formData)
    //         if(response.status === 200){
    //             swal("Success!", response.data+"!", "success")
    //             .then((value)=>{
    //                 self.setState({
    //                 redirect : true
    //                 })
    //             })
    //             formData.delete(0)
    //         }
    //         else {
    //             swal('Oops',response.response.data.message,'error')
    //         }
    //     })
    // }

    render() {

        return(
            <>
            <Container>
            <Jumbotron>
                <Row>
                    <Col>
                        <h1>Register</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                    <Form method="POST" encType="multipart/formdata" onSubmit={(e)=>this.handleRegister(e)}>
                        <FormGroup>
                            <Label for="username">Name</Label>
                            <Input
                            type="text"
                            name="username"
                            id="username"
                            onChange={e => this.handleInputValue(e)}
                            placeholder="Please enter name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                            type="email"
                            name="email"
                            id="email"
                            onChange={e => this.handleInputValue(e)}
                            placeholder="Please enter email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                            type="password"
                            name="password"
                            id="password"
                            onChange={e => this.handleInputValue(e)}
                            placeholder="Create a password"
                            minLength="8"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="mobile">Mobile #</Label>
                            <Input
                            type="number"
                            name="number"
                            id="mobile"
                            onChange={e => this.handleInputValue(e)}
                            placeholder="Please enter mobile #"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="image">Profile Image</Label>
                            <Input type="file" name="file" id="image" />
                        </FormGroup>
                        <FormGroup check row>
                            <Col>
                            <Button className="float-right">Submit</Button>
                            </Col>
                        </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Jumbotron>
            </Container>
            </>
        )
    }
}
export default RegisterUser;
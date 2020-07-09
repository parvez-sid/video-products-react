import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, ListGroup, ListGroupItem } from "reactstrap";
import ApiHandler from '../../ApiHandler';


class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : [],
        }
    }

    //get products
    componentDidMount(){
        var that = this;
        ApiHandler.getProducts(function(response){
            if(response.status === 200){
                console.log(response.data)
            that.setState({
                products : response.data
            })
            }
        })
    }
    render() {
        let productItems = this.state.products.map((product) =>
            <ListGroupItem key={product._id} tag="a" href={product.video_url}>{product.product_name}</ListGroupItem>
        );
        return(
            <>
            <Container>
                <Jumbotron>
                    <Row>
                        <Col>
                            <h1>Products</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <ListGroup>
                                {productItems}
                            </ListGroup>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
            </>
        )
    }
}
export default Products;
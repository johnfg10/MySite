import React, { Component } from "react";
import Container from "reactstrap/es/Container";
import {Row} from "reactstrap";
import Col from "reactstrap/es/Col";

export default class About extends Component{

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        About
                    </Col>
                </Row>
            </Container>
        );
    }
}

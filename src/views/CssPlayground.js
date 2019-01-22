import React, { Component } from "react";
import Container from "reactstrap/es/Container";
import {Row} from "reactstrap";
import Col from "reactstrap/es/Col";

export default class CssPlayground extends Component{

    render() {
        return(
            <Container className="margin-top-1">
                <Row>
                    <p className="rotate">spiny</p>
                </Row>
                <Row>

                </Row>
                <Row>

                </Row>
            </Container>
        );
    }
}

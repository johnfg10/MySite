import React, { Component } from "react";
import Container from "reactstrap/es/Container";
import {Card, CardImg, CardImgOverlay, CardText, CardTitle, Row} from "reactstrap";
import Col from "reactstrap/es/Col";
import HoverOverImgButton from "../HoverOverImgButton";

export default class Home extends Component{
    render() {
        return(
            <Container fluid className="margin-top-1">
                <Row>
                    <Col>
                        <HoverOverImgButton redirectAddr="/about/" width="100%" imgSrc="programming.jpg" useGreying="true" imgClassNames="img-fluid" tag={(classNames) => {
                            return <div className={classNames}>
                                <h3>Software</h3>
                                <p>I enjoy making software, click here to be redirected to my projects page.</p>
                            </div>;
                        }} />
                    </Col>
                    <Col>
                        <HoverOverImgButton width="100%" height="100%" imgSrc="keyboard.jpg" useGreying="true" imgClassNames="img-fluid" tag={(classNames) => {
                            return <div className={classNames}>
                                <h3>Gaming</h3>
                                <p>I relax by playing games. at some point this will link to something</p>
                            </div>;
                        }} />
                    </Col>
                </Row>
                <Row>
                    {/*                    <Col>
                        <HoverOverImgButton redirectAddr="/about/" width="100%" imgSrc="programming.jpg" useGreying="true" imgClassNames="img-fluid" tag={(classNames) => {
                            return <div className={classNames}>
                                <h3>Software</h3>
                                <p>I enjoy making software, click here to be redirected to my projects page.</p>
                            </div>;
                        }} />
                    </Col>
                    <Col>
                        <HoverOverImgButton redirectAddr="/about/" width="100%" imgSrc="programming.jpg" useGreying="true" imgClassNames="img-fluid" tag={(classNames) => {
                            return <div className={classNames}>
                                <h3>Software</h3>
                                <p>I enjoy making software, click here to be redirected to my projects page.</p>
                            </div>;
                        }} />
                    </Col>
                    <Col>
                        <HoverOverImgButton redirectAddr="/about/" width="100%" imgSrc="programming.jpg" useGreying="true" imgClassNames="img-fluid" tag={(classNames) => {
                            return <div className={classNames}>
                                <h3>Software</h3>
                                <p>I enjoy making software, click here to be redirected to my projects page.</p>
                            </div>;
                        }} />
                    </Col>*/}
                </Row>
            </Container>
        );
    }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

export default class HoverOverImgButton extends Component {

    constructor(props){
        super(props);

        this.state = {
            hover: false,
            clicked: false
        };

        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onMouseEnter(){
        this.setState({
            hover: true
        });
    }

    onMouseLeave(){
        this.setState({
            hover: false
        });
    }

    onClick(){
        this.setState({
            clicked: true
        });
    }

    render() {
        if(this.state.clicked === true){
            if (this.props.onClickHandler !== undefined){
                this.props.onClickHandler();
            }
            this.setState({
                clicked: false
            });
        }
        return (
            <div>
                {this.props.redirectAddr !== undefined && this.state.clicked === true &&
                    <Redirect to={this.props.redirectAddr} />
                }

                <a onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    {
                        this.state.hover && this.props.tag !== undefined &&
                            this.props.tag("img-text-block")
                    }

                    <img alt={this.props.alt} src={this.props.imgSrc} width={this.props.width} className={(this.state.hover && "greyout ") + this.props.imgClassNames}/>
                </a>
            </div>
        );
    }
}

HoverOverImgButton.propTypes = {
    tag: PropTypes.func,
    imgSrc: PropTypes.string,
    width: PropTypes.string,
    alt: PropTypes.string,
    onClickHandler: PropTypes.func,
    redirectAddr: PropTypes.string,
    useGreying: PropTypes.bool,
    imgClassNames: PropTypes.string
};

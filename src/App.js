import React, {Component} from "react";
import ReactDOM from "react-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavDropdown,
  NavLink,
  DropdownToggle, UncontrolledDropdown, DropdownMenu, DropdownItem
} from "reactstrap";
import {BrowserRouter as Router, Route, Link, MemoryRouter} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return(
        <Router>
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href="/">Johns Site</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/"><NavLink className="fancy-link">Home</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about"><NavLink className="fancy-link">About</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/bored"><NavLink className="fancy-link">Bored</NavLink></Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                  Projects
                                </DropdownToggle>
                                <DropdownMenu right className="bg-black-olive">
                                    <DropdownItem>
                                        <NavLink href="https://github.com/johnfg10/templandingpage" className="fancy-link">This site</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
            </div>
        </Router>
    );
  }
}

ReactDOM.render(
    <App />,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}

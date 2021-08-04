import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav,Navbar,NavbarBrand,NavbarToggler,Collapse,NavItem,Button,NavLink,Modal,ModalBody,ModalHeader,Form,FormGroup,Label,Input} from 'reactstrap';

class Header extends Component{
    constructor(props){
        super(props);

        this.state={
            isNavOpen:false,
            isModalOpen:false
        };
    }

    toggleNav=()=>{
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }

    toggleModal=()=>{
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }

    render(){
        return(
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="/images/logo.png" className="logo" alt="logo"/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <div className="d-flex">
                        <div className="d-flex mr-5 align-items-center pb-3 pb-sm-0">
                            <span className="seccolor ml-2" onClick={this.toggleModal}>signup</span>
                            <div className="vr"></div>
                            <button className="btn primecolor mr-2" onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span>Login</button>
                        </div>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" active><Link to='/home'>Home</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"><Link to='/movies'>Movies</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link">Rate&Review</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                innerRef={(input) => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={(input) => this.password = input}  />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                innerRef={(input) => this.remember = input}  />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </Navbar>
        );
    }
    
}

export default Header;
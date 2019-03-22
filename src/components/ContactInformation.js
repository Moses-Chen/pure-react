import React from 'react';
import Input from './Input';
import { Container, Row, Col } from 'react-grid-system';

function ContactInformation(props) {
    return (
        <Container>
            <Row>
                <center><h2>Contact Information</h2></center>
            </Row>
            <Row>
                <Col md={5}>
                    <Input label={"First Name:"} callback={props.firstNameChanged} value={props.firstName} />
                </Col>
                <Col md={5}>
                    <Input label={"Last Name:"} callback={props.lastNameChanged} value={props.lastName} />
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Input label={"Phone:"} callback={props.phoneChanged} value={props.phone} />
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Input label={"Email:"} callback={props.emailChanged} value={props.email} />
                </Col>
            </Row>
        </Container>
    );
}

export default ContactInformation;
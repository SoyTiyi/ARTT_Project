import React from 'react';
import { Container, Image, Jumbotron, Row, Col } from 'react-bootstrap';


const MDF = props => {
    return (
        <Container fluid className="pt-3">
            <Jumbotron className="bg-dark m-auto">
                <h1 className="text-center text-primary">Laptop MDF</h1>
                <p className="text-center text-white">Autor: Santiago Martínez Martínez</p>
            </Jumbotron>
            <Row className="m-3">
                <Col sm={4}>
                    <Image src="https://www.emedec.com/wp-content/uploads/2018/09/MDF-AGLOMERADO.png" width={250} height={250} rounded />
                </Col>
                <Col sm={8}>
                    <Jumbotron fluid className="bg-secondary text-white">
                        <Container>
                            <h1>Fluid jumbotron</h1>
                            <p>
                                This is a modified jumbotron that occupies the entire horizontal space of
                                its parent.
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default MDF;
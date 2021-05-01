import React from 'react';
import { Col, Container, Jumbotron, Row, Image, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Dashboard = props => {

    const history = useHistory();

    const redirectToMDF = () => {
        history.push("/mdf");
    }

    return (
        <Container className="pt-3">
            <Jumbotron className="bg-dark m-auto">
                <h1 className="text-center text-primary">Proyectos ARTT 2021-1</h1>
                <p className="text-center text-white">Materiales</p>
            </Jumbotron>
            <Row className="pt-3">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/736x/4a/77/ce/4a77ce25be04cbb0963b664f4d436f28.jpg" />
                        <Card.Body>
                            <Card.Title>Laptop MDF</Card.Title>
                            <Card.Text>
                                Proyecto que busca crear una laptop basada en MDF la cual busca tener un bajo costo
                                y busca ayudar a la comunidad Open Source
                        </Card.Text>
                            <Button variant="primary" onClick={redirectToMDF}>Ver Proyecto</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
import React from 'react';
import { Container, Image, Jumbotron, Row, Col } from 'react-bootstrap';


const MDF = props => {
    return (
        <Container fluid className="pt-3" style={{ backgroundColor: "#252422" }}>
            <Jumbotron className="bg-transparent m-auto">
                <h1 className="text-center" style={{color: "#c32f27"}}>Laptop MDF</h1>
                <p className="text-center" style={{color: "#6a994e"}}>Santiago Martínez Martínez</p>
                <p className="text-center" style={{color: "#6a994e"}}>Proyecto final para la materia de ARTT</p>
            </Jumbotron>
            <Row className="m-3">
                <Col>
                    <Jumbotron fluid className="text-info rounded" style={{backgroundColor: "#ad2e24"}}>
                        <Container>
                            <Row>

                                <Col sm={4}>
                                    <Image src="data:image/jpeg;base64,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"
                                        className="img-fluid rounded" />
                                </Col>
                                <Col sm={8} style={{ color: "white" }}>
                                    <h2>MDF</h2>
                                    <p>
                                        A principios del siglo XX se desarrolla por primera vez 
                                        en los Estados Unidos el Tablero Aglomerado de Fibra 
                                        MACOCELL o MDF (por sus siglas en inglés: Medium Density Fiberboard), 
                                        inventado accidentalmente por William Mason en 1925, 
                                        mientras trataba de encontrar un uso para las grandes 
                                        cantidades de astillas de madera que eran desechadas 
                                        por los aserraderos. Mason trataba de crear una prensa 
                                        de fibra de madera aislada pero al olvidar apagar el 
                                        equipo se produjo una lámina delgada y resistente.
                                    </p>
                                    <p>
                                        MDF significa tablero de fibras de densidad media.
                                        Este tipo de tablero est'a fabricado a partir de fibras
                                        de maderas y resinas sintéticas comprimidas. Una de sus 
                                        catacteristicas fundamentales es la densidad,
                                        Su densidad se sitúa entre 500 y 800 kg/m3.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>
            <Row className="m-3 p-3">
                <Col style={{border: "1px solid #ad2e24"}}>
                    <h2 className="text-center" style={{color: "#ad2e24"}}>Ventajas</h2>
                </Col>
                <Col style={{border: "1px solid #ad2e24"}}>
                    <h2 className="text-center" style={{color: "#ad2e24"}}>Desventajas</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default MDF;
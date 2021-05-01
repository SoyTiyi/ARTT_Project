import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';


const MDF = props => {
    return(
        <Container className="pt-3">
            <Jumbotron className="bg-dark m-auto">
                <h1 className="text-center text-primary">Laptop MDF</h1>
                <p className="text-center text-white">Autor: Santiago Martínez Martínez</p>
            </Jumbotron>
            <p>En proceso</p>
        </Container>
    );
}

export default MDF;
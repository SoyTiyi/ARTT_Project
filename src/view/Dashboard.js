import React from 'react';
import { Col, Container, Jumbotron, Row, Image, Card, Button, NavLink } from 'react-bootstrap';
import logo from '../img/logo.png';
import energiaParaTodos from '../img/energiaParaTodos.jpg';
import ecolife from '../img/ecolife.png';
import { useHistory } from 'react-router-dom';

const Dashboard = props => {

    const history = useHistory();

    const redirectToMDF = () => {
        history.push("/mdf");
    }

    return (
        <Container fluid className="pt-3">
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
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://live.staticflickr.com/6103/6219251262_b9bcedd9b6_b.jpg" />
                        <Card.Body>
                            <Card.Title>Ingeniería Civil con árbol Yarumo</Card.Title>
                            <Card.Text>
                                Un proyecto de carácter investigativo sobre el árbol Yarumo o Guarumo. donde se ha ideado un sistema de vida para el árbol desde su sembrado hasta el manejo de desechos, todo con el fin de llevar el campo de la ingeniería civil a un nivel ecológico máximo, aportando a la reducción de huella de carbono del país
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://contruccionconyarumo.wordpress.com/construccion-con-yarumo/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://santiago375932769.files.wordpress.com/2021/05/image-6.png" />
                        <Card.Body>
                            <Card.Title>Plastico para la creación de bloques</Card.Title>
                            <Card.Text>
                                Proyecto que busca concientizar a las personas sobre el uso y desecho del plástico por medio de la propuesta de creación de bloques de juguete a base de plástico reciclado los cuales buscan ser aplicados en el área de la ingeniería civil.
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://santiago375932769.wordpress.com/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={logo} />
                        <Card.Body>
                            <Card.Title>Centro de salud</Card.Title>
                            <Card.Text>
                                Este proyecto consiste en realizar un prototipo a escala considerable de un centro de salud rural elaborados con eco-bloques.
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://ecobloques127913205.wordpress.com/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={energiaParaTodos} />
                        <Card.Body>
                            <Card.Title>Energía eléctrica para todos</Card.Title>
                            <Card.Text>
                                Proyecto para llevar energía eléctrica a zonas rurales y con déficit del recurso en Colombia.
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://energiaparatodoscolombia.wordpress.com/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://proyectoartt20211acero.files.wordpress.com/2021/05/acerca-de.jpg" />
                        <Card.Body>
                            <Card.Title>Bodega Familiar en Acero</Card.Title>
                            <Card.Text>
                                En la presente página web encontrará lo que para mi es un sueño futuro, un primer acercamiento a lo que sería la construcción de una bodega, como muestra de agradecimiento a mis padres por todo lo que han hecho por mi.
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://proyectoartt20211acero.wordpress.com/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://alumbrado760682529.files.wordpress.com/2021/05/light-bulb-984551_1920.jpg" />
                        <Card.Body>
                            <Card.Title>Alumbrado público para población vulnerable</Card.Title>
                            <Card.Text>
                                Proyecto que se realiza con el fin de generar energías renovables que beneficien a poblaciones vulnerables con un sistema de alumbrado público gratuito y autosostenible.
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://alumbrado760682529.wordpress.com/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="http://c.files.bbci.co.uk/D92A/production/_109949555_fractal-arriba.jpg" />
                        <Card.Body>
                            <Card.Title>Fractales</Card.Title>
                            <Card.Text>
                            Mi proyecto durante este semestre fue profundizar mas en temas de mi interés, desarrollar mis gustos personales, lo abarque en 2 areas con cierta similitud, los fractales y los videojuegos, que son temas que a futuro puedes serme de utilidad profesionalmente y finalmente me involucran como ingeniero de sistemas.
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://fractalandvideog.wordpress.com/arte-ciencia-y-tecnologia/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://fundicionco.files.wordpress.com/2021/05/image-15.png" />
                        <Card.Body>
                            <Card.Title>Su segunda fundición.</Card.Title>
                            <Card.Text>
                            Por medio de este proyecto se buscan varias cosas entre ellas reducir drasticamente la contaminación para así hacer un mundo mejor para todos, por medio de varios métodos, siendo el mas importante el reciclaje. 
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://fundicionco.wordpress.com/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://stefanydelgadoartt.files.wordpress.com/2021/05/cropped-logo-1.png" />
                        <Card.Body>
                            <Card.Title>Plastic'art</Card.Title>
                            <Card.Text>
                            Plastic’ Art es un proyecto que nació de la necesidad de reciclar el plástico, principalmente tapas de botellas, y poder realizar un modelo a escala de mi propio hogar con esto, usando placas plásticas hechas de tapas y ciertos embaces de productos triturados.
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://stefanydelgadoartt.wordpress.com/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://resta532537178.files.wordpress.com/2021/05/descarga-3.jpg" />
                        <Card.Body>
                            <Card.Title>Andrómeda</Card.Title>
                            <Card.Text>
                            Restaurante que nace de la inspiración de un material como lo es la roca y también el cumplir un sueño propio. 
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://resta532537178.wordpress.com/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.embalajesterra.com/1515-large_default/teflon-no-adhesivo-lamina-laminas-de-teflon.jpg" />
                        <Card.Body>
                            <Card.Title>Casas de cartón</Card.Title>
                            <Card.Text>
                            El proyecto busca ayudar en un futuro con materiales reciclables como es el cartón a las personas con escasos recursos construyendo VIS.
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://miproyectoartt.wordpress.com/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://artline813308929.files.wordpress.com/2021/05/l-3.jpg" />
                        <Card.Body>
                            <Card.Title>Compraventa de arte</Card.Title>
                            <Card.Text>
                                Pagina de compraventa de arte digital
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://artline813308929.wordpress.com/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://static.s123-cdn-static-a.com/uploads/5232423/400_60a6ffa2e85c4.png" />
                        <Card.Body>
                            <Card.Title>Innovación Automotriz</Card.Title>
                            <Card.Text>
                            Mi objetivo es lograr que las industrias en general necesiten de un material fuerte, con propiedades específicas, liviano, barato y fácil de trabajar, para que así puedan desarrollar nuevas tecnologías con este material.
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://60a6e7e7c94d5.site123.me/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://static.wixstatic.com/media/3c49a22fc25741b5822dae3a998041cf.jpg/v1/fill/w_761,h_493,al_c,q_85,usm_0.66_1.00_0.01/Yellow%203D%20Printed%20Shape.webp" />
                        <Card.Body>
                            <Card.Title>Bio-impresion 3D</Card.Title>
                            <Card.Text>
                                El proyecto de bioimpresion 3d se creó con el fin de brindar a la sociedad información sobre el mundo de la impresión 3d a partir de materiales de impresión biodegradables.
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://criistianev2015.wixsite.com/bioimpresion3d">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ecolife} />
                        <Card.Body>
                            <Card.Title>ECO-LIFE</Card.Title>
                            <Card.Text>
                            ECO-LIFE le dará solución a la necesidad de dar tratamiento a las  aguas grises que se producen en los hogares, las cuales generan daños en la salud. Por lo tanto, se busca proponer una solución sostenible, funcional, fácil de transportar y que trae beneficios al entorno.
                        </Card.Text>
                            <NavLink className="btn btn-primary" href="https://artificialwetland.wordpress.com/">Ver Proyecto</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
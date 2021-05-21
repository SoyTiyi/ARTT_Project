import React, { useRef } from 'react';
import Icofont from 'react-icofont';
import DownloadLink from "react-download-link";
import pdf from '../files/Proyecto.pdf';
import {Link} from 'react-router-dom'

const MDF = props => {

    const refAbout = useRef();
    const refService = useRef();
    const refTeam = useRef();
    const refDesign = useRef();

    function goToAbout() {
        refAbout.current.scrollIntoView({ behavior: 'smooth' })
    }

    function goToService() {
        refService.current.scrollIntoView({ behavior: 'smooth' })
    }

    function goToTeam() {
        refTeam.current.scrollIntoView({ behavior: 'smooth' })
    }

    function goToDesing() {
        refDesign.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <body>
            <header id="header" className="fixed-top">
                <div className="container">
                    <div className="logo float-left">
                        <h1 className="text-light">
                            <pan>Laptop MDF</pan>
                        </h1>
                    </div>
                    <nav className="nav-menu float-right d-none d-lg-block">
                        <ul>
                            <li class="active"><a>Home</a></li>
                            <li class="active"><a onClick={goToAbout}>Nosotros</a></li>
                            <li class="active"><a onClick={goToService}>Servicios</a></li>
                            <li class="active"><a onClick={goToDesing}>Diseño</a></li>
                            <li class="active"><a onClick={goToTeam}>Team</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section id="hero">
                <div className="hero-container">
                    <h1>Laptop MDF</h1>
                    <h2>Somos un grupo que busca proporcionar una laptop económica y potente que ayude en estos tiempos de pandemia y pueda aportar al Open Source</h2>
                    <a onClick={goToAbout} className="btn-get-started scrollto">Comenzar</a>
                </div>
            </section>

            <main id="main">

                <section ref={refAbout} id="about" className="about">
                    <div className="container">
                        <div className="section-title">
                            <h2>Nosotros</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2">
                                <img src="https://cdn1.epicgames.com/ue/product/Screenshot/2-1920x1080-e141c8d4438c9757ea202ae5c616923c.png?resize=1&w=1600" className="img-fluid" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
                                <h3>LaptopMDF es un grupo que busca aportar un producto tecnológico que encaje en los tiempos de pandemia</h3>
                                <p ClassName="font-italic">
                                    Buscamos ofrecer una laptop basada en MDF, el cual es tablero de fibras de densidad media, del inglés medium density fibreboard.
                                </p>
                                <ul>
                                    <li><i className="icofont-check-circled"></i> Producto Economico y Potente</li>
                                    <li><i className="icofont-check-circled"></i> Uso de procesadores ARM, los cuales ahorrarán bateria y no sera una preocupación la temperatura del dispositivo</li>
                                    <li><i className="icofont-check-circled"></i> Personalización del sistema operativo, utilizamos un OS base in Linux para aportar con Software a la comunidad</li>
                                </ul>
                                <p>
                                El MDF es un material que al acabar la vida útil de nuestro dispositivo puede ser reciclado, es un material perfecto para la personalización con acrílicos y poder darle tu toque y personalidad a tu herramienta de trabajo. Para conocer más sobre el proyecto.
                                </p>
                                <a className="btn btn-primary" href={pdf} download="Proyecto.pdf">Descargar Proyecto</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section ref={refService} id="services" className="services section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h2>Servicios</h2>
                            <p>Estas son las características más importantes de nuestra laptop</p>
                        </div>
                        <div className="row">
                            <div class="col-lg-4 col-md-6 icon-box">
                                <div className="icon"><i className="icofont-brain-alt"></i></div>
                                <h4 className="title">Procesador</h4>
                                <p>Tecnología ARM, son la opción ideal, ya que utilizan un método de procesamiento simplificado y que consume menos energía. Esto se representa en el mismo nombre ARM, que significa «Advanced RISC Machine» o máquina RISC avanzada, donde RISC significa «Reduced Instruction Set Computer».</p>
                            </div>
                            <div class="col-lg-4 col-md-6 icon-box">
                                <div className="icon"><i className="icofont-code"></i></div>
                                <h4 className="title">OS</h4>
                                <p>Sistema Operativo basado en linux, este nos ayuda ahorrar costos ya que no se pagan licencias y se usa unicamente software libre, ademas de eso, crearemos herramientas para los clientes y para la comunidad OpenSource.</p>
                            </div>
                            <div class="col-lg-4 col-md-6 icon-box">
                                <div className="icon"><i className="icofont-eco-environmen"></i></div>
                                <h4 className="title">ECO</h4>
                                <p>Por el material el cual está construido nuestra laptop, nos ayuda a poder reciclar de mejor manera cada componente como lo es el chasis o sus componentes electrónicos.</p>
                            </div>
                            <div class="col-lg-4 col-md-6 icon-box">
                                <div className="icon"><i className="icofont-angry-monster"></i></div>
                                <h4 className="title">Diseño</h4>
                                <p>Diseño minimal inspirado en el principal diseñador de Apple, con esto, destacaremos por diseños llamativos y ergonómicos, todo la parte de User Interface fue pensada y analizada con los principios de Responsive Design and Interactive Design.</p>
                            </div>
                            <div class="col-lg-4 col-md-6 icon-box">
                                <div className="icon"><i className="icofont-bitcoin"></i></div>
                                <h4 className="title">Economia</h4>
                                <p>Con los materiales empleados en el chasis de la laptop buscamos reducir costos e invertir todo el dinero en el HardWare.</p>
                            </div>
                            <div class="col-lg-4 col-md-6 icon-box">
                                <div className="icon"><i class="icofont-users-social"></i></div>
                                <h4 className="title">Comunidad</h4>
                                <p>Todo el software y UI son construidas por una comunidad que escuche a los clientes y les de las soluciones que necesitan para mejorar su experiencia y la eficacia en el trabajo.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section ref={refDesign} id="design" className="about">
                    <div className="container">
                        <div className="section-title">
                            <h2>Diseño</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <img src="https://res.cloudinary.com/fitbook-arsw/image/upload/v1620923151/fitbookimg/ppg8nkm61qd83stqc1m6.png" className="img-fluid" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-2">
                                <h3>LaptopMDF busca inspirarse en el diseño minimal de los dispositivos de Apple, que ha liderado en la industria de la mano de Jonathan Ive.</h3>
                                <ul>
                                    <li><i className="icofont-circuit"></i>Diseño Minimal y Optimo</li>
                                    <li><i className="icofont-circuit"></i>Diseño para mejorar la productividad del usuario</li>
                                </ul>
                                <p>
                                    Con este diseño, entraremos al mercado con un dispositivo funcional pero llamativo para el público. Ademas de esto, estaremos en contacto con los usuarios para poner tener feedback de los clientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section ref={refTeam} id="team" className="team">
                    <div className="container">
                        <div className="section-title">
                            <h2>Team</h2>
                            <p>
                                Laptop MVN team tiene el propósito de construir la mejor laptop con el mejor software para aportar en la vida laboral de los clientes, actualmente el grupo por los personajes que han estado apoyando el proyecto.
                        </p>
                        </div>
                        <div className="row">
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <img src="https://res.cloudinary.com/fitbook-arsw/image/upload/v1620763645/fitbookimg/qkmdsojiqi5rqbt7kj4p.jpg" alt="" />
                                    <h4>Santiago Martínez</h4>
                                    <span>Chief Executive Officer</span>
                                    <p>
                                        Creador de Laptop MDF
                                </p>
                                    <div className="social">
                                        <a href=""><i class="icofont-twitter"></i></a>
                                        <a href=""><i class="icofont-facebook"></i></a>
                                        <a href=""><i class="icofont-instagram"></i></a>
                                        <a href=""><i class="icofont-github"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <img src="https://i.ebayimg.com/images/g/dPIAAOSw9SdeDs9V/s-l640.jpg" alt="" />
                                    <h4>Winnie Pooh</h4>
                                    <span>Alcalde del Bosque de los Cien Acres</span>
                                    <p>
                                        Poco inteligente
                                </p>
                                    <div className="social">
                                        <a href=""><i class="icofont-twitter"></i></a>
                                        <a href=""><i class="icofont-facebook"></i></a>
                                        <a href=""><i class="icofont-instagram"></i></a>
                                        <a href=""><i class="icofont-github"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <img src="https://www.liveabout.com/thmb/i9A_DWGV7supJ244HqZfqrH-i1Q=/598x598/smart/filters:no_upscale()/FILM_ironman4-56a834265f9b58b7d0f184d1.jpg" alt="" />
                                    <h4>Tony Stark</h4>
                                    <span>CEO Stark Industry</span>
                                    <p>
                                        Iron Man
                                </p>
                                    <div className="social">
                                        <a href=""><i class="icofont-twitter"></i></a>
                                        <a href=""><i class="icofont-facebook"></i></a>
                                        <a href=""><i class="icofont-instagram"></i></a>
                                        <a href=""><i class="icofont-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    );
}

export default MDF;
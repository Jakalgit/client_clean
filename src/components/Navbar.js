import React from 'react';
import NavBarCss from '../css/components/NavBar.module.css'
import {Container, Nav, Navbar} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer( () => {
    return (
        <Navbar className={NavBarCss.header} variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className={NavBarCss.navbar_brand} href="/">WORK-RC</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: "flex-end"}}>
                    <Nav>
                        <Nav.Link className={NavBarCss.navbar_link + ' ' + NavBarCss.navbar_link_user} href="/catalog">Каталог</Nav.Link>
                        <Nav.Link className={NavBarCss.navbar_link + ' ' + NavBarCss.navbar_link_user} href="/find">Поиск</Nav.Link>
                        <Nav.Link className={NavBarCss.navbar_link + ' ' + NavBarCss.navbar_link_user} href="/find-your-order">Ваш заказ</Nav.Link>
                        <Nav.Link className={NavBarCss.navbar_link + ' ' + NavBarCss.navbar_link_user} href="/delivery-and-pay">Доставка и оплата</Nav.Link>
                        <Nav.Link className={NavBarCss.navbar_link + ' ' + NavBarCss.navbar_link_user} href="/about-us">О нас</Nav.Link>
                        <Nav.Link className={NavBarCss.navbar_link + ' ' + NavBarCss.navbar_link_user} href="/basket">
                            <div className={NavBarCss.svg}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 21q-.425 0-.775-.262-.35-.263-.475-.688L.95 9.95q-.125-.35.112-.65Q1.3 9 1.7 9h5.05l4.4-6.55q.125-.2.35-.325.225-.125.475-.125.25 0 .475.125.225.125.35.325L17.2 9h5.1q.4 0 .638.3.237.3.112.65l-2.8 10.1q-.125.425-.475.688Q19.425 21 19 21Zm7-4q.825 0 1.413-.587Q14 15.825 14 15q0-.825-.587-1.413Q12.825 13 12 13q-.825 0-1.412.587Q10 14.175 10 15q0 .825.588 1.413Q11.175 17 12 17ZM9.175 9H14.8l-2.825-4.2Z"/></svg>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;
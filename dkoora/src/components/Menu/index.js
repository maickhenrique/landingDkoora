import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import './style.css';

const Menu = () => {
    return (
        <>
            <Container>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/" className='link'>Início</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" className='link'>Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='link'>Sobre nós</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </>
    );
}

export default Menu;
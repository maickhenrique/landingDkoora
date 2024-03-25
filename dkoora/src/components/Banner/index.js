import { Container } from "react-bootstrap";
import './style.css';

const Banner = () => {
    
    return (
        <>
            <Container fluid className="banner">
                <h1>DKOORA</h1>
                <p className="text-banner">Pensou em decoração. Pensou Dkoora</p>
            </Container>
        </>
    );
}

export default Banner;
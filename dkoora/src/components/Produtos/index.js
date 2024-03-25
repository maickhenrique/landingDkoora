import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importe o Link
import produtosData from './produtos.json'; // Importando o JSON

const Produtos = () => {
  const [produtos, setProdutos] = useState(produtosData); // Usando os dados do JSON como estado

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Produtos</h2>
      <div className="row">
        {produtos.map(produto => (
          <div key={produto.id} className="col-lg-4 col-md-6 mb-4">
            <Card>
              <Card.Img variant="top" src={produto.imagem} />
              <Card.Body>
                <Card.Title className='text-center'>{produto.titulo}</Card.Title>
                <Card.Text>Valor: R${produto.valor.toFixed(2)}</Card.Text>
                {/* Substitua o Button por Link */}
                <Link className='d-grid' to={`/produto/${produto.slug}`}>
                  <Button variant="outline-dark">Comprar</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Produtos;

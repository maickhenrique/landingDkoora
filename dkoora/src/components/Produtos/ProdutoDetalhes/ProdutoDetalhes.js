import React from 'react';
import { useParams } from 'react-router-dom';
import produtosData from '../produtos.json';
import { Carousel, Container, Col, Row } from 'react-bootstrap';
import ViewerCounter from '../ViewerCounter';
import './style.css';
import TabsMenu from '../Tabs';

const ProdutoDetalhes = () => {
  const { slug } = useParams(); // Alterado para obter o slug em vez do ID
  const produto = produtosData.find(produto => produto.slug === slug); // Alterado para procurar pelo slug

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <Container className='container-produtoDetalhes'>
      <Row>
        <Col md={6} lg={6}>
          <Carousel>
            {produto.imagensCarrossel?.map((imagem, index) => (
              <Carousel.Item key={index}>
                <img src={imagem} alt={`Imagem ${index + 1}`} className="d-block w-100" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6} lg={6}>
          <h6>{produto.titulo}</h6>
          <span className='valor-produto'> R${produto.valor.toFixed(2)}</span>
          <hr />
          <ViewerCounter />
          <p className='produto-desc'>{produto.resumo}</p>
          <div>
            <span className='produto-estoque'>Apenas {produto.estoque} unidades em estoque</span>
          </div>
          <TabsMenu
            dadosTecnicos={produto.dadosTecnicos} 
            usoCuidado={produto.usoCuidado} 
            informacoesComplementares={produto.informacoesComplementares} 
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProdutoDetalhes;

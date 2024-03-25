import React from 'react';
import { Tab, Tabs, ListGroup  } from 'react-bootstrap';

const TabsMenu = ({ dadosTecnicos, usoCuidado, informacoesComplementares }) => {
    return (
        <Tabs style={{marginTop:"30px"}} defaultActiveKey="dadosTecnicos" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="dadosTecnicos" title="Dados Técnicos">
                <ListGroup>
                    <ListGroup.Item>
                        Tamanho: {dadosTecnicos?.tamanho}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Peso: {dadosTecnicos?.peso}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Cor: {dadosTecnicos?.cor}
                    </ListGroup.Item>
                </ListGroup>
            </Tab>
            <Tab eventKey="usoCuidado" title="Uso e Cuidado">
                <div>
                    <p>{usoCuidado}</p>
                </div>
            </Tab>
            <Tab eventKey="informacoesComplementares" title="Informações Complementares">
                <div>
                    <p>{informacoesComplementares}</p>
                </div>
            </Tab>
        </Tabs>
    );
}

export default TabsMenu;

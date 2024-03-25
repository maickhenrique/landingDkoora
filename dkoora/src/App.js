import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Produtos from './components/Produtos';
import ProdutoDetalhes  from './components/Produtos/ProdutoDetalhes/ProdutoDetalhes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const  App = () => {
  return (
    <>
      <Banner />
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/" component={Produtos} />
          <Route path="/produto/:slug" component={ProdutoDetalhes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

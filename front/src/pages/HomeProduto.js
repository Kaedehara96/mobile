import React from 'react';
import { Link } from 'react-router-dom';
import '../components/HomeProduto.css';
import { Navigation } from '../components/navigstion';

const HomeProduto = () => {
  const itemId = 'id_do_item_aqui';

  return (
    <div>
    <Navigation/>
      <div className="homeproduto-container">
        
        <h1 className="homeproduto-title">Produto</h1>    
        <div className="homeproduto-links">
          <Link to="/cadastrar-itens" className="homeproduto-link">Criar Item</Link>
          <Link to="/informacoes-itens" className="homeproduto-link">Ver Item</Link>
          <Link to="/informacoes-itens" className="homeproduto-link">Excluir Item</Link>
          <Link to={`/alterar-itens/${itemId}`} className="homeproduto-link">Alterar Item</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProduto;

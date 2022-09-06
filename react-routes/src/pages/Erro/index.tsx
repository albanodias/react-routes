import {Link} from 'react-router-dom'

function Erro() {

  return (
    <div>
    <h2>Essa pagina n existe</h2><br/><br/>
    
    <span> Encontramos essas paginas</span><br/>

    <Link to="/">Home</Link> <br/>
    <Link to="/sobre">Sobre</Link><br/>
    <Link to="/contato">Contato</Link>

    </div>
  );
}

export default Erro;

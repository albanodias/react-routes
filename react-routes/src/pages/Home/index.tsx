import { Link } from 'react-router-dom'




function Home() {

  return (
    <div>
    <h1>Bem vindo a pagina HOME</h1>
    <span>Roberto Albano</span> <br/><br/>

<hr />
<Link to="/produto/123">Produto 123</Link> <br/>
    </div>
  );
}

export default Home;

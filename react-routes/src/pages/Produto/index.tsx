import { useParams } from "react-router-dom";


function Produto() {

  const { id } = useParams();

  return (
    <div>
    <h2>pagina detalhe do produto</h2>

  <span>
    meu produto é: {id}
    </span>
    </div>
  );
}

export default Produto;

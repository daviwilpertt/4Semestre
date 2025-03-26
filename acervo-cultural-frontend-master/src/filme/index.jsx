import EstruturaPagina from "../componentes/EstruturaPagina"
import Secao from "../componentes/Secao";
import { listarFilmes } from "../util/constantes";
import Cadastro from "./cadastro";
import Listagem from "./listagem";

const PaginaFilme = props => {

    return <EstruturaPagina titulo="Filmes">
        <Secao titulo="Cadastro de Filmes">
            <Cadastro />
        </Secao>
        <Secao titulo="Listagem de Filmes">
            <Listagem filmes={listarFilmes}>

            </Listagem>
        </Secao>
    </EstruturaPagina>
}

export default PaginaFilme;
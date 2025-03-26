import React from 'react'
import '../componentes/style/Listagem.css'
import { listarFilmes } from '../util/constantes'


const Listagem = props => {

    const { filmes } = props
    if (filmes.length === 0) {
        return <span>nao tem filme aqui</span>
    }

    return (
        <>
            {filmes.length > 0 &&
                <table className='listagem'>
                    <thead className='tabela-filmes'>
                        <tr>
                            <th>Título</th>
                            <th>Subtítulo</th>
                            <th>Direto</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filmes.map(filme => (
                            <tr key={filme.id}>
                                <td>{filme.titulo}</td>
                                <td>{filme.subtitulo}</td>
                                <td>{filme.diretor}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            }
        </>
    )
}

export default Listagem
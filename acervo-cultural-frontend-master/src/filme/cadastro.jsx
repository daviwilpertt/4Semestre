import TextImput from '../componentes/TextInput'

const Cadastro = props => {
    return <div className="formulario">
        <TextImput label='Título: ' />
        <TextImput label='Subtítulo: '/>
        <TextImput label='Diretor: '/>
        <button>cadastrar</button>
    </div>
}

export default Cadastro
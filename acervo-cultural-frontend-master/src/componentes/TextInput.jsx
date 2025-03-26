import '../componentes/style/Cadastro.css'

const TextImput = props => {
    return <>
        <div className="campo-formulario">
            <label htmlFor="">{props.label}</label> <br />
            <input type="text" className="input"/>
        </div>
    </>
}

export default TextImput
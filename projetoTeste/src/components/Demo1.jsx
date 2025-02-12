import "./Demo1.css";
import { FcAddressBook } from "react-icons/fc";

function Demo1() {
  function resposta() {
    alert("butao pressionadoh");
  }

  const entrada = () => {

  }

  return (
    <div className="containerDemo1">
          <button onClick={resposta}>clique em mim</button>
      <button onClick={() => { alert('botao de arrow function') }} >outro em mim</button>
      <img className="imgSla" src="./images/sla.jpg" alt="" />
      <FcAddressBook  className="icon"/>
    </div>
  );
}

export default Demo1;

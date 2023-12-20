import { Link } from "react-router-dom";


function Inicio() {

  return (

    <div className='containerInicio'>
      <Link to="/"><button className="iniciarSitio">Comenzar Simulacion de E-Commerce</button></Link>
    </div>
  )
}

export default Inicio;


function Perfil(props) {
    return(
        <div className="card">
            <img src={props.img}></img>
            <h5>Nome: {props.nome}</h5>
            <h5>Idade: {props.idade}</h5>
            <h5>Hobbies: {props.hobbie}</h5>
        </div>
    )
}

export default Perfil;
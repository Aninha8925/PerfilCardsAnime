import './style/Card.css';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <>
      <img src={props.img} alt={props.nome} />
      <h4>{props.nome}</h4>
      <h5>{props.resumo}</h5>
      <button onClick={props.button}>Ver mais</button>
    </>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  resumo: PropTypes.string.isRequired,
  button: PropTypes.func.isRequired
};

Card.defaultProps = {
  img:'indefinido',
  nome: 'indefinido',
  resumo: 'indefinido',
  button: () => {}
};

export default Card;

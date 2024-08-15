import React from 'react';
import PropTypes from 'prop-types';
import './style/Modal.css';

function Modal(props) {
    return (
        <div className="Modal" style={{ backgroundColor: props.backgroundColor }}>
            <button className="close-button" onClick={props.onClose}>X</button>
            <div className="Lado-E">
                <img src={props.img} alt={`${props.nome} avatar`} />
                <h4>{props.nome}</h4>
            </div>
            <div className="Lado-D">
                <div className='desc'>
                    <div className='idade'>
                        <h3>Idade</h3>
                        <h4>{props.idade}</h4>
                    </div>
                    <div className='hobby'>
                        <h3>Hobbie</h3>
                        <h4>{props.hobby}</h4>
                    </div>
                    <div className='prof'>
                        <h3>Profissão</h3>
                        <h4>{props.prof}</h4>
                    </div>
                </div>
                <div className='Resumo'>
                    <h5>{props.resumo}</h5>
                </div>
                <div className='butao'>
                    <button>Adicionar +</button>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    img: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    idade: PropTypes.string.isRequired,
    hobby: PropTypes.string.isRequired,
    prof: PropTypes.string.isRequired,
    resumo: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    onClose: PropTypes.func.isRequired
};

Modal.defaultProps = {
    backgroundColor: 'indefinido',
    img: 'indefinido',
    nome: 'indefinido',
    idade:'indefinido',
    hobby: 'indefinido',
    prof: 'indefinido',
    resumo: 'indefinido',
    onClose: 'indefinido'
};

export default Modal;

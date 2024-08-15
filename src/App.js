import { useState } from 'react';
import './components/style/App.css';
import './components/style/Modal.css';
import Title from './components/Title';
import Card from './components/Card';
import Johan from './components/img/Johan.jpg';
import Yuta from './components/img/Yuta.jpg';
import Edward from './components/img/Edward.jpg';
import Kaneki from './components/img/Kaneki.jpg';
import Denji from './components/img/Denji.jpg';
import Dabi from './components/img/Dabi.jpeg';
import Modal from './components/Modal.jsx';

function App() {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({
        img: '',
        nome: '',
        idade: '',
        hobby: '',
        prof: '',
        resumo: '',
        backgroundColor: '#FFFFFF'
    });

    const openModal = (data) => {
        setModalData({
            ...data,
            backgroundColor: data.backgroundColor || '#FFFFFF'
        });
        setShowModal(true);
    }

    const closeModal = () => setShowModal(false);

    return (
        <div className="App">
            <header className="App-header">
                <Title />
                <div className="Card-Content">
                    <div className='p1'>
                        <div className='card1'>
                            <Card
                                img={Johan}
                                nome="Johan"
                                resumo="Sou o reflexo do que a sociedade tem de mais sombrio. Alguns me chamam de monstro, mas será que sou? Talvez apenas revele o monstro dentro de cada um de nós. A verdade é um jogo perigoso, e eu jogo para entender o que realmente significa ser humano."
                                button={() => openModal({
                                    img: Johan,
                                    nome: 'Johan',
                                    idade: '32',
                                    hobby: 'Ler',
                                    prof: 'Magnata',
                                    resumo: 'Sou o reflexo do que a sociedade tem de mais sombrio. Alguns me chamam de monstro, mas será que sou? Talvez apenas revele o monstro dentro de cada um de nós. A verdade é um jogo perigoso, e eu jogo para entender o que realmente significa ser humano.',
                                    backgroundColor: '#FFC0CB'
                                })}
                            />
                        </div>
                        <div className='card2'>
                            <Card
                                img={Yuta}
                                nome="Yuta"
                                resumo="Carrego uma maldição profunda, que nasceu de um amor de infância. Meu poder é vasto e perturbador, e minha luta é constante para domá-lo. Busco proteger aqueles que amo e entender o caminho para reverter essa maldição, vivendo com a sombra que me acompanha."
                                button={() => openModal({
                                    img: Yuta,
                                    nome: "Yuta",
                                    idade: "17",
                                    hobby: "Treinar",
                                    prof: "Estudante",
                                    resumo: "Carrego uma maldição profunda, que nasceu de um amor de infância. Meu poder é vasto e perturbador, e minha luta é constante para domá-lo. Busco proteger aqueles que amo e entender o caminho para reverter essa maldição, vivendo com a sombra que me acompanha.",
                                    backgroundColor: '#ADD8E6'
                                })}
                            />
                        </div>
                        <div className='card3'>
                            <Card
                                img={Dabi}
                                nome="Dabi"
                                resumo="Consumido pelo fogo e pela vingança. Meu passado sombrio e minha busca por justiça brutal moldam meu caminho. Em um mundo de caos, luto para expor verdades ocultas e enfrentar aqueles que me fizeram sofrer, buscando encontrar meu verdadeiro propósito."
                                button={() => openModal({
                                    img: Dabi,
                                    nome: "Dabi",
                                    idade: "24",
                                    hobby: "Incendiar coisas",
                                    prof: "Vilão",
                                    resumo: "Consumido pelo fogo e pela vingança. Meu passado sombrio e minha busca por justiça brutal moldam meu caminho. Em um mundo de caos, luto para expor verdades ocultas e enfrentar aqueles que me fizeram sofrer, buscando encontrar meu verdadeiro propósito.",
                                    backgroundColor: '#FF6347'
                                })}
                            />
                        </div>
                    </div>
                    <div className='p2'>
                        <div className='card4'>
                            <Card
                                img={Denji}
                                nome="Denji"
                                resumo="Entre caçar demônios e buscar uma vida melhor, minha existência é uma batalha constante. Com sonhos simples e uma realidade brutal, enfrento os horrores do mundo enquanto busco significado e um pouco de paz. Minha jornada é marcada por desafios e a luta por um propósito verdadeiro."
                                button={() => openModal({
                                    img: Denji,
                                    nome: "Denji",
                                    idade: "16",
                                    hobby: "Caçar demônios",
                                    prof: "Caçador de demônios",
                                    resumo: "Entre caçar demônios e buscar uma vida melhor, minha existência é uma batalha constante. Com sonhos simples e uma realidade brutal, enfrento os horrores do mundo enquanto busco significado e um pouco de paz. Minha jornada é marcada por desafios e a luta por um propósito verdadeiro.",
                                    backgroundColor: '#90EE90'
                                })}
                            />
                        </div>
                        <div className='card5'>
                            <Card
                                img={Kaneki}
                                nome="Kaneki"
                                resumo="Carrego a dor de uma transformação forçada, vivendo entre humanos e ghouls. Minha jornada é marcada por lutas internas, enfrentando monstros e minhas próprias sombras. Busco entender minha nova identidade e encontrar paz em um mundo que virou caos."
                                button={() => openModal({
                                    img: Kaneki,
                                    nome: "Kaneki",
                                    idade: "19",
                                    hobby: "Ler e lutar",
                                    prof: "Estudante e lutador",
                                    resumo: "Carrego a dor de uma transformação forçada, vivendo entre humanos e ghouls. Minha jornada é marcada por lutas internas, enfrentando monstros e minhas próprias sombras. Busco entender minha nova identidade e encontrar paz em um mundo que virou caos.",
                                    backgroundColor: '#FFD700'
                                })}
                            />
                        </div>
                        <div className='card6'>
                            <Card
                                img={Edward}
                                nome="Edward"
                                resumo="Carrego o peso de um erro grave: tentar ressuscitar minha mãe custou-me meus braços e pernas. Em busca da Pedra Filosofal, enfrento desafios e sacrifícios para restaurar o que perdi. Minha jornada é um caminho tortuoso, tentando corrigir meu passado e proteger o futuro."
                                button={() => openModal({
                                    img: Edward,
                                    nome: "Edward",
                                    idade: "15",
                                    hobby: "Alquimia",
                                    prof: "Alquimista",
                                    resumo: "Carrego o peso de um erro grave: tentar ressuscitar minha mãe custou-me meus braços e pernas. Em busca da Pedra Filosofal, enfrento desafios e sacrifícios para restaurar o que perdi. Minha jornada é um caminho tortuoso, tentando corrigir meu passado e proteger o futuro.",
                                    backgroundColor: '#000000'
                                })}
                            />
                        </div>
                    </div>
                </div>
            </header>
            {showModal && (
                <div className="Modal-Content" onClick={closeModal}>
                    <Modal
                        img={modalData.img}
                        nome={modalData.nome}
                        idade={modalData.idade}
                        hobby={modalData.hobby}
                        prof={modalData.prof}
                        resumo={modalData.resumo}
                        backgroundColor={modalData.backgroundColor}
                        onClose={closeModal}
                    />
                </div>
            )}
        </div>
    );
}

export default App;

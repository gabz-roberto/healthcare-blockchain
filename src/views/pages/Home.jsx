import React from 'react';

import './styles/Home.css'

const Home = (props) => {
    return (
        <div className='home-content'>
            <h1 className='main-title'>Healthcare Blockchain System</h1>
            <h2 className='second-title'>Uma Proposta de Aplicação que Utiliza Blockchain Para o Armazenamento de Dados na Área da Saúde.</h2>
            <p>
                A seguinte aplicação trata-se de um sistema que utiliza a tecnologia blockchain para o armazenamento de dados da área da saúde. O sistema faz parte do Trabalho de Conclusão de Curso do aluno <span className='emphasis'>Gabriel Roberto Rodrigues</span>, no curso de bacharel em <span className='emphasis'>Sistemas de Informação</span> pela <span className='emphasis'>Universidade Federal de Alagoas</span>, sob orientação do professor <span className='emphasis'>Dr. André Magno Costa de Araújo</span>.
            </p>
            <p>
                O sistema possui dois formulários de testes baseados no padrão internacional OpenEHR, são eles, Admissão de Paciente, que possui dados de admissão de um novo paciente em uma organização de saúde e Pressão Sanguínea, que possui registros referentes a aferição de pressão sanguínea. Ambos os formulários seguem o modelo disponibilizado nos arquétipos da OpenEHR. 
            </p>
            <section className='contact-info'>
                <h3 className='third-title'>Contato:</h3>
                <strong>E-mail: </strong><a href="mailto:gabriel.rodrigues@arapiraca.ufal.br">gabriel.rodrigues@arapiraca.ufal.br</a>
            </section>
        </div>
    )
}

export default Home;
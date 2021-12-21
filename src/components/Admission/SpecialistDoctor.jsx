import React from 'react';

const SpecialistDoctor = (props) => {
    return (
        <section className="theme-section">
          <h3>Médico especialista</h3>
          <div className="inner-section">
            <div className="box">
              <label htmlFor="medicoEspecialistaId">ID: </label>
              <input type="text" placeholder="Digite aqui..." id="medicoEspecialistaId" />
            </div>
            <div className="box">
              <label htmlFor="medicoEspecialistaNome">Nome: </label>
              <input type="text" placeholder="Digite aqui..." id="medicoEspecialistaNome" />
            </div>
            <div className="box">
              <label htmlFor="medicoEspecialistaSobrenome">Sobrenome: </label>
              <input type="text" placeholder="Digite aqui..." id="medicoEspecialistaSobrenome" />
            </div>
          </div>
          <div className="inner-section">
            <div className="box">
              <label htmlFor="medicoEspecialistaUnidade">Unidade hospitalar: </label>
              <input type="text" placeholder="Digite aqui..." id="medicoEspecialistaUnidade" />
            </div>
            <div className="box">
              <label htmlFor="medicoEspecialistaFonte">Fonte da admissão: </label>
              <input type="text" placeholder="Digite aqui..." id="medicoEspecialistaFonte" />
            </div>
          </div>
        </section>
    )
}

export default SpecialistDoctor;
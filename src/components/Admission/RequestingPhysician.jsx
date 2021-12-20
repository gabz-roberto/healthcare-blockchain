import React from 'react';

const RequestingPhysician = (props) => {
    return (
        <section className="theme-section">
            <h3>Médico solicitante</h3>
            <div className="inner-section">
            <div className="box">
                <label htmlFor="medicoSolicitanteId">ID: </label>
                <input type="text" placeholder="Digite aqui..." id="medicoSolicitanteId" />
            </div>
            <div className="box">
                <label htmlFor="medicoSolicitanteNome">Nome: </label>
                <input type="text" placeholder="Digite aqui..." id="medicoSolicitanteNome" />
            </div>
            <div className="box">
                <label htmlFor="medicoSolicitanteSobrenome">Sobrenome: </label>
                <input type="text" placeholder="Digite aqui..." id="medicoSolicitanteSobrenome" />
            </div>
            </div>
        </section>
    )
}

export default RequestingPhysician;
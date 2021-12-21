import React from "react";

const AdmissionDoctor = (props) => {
    return (
        <section className="theme-section">
            <h3>Médico da admissão</h3>
            <div className="inner-section">
            <div className="box">
                <label htmlFor="medicoAdmissaoId">ID: </label>
                <input type="text" placeholder="Digite aqui..." id="medicoAdmissaoId" />
            </div>
            <div className="box">
                <label htmlFor="medicoAdmissaoNome">Nome: </label>
                <input type="text" placeholder="Digite aqui..." id="medicoAdmissaoNome" />
            </div>
            <div className="box">
                <label htmlFor="medicoAdmissaoSobrenome">Sobrenome: </label>
                <input type="text" placeholder="Digite aqui..." id="medicoAdmissaoSobrenome" />
            </div>
            </div>
        </section>
    )
}

export default AdmissionDoctor;
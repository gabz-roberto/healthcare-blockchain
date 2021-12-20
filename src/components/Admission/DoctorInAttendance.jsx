import React from 'react'

const DoctorInAttendance = (props) => {
    return (
        <section className="theme-section">
            <h3>Médico do atendimento</h3>
            <div className="inner-section">
            <div className="box">
                <label htmlFor="medicoAtendimentoId">ID: </label>
                <input type="text" placeholder="Digite aqui..." id="medicoAtendimentoId" />
            </div>
            <div className="box">
                <label htmlFor="medicoAtendimentoNome">Nome: </label>
                <input type="text" placeholder="Digite aqui..." id="medicoAtendimentoNome" />
            </div>
            <div className="box">
                <label htmlFor="medicoAtendimentoSobrenome">Sobrenome: </label>
                <input type="text" placeholder="Digite aqui..." id="medicoAtendimentoSobrenome" />
            </div>
            </div>
         </section>
    )
}

export default DoctorInAttendance;
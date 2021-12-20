import React from "react";

import PatientClassification from "../../components/Admission/PatientClassification";
import LocationInHospital from "../../components/Admission/LocationInHospital";
import PreviousPatientLocation from '../../components/Admission/PreviousPatientLocation'
import DoctorInAttendance from '../../components/Admission/DoctorInAttendance'


import "./styles/Admission.css";

const Admission = (props) => {
  return (
    <div className="admission-content">
      <h2>Admissão do Paciente</h2>
      <form action="">
        <PatientClassification />

        <LocationInHospital />

        <PreviousPatientLocation />

        <DoctorInAttendance />
        
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

        <section className="theme-section">
          <label htmlFor="tipoFinanciamento">Tipo de financiamento: </label>
          <select name="tipoFinanciamento" id="tipoFinanciamento">
            <option value="ausHealth">*Australian Health Care Agreements(en)</option>
            <option value="seguroPrivado">Seguros de saúde privados</option>
            <option value="autoFinanciado">Auto financiado</option>
            <option value="auxilioDoenca">Auxilio doença</option>
            <option value="reclamacaoTerceiro">Reclamação de terceiro sobre veículo motorizado</option>
            <option value="outraCompensacao">Outra compensação</option>
            <option value="depVeterans">*Department of Veterans' Affairs(en)</option>
            <option value="depDefence">*Department of Defence(en)</option>
            <option value="corFacility">*Correctional facility(en)</option>
            <option value="outroHospital">Outro hospital ou instituição pública (cuidados contratados)</option>         
            <option value="acordosReciprocos">Acordos de saúde recíprocos (com outros países)</option>
            <option value="outro">Outro</option>
            <option value="desconhecido">Desconhecido</option>
          </select>
        </section>

        <section className="theme-section">
          <label htmlFor="dataAdmissao">Data de admissão: </label>
          <input type="date" name="dataAdmissao" id="dataAdmissao" />
        </section>
      </form>
    </div>
  );
};

export default Admission;

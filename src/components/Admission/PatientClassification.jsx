import React from "react";

const PatientClassification = (props) => {
  return (
    <div className="box">
      <label htmlFor="patientClassification">Classificação do paciente:</label>
      <select name="patientClassification" id="patientClassification">
        <option value="internacao">Internação / Paciente com pernoite</option>
        <option value="dayHospital">Day hospital</option>
        <option value="ambulatorial">Ambulatoria</option>
        <option value="urgencia">Urgência</option>
        <option value="publico">Público</option>
        <option value="preAdmissao">Pré-admissão</option>
        <option value="contaComercial">Conta comercial</option>
        <option value="naoAplicavel">Não aplicável</option>
        <option value="desconhecido">Desconhecido</option>
      </select>
    </div>
  );
};

export default PatientClassification;
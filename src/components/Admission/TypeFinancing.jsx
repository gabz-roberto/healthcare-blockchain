import React from "react";

const TypeFinancing = (props) => {
    return (
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
    )
}

export default TypeFinancing;
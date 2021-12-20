import React from 'react';

const PreviousPatientLocation = (props) => {
    return (
        <section className="theme-section">
            <h3>Localização prévia do paciente</h3>
            <div className="inner-section">
                <h4>Instalação</h4>
                <div className="box">
                    <label htmlFor="idInstalacao">ID do local: </label>
                    <input type="text" placeholder="Digite aqui..." id="idInstalacao" />
                </div>
                <div className="box">
                    <label htmlFor="idUniversalInstalacao">ID universal: </label>
                    <input type="text" placeholder="Digite aqui..." id="idUniversalInstalacao" />
                </div>
                <div className="box">
                  <label htmlFor="idUniversalTipo">Tipo do ID Universal: </label>
                  <select name="idUniversalTipo" id="idUniversalTipo">
                    <option value="DNS">DNS</option>
                    <option value="GUID">GUID</option>
                    <option value="HCD">HCD</option>
                    <option value="HL7">HL7</option>
                    <option value="ISO">ISO</option>
                    <option value="LMN">L, M, N</option>
                    <option value="random">Random</option>
                    <option value="UUID">UUID</option>
                    <option value="x400">x400</option>
                    <option value="x500">x500</option>
                  </select>
                </div>
            </div>
            <div className="inner-section">
              <h4>Endereço</h4>
              <div className="box">
                <label htmlFor="pacienteLogradouro">Logradouro: </label>
                <input type="text" placeholder="Digite aqui..." id="pacienteLogradouro" />
              </div>
              <div className="box">
                <label htmlFor="pacienteCidade">Cidade: </label>
                <input type="text" placeholder="Digite aqui..." id="pacienteCidade" />
              </div>
              <div className="box">
                <label htmlFor="pacienteEstado">Estado: </label>
                <input type="text" placeholder="Digite aqui..." id="pacienteEstado" />
              </div>
              <div className="box">
                <label htmlFor="pacienteCep">CEP: </label>
                <input type="text" placeholder="Digite aqui..." id="pacienteCep" />
              </div>
              <div className="box">
                <label htmlFor="pacientePais">País: </label>
                <input type="text" placeholder="Digite aqui..." id="pacientePais" />
              </div>
              <div className="box">
                <label htmlFor="pacienteUnidade">Unidade de cuidado: </label>
                <input type="text" placeholder="Digite aqui..." id="pacienteUnidade" />
              </div>
              <div className="box">
                <label htmlFor="pacienteAla">Ala: </label>
                <input type="text" placeholder="Digite aqui..." id="pacienteAla" />
              </div>
              <div className="box">
                <label htmlFor="pacienteQuarto">Quarto: </label>
                <input type="text" placeholder="Digite aqui..." id="pacienteQuarto" />
              </div>
              <div className="box">
                <label htmlFor="pacienteLeito">Leito: </label>
                <input type="text" placeholder="Digite aqui..." id="pacienteLeito" />
              </div>
              <div className="box">
                <label htmlFor="pacientePredio">Predio: </label>
                <input type="text" placeholder="Digite aqui..." id="pacientePredio" />
              </div>
              <div className="box">
                <label htmlFor="pacienteAndar">Andar: </label>
                <input type="text" placeholder="Digite aqui..." id="pacienteAndar" />
              </div>
              <div className="box">
                <label htmlFor="pacienteDescricaoLocal">Descrição da localização: </label>
                <input type="text" placeholder="Digite aqui..." id="pacienteDescricaoLocal" />
              </div>
            </div>
        </section>
    )
}

export default PreviousPatientLocation;
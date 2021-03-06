import React from 'react';

const LocationInHospital = (props) => {
    return (
        <section className="theme-section">
        <h3>Localização na internação (leito)</h3>
        <div className="inner-section">
          <div className="box">
            <label htmlFor="unidade">Unidade de cuidado: </label>
            <input type="text" placeholder="Digite aqui..." id="unidade" />
          </div>
          <div className="box">
            <label htmlFor="ala">Ala: </label>
            <input type="text" placeholder="Digite aqui..." id="ala" />
          </div>
          <div className="box">
            <label htmlFor="quarto">Quarto: </label>
            <input type="text" placeholder="Digite aqui..." id="quarto" />
          </div>
          <div className="box">
            <label htmlFor="leito">Leito: </label>
            <input type="text" placeholder="Digite aqui..." id="leito" />
          </div>
        </div>
        <h4>Instalação</h4>
        <div className="inner-section">
          <div className="box">
            <label htmlFor="idLocal">ID do Local: </label>
            <input type="text" placeholder="Digite aqui..." id="idLocal" />
          </div>
          <div className="box">
            <label htmlFor="idUniversal">Quarto: </label>
            <input type="text" placeholder="Digite aqui..." id="idUniversal" />
          </div>
          <div className="box">
            <label htmlFor="idUniversal">Quarto: </label>
            <input type="text" placeholder="Digite aqui..." id="idUniversal" />
          </div>
          <div className="box">
              <label htmlFor="tipoIdUniversal">Tipo do ID Universal: </label>
              <select name="tipoIdUniversal" id="tipoIdUniversal">
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
          <div className="box">
            <label htmlFor="predio">Prédio: </label>
            <input type="text" placeholder="Digite aqui..." id="predio" />
          </div>
          <div className="box">
            <label htmlFor="andar">Andar: </label>
            <input type="text" placeholder="Digite aqui..." id="andar" />
          </div>
          <div className="box">
            <label htmlFor="descricaoLocal">Descricao da localização: </label>
            <input type="text" placeholder="Digite aqui..." id="descricaoLocal" />
          </div>
        </div>
        <h4>Endereço: </h4>
        <div className="inner-section">
          <div className="box">
            <label htmlFor="logradouro">Logradouro: </label>
            <input type="text" placeholder="Digite aqui..." id="logradouro" />
          </div>
          <div className="box">
            <label htmlFor="cidade">Cidade: </label>
            <input type="text" placeholder="Digite aqui..." id="cidade" />
          </div>
          <div className="box">
            <label htmlFor="estado">Estado: </label>
            <input type="text" placeholder="Digite aqui..." id="estado" />
          </div>
          <div className="box">
            <label htmlFor="cep">CEP: </label>
            <input type="text" placeholder="Digite aqui..." id="cep" />
          </div>
          <div className="box">
            <label htmlFor="pais">País: </label>
            <input type="text" placeholder="Digite aqui..." id="pais" />
          </div>
          <div className="box">
              <label htmlFor="tipoLocal">Tipo de localização: </label>
              <select name="tipoLocal" id="tipoLocal">
                  <option value="clinica">Clínica</option>
                  <option value="casa">Casa</option>
                  <option value="departamento">Departamento</option>
                  <option value="unidadeEnfermagem">Unidade de enfermagem</option>
                  <option value="providersOffice">*Provider's office (en)</option>
              </select>
          </div>
          <div className="box">
            <label htmlFor="tipoAdmissao">Tipo de admissão: </label>
            <input type="text" placeholder="Digite aqui..." id="tipoAdmissao" />
          </div>
          <div className="box">
            <label htmlFor="numeroPreAdmissao">Número da pré-admissão: </label>
            <input type="text" placeholder="Digite aqui..." id="numeroPreAdmissao" />
          </div>
        </div>
      </section>
    )
}

export default LocationInHospital;
import React from "react";

import "./styles/Admission.css";

const Admission = (props) => {
  return (
    <div className="admission-content">
      <h2>Admissão do Paciente</h2>
      <form action="">
        <div className="box">
          <label htmlFor="patientClassification">
            Classificação do paciente:
          </label>
          <select name="patientClassification" id="patientClassification">
            <option value="internacao">
              Internação / Paciente com pernoite
            </option>
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

        
      </form>
    </div>
  );
};

export default Admission;

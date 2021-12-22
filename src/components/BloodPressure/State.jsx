import React from "react";

const State = (props) => {
    return (
        <section className="theme-section">
            <div className="box">
                <label htmlFor="posicao">Posiçao: </label>
                <select name="posicao" id="posicao">
                    <option value="emPe">Em pé</option>
                    <option value="sentado">Sentado</option>
                    <option value="reclinado">Reclinado</option>
                    <option value="deitado">Deitado</option>
                    <option value="inclinadoEsqueda">Deitado com inclinação para esquerda</option>
                </select>
            </div>

            <div className="box">
                <label htmlFor="fatoreConfundidores">Fatores confundidores: </label>
                <input type="text" id="fatoresConfundidores" name="fatoresConfundidores"/>
            </div>

            <div className="box">
                <label htmlFor="statusSono">Status do sono: </label>
                <select name="statusSono" id="statusSono">
                    <option value="alertaAcordado">Alerta e acordado</option>
                    <option value="dormindo">Dormindo</option>
                </select>
            </div>
        </section>
    )
}

export default State;
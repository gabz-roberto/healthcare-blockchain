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
        </section>
    )
}

export default State;
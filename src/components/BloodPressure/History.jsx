import React from "react";

const History = (props) => {
    return (
        <div className="box">
            <label htmlFor="history">Histórico</label>
            <select name="histsory" id="history">
                <option value="qualquerEvento">Qualquer evento</option>
                <option value="media24Horas">Média de 24 horas</option>
            </select>
        </div>
    )
}

export default History;
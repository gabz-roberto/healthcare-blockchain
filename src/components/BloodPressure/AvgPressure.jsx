import React from "react";

const AvgPressure = (props) => {
    return (
        <section className="theme-section">
            <div className="box">
                <label htmlFor="sistolica">Sistólica: </label>
                <input type="number" name="sistolica" id="sistolica" min={0}/>
            </div>
            <div className="box">
                <label htmlFor="diastolica">Diastólica: </label>
                <input type="number" name="diastolica" id="diastolica" min={0}/>
            </div>
            <div className="box">
                <label htmlFor="pressaoMedia">Pressão arterial média: </label>
                <input type="number" name="pressaoMedia" id="pressaoMedia" min={0}/>
            </div>
            <div className="box">
                <label htmlFor="pressaoPulso">Pressão de pulso: </label>
                <input type="number" name="pressaoPulso" id="pressaoPulso" min={0}/>
            </div>
            <div className="box">
                <label htmlFor="interpretacao">Interpretação clínica: </label>
                <input type="text" name="interpretacao" id="interpretacao" min={0}/>
            </div>
            <div className="box">
                <label htmlFor="comentario">Comentário: </label>
                <input type="text" name="comentario" id="comentario" min={0}/>
            </div>
        </section>
    )
}

export default AvgPressure;
import React from 'react';

const AdmissionDate = (props) => {
    return (
        <section className="theme-section">
            <label htmlFor="dataAdmissao">Data de admissão: </label>
            <input type="date" name="dataAdmissao" id="dataAdmissao" />
        </section>
    )
}

export default AdmissionDate;
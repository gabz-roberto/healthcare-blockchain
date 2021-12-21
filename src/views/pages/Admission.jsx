import React from "react";

import PatientClassification from "../../components/Admission/PatientClassification";
import LocationInHospital from "../../components/Admission/LocationInHospital";
import PreviousPatientLocation from '../../components/Admission/PreviousPatientLocation'
import DoctorInAttendance from '../../components/Admission/DoctorInAttendance'
import RequestingDoctor from '../../components/Admission/RequestingDoctor'
import AdmissionDoctor from '../../components/Admission/AdmissionDoctor'


import "./styles/Admission.css";
import SpecialistDoctor from "../../components/Admission/SpecialistDoctor";
import TypeFinancing from "../../components/Admission/TypeFinancing";
import AdmissionDate from "../../components/Admission/AdmissionDate";

const Admission = (props) => {
  return (
    <div className="admission-content">
      <h2>Admissão do Paciente</h2>
      <form action="">
        <PatientClassification />

        <LocationInHospital />

        <PreviousPatientLocation />

        <DoctorInAttendance />
        
        <RequestingDoctor />

        <SpecialistDoctor />

        <AdmissionDoctor />

        <TypeFinancing />

        <AdmissionDate />
      </form>
    </div>
  );
};

export default Admission;

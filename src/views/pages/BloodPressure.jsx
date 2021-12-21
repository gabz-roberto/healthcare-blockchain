import React from 'react';

import History from '../../components/BloodPressure/History';
import AvgPressure from '../../components/BloodPressure/AvgPressure';

import './styles/BloodPressure.css'
import State from '../../components/BloodPressure/State';

const BloodPressure = (props) => {
    return (
        <div className='bloodPressure-content'>
            <h2>Pressão Sanguínea</h2>
            <form action="">
                <History />
                <AvgPressure />
                <State />
                
            </form>
        </div>
    )
}

export default BloodPressure;
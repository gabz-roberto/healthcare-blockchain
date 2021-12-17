import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../views/pages/Home';
import Admission from '../../views/pages/Admission';
import BloodPressure from '../../views/pages/BloodPressure';
import Search from '../../views/pages/Search';
import NotFound from '../../views/pages/NotFound';

import './styles/Content.css';

const Content = (props) => {
    return (
        <main className='main-content'>
            <Routes>
                <Route path="/admission" element={<Admission />}/>
                <Route path="/blood-pressure" element={<BloodPressure />}/>
                <Route path="/search" element={<Search />}/>
                <Route exact path="/" element={<Home />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default Content;
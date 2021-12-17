import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';

const App = (props) => {
    return (
        <>
            <Router>
                <Menu />
                <Content />
            </Router>
        </>
    )
}

export default App;
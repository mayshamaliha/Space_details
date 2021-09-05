import React from 'react';
import SpaceClassification from './components/SpaceClassification/SpaceClassification';
import DetailsBar from './components/DetailsBar/DetailsBar';
import Progress from './components/Progress/Progress';
import styles from './App.module.css';


const App = () => {
    return(
        <div>
            <SpaceClassification/>
            <DetailsBar/>
            
            <Progress/>
        </div>
    )
}
export default App;
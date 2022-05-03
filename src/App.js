import React from 'react';
import './App.css';
import Filters from './components/SideBar/Filters';
import MainContainer from './components/Main/MainContainer';
import Store from './redux/store';
import StoreContainer from './components/storeContainer';

function App() {
    return (
        <div >
            <StoreContainer />
            {/* <Filters store={Store} />
            <MainContainer store={Store} /> */}
        </div>

    )
}


export default App;

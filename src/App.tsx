import React from 'react';
import Particles from "react-tsparticles";
import particlesOptions from "./assets/particles.json";
import { ISourceOptions } from "tsparticles";
import './assets/css/App.css';


function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions as ISourceOptions}/>
            <header className="App-header">
                <h1 className='text-neutral-500 text-4xl'>
                    Work In Progress <span className="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>
                </h1>
                <h6 className='text-neutral-600 text-2xl'>
                    Coming soon <i className='text-sm'>(maybe)</i>
                </h6>
            </header>
        </div>
    );
}

export default App;

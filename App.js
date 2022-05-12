import React from 'react';
import { connect } from 'react-redux';
import { Inc } from './actions';
import { Dec } from './actions';
import { Def } from './actions';
import './App.css';

function App({variable,Inc,Dec,Def}){
    return(
        <div className='App'>
            <h1>Counter Project</h1>
            <center>
                <div id='var'>
                {variable}
                </div>
                <h3>Using</h3>
                <h1>React-Redux</h1>
                <div id='btn-container'>
                <button className='btn'onClick={Inc}>INCREMENT</button>
                <button className='btn' onClick={Def}>RESET</button>
                <button className='btn' onClick={Dec} >DECREMENT</button>
                </div>
            </center>

        </div>
    );
}

const mapStateToProps=state=>({
    variable:state
})

export default connect(mapStateToProps,{Inc,Dec,Def})(App);


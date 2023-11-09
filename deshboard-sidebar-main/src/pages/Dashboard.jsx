import React from 'react';
import './Dasboard.css'
import TestSuite from './TestSuite'
import {BiSearch} from 'react-icons/bi'
import DeviceModel from './DeviceModel';

const Dashboard = () => {
    return (
        <div className='suit-wrapper'>
            <div className='inner-wrapper'>
                <div className='header'>
                    <h3 className='test'>Testcase Library</h3>
                    <button className='btn'>Collapse All</button>
                </div>

                <div className='search'>
                    <input type="text" placeholder="Search " />
                    <button className='ser-btn'><BiSearch/></button>
                </div>
                <TestSuite></TestSuite>
               
                
            </div>
        </div>
    );
};

export default Dashboard;
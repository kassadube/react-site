import React, {useState} from 'react';
import axios from 'axios';
import usePromise from '@kassadube/hook-toolkit';
import MiniHeader from '../../../../components/miniHeader';
import Modal from '../../components/modal';
import {SimpleMenu} from 'rtttr-first-test';

import {menuItems} from'../../constants';

const MapTestPage = () => {
    const [modal, setModal] = useState(0);
    const project = modal > 0;
    console.log(modal);
   
        
        return (
            <div className="app-container">
                <MiniHeader headerName="Main Hooks" items={menuItems}/> ss
                <button onClick={() => setModal(1)}>Open</button>
                <Modal
        open={project}
        {...{ modal, setModal }}
        css="padding: 2em; max-width: 40em;"
      >
        <div>ddds</div>
      </Modal>        
            </div>
        );
    
}


export default MapTestPage;

// https://janosh.io/page-data/nature/page-data.json
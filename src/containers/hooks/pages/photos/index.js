import React, {useState} from 'react';
import axios from 'axios';
import usePromise from '@kassadube/hook-toolkit';
import MiniHeader from '../../../../components/miniHeader';
import Modal from '../../components/modal';
import {SimpleMenu} from 'rtttr-first-test';

import {menuItems} from'../../constants';

const Photos = () => {
    const { data, isLoading } = usePromise(fetchImages, { resolve: true });
    const [modal, setModal] = useState(0);
    const project = modal > 0;
         console.log(data);
        return (
            <div className="app-container">
                <MiniHeader headerName="Main Hooks" items={menuItems}/> 
                Photos
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

const fetchImages = () =>
  axios.get("https://janosh.io/page-data/nature/page-data.json",
  {headers: {'Access-Control-Allow-Origin': '*'}}).then(({ data }) => data.results.data.photos.edges);

const UserPromise = () => {
  const { data, isLoading } = usePromise(fetchImages, { resolve: true });

  return isLoading ? "Loading..." : <img src={data.picture.medium} />;
}

export default Photos;
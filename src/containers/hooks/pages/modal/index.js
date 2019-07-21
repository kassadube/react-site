import React from 'react';
import axios from 'axios';
import usePromise from '@kassadube/hook-toolkit';
import MiniHeader from '../../../../components/miniHeader';
import Counter from '../../components/counter';

import menuItems from'../../constants';

class Modal extends React.Component {
    
    
    render(){
        
        return (
            <div className="app-container">
                <MiniHeader headerName="Main Hooks" items={menuItems}/> ss
                <UserPromise/>                
                <Counter />               
            </div>
        );
    }
}
const fetchUser = () =>
  axios.get("https://randomuser.me/api/").then(({ data }) => data.results[0]);

const UserPromise = () => {
  const { data, isLoading } = usePromise(fetchUser, { resolve: true });

  return isLoading ? "Loading..." : <img src={data.picture.medium} />;
}

export default Modal;
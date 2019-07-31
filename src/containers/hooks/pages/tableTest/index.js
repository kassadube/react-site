import React from 'react';
import axios from 'axios';
import usePromise from '@kassadube/hook-toolkit';
import MiniHeader from '../../../../components/miniHeader';
import Counter from '../../components/counter';
import FixedSizeList from '../../components';


import menuItems from'../../constants';

class TableTest extends React.Component {
    
    
    render(){
        return (
            <div className="app-container">
                <MiniHeader headerName="Main Hooks" items={menuItems}/>
                <div>
                  <h5>FixedSizeList</h5>
                  <FixedSizeList />
                </div>
                <div>
                  <h5>reg</h5>
                  <FixedSizeList />
                </div>
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

export default TableTest;
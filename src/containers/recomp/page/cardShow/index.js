import React from 'react';
import Header from '../../components/header';
import MiniHeader from '../../../../components/miniHeader';
import CardList from '../../components/cardList';
import data from '../../data';
import './index.css';
const menuItems = [
  ['/recomp', 'Breeds'],
  ['/recomp/plain', 'Plain'],
  ['/recomp/resite', 'Resite'],
  ['/recomp/toggle', 'Toggle'],
  ['/recomp/reducer', 'reducer'],
  ['/recomp/siteRec', 'Site Rec'],
  ['/recomp/ConnectedApp', 'ConnectedApp'],
  ['/recomp/Rxjspg', 'Rxjs App'],
  ['/recomp/Rxjsmove', 'Rxjs move'],
];
class Page extends React.Component {
    constructor (props) {
        super(props);
        this.state = {data : []};       
        
    }
    componentDidMount() {
        this._isMounted = true;
        this.timerID = setInterval(
          () => this.tick(),
          3000
        );
      }
      componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.timerID);
      }
    tick() {
        if(this._isMounted)
        {
            this.setState({
            data: data
            });
            clearInterval(this.timerID);
        }
      }
    render(){
        const data = this.state.data;
        return (
            <div className="app-container">
                <MiniHeader headerName="Breeds" items={menuItems} className={"ul-horz"}/>
                <CardList data={data} />
            </div>
        );
    }
}
export default Page;
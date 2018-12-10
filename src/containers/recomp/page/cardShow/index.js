import React from 'react';
import Header from '../../components/header';
import CardList from '../../components/cardList';
import data from '../../data';
import './index.css';
class Page extends React.Component {
    constructor (props) {
        super(props);
        this.state = {data : []};       
        
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          3000
        );
      }
    tick() {
        this.setState({
          data: data
        });
        clearInterval(this.timerID);
      }
    render(){
        const data = this.state.data;
        return (
            <div className="app-container">
                <Header headerName="Breeds"/>
                <CardList data={data} />
            </div>
        );
    }
}
export default Page;
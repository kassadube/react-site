import React from 'react';
import { branch, renderComponent } from 'recompose';

import Card from '../card';
import Spinner from '../spinner';


const CardList = ({data}) => {
  return (
        <div className="body-container">
        {
            data.map(breed => (
            <Card                       
                key={breed.name}
                name={breed.name}
                picture={breed.picture}
                description={breed.description}
            />
            ))
        }
            <div className="clear"></div>
        </div>
  );
}

const enhance = branch(
    (props) => props.data.length === 0,
    renderComponent(Spinner)
  );

export default enhance(CardList);
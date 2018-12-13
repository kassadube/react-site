import React from 'react';
import { mapProps, withProps  }  from 'recompose';

import Header from '../../components/header';

const HomeLink = withProps(({ query }) => ({ href: '#/?query=' + query }))('a');
const ProductsLink = withProps({ href: '#/products' })('a');
const CheckoutLink = withProps({ href: '#/checkout' })('a');

const WithPropsExample2 = () =>
  <div>
    <Header headerName="WithProps 2" showMenu={false}/>
    <div className="App">    
      <header>
        <HomeLink query="logo">Logo</HomeLink>
      </header>
      <nav>
        <HomeLink>Home</HomeLink>
        <ProductsLink>Products</ProductsLink>
        <CheckoutLink>Checkout</CheckoutLink>
      </nav>  
    </div>
  </div>;

  export default WithPropsExample2;
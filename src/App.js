import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalstyles';
import Hero from './components/Hero';
import Product from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Product heading='Choose your favorite' data={productData} />
      <Feature />
      <Product heading='Sweeet Treats for you' data={productDataTwo} />
      <Footer />
    </Router>
  )
}

export default App;

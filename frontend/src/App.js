import React from 'react';
import Navigation from './components/Navigation'
import Footer from './components/Footer'



import './App.css';
import './home.css';

/*
Default components. They are rendered for each routes
When you click on a nav-item, it will render the page between the components Navigation and Footer
*/
export default function App() {
  return (
    <div className="wrapper">
        <Navigation />
        <Footer />
   </div>
  );
}

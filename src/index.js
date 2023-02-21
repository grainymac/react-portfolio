import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "https://api-us-west-2.hygraph.com/v2/clede0qu54mq801t6058sd0e0/master",
//   cache: new InMemoryCache()
// })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />   
      </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();

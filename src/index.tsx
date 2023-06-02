import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/home';
import { ApolloProvider } from '@apollo/client';
import client from "./app/apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/shared/layout';
import Character from './components/character';
import NotFound from './components/shared/notFound';
import Locations from './components/locations';
import Episodes from './components/episodes';
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='character/:slug' element={<Character />} />
              <Route path='/locations' element={<Locations />} />
              <Route path='/episodes' element={<Episodes />} />
            </Route>
            <Route path='*' element={<NotFound />} />
            <Route path='/404' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

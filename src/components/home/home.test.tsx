import Home from '.';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from "./../../app/apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './../../components/shared/layout';
import Character from './../../components/character';
import NotFound from './../../components/shared/notFound';
import Locations from './../../components/locations';
import Episodes from './../../components/episodes';
import { store } from './../../app/store';
import { Provider } from 'react-redux';

test('test favorite text finding', () => {
  render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  );
  expect(screen.getByText('find your favorite character')).toBeInTheDocument();
});
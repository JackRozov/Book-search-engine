import './App.css';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import App from './App';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
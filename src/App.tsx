import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from './Components/Component';
import { ClassComponent } from './Components/ClassComponent';

function App() {
  return (
    <>
      <Component name='KrockSalgado'/>
      <ClassComponent name='KrockSalgado'/>
    </>
  );
}

export default App;

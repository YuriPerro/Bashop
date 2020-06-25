import React from 'react';
import './Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// IMPORTANDO O BASEWEB // => npm install baseui styletron-engine-atomic styletron-react <=
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';

import Menu from '../../Components/Menu';
import BackgroundImg from '../../Components/BackgroundImg';
import Card from '../../Components/Card';

import App from "../../App"
import { Avatar } from 'baseui/avatar';

const engine = new Styletron();
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  },
);

const Centered2 = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  },
);

export default function Home() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <Menu/>
          <BackgroundImg/>
        </Centered>
        <h1 style={{textAlign:'center'}}>Cadastre-se sua barbearia ou encontre sua barbearia favorita.</h1>
      </BaseProvider>
    </StyletronProvider>
  );
}


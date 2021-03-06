import React from 'react';
import { render } from 'react-dom';
import { store, history, persistor } from 'store';
import Client from 'routers/Client';
import 'styles/global';

render(
  <Client store={store} history={history} persistor={persistor} />,
  document.getElementById('app'),
);

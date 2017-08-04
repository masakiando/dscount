import 'babel-polyfill'; //babelの変換において、古いブラウザでもある程度動かす
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //WebpackもCSSファイルをインポートできます！
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
      <Router
        history={browserHistory}
        routes={routes}
      />,
  document.getElementById('app')
);

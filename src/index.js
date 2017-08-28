import 'babel-polyfill'; //babelの変換において、古いブラウザでもある程度動かす
import React from 'react';
import { render } from 'react-dom';
import configuerStore from './store/configuerStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //WebpackもCSSファイルをインポートできます！
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/slick-carousel/slick/slick.scss";
import "../node_modules/slick-carousel/slick/slick-theme.scss";
import "./style.scss";

const store = configuerStore();

render(
  <Provider store={store}>
      <Router
        history={browserHistory}
        routes={routes}
      />
  </Provider>,
  document.getElementById('app')
);

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import bodyParser from 'body-parser';
import users from './routes/usersServer';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
// reqパラメータをJSONで取得
app.use(bodyParser.json());
//routes reqを受け付けし担当するとサーバへー引き継ぐ
app.use('/api/users', users);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

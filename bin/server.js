import app from '../src/server';
import cfg from '../config/server';

app.listen(cfg.port, cfg.addr, err => {
  if (!err) {
    console.log('Connected!');
    console.log('\tListen: %s', cfg.addr);
    console.log('\tPort: %s', cfg.port);
  } else {
    throw err;
  }
});

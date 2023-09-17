import _0x5d912d from 'express';
import { createServer } from 'http';
import 'path';
import 'socket.io';
import { toBuffer } from 'qrcode';
import _0x45b12f from 'node-fetch';
function connect(_0x10e8fc, _0x47fe8c) {
  let _0x39a7f9 = global.app = _0x5d912d();
  console.log(_0x39a7f9);
  let _0x2ca620 = global.server = createServer(_0x39a7f9);
  let _0x12484d = 'invalid';
  _0x10e8fc.ev.on("connection.update", function _0x218a7b({
    qr: _0x399f21
  }) {
    if (_0x399f21) {
      _0x12484d = _0x399f21;
    }
  });
  _0x39a7f9.use(async (_0x5eddde, _0x4af55a) => {
    _0x4af55a.setHeader("content-type", "image/png");
    _0x4af55a.end(await toBuffer(_0x12484d));
  });
  _0x2ca620.listen(_0x47fe8c, () => {
    console.log("App listened on port", _0x47fe8c);
    if (opts.keepalive) {
      keepAlive();
    }
  });
}
function pipeEmit(_0x5e0231, _0x52fb69, _0x26f86c = '') {
  let _0x2786e3 = _0x5e0231.emit;
  _0x5e0231.emit = function (_0x216037, ..._0xbbd6e5) {
    _0x2786e3.emit(_0x216037, ..._0xbbd6e5);
    _0x52fb69.emit(_0x26f86c + _0x216037, ..._0xbbd6e5);
  };
  return {
    'unpipeEmit'() {
      _0x5e0231.emit = _0x2786e3;
    }
  };
}
function keepAlive() {
  const _0x5c267e = "https://" + process.env.REPL_SLUG + '.' + process.env.REPL_OWNER + ".repl.co";
  if (/(\/\/|\.)undefined\./.test(_0x5c267e)) {
    return;
  }
  setInterval(() => {
    _0x45b12f(_0x5c267e)['catch'](console.error);
  }, 300000);
}
export default connect;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import './config.js';
import { createRequire } from 'module';
import _0x4184a9, { join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { platform } from 'process';
import * as _0x5db6e7 from 'ws';
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';
import _0x405e02 from 'yargs';
import { spawn } from 'child_process';
import _0x2e5cfc from 'lodash';
import _0x14b0ac from 'chalk';
import _0x3d07db from 'syntax-error';
import { tmpdir } from 'os';
import { format } from 'util';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low, JSONFile } from 'lowdb';
import _0x213f69 from 'pino';
import { mongoDB, mongoDBV2 } from './lib/mongoDB.js';
import _0x18727d from './lib/store.js';
const {
  CONNECTING
} = _0x5db6e7;
const {
  chain
} = _0x2e5cfc;
const PORT = process.env.PORT || process.env.SERVER_PORT || 0xbb8;
protoType();
serialize();
global.__filename = function filename(_0x2960bc = import.meta.url, _0x23c310 = platform !== "win32") {
  return _0x23c310 ? /file:\/\/\//.test(_0x2960bc) ? fileURLToPath(_0x2960bc) : _0x2960bc : pathToFileURL(_0x2960bc).toString();
};
global.__dirname = function dirname(_0x5c6113) {
  return _0x4184a9.dirname(global.__filename(_0x5c6113, true));
};
global.__require = function require(_0x16088b = import.meta.url) {
  return createRequire(_0x16088b);
};
global.API = (_0x49d73d, _0x4c3144 = '/', _0x21eecf = {}, _0x371b62) => (_0x49d73d in global.APIs ? global.APIs[_0x49d73d] : _0x49d73d) + _0x4c3144 + (_0x21eecf || _0x371b62 ? '?' + new URLSearchParams(Object.entries({
  ..._0x21eecf,
  ...(_0x371b62 ? {
    [_0x371b62]: global.APIKeys[_0x49d73d in global.APIs ? global.APIs[_0x49d73d] : _0x49d73d]
  } : {})
})) : '');
global.timestamp = {
  'start': new Date()
};
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(_0x405e02(process.argv.slice(0x2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts.prefix || "\u200Ez/i!#$%+\xA3\xA2\u20AC\xA5^\xB0=\xB6\u2206\xD7\xF7\u03C0\u221A\u2713\xA9\xAE:;?&.,\\-").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
global.db = new Low(/https?:\/\//.test(opts.db || '') ? new cloudDBAdapter(opts.db) : /mongodb(\+srv)?:\/\//i.test(opts.db) ? opts.mongodbv2 ? new mongoDBV2(opts.db) : new mongoDB(opts.db) : new JSONFile((opts._[0x0] ? opts._[0x0] + '_' : '') + "database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0xadfc63 => setInterval(async function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0xadfc63(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read()["catch"](console.error);
  global.db.READ = null;
  global.db.data = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'sticker': {},
    'settings': {},
    ...(global.db.data || {})
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();
global.authFile = (opts._[0x0] || "abhi") + ".data.json";
const {
  state,
  saveState
} = _0x18727d.useSingleFileAuthState(global.authFile);
const connectionOptions = {
  'printQRInTerminal': true,
  'auth': state,
  'logger': _0x213f69({
    'level': 'silent'
  }),
  'browser': ["GURU-BOT", "Safari", "1.0.0"]
};
global.conn = makeWASocket(connectionOptions);
conn.isInit = false;
if (!opts.test) {
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write()["catch"](console.error);
    }
    if (opts.autocleartmp) {
      try {
        clearTmp();
      } catch (_0x524709) {
        console.error(_0x524709);
      }
    }
  }, 60000);
}
if (opts.server) {
  (await import("./server.js"))["default"](global.conn, PORT);
}
async function clearTmp() {
  const _0x15c7ed = [tmpdir(), join(__dirname, "./tmp")];
  const _0x528448 = [];
  _0x15c7ed.forEach(_0x3b1bb9 => readdirSync(_0x3b1bb9).forEach(_0x503709 => _0x528448.push(join(_0x3b1bb9, _0x503709))));
  return _0x528448.map(_0x232793 => {
    const _0x5a2a91 = statSync(_0x232793);
    if (_0x5a2a91.isFile() && Date.now() - _0x5a2a91.mtimeMs >= 60000) {
      return unlinkSync(_0x232793);
    }
    return false;
  });
}
setInterval(async () => {
  console.log(_0x14b0ac.cyan("\u2705  Auto clear  |  tmp folder cleared"));
}, 0xea60);
async function connectionUpdate(_0x40b86b) {
  if (_0x1e67f8) {
    conn.isInit = true;
  }
  const _0x1191a7 = _0x41b4f3?.["error"]?.["output"]?.["statusCode"] || _0x41b4f3?.["error"]?.["output"]?.["payload"]?.["statusCode"];
  if (_0x1191a7 && _0x1191a7 !== DisconnectReason.loggedOut && conn?.['ws']["readyState"] !== CONNECTING) {
    console.log(await global.reloadHandler(true)["catch"](console.error));
    global.timestamp.connect = new Date();
  }
  if (global.db.data == null) {
    loadDatabase();
  }
}
process.on("uncaughtException", console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x360339) {
  try {
    const _0x501874 = await import("./handler.js?update=" + Date.now())["catch"](console.error);
    if (Object.keys(_0x501874 || {}).length) {
      handler = _0x501874;
    }
  } catch (_0x37e767) {
    console.error(_0x37e767);
  }
  if (_0x360339) {
    const _0x31ac28 = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      'chats': _0x31ac28
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off("group-participants.update", conn.participantsUpdate);
    conn.ev.off("groups.update", conn.groupsUpdate);
    conn.ev.off("message.delete", conn.onDelete);
    conn.ev.off("connection.update", conn.connectionUpdate);
    conn.ev.off("creds.update", conn.credsUpdate);
  }
  conn.welcome = "Hello, @user\nWelcome to @group";
  conn.bye = "Goodbye @user";
  conn.spromote = "@user now admin";
  conn.sdemote = "@user demoted";
  conn.sDesc = "Group description changed \n@desc";
  conn.sSubject = "Group subject cchanged \n@group";
  conn.sIcon = "Group icon changed";
  conn.sRevoke = "Group link changed \n@revoke";
  conn.handler = handler.handler.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveState.bind(global.conn, true);
  conn.ev.on("messages.upsert", conn.handler);
  conn.ev.on("group-participants.update", conn.participantsUpdate);
  conn.ev.on("groups.update", conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on("connection.update", conn.connectionUpdate);
  conn.ev.on('creds.update', conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, "./plugins/index"));
const pluginFilter = _0xeb6db7 => /\.js$/.test(_0xeb6db7);
global.plugins = {};
async function filesInit() {
  for (let _0x24167e of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      let _0x36982e = global.__filename(join(pluginFolder, _0x24167e));
      const _0x471edc = await import(_0x36982e);
      global.plugins[_0x24167e] = _0x471edc["default"] || _0x471edc;
    } catch (_0x14ac9e) {
      conn.logger.error(_0x14ac9e);
      delete global.plugins[_0x24167e];
    }
  }
}
filesInit().then(_0x3c1b35 => console.log(Object.keys(global.plugins)))["catch"](console.error);
global.reload = async (_0xf821b6, _0x3dfc52) => {
  if (/\.js$/.test(_0x3dfc52)) {
    let _0x414e00 = global.__filename(join(pluginFolder, _0x3dfc52), true);
    if (_0x3dfc52 in global.plugins) {
      if (existsSync(_0x414e00)) {
        conn.logger.info(" updated plugin - '" + _0x3dfc52 + "'");
      } else {
        conn.logger.warn("deleted plugin - '" + _0x3dfc52 + "'");
        return delete global.plugins[_0x3dfc52];
      }
    } else {
      conn.logger.info("new plugin - '" + _0x3dfc52 + "'");
    }
    let _0x4d93ae = _0x3d07db(readFileSync(_0x414e00), _0x3dfc52, {
      'sourceType': "module",
      'allowAwaitOutsideFunction': true
    });
    if (_0x4d93ae) {
      conn.logger.error("syntax error while loading '" + _0x3dfc52 + "'\n" + format(_0x4d93ae));
    } else {
      try {
        const _0x1a2d5c = await import(global.__filename(_0x414e00) + "?update=" + Date.now());
        global.plugins[_0x3dfc52] = _0x1a2d5c["default"] || _0x1a2d5c;
      } catch (_0x1679e0) {
        conn.logger.error("error require plugin '" + _0x3dfc52 + "\n" + format(_0x1679e0) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x25dc23], [_0x1fb405]) => _0x25dc23.localeCompare(_0x1fb405)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  let _0x13f010 = await Promise.all([spawn("ffmpeg"), spawn("ffprobe"), spawn("ffmpeg", ["-hide_banner", "-loglevel", "error", "-filter_complex", "color", "-frames:v", '1', '-f', "webp", '-']), spawn("convert"), spawn("magick"), spawn('gm'), spawn("find", ["--version"])].map(_0x296193 => {
    return Promise.race([new Promise(_0x1b2ec5 => {
      _0x296193.on("close", _0x4c6171 => {
        _0x1b2ec5(_0x4c6171 !== 0x7f);
      });
    }), new Promise(_0x1608cd => {
      _0x296193.on("error", _0x59ed18 => _0x1608cd(false));
    })]);
  }));
  let [_0x90d51, _0x2f978d, _0x9c9004, _0xe0aeb3, _0x559b87, _0x43a598, _0x56b231] = _0x13f010;
  console.log(_0x13f010);
  let _0x2cbc27 = global.support = {
    'ffmpeg': _0x90d51,
    'ffprobe': _0x2f978d,
    'ffmpegWebp': _0x9c9004,
    'convert': _0xe0aeb3,
    'magick': _0x559b87,
    'gm': _0x43a598,
    'find': _0x56b231
  };
  Object.freeze(global.support);
  if (!_0x2cbc27.ffmpeg) {
    conn.logger.warn("Please install ffmpeg for sending videos (pkg install ffmpeg)");
  }
  if (_0x2cbc27.ffmpeg && !_0x2cbc27.ffmpegWebp) {
    conn.logger.warn("Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)");
  }
  if (!_0x2cbc27.convert && !_0x2cbc27.magick && !_0x2cbc27.gm) {
    conn.logger.warn("Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)");
  }
}
_quickTest().then(() => conn.logger.info("Quick Test Done"))['catch'](console.error);

import { readFileSync, writeFileSync, existsSync } from 'fs';
const {
  initAuthCreds,
  BufferJSON,
  proto
} = (await import("@adiwajshing/baileys"))["default"];
function bind(_0x10e428) {
  if (!_0x10e428.chats) {
    _0x10e428.chats = {};
  }
  function _0x5d20d6(_0x374b03) {
    if (!_0x374b03) {
      return;
    }
    try {
      _0x374b03 = _0x374b03.contacts || _0x374b03;
      for (const _0x104cb0 of _0x374b03) {
        const _0x58508d = _0x10e428.decodeJid(_0x104cb0.id);
        if (!_0x58508d || _0x58508d === "status@broadcast") {
          continue;
        }
        let _0x3374ae = _0x10e428.chats[_0x58508d];
        if (!_0x3374ae) {
          _0x3374ae = _0x10e428.chats[_0x58508d] = {
            ..._0x104cb0,
            'id': _0x58508d
          };
        }
        _0x10e428.chats[_0x58508d] = {
          ..._0x3374ae,
          ...({
            ..._0x104cb0,
            'id': _0x58508d,
            ...(_0x58508d.endsWith("@g.us") ? {
              'subject': _0x104cb0.subject || _0x104cb0.name || _0x3374ae.subject || ''
            } : {
              'name': _0x104cb0.notify || _0x104cb0.name || _0x3374ae.name || _0x3374ae.notify || ''
            })
          } || {})
        };
      }
    } catch (_0x5cbffe) {
      console.error(_0x5cbffe);
    }
  }
  _0x10e428.ev.on('contacts.upsert', _0x5d20d6);
  _0x10e428.ev.on("groups.update", _0x5d20d6);
  _0x10e428.ev.on("contacts.set", _0x5d20d6);
  _0x10e428.ev.on("chats.set", async ({
    chats: _0x3b87c6
  }) => {
    try {
      for (let {
        id: _0x4b614f,
        name: _0x38d706,
        readOnly: _0x298dd8
      } of _0x3b87c6) {
        _0x4b614f = _0x10e428.decodeJid(_0x4b614f);
        if (!_0x4b614f || _0x4b614f === "status@broadcast") {
          continue;
        }
        const _0x3ba4a6 = _0x4b614f.endsWith("@g.us");
        let _0x471779 = _0x10e428.chats[_0x4b614f];
        if (!_0x471779) {
          _0x471779 = _0x10e428.chats[_0x4b614f] = {
            'id': _0x4b614f
          };
        }
        _0x471779.isChats = !_0x298dd8;
        if (_0x38d706) {
          _0x471779[_0x3ba4a6 ? 'subject' : "name"] = _0x38d706;
        }
        if (_0x3ba4a6) {
          const _0xd046b = await _0x10e428.groupMetadata(_0x4b614f)["catch"](_0x1f2a2b => null);
          if (_0x38d706 || _0xd046b?.["subject"]) {
            _0x471779.subject = _0x38d706 || _0xd046b.subject;
          }
          if (!_0xd046b) {
            continue;
          }
          _0x471779.metadata = _0xd046b;
        }
      }
    } catch (_0x53a900) {
      console.error(_0x53a900);
    }
  });
  _0x10e428.ev.on("group-participants.update", async function _0x156887({
    id: _0x1c6a11,
    participants: _0x2e794a,
    action: _0x436b83
  }) {
    if (!_0x1c6a11) {
      return;
    }
    _0x1c6a11 = _0x10e428.decodeJid(_0x1c6a11);
    if (_0x1c6a11 === "status@broadcast") {
      return;
    }
    if (!(_0x1c6a11 in _0x10e428.chats)) {
      _0x10e428.chats[_0x1c6a11] = {
        'id': _0x1c6a11
      };
    }
    let _0x2baa31 = _0x10e428.chats[_0x1c6a11];
    _0x2baa31.isChats = true;
    const _0x12ca3e = await _0x10e428.groupMetadata(_0x1c6a11)["catch"](_0x1909f7 => null);
    if (!_0x12ca3e) {
      return;
    }
    _0x2baa31.subject = _0x12ca3e.subject;
    _0x2baa31.metadata = _0x12ca3e;
  });
  _0x10e428.ev.on("groups.update", async function _0x1d2e7f(_0x5d3017) {
    try {
      for (const _0x2bbd0b of _0x5d3017) {
        const _0x12e3b1 = _0x10e428.decodeJid(_0x2bbd0b.id);
        if (!_0x12e3b1 || _0x12e3b1 === "status@broadcast") {
          continue;
        }
        const _0x8954d8 = _0x12e3b1.endsWith("@g.us");
        if (!_0x8954d8) {
          continue;
        }
        let _0x19d0b0 = _0x10e428.chats[_0x12e3b1];
        if (!_0x19d0b0) {
          _0x19d0b0 = _0x10e428.chats[_0x12e3b1] = {
            'id': _0x12e3b1
          };
        }
        _0x19d0b0.isChats = true;
        const _0x372768 = await _0x10e428.groupMetadata(_0x12e3b1)["catch"](_0x241739 => null);
        if (_0x372768) {
          _0x19d0b0.metadata = _0x372768;
        }
        if (_0x2bbd0b.subject || _0x372768?.["subject"]) {
          _0x19d0b0.subject = _0x2bbd0b.subject || _0x372768.subject;
        }
      }
    } catch (_0x4fa9e1) {
      console.error(_0x4fa9e1);
    }
  });
  _0x10e428.ev.on("chats.upsert", function _0x4da5c1(_0xc2bdca) {
    try {
      if (!_0x21b070 || _0x21b070 === 'status@broadcast') {
        return;
      }
      _0x10e428.chats[_0x21b070] = {
        ...(_0x10e428.chats[_0x21b070] || {}),
        ..._0xc2bdca,
        'isChats': true
      };
      const _0x56d08f = _0x21b070.endsWith('@g.us');
      if (_0x56d08f) {
        _0x10e428.insertAllGroup()["catch"](_0x5d10bb => null);
      }
    } catch (_0x3d27cc) {
      console.error(_0x3d27cc);
    }
  });
  _0x10e428.ev.on("presence.update", async function _0xfd970a({
    id: _0x1c91d7,
    presences: _0x110a97
  }) {
    try {
      const _0x2fdf49 = Object.keys(_0x110a97)[0x0] || _0x1c91d7;
      const _0x1d6b96 = _0x10e428.decodeJid(_0x2fdf49);
      const _0x55dca8 = _0x110a97[_0x2fdf49].lastKnownPresence || "composing";
      let _0x290534 = _0x10e428.chats[_0x1d6b96];
      if (!_0x290534) {
        _0x290534 = _0x10e428.chats[_0x1d6b96] = {
          'id': _0x2fdf49
        };
      }
      _0x290534.presences = _0x55dca8;
      if (_0x1c91d7.endsWith('@g.us')) {
        let _0x4f019f = _0x10e428.chats[_0x1c91d7];
        if (!_0x4f019f) {
          _0x4f019f = _0x10e428.chats[_0x1c91d7] = {
            'id': _0x1c91d7
          };
        }
      }
    } catch (_0x3f897f) {
      console.error(_0x3f897f);
    }
  });
}
const KEY_MAP = {
  'pre-key': "preKeys",
  'session': "sessions",
  'sender-key': "senderKeys",
  'app-state-sync-key': "appStateSyncKeys",
  'app-state-sync-version': 'appStateVersions',
  'sender-key-memory': "senderKeyMemory"
};
function useSingleFileAuthState(_0x32e5a9, _0x578cad) {
  let _0x1962c9;
  let _0x7edbd1 = {};
  let _0x30ff18 = 0x0;
  const _0x1c94be = _0x49df40 => {
    _0x578cad?.["trace"]("saving auth state");
    _0x30ff18++;
    if (_0x49df40 || _0x30ff18 > 0x5) {
      writeFileSync(_0x32e5a9, JSON.stringify({
        'creds': _0x1962c9,
        'keys': _0x7edbd1
      }, BufferJSON.replacer, 0x2));
      _0x30ff18 = 0x0;
    }
  };
  if (existsSync(_0x32e5a9)) {
    const _0x3de6f5 = JSON.parse(readFileSync(_0x32e5a9, {
      'encoding': 'utf-8'
    }), BufferJSON.reviver);
    _0x1962c9 = _0x3de6f5.creds;
    _0x7edbd1 = _0x3de6f5.keys;
  } else {
    _0x1962c9 = initAuthCreds();
    _0x7edbd1 = {};
  }
  return {
    'state': {
      'creds': _0x1962c9,
      'keys': {
        'get': (_0x23d14c, _0x49e12d) => {
          const _0x1a0c8b = KEY_MAP[_0x23d14c];
          return _0x49e12d.reduce((_0x28e837, _0x3ba5d1) => {
            let _0x34d366 = _0x7edbd1[_0x1a0c8b]?.[_0x3ba5d1];
            if (_0x34d366) {
              if (_0x23d14c === "app-state-sync-key") {
                _0x34d366 = proto.AppStateSyncKeyData.fromObject(_0x34d366);
              }
              _0x28e837[_0x3ba5d1] = _0x34d366;
            }
            return _0x28e837;
          }, {});
        },
        'set': _0x3e7dff => {
          for (const _0x349f6b in _0x3e7dff) {
            const _0x1e2cbc = KEY_MAP[_0x349f6b];
            _0x7edbd1[_0x1e2cbc] = _0x7edbd1[_0x1e2cbc] || {};
            Object.assign(_0x7edbd1[_0x1e2cbc], _0x3e7dff[_0x349f6b]);
          }
          _0x1c94be();
        }
      }
    },
    'saveState': _0x1c94be
  };
}
export default {
  'bind': bind,
  'useSingleFileAuthState': useSingleFileAuthState
};
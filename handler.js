import { smsg } from './lib/simple.js';
import { format } from 'util';
import { fileURLToPath } from 'url';
import _0xc0c16c, { join } from 'path';
import { unwatchFile, watchFile } from 'fs';
import _0xc11f01 from 'chalk';
import 'fs';
import 'knights-canvas';
import 'node-fetch';
const delay = _0x3e5944 => typeof _0x3e5944 === "number" && !isNaN(_0x3e5944) && new Promise(_0x2e1262 => setTimeout(function () {
  clearTimeout(this);
  _0x2e1262();
}, _0x3e5944));
export async function handler(_0x1d4503) {
  this.msgqueque = this.msgqueque || [];
  if (!_0x1d4503) {
    return;
  }
  this.pushMessage(_0x1d4503.messages)["catch"](console.error);
  let _0x22e380 = _0x1d4503.messages[_0x1d4503.messages.length - 0x1];
  if (!_0x22e380) {
    return;
  }
  if (global.db.data == null) {
    await global.loadDatabase();
  }
  try {
    _0x22e380 = smsg(this, _0x22e380) || _0x22e380;
    if (!_0x22e380) {
      return;
    }
    _0x22e380.exp = 0x0;
    _0x22e380.limit = false;
    try {
      let _0xa38117 = global.db.data.users[_0x22e380.sender];
      if (typeof _0xa38117 !== "object") {
        global.db.data.users[_0x22e380.sender] = {};
      }
      if (_0xa38117) {
        if (!(typeof _0xa38117.exp === "number" && !isNaN(_0xa38117.exp))) {
          _0xa38117.exp = 0x0;
        }
        if (!(typeof _0xa38117.limit === "number" && !isNaN(_0xa38117.limit))) {
          _0xa38117.limit = 0x19;
        }
        if (!(typeof _0xa38117.lastclaim === "number" && !isNaN(_0xa38117.lastclaim))) {
          _0xa38117.lastclaim = 0x0;
        }
        if (!(typeof _0xa38117.pasangan === "number" && !isNaN(_0xa38117.pasangan))) {
          _0xa38117.pasangan = '';
        }
        if (!("registered" in _0xa38117)) {
          _0xa38117.registered = false;
        }
        if (!_0xa38117.registered) {
          if (!('name' in _0xa38117)) {
            _0xa38117.name = _0x22e380.name;
          }
          if (!(typeof _0xa38117.age === "number" && !isNaN(_0xa38117.age))) {
            _0xa38117.age = -0x1;
          }
          if (!(typeof _0xa38117.regTime === "number" && !isNaN(_0xa38117.regTime))) {
            _0xa38117.regTime = -0x1;
          }
        }
        if (!(typeof _0xa38117.afk === "number" && !isNaN(_0xa38117.afk))) {
          _0xa38117.afk = -0x1;
        }
        if (!("afkReason" in _0xa38117)) {
          _0xa38117.afkReason = '';
        }
        if (!("banned" in _0xa38117)) {
          _0xa38117.banned = false;
        }
        if (!(typeof _0xa38117.warn === "number" && !isNaN(_0xa38117.warn))) {
          _0xa38117.warn = 0x0;
        }
        if (!(typeof _0xa38117.level === "number" && !isNaN(_0xa38117.level))) {
          _0xa38117.level = 0x0;
        }
        if (!("role" in _0xa38117)) {
          _0xa38117.role = "Beginner";
        }
        if (!('autolevelup' in _0xa38117)) {
          _0xa38117.autolevelup = true;
        }
        if (!(typeof _0xa38117.money === "number" && !isNaN(_0xa38117.money))) {
          _0xa38117.money = 0x0;
        }
        if (!(typeof _0xa38117.atm === "number" && !isNaN(_0xa38117.atm))) {
          _0xa38117.atm = 0x0;
        }
        if (!(typeof _0xa38117.fullatm === "number" && !isNaN(_0xa38117.fullatm))) {
          _0xa38117.fullatm = 0x0;
        }
        if (!(typeof _0xa38117.bank === "number" && !isNaN(_0xa38117.bank))) {
          _0xa38117.bank = 0x0;
        }
        if (!(typeof _0xa38117.health === "number" && !isNaN(_0xa38117.health))) {
          _0xa38117.health = 0x64;
        }
        if (!(typeof _0xa38117.potion === "number" && !isNaN(_0xa38117.potion))) {
          _0xa38117.potion = 0x0;
        }
        if (!(typeof _0xa38117.trash === "number" && !isNaN(_0xa38117.trash))) {
          _0xa38117.trash = 0x0;
        }
        if (!(typeof _0xa38117.wood === "number" && !isNaN(_0xa38117.wood))) {
          _0xa38117.wood = 0x0;
        }
        if (!(typeof _0xa38117.rock === "number" && !isNaN(_0xa38117.rock))) {
          _0xa38117.rock = 0x0;
        }
        if (!(typeof _0xa38117.string === "number" && !isNaN(_0xa38117.string))) {
          _0xa38117.string = 0x0;
        }
        if (!(typeof _0xa38117.petFood === "number" && !isNaN(_0xa38117.petFood))) {
          _0xa38117.petFood = 0x0;
        }
        if (!(typeof _0xa38117.emerald === "number" && !isNaN(_0xa38117.emerald))) {
          _0xa38117.emerald = 0x1;
        }
        if (!(typeof _0xa38117.diamond === "number" && !isNaN(_0xa38117.diamond))) {
          _0xa38117.diamond = 0x0;
        }
        if (!(typeof _0xa38117.gold === "number" && !isNaN(_0xa38117.gold))) {
          _0xa38117.gold = 0x0;
        }
        if (!(typeof _0xa38117.iron === "number" && !isNaN(_0xa38117.iron))) {
          _0xa38117.iron = 0x0;
        }
        if (!(typeof _0xa38117.upgrader === "number" && !isNaN(_0xa38117.upgrader))) {
          _0xa38117.upgrader = 0x0;
        }
        if (!(typeof _0xa38117.common === "number" && !isNaN(_0xa38117.common))) {
          _0xa38117.common = 0x0;
        }
        if (!(typeof _0xa38117.uncommon === "number" && !isNaN(_0xa38117.uncommon))) {
          _0xa38117.uncommon = 0x0;
        }
        if (!(typeof _0xa38117.mythic === "number" && !isNaN(_0xa38117.mythic))) {
          _0xa38117.mythic = 0x0;
        }
        if (!(typeof _0xa38117.legendary === "number" && !isNaN(_0xa38117.legendary))) {
          _0xa38117.legendary = 0x0;
        }
        if (!(typeof _0xa38117.superior === "number" && !isNaN(_0xa38117.superior))) {
          _0xa38117.superior = 0x0;
        }
        if (!(typeof _0xa38117.pet === "number" && !isNaN(_0xa38117.pet))) {
          _0xa38117.pet = 0x0;
        }
        if (!(typeof _0xa38117.horse === "number" && !isNaN(_0xa38117.horse))) {
          _0xa38117.horse = 0x0;
        }
        if (!(typeof _0xa38117.horseexp === "number" && !isNaN(_0xa38117.horseexp))) {
          _0xa38117.horseexp = 0x0;
        }
        if (!(typeof _0xa38117.cat === "number" && !isNaN(_0xa38117.cat))) {
          _0xa38117.cat = 0x0;
        }
        if (!(typeof _0xa38117.catexp === "number" && !isNaN(_0xa38117.catexp))) {
          _0xa38117.catexp = 0x0;
        }
        if (!(typeof _0xa38117.fox === "number" && !isNaN(_0xa38117.fox))) {
          _0xa38117.fox = 0x0;
        }
        if (!(typeof _0xa38117.foxhexp === "number" && !isNaN(_0xa38117.foxhexp))) {
          _0xa38117.foxexp = 0x0;
        }
        if (!(typeof _0xa38117.dog === "number" && !isNaN(_0xa38117.dog))) {
          _0xa38117.dog = 0x0;
        }
        if (!(typeof _0xa38117.dogexp === "number" && !isNaN(_0xa38117.dogexp))) {
          _0xa38117.dogexp = 0x0;
        }
        if (!(typeof _0xa38117.robo === "number" && !isNaN(_0xa38117.robo))) {
          _0xa38117.robo = 0x0;
        }
        if (!(typeof _0xa38117.roboxp === "number" && !isNaN(_0xa38117.roboxp))) {
          _0xa38117.roboxp = 0x0;
        }
        if (!(typeof _0xa38117.horselastfeed === "number" && !isNaN(_0xa38117.horselastfeed))) {
          _0xa38117.horselastfeed = 0x0;
        }
        if (!(typeof _0xa38117.catlastfeed === "number" && !isNaN(_0xa38117.catlastfeed))) {
          _0xa38117.catlastfeed = 0x0;
        }
        if (!(typeof _0xa38117.foxlastfeed === "number" && !isNaN(_0xa38117.foxlastfeed))) {
          _0xa38117.foxlastfeed = 0x0;
        }
        if (!(typeof _0xa38117.doglastfeed === "number" && !isNaN(_0xa38117.doglastfeed))) {
          _0xa38117.doglastfeed = 0x0;
        }
        if (!(typeof _0xa38117.armor === "number" && !isNaN(_0xa38117.armor))) {
          _0xa38117.armor = 0x0;
        }
        if (!(typeof _0xa38117.armordurability === "number" && !isNaN(_0xa38117.armordurability))) {
          _0xa38117.armordurability = 0x0;
        }
        if (!(typeof _0xa38117.sword === "number" && !isNaN(_0xa38117.sword))) {
          _0xa38117.sword = 0x0;
        }
        if (!(typeof _0xa38117.sworddurability === "number" && !isNaN(_0xa38117.sworddurability))) {
          _0xa38117.sworddurability = 0x0;
        }
        if (!(typeof _0xa38117.pickaxe === "number" && !isNaN(_0xa38117.pickaxe))) {
          _0xa38117.pickaxe = 0x0;
        }
        if (!(typeof _0xa38117.pickaxedurability === "number" && !isNaN(_0xa38117.pickaxedurability))) {
          _0xa38117.pickaxedurability = 0x0;
        }
        if (!(typeof _0xa38117.fishingrod === "number" && !isNaN(_0xa38117.fishingrod))) {
          _0xa38117.fishingrod = 0x0;
        }
        if (!(typeof _0xa38117.fishingroddurability === "number" && !isNaN(_0xa38117.fishingroddurability))) {
          _0xa38117.fishingroddurability = 0x0;
        }
        if (!(typeof _0xa38117.lastclaim === "number" && !isNaN(_0xa38117.lastclaim))) {
          _0xa38117.lastclaim = 0x0;
        }
        if (!(typeof _0xa38117.lastadventure === "number" && !isNaN(_0xa38117.lastadventure))) {
          _0xa38117.lastadventure = 0x0;
        }
        if (!(typeof _0xa38117.lastfishing === "number" && !isNaN(_0xa38117.lastfishing))) {
          _0xa38117.lastfishing = 0x0;
        }
        if (!(typeof _0xa38117.lastdungeon === "number" && !isNaN(_0xa38117.lastdungeon))) {
          _0xa38117.lastdungeon = 0x0;
        }
        if (!(typeof _0xa38117.lastduel === "number" && !isNaN(_0xa38117.lastduel))) {
          _0xa38117.lastduel = 0x0;
        }
        if (!(typeof _0xa38117.lastmining === "number" && !isNaN(_0xa38117.lastmining))) {
          _0xa38117.lastmining = 0x0;
        }
        if (!(typeof _0xa38117.lasthunt === "number" && !isNaN(_0xa38117.lasthunt))) {
          _0xa38117.lasthunt = 0x0;
        }
        if (!(typeof _0xa38117.lastweekly === "number" && !isNaN(_0xa38117.lastweekly))) {
          _0xa38117.lastweekly = 0x0;
        }
        if (!(typeof _0xa38117.lastmonthly === "number" && !isNaN(_0xa38117.lastmonthly))) {
          _0xa38117.lastmonthly = 0x0;
        }
        if (!(typeof _0xa38117.lastbunga === "number" && !isNaN(_0xa38117.lastbunga))) {
          _0xa38117.lastbunga = 0x0;
        }
        if (!(typeof _0xa38117.premium === "number" && !isNaN(_0xa38117.premium))) {
          _0xa38117.premium = false;
        }
        if (!(typeof _0xa38117.premiumTime === "number" && !isNaN(_0xa38117.premiumTime))) {
          _0xa38117.premiumTime = 0x0;
        }
        if (!(typeof _0xa38117.limitjoin === "number" && !isNaN(_0xa38117.limitjoin))) {
          _0xa38117.limitjoin = 0x0;
        }
      } else {
        global.db.data.users[_0x22e380.sender] = {
          'exp': 0x0,
          'limit': 0x19,
          'lastclaim': 0x0,
          'registered': false,
          'name': _0x22e380.name,
          'pasangan': '',
          'age': -0x1,
          'regTime': -0x1,
          'afk': -0x1,
          'afkReason': '',
          'banned': false,
          'warn': 0x0,
          'level': 0x0,
          'role': "Beginner",
          'autolevelup': true,
          'money': 0x0,
          'bank': 0x0,
          'atm': 0x0,
          'fullatm': 0x0,
          'health': 0x64,
          'potion': 0xa,
          'trash': 0x0,
          'wood': 0x0,
          'rock': 0x0,
          'string': 0x0,
          'emerald': 0x1,
          'diamond': 0x0,
          'gold': 0x0,
          'iron': 0x0,
          'upgrader': 0x0,
          'common': 0x0,
          'uncommon': 0x0,
          'mythic': 0x0,
          'legendary': 0x0,
          'superior': 0x0,
          'pet': 0x0,
          'horse': 0x0,
          'horseexp': 0x0,
          'cat': 0x0,
          'catngexp': 0x0,
          'fox': 0x0,
          'foxexp': 0x0,
          'dog': 0x0,
          'dogexp': 0x0,
          'horselastfeed': 0x0,
          'catlastfeed': 0x0,
          'foxlastfeed': 0x0,
          'doglastfeed': 0x0,
          'armor': 0x0,
          'armordurability': 0x0,
          'sword': 0x0,
          'sworddurability': 0x0,
          'pickaxe': 0x0,
          'pickaxedurability': 0x0,
          'fishingrod': 0x0,
          'fishingroddurability': 0x0,
          'lastclaim': 0x0,
          'lastadventure': 0x0,
          'lastfishing': 0x0,
          'lastdungeon': 0x0,
          'lastduel': 0x0,
          'lastmining': 0x0,
          'lasthunt': 0x0,
          'lastweekly': 0x0,
          'lastmonthly': 0x0,
          'lastbunga': 0x0,
          'premium': false,
          'premiumTime': 0x0,
          'limitjoin': 0x0
        };
      }
      let _0x5ba723 = global.db.data.chats[_0x22e380.chat];
      if (typeof _0x5ba723 !== "object") {
        global.db.data.chats[_0x22e380.chat] = {};
      }
      if (_0x5ba723) {
        if (!("isBanned" in _0x5ba723)) {
          _0x5ba723.isBanned = false;
        }
        if (!("welcome" in _0x5ba723)) {
          _0x5ba723.welcome = true;
        }
        if (!('detect' in _0x5ba723)) {
          _0x5ba723.detect = false;
        }
        if (!("sWelcome" in _0x5ba723)) {
          _0x5ba723.sWelcome = '';
        }
        if (!('sBye' in _0x5ba723)) {
          _0x5ba723.sBye = '';
        }
        if (!("sPromote" in _0x5ba723)) {
          _0x5ba723.sPromote = '';
        }
        if (!('sDemote' in _0x5ba723)) {
          _0x5ba723.sDemote = '';
        }
        if (!("delete" in _0x5ba723)) {
          _0x5ba723['delete'] = true;
        }
        if (!("antiLink" in _0x5ba723)) {
          _0x5ba723.antiLink = false;
        }
        if (!("viewonce" in _0x5ba723)) {
          _0x5ba723.viewonce = false;
        }
        if (!('antiToxic' in _0x5ba723)) {
          _0x5ba723.antiToxic = false;
        }
        if (!("simi" in _0x5ba723)) {
          _0x5ba723.simi = false;
        }
        if (!('autosticker' in _0x5ba723)) {
          _0x5ba723.autosticker = false;
        }
        if (!("premium" in _0x5ba723)) {
          _0x5ba723.premium = false;
        }
        if (!("onlyenglish" in _0x5ba723)) {
          _0x5ba723.onlyLatinos = false;
        }
        if (!("premiumTime" in _0x5ba723)) {
          _0x5ba723.premiumTime = false;
        }
        if (!("premnsfw" in _0x5ba723)) {
          _0x5ba723.premnsfw = false;
        }
        if (!(typeof _0x5ba723.expired === "number" && !isNaN(_0x5ba723.expired))) {
          _0x5ba723.expired = 0x0;
        }
      } else {
        global.db.data.chats[_0x22e380.chat] = {
          'isBanned': false,
          'welcome': true,
          'detect': false,
          'sWelcome': '',
          'sBye': '',
          'sPromote': '',
          'sDemote': '',
          'delete': true,
          'antiLink': false,
          'viewonce': false,
          'antiToxic': true,
          'simi': false,
          'expired': 0x0,
          'onlyenglish': false,
          'autosticker': false,
          'premium': false,
          'premiumTime': false,
          'premnsfw': false
        };
      }
      let _0x2deda4 = global.db.data.settings[this.user.jid];
      if (typeof _0x2deda4 !== "object") {
        global.db.data.settings[this.user.jid] = {};
      }
      if (_0x2deda4) {
        if (!("self" in _0x2deda4)) {
          _0x2deda4.self = false;
        }
        if (!("autoread" in _0x2deda4)) {
          _0x2deda4.autoread = false;
        }
        if (!("restrict" in _0x2deda4)) {
          _0x2deda4.restrict = false;
        }
        if (!('anticall' in _0x2deda4)) {
          _0x2deda4.anticall = true;
        }
        if (!('autorestart' in _0x2deda4)) {
          _0x2deda4.autorestart = false;
        }
        if (!("restartDB" in _0x2deda4)) {
          _0x2deda4.restartDB = 0x0;
        }
      } else {
        global.db.data.settings[this.user.jid] = {
          'self': false,
          'autoread': false,
          'autorestart': false,
          'anticall': true,
          'restartDB': 0x0,
          'restrict': false
        };
      }
    } catch (_0xe1650b) {
      console.error(_0xe1650b);
    }
    if (opts.nyimak) {
      return;
    }
    if (!_0x22e380.fromMe && opts.self) {
      return;
    }
    if (opts.pconly && _0x22e380.chat.endsWith("g.us")) {
      return;
    }
    if (opts.gconly && !_0x22e380.chat.endsWith("g.us")) {
      return;
    }
    if (opts.swonly && _0x22e380.chat !== 'status@broadcast') {
      return;
    }
    if (typeof _0x22e380.text !== 'string') {
      _0x22e380.text = '';
    }
    const _0x123322 = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([_0x5b572f]) => _0x5b572f)].map(_0x5d700e => _0x5d700e.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x22e380.sender);
    const _0x4ca82c = _0x123322 || _0x22e380.fromMe;
    const _0x283920 = _0x4ca82c || global.mods.map(_0x5649e0 => _0x5649e0.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x22e380.sender);
    const _0x4d05b0 = _0x123322 || db.data.users[_0x22e380.sender].premiumTime > 0x0;
    if (opts.queque && _0x22e380.text && !(_0x283920 || _0x4d05b0)) {
      let _0x9dde6b = this.msgqueque;
      const _0x2d325b = _0x9dde6b[_0x9dde6b.length - 0x1];
      _0x9dde6b.push(_0x22e380.id || _0x22e380.key.id);
      setInterval(async function () {
        if (_0x9dde6b.indexOf(_0x2d325b) === -0x1) {
          clearInterval(this);
        }
        await delay(5000);
      }, 5000);
    }
    if (_0x22e380.isBaileys) {
      return;
    }
    _0x22e380.exp += Math.ceil(Math.random() * 0xa);
    let _0x24c91b;
    let _0x529b0f = global.db.data && global.db.data.users && global.db.data.users[_0x22e380.sender];
    const _0x30e298 = (_0x22e380.isGroup ? (conn.chats[_0x22e380.chat] || {}).metadata || (await this.groupMetadata(_0x22e380.chat)["catch"](_0x53905f => null)) : {}) || {};
    const _0x4f93e3 = (_0x22e380.isGroup ? _0x30e298.participants : []) || [];
    const _0x2ff05c = (_0x22e380.isGroup ? _0x4f93e3.find(_0x3b77d6 => conn.decodeJid(_0x3b77d6.id) === _0x22e380.sender) : {}) || {};
    const _0x246ee6 = (_0x22e380.isGroup ? _0x4f93e3.find(_0x1a2f24 => conn.decodeJid(_0x1a2f24.id) == this.user.jid) : {}) || {};
    const _0x2819a9 = _0x2ff05c?.["admin"] == "superadmin" || false;
    const _0xc1b0a3 = _0x2819a9 || _0x2ff05c?.["admin"] == 'admin' || false;
    const _0x5b20ca = _0x246ee6?.['admin'] || false;
    const _0xb49fce = _0xc0c16c.join(_0xc0c16c.dirname(fileURLToPath(import.meta.url)), "./plugins");
    for (let _0x42d2e6 in global.plugins) {
      let _0x38fc28 = global.plugins[_0x42d2e6];
      if (!_0x38fc28) {
        continue;
      }
      if (_0x38fc28.disabled) {
        continue;
      }
      const _0x4b90d3 = join(_0xb49fce, _0x42d2e6);
      if (typeof _0x38fc28.all === "function") {
        try {
          await _0x38fc28.all.call(this, _0x22e380, {
            'chatUpdate': _0x1d4503,
            '__dirname': _0xb49fce,
            '__filename': _0x4b90d3
          });
        } catch (_0x3f3004) {
          console.error(_0x3f3004);
          for (let [_0x39bda2] of global.owner.filter(([_0x15fd05, _0x138ce6, _0x20d373]) => _0x20d373 && _0x15fd05)) {
            let _0x138a8b = (await conn.onWhatsApp(_0x39bda2))[0x0] || {};
            if (_0x138a8b.exists) {
              _0x22e380.reply(("*Plugin:* " + _0x42d2e6 + "\n*Sender:* " + _0x22e380.sender + "\n*Chat:* " + _0x22e380.chat + "\n*Command:* " + _0x22e380.text + "\n\n```" + format(_0x3f3004) + "```").trim(), _0x138a8b.jid);
            }
          }
        }
      }
      if (!opts.restrict) {
        if (_0x38fc28.tags && _0x38fc28.tags.includes("admin")) {
          continue;
        }
      }
      let _0x130946 = _0x38fc28.customPrefix ? _0x38fc28.customPrefix : conn.prefix ? conn.prefix : global.prefix;
      let _0x1996c0 = (_0x130946 instanceof RegExp ? [[_0x130946.exec(_0x22e380.text), _0x130946]] : Array.isArray(_0x130946) ? _0x130946.map(_0x1c90a0 => {
        let _0x3d4a79 = _0x1c90a0 instanceof RegExp ? _0x1c90a0 : new RegExp(_0x1c90a0.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
        return [_0x3d4a79.exec(_0x22e380.text), _0x3d4a79];
      }) : typeof _0x130946 === 'string' ? [[new RegExp(_0x130946.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")).exec(_0x22e380.text), new RegExp(_0x130946.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"))]] : [[[], new RegExp()]]).find(_0x30c04c => _0x30c04c[0x1]);
      if (typeof _0x38fc28.before === "function") {
        if (await _0x38fc28.before.call(this, _0x22e380, {
          'match': _0x1996c0,
          'conn': this,
          'participants': _0x4f93e3,
          'groupMetadata': _0x30e298,
          'user': _0x2ff05c,
          'bot': _0x246ee6,
          'isROwner': _0x123322,
          'isOwner': _0x4ca82c,
          'isRAdmin': _0x2819a9,
          'isAdmin': _0xc1b0a3,
          'isBotAdmin': _0x5b20ca,
          'isPrems': _0x4d05b0,
          'chatUpdate': _0x1d4503,
          '__dirname': _0xb49fce,
          '__filename': _0x4b90d3
        })) {
          continue;
        }
      }
      if (typeof _0x38fc28 !== 'function') {
        continue;
      }
      if (_0x24c91b = (_0x1996c0[0x0] || '')[0x0]) {
        let _0x1f47a1 = _0x22e380.text.replace(_0x24c91b, '');
        let [_0x6002a2, ..._0x61b545] = _0x1f47a1.trim().split` `.filter(_0x1241b0 => _0x1241b0);
        _0x61b545 = _0x61b545 || [];
        let _0x4b385b = _0x1f47a1.trim().split` `.slice(0x1);
        let _0x4c3745 = _0x4b385b.join` `;
        _0x6002a2 = (_0x6002a2 || '').toLowerCase();
        let _0x4c020b = _0x38fc28.fail || global.dfail;
        let _0x58ea4e = _0x38fc28.command instanceof RegExp ? _0x38fc28.command.test(_0x6002a2) : Array.isArray(_0x38fc28.command) ? _0x38fc28.command.some(_0xaa257a => _0xaa257a instanceof RegExp ? _0xaa257a.test(_0x6002a2) : _0xaa257a === _0x6002a2) : typeof _0x38fc28.command === "string" ? _0x38fc28.command === _0x6002a2 : false;
        if (!_0x58ea4e) {
          continue;
        }
        _0x22e380.plugin = _0x42d2e6;
        if (_0x22e380.chat in global.db.data.chats || _0x22e380.sender in global.db.data.users) {
          let _0x348f49 = global.db.data.chats[_0x22e380.chat];
          let _0x244a81 = global.db.data.users[_0x22e380.sender];
          if (_0x42d2e6 != "owner-unbanchat.js" && _0x42d2e6 != "owner-exec.js" && _0x42d2e6 != 'owner-exec2.js' && _0x42d2e6 != "tool-delete.js" && _0x348f49?.["isBanned"]) {
            return;
          }
          if (_0x42d2e6 != 'owner-unbanuser.js' && _0x244a81?.["banned"]) {
            return;
          }
        }
        if (_0x38fc28.rowner && _0x38fc28.owner && !(_0x123322 || _0x4ca82c)) {
          _0x4c020b("owner", _0x22e380, this);
          continue;
        }
        if (_0x38fc28.rowner && !_0x123322) {
          _0x4c020b("rowner", _0x22e380, this);
          continue;
        }
        if (_0x38fc28.owner && !_0x4ca82c) {
          _0x4c020b('owner', _0x22e380, this);
          continue;
        }
        if (_0x38fc28.mods && !_0x283920) {
          _0x4c020b("mods", _0x22e380, this);
          continue;
        }
        if (_0x38fc28.premium && !_0x4d05b0) {
          _0x4c020b('premium', _0x22e380, this);
          continue;
        }
        if (_0x38fc28.group && !_0x22e380.isGroup) {
          _0x4c020b("group", _0x22e380, this);
          continue;
        } else {
          if (_0x38fc28.botAdmin && !_0x5b20ca) {
            _0x4c020b("botAdmin", _0x22e380, this);
            continue;
          } else {
            if (_0x38fc28.admin && !_0xc1b0a3) {
              _0x4c020b('admin', _0x22e380, this);
              continue;
            }
          }
        }
        if (_0x38fc28['private'] && _0x22e380.isGroup) {
          _0x4c020b("private", _0x22e380, this);
          continue;
        }
        if (_0x38fc28.register == true && _0x529b0f.registered == false) {
          _0x4c020b("unreg", _0x22e380, this);
          continue;
        }
        _0x22e380.isCommand = true;
        let _0x3927ae = "exp" in _0x38fc28 ? parseInt(_0x38fc28.exp) : 0x11;
        if (_0x3927ae > 0xc8) {
          _0x22e380.reply("chirrido -_-");
        } else {
          _0x22e380.exp += _0x3927ae;
        }
        if (!_0x4d05b0 && _0x38fc28.diamond && global.db.data.users[_0x22e380.sender].diamond < _0x38fc28.diamond * 0x1) {
          this.reply(_0x22e380.chat, "\uD83C\uDFAFYour Diamonds Ran Out \n Use The Following Command To Buy More Diamonds \n*" + _0x24c91b + "ToDiamond* <amount", _0x22e380);
          continue;
        }
        if (_0x38fc28.level > _0x529b0f.level) {
          this.reply(_0x22e380.chat, "\uD83C\uDFAFRequired Level " + _0x38fc28.level + " To Use This Command. \nYour Level " + _0x529b0f.level, _0x22e380);
          continue;
        }
        let _0x546761 = {
          'match': _0x1996c0,
          'usedPrefix': _0x24c91b,
          'noPrefix': _0x1f47a1,
          '_args': _0x4b385b,
          'args': _0x61b545,
          'command': _0x6002a2,
          'text': _0x4c3745,
          'conn': this,
          'participants': _0x4f93e3,
          'groupMetadata': _0x30e298,
          'user': _0x2ff05c,
          'bot': _0x246ee6,
          'isROwner': _0x123322,
          'isOwner': _0x4ca82c,
          'isRAdmin': _0x2819a9,
          'isAdmin': _0xc1b0a3,
          'isBotAdmin': _0x5b20ca,
          'isPrems': _0x4d05b0,
          'chatUpdate': _0x1d4503,
          '__dirname': _0xb49fce,
          '__filename': _0x4b90d3
        };
        try {
          await _0x38fc28.call(this, _0x22e380, _0x546761);
          if (!_0x4d05b0) {
            _0x22e380.diamond = _0x22e380.diamond || _0x38fc28.diamond || false;
          }
        } catch (_0xefebab) {
          _0x22e380.error = _0xefebab;
          console.error(_0xefebab);
          if (_0xefebab) {
            let _0x32af4f = format(_0xefebab);
            for (let _0x479026 of Object.values(global.APIKeys)) _0x32af4f = _0x32af4f.replace(new RegExp(_0x479026, 'g'), "#HIDDEN#");
            if (_0xefebab.name) {
              for (let [_0x1ee812] of global.owner.filter(([_0x101544, _0x22f00b, _0x777ac8]) => _0x777ac8 && _0x101544)) {
                let _0x2b1d23 = (await conn.onWhatsApp(_0x1ee812))[0x0] || {};
                if (_0x2b1d23.exists) {
                  _0x22e380.reply(("*\uD83D\uDDC2\uFE0F Plugin:* " + _0x22e380.plugin + "\n*\uD83D\uDC64 Sender:* " + _0x22e380.sender + "\n*\uD83D\uDCAC Chat:* " + _0x22e380.chat + "\n*\uD83D\uDCBB Command:* " + _0x24c91b + _0x6002a2 + " " + _0x61b545.join(" ") + "\n\uD83D\uDCC4 *Error Logs:*\n\n```" + _0x32af4f + '```').trim(), _0x2b1d23.jid);
                }
              }
            }
            _0x22e380.reply(_0x32af4f);
          }
        } finally {
          if (typeof _0x38fc28.after === "function") {
            try {
              await _0x38fc28.after.call(this, _0x22e380, _0x546761);
            } catch (_0x5ec043) {
              console.error(_0x5ec043);
            }
          }
          if (_0x22e380.diamond) {
            _0x22e380.reply("Consumed *" + +_0x22e380.diamond + "* \uD83D\uDC8E");
          }
        }
        break;
      }
    }
  } catch (_0x49bb96) {
    console.error(_0x49bb96);
  } finally {
    if (opts.queque && _0x22e380.text) {
      const _0x4b3551 = this.msgqueque.indexOf(_0x22e380.id || _0x22e380.key.id);
      if (_0x4b3551 !== -0x1) {
        this.msgqueque.splice(_0x4b3551, 0x1);
      }
    }
    let _0x3c36c1;
    let _0x161ae5 = global.db.data.stats;
    if (_0x22e380) {
      if (_0x22e380.sender && (_0x3c36c1 = global.db.data.users[_0x22e380.sender])) {
        _0x3c36c1.exp += _0x22e380.exp;
        _0x3c36c1.limit -= _0x22e380.limit * 0x1;
      }
      let _0x299316;
      if (_0x22e380.plugin) {
        let _0xc25e29 = +new Date();
        if (_0x22e380.plugin in _0x161ae5) {
          _0x299316 = _0x161ae5[_0x22e380.plugin];
          if (!(typeof _0x299316.total === "number" && !isNaN(_0x299316.total))) {
            _0x299316.total = 0x1;
          }
          if (!(typeof _0x299316.success === "number" && !isNaN(_0x299316.success))) {
            _0x299316.success = _0x22e380.error != null ? 0x0 : 0x1;
          }
          if (!(typeof _0x299316.last === "number" && !isNaN(_0x299316.last))) {
            _0x299316.last = _0xc25e29;
          }
          if (!(typeof _0x299316.lastSuccess === "number" && !isNaN(_0x299316.lastSuccess))) {
            _0x299316.lastSuccess = _0x22e380.error != null ? 0x0 : _0xc25e29;
          }
        } else {
          _0x299316 = _0x161ae5[_0x22e380.plugin] = {
            'total': 0x1,
            'success': _0x22e380.error != null ? 0x0 : 0x1,
            'last': _0xc25e29,
            'lastSuccess': _0x22e380.error != null ? 0x0 : _0xc25e29
          };
        }
        _0x299316.total += 0x1;
        _0x299316.last = _0xc25e29;
        if (_0x22e380.error == null) {
          _0x299316.success += 0x1;
          _0x299316.lastSuccess = _0xc25e29;
        }
      }
    }
    try {
      if (!opts.noprint) {
        await (await import("./lib/print.js"))["default"](_0x22e380, this);
      }
    } catch (_0x1920e1) {
      console.log(_0x22e380, _0x22e380.quoted, _0x1920e1);
    }
    if (opts.autoread) {
      await this.chatRead(_0x22e380.chat, _0x22e380.isGroup ? _0x22e380.sender : undefined, _0x22e380.id || _0x22e380.key.id)['catch'](() => {});
    }
  }
}
export async function participantsUpdate({
  id: _0x24ccab,
  participants: _0x2455a9,
  action: _0x5d3294
}) {
  if (opts.self) {
    return;
  }
  if (this.isInit) {
    return;
  }
  if (global.db.data == null) {
    await loadDatabase();
  }
  let _0xc75824 = global.db.data.chats[_0x24ccab] || {};
  let _0x20f265 = '';
  switch (_0x5d3294) {
    case 'add':
    case "remove":
      if (_0xc75824.welcome) {
        let _0x913ba7 = (await this.groupMetadata(_0x24ccab)) || (conn.chats[_0x24ccab] || {}).metadata;
        for (let _0x569ae9 of _0x2455a9) {
          let _0x45deec = 'https://i.ibb.co/WyR2Bff/Chuti-Sudu-MD.jpg';
          let _0x3f3840 = "https://i.ibb.co/WyR2Bff/Chuti-Sudu-MD.jpg";
          try {
            _0x45deec = await this.profilePictureUrl(_0x569ae9, "image");
            _0x3f3840 = await this.profilePictureUrl(_0x24ccab, 'image');
          } finally {
            _0x20f265 = (_0x5d3294 === 'add' ? (_0xc75824.sWelcome || this.welcome || conn.welcome || "Welcome, @user").replace("@group", await this.getName(_0x24ccab)).replace("@desc", _0x913ba7.desc?.["toString"]() || "Desconocido") : _0xc75824.sBye || this.bye || conn.bye || "HELLO, @user").replace('@user', '@' + _0x569ae9.split('@')[0x0]);
            let _0x963388 = API("fgmods", '/api/welcome', {
              'username': await this.getName(_0x569ae9),
              'groupname': await this.getName(_0x24ccab),
              'groupicon': _0x3f3840,
              'membercount': _0x913ba7.participants.length,
              'profile': _0x45deec,
              'background': 'https://i.imgur.com/bbWbASn.jpg'
            }, 'apikey');
            let _0x290a71 = API('fgmods', "/api/goodbye", {
              'username': await this.getName(_0x569ae9),
              'groupname': await this.getName(_0x24ccab),
              'groupicon': _0x3f3840,
              'membercount': _0x913ba7.participants.length,
              'profile': _0x45deec,
              'background': 'https://i.imgur.com/klTSO3d.jpg'
            }, 'apikey');
            this.sendFile(_0x24ccab, _0x5d3294 === "add" ? _0x963388 : _0x290a71, 'pp.jpg', _0x20f265, null, false, {
              'mentions': [_0x569ae9]
            });
          }
        }
      }
      break;
    case "promote":
    case "promover":
      _0x20f265 = _0xc75824.sPromote || this.spromote || conn.spromote || "@user is now administrador";
    case "demote":
    case "degradar":
      if (!_0x20f265) {
        _0x20f265 = _0xc75824.sDemote || this.sdemote || conn.sdemote || "@user not now an administrador";
      }
      _0x20f265 = _0x20f265.replace("@user", '@' + _0x2455a9[0x0].split('@')[0x0]);
      if (_0xc75824.detect) {
        this.sendMessage(_0x24ccab, {
          'text': _0x20f265,
          'mentions': this.parseMention(_0x20f265)
        });
      }
      break;
  }
}
export async function groupsUpdate(_0x3c5d36) {
  if (opts.self) {
    return;
  }
  for (const _0x27bbcd of _0x3c5d36) {
    const _0x9fa0a2 = _0x27bbcd.id;
    if (!_0x9fa0a2) {
      continue;
    }
    let _0x1f7dbd = global.db.data.chats[_0x9fa0a2];
    let _0x58ceed = '';
    if (!_0x1f7dbd?.['detect']) {
      continue;
    }
    if (_0x27bbcd.desc) {
      _0x58ceed = (_0x1f7dbd.sDesc || this.sDesc || conn.sDesc || "```Description has been changed to```\n@desc").replace("@desc", _0x27bbcd.desc);
    }
    if (_0x27bbcd.subject) {
      _0x58ceed = (_0x1f7dbd.sSubject || this.sSubject || conn.sSubject || "```Subject has been changed to```\n@subject").replace("@subject", _0x27bbcd.subject);
    }
    if (_0x27bbcd.icon) {
      _0x58ceed = (_0x1f7dbd.sIcon || this.sIcon || conn.sIcon || "```Icon has been changed to```").replace("@icon", _0x27bbcd.icon);
    }
    if (_0x27bbcd.revoke) {
      _0x58ceed = (_0x1f7dbd.sRevoke || this.sRevoke || conn.sRevoke || "```Group link has been changed to```\n@revoke").replace("@revoke", _0x27bbcd.revoke);
    }
    if (_0x27bbcd.announce == true) {
      _0x58ceed = _0x1f7dbd.sAnnounceOn || this.sAnnounceOn || conn.sAnnounceOn || "*Group has been closed!*";
    }
    if (_0x27bbcd.announce == false) {
      _0x58ceed = _0x1f7dbd.sAnnounceOff || this.sAnnounceOff || conn.sAnnounceOff || "*Group has been open!*";
    }
    if (_0x27bbcd.restrict == true) {
      _0x58ceed = _0x1f7dbd.sRestrictOn || this.sRestrictOn || conn.sRestrictOn || "*Group has been all participants!*";
    }
    if (_0x27bbcd.restrict == false) {
      _0x58ceed = _0x1f7dbd.sRestrictOff || this.sRestrictOff || conn.sRestrictOff || "*Group has been only admin!*";
    }
    if (!_0x58ceed) {
      continue;
    }
    await this.sendMessage(_0x9fa0a2, {
      'text': _0x58ceed,
      'mentions': this.parseMention(_0x58ceed)
    });
  }
}
export async function deleteUpdate(_0xda22b6) {
  try {
    const {
      fromMe: _0x1bfe3d,
      id: _0x34aae2,
      participant: _0x16a79c
    } = _0xda22b6;
    if (_0x1bfe3d) {
      return;
    }
    let _0x5aea59 = this.serializeM(this.loadMessage(_0x34aae2));
    if (!_0x5aea59) {
      return;
    }
    let _0x4c3b8c = global.db.data.chats[_0x5aea59.chat] || {};
    if (_0x4c3b8c['delete']) {
      return;
    }
    await this.reply(_0x5aea59.chat, ("\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u276E\t    \n\u2502 Deleted A Message \n\u2502 *ANTI DELETE*\n\u2502 *Number :* @" + _0x16a79c.split`@`[0x0] + " \n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2981\nTO DEACTIVE , PRESS \n*/off antidelete*\n*.enable delete*\n").trim(), _0x5aea59, {
      'mentions': [_0x16a79c]
    });
    this.copyNForward(_0x5aea59.chat, _0x5aea59)['catch'](_0x4ef0e1 => console.log(_0x4ef0e1, _0x5aea59));
  } catch (_0x2c8d6a) {
    console.error(_0x2c8d6a);
  }
}
global.dfail = (_0x30d24f, _0xb04787, _0x3cd289) => {
  let _0x1616f2 = {
    'rowner': "This Command Can Only Be Used By The *Creator Of The Bot*",
    'owner': "This Command Can Only Be Used By The *Bot Owner*",
    'mods': "This Function Is Only *For Bot Moderators*",
    'premium': "This Command Is Only For *Premium Members*",
    'group': "This Command Can Only Be Used In *Groups*",
    'private': "This Command Only Be Used In *Private Chat Of The Bot*",
    'admin': "This Command Is Only For *Group Admins*",
    'botAdmin': "To Use This Command I Must Be *Admin!*",
    'unreg': "Sign In To Use This Feature Typing:\n\n*/reg name.age*\n\n\uD83D\uDCCCExample : */reg ABHI.19*",
    'restrict': "This Feature Is *Disabled*"
  }[_0x30d24f];
  if (_0x1616f2) {
    return _0xb04787.reply(_0x1616f2);
  }
};
let file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
  unwatchFile(file);
  console.log(_0xc11f01.redBright("Update 'handler.js'"));
  if (global.reloadHandler) {
    console.log(await global.reloadHandler());
  }
});
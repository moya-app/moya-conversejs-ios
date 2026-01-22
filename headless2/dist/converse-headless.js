var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.js
var index_exports = {};
__export(index_exports, {
  BaseMessage: () => message_default,
  Bookmark: () => model_default,
  Bookmarks: () => collection_default,
  Builder: () => import_strophe30.Builder,
  ChatBox: () => model_default2,
  Collection: () => import_skeletor45.Collection,
  Device: () => device_default,
  DeviceList: () => devicelist_default,
  DeviceLists: () => devicelists_default,
  Devices: () => devices_default,
  EmojiPicker: () => picker_default,
  EventEmitter: () => import_skeletor45.EventEmitter,
  MAMPlaceholderMessage: () => MAMPlaceholderMessage,
  MUC: () => muc_default,
  MUCMessage: () => message_default2,
  MUCMessages: () => messages_default,
  MUCOccupant: () => occupant_default,
  MUCOccupants: () => occupants_default,
  Message: () => message_default3,
  Messages: () => messages_default2,
  Model: () => import_skeletor45.Model,
  ModelWithMessages: () => ModelWithMessages,
  Presence: () => presence_default2,
  Presences: () => presences_default,
  Profile: () => Profile,
  RosterContact: () => contact_default,
  RosterContacts: () => contacts_default,
  RosterFilter: () => RosterFilter,
  Stanza: () => import_strophe30.Stanza,
  VCard: () => vcard_default,
  VCards: () => vcards_default,
  _converse: () => converse_default,
  api: () => api_default4,
  constants: () => constants,
  converse: () => public_default,
  converseInit: () => converseInit,
  default: () => index_default,
  errors: () => errors_exports,
  i18n: () => i18n_default,
  log: () => import_log51.default,
  parsers: () => parsers_exports,
  u: () => utils_default
});
module.exports = __toCommonJS(index_exports);
var import_dayjs7 = __toESM(require("dayjs"));
var import_advancedFormat = __toESM(require("dayjs/plugin/advancedFormat"));
var import_localizedFormat = __toESM(require("dayjs/plugin/localizedFormat"));
var import_log51 = __toESM(require("@converse/log"));

// shared/parsers.js
var parsers_exports = {};
__export(parsers_exports, {
  getChatMarker: () => getChatMarker,
  getChatState: () => getChatState,
  getCorrectionAttributes: () => getCorrectionAttributes,
  getDeprecatedRetractionAttributes: () => getDeprecatedRetractionAttributes,
  getEncryptionAttributes: () => getEncryptionAttributes,
  getErrorAttributes: () => getErrorAttributes,
  getInputType: () => getInputType,
  getOpenGraphMetadata: () => getOpenGraphMetadata,
  getOutOfBandAttributes: () => getOutOfBandAttributes,
  getReceiptId: () => getReceiptId,
  getReferences: () => getReferences,
  getRetractionAttributes: () => getRetractionAttributes,
  getSpoilerAttributes: () => getSpoilerAttributes,
  getStanzaIDs: () => getStanzaIDs,
  isArchived: () => isArchived,
  isCarbon: () => isCarbon,
  isHeadline: () => isHeadline,
  isMUCPrivateMessage: () => isMUCPrivateMessage,
  isServerMessage: () => isServerMessage,
  isValidReceiptRequest: () => isValidReceiptRequest,
  parseErrorStanza: () => parseErrorStanza,
  parseXForm: () => parseXForm,
  throwErrorIfInvalidForward: () => throwErrorIfInvalidForward
});
var import_sizzle4 = __toESM(require("sizzle"));

// shared/_converse.js
var import_log2 = __toESM(require("@converse/log"));

// shared/i18n.js
var import_sprintf_js = require("sprintf-js");
var i18nStub = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async initialize() {
  },
  /**
   * Overridable string wrapper method which can be used to provide i18n
   * support.
   *
   * The default implementation in @converse/headless simply calls sprintf
   * with the passed in arguments.
   *
   * If you install the full version of Converse, then this method gets
   * overwritten in src/i18n/index.js to return a translated string.
   * @method __
   * @private
   * @memberOf i18n
   */
  __(...args) {
    return (0, import_sprintf_js.sprintf)(...args);
  }
};
var i18n_default = i18nStub;

// shared/_converse.js
var import_pluggable = __toESM(require("pluggable.js/src/pluggable.js"));
var import_skeletor2 = require("@converse/skeletor");
var import_openpromise2 = require("@converse/openpromise");

// utils/session.js
var session_exports = {};
__export(session_exports, {
  clearSession: () => clearSession,
  getUnloadEvent: () => getUnloadEvent,
  isTestEnv: () => isTestEnv,
  isUniView: () => isUniView,
  replacePromise: () => replacePromise,
  shouldClearCache: () => shouldClearCache,
  tearDown: () => tearDown
});
var import_log = __toESM(require("@converse/log"));
var import_openpromise = require("@converse/openpromise");

// shared/settings/utils.js
var import_isEqual = __toESM(require("lodash-es/isEqual.js"));
var import_pick = __toESM(require("lodash-es/pick"));
var import_skeletor = require("@converse/skeletor");

// shared/settings/constants.js
var DEFAULT_SETTINGS = {
  allow_non_roster_messaging: true,
  allow_url_history_change: true,
  assets_path: "/dist",
  authentication: "login",
  // Available values are "login", "prebind", "anonymous" and "external".
  auto_login: false,
  // Currently only used in connection with anonymous login
  auto_reconnect: true,
  blacklisted_plugins: [],
  clear_cache_on_logout: false,
  connection_options: {},
  credentials_url: null,
  // URL from where login credentials can be fetched
  disable_effects: false,
  // Disabled UI transition effects. Mainly used for tests.
  discover_connection_methods: true,
  embed_3rd_party_media_players: true,
  geouri_regex: /https\:\/\/www.openstreetmap.org\/.*#map=[0-9]+\/([\-0-9.]+)\/([\-0-9.]+)\S*/g,
  geouri_replacement: "https://www.openstreetmap.org/?mlat=$1&mlon=$2#map=18/$1/$2",
  i18n: void 0,
  jid: void 0,
  reuse_scram_keys: true,
  keepalive: true,
  loglevel: "info",
  locales: [
    "af",
    "ar",
    "bg",
    "ca",
    "cs",
    "da",
    "de",
    "el",
    "en",
    "eo",
    "es",
    "eu",
    "fa",
    "fi",
    "fr",
    "gl",
    "he",
    "hi",
    "hu",
    "id",
    "it",
    "ja",
    "lt",
    "mn",
    "mr",
    "nb",
    "nl",
    "oc",
    "pl",
    "pt",
    "pt_BR",
    "ro",
    "ru",
    "sv",
    "ta",
    "th",
    "tr",
    "ug",
    "uk",
    "vi",
    "zh_CN",
    "zh_TW"
  ],
  nickname: void 0,
  password: void 0,
  persistent_store: "IndexedDB",
  rid: void 0,
  root: window.document,
  sid: void 0,
  singleton: false,
  strict_plugin_dependencies: false,
  stanza_timeout: 6e4,
  view_mode: "fullscreen",
  websocket_url: void 0,
  whitelisted_plugins: []
};

// utils/object.js
var object_exports = {};
__export(object_exports, {
  isError: () => isError,
  isErrorObject: () => isErrorObject,
  isFunction: () => isFunction,
  isPersistableModel: () => isPersistableModel,
  isUndefined: () => isUndefined,
  merge: () => merge
});
function merge(dst, src) {
  for (const k in src) {
    if (!Object.prototype.hasOwnProperty.call(src, k)) continue;
    if (k === "__proto__" || k === "constructor") continue;
    if (dst[k] instanceof Object) {
      merge(dst[k], src[k]);
    } else {
      dst[k] = src[k];
    }
  }
}
__name(merge, "merge");
function isError(obj) {
  return Object.prototype.toString.call(obj) === "[object Error]";
}
__name(isError, "isError");
function isFunction(val) {
  return typeof val === "function";
}
__name(isFunction, "isFunction");
function isUndefined(x) {
  return typeof x === "undefined";
}
__name(isUndefined, "isUndefined");
function isErrorObject(o) {
  return o instanceof Error;
}
__name(isErrorObject, "isErrorObject");
function isPersistableModel(model) {
  return model.browserStorage || model.collection?.browserStorage;
}
__name(isPersistableModel, "isPersistableModel");

// shared/settings/utils.js
var app_settings;
var init_settings = {};
var AppSettings = class extends (0, import_skeletor.EventEmitter)(Object) {
  static {
    __name(this, "AppSettings");
  }
};
function getAppSettings() {
  return app_settings;
}
__name(getAppSettings, "getAppSettings");
function initAppSettings(settings4) {
  init_settings = settings4;
  app_settings = new AppSettings();
  const allowed_settings = (0, import_pick.default)(settings4, Object.keys(DEFAULT_SETTINGS));
  Object.assign(app_settings, DEFAULT_SETTINGS, allowed_settings);
}
__name(initAppSettings, "initAppSettings");
function getInitSettings() {
  return init_settings;
}
__name(getInitSettings, "getInitSettings");
function getAppSetting(key) {
  if (Object.keys(DEFAULT_SETTINGS).includes(key)) {
    return app_settings[key];
  }
}
__name(getAppSetting, "getAppSetting");
function extendAppSettings(settings4) {
  merge(DEFAULT_SETTINGS, settings4);
  const allowed_keys = Object.keys(settings4).filter((k) => k in DEFAULT_SETTINGS);
  const allowed_site_settings = (0, import_pick.default)(init_settings, allowed_keys);
  const updated_settings = Object.assign((0, import_pick.default)(settings4, allowed_keys), allowed_site_settings);
  merge(app_settings, updated_settings);
}
__name(extendAppSettings, "extendAppSettings");
function registerListener(name, func, context) {
  app_settings.on(name, func, context);
}
__name(registerListener, "registerListener");
function unregisterListener(name, func) {
  app_settings.off(name, func);
}
__name(unregisterListener, "unregisterListener");
function updateAppSettings(key, val) {
  if (key == null) return this;
  let attrs;
  if (key instanceof Object) {
    attrs = key;
  } else if (typeof key === "string") {
    attrs = {};
    attrs[key] = val;
  }
  const allowed_keys = Object.keys(attrs).filter((k) => k in DEFAULT_SETTINGS);
  const changed = {};
  allowed_keys.forEach((k) => {
    const val2 = attrs[k];
    if (!(0, import_isEqual.default)(app_settings[k], val2)) {
      changed[k] = val2;
      app_settings[k] = val2;
    }
  });
  Object.keys(changed).forEach((k) => app_settings.trigger("change:" + k, changed[k]));
  app_settings.trigger("change", changed);
}
__name(updateAppSettings, "updateAppSettings");

// shared/settings/api.js
var settings_api = {
  /**
   * Allows new configuration settings to be specified, or new default values for
   * existing configuration settings to be specified.
   *
   * Note, calling this method *after* converse.initialize has been
   * called will *not* change the initialization settings provided via
   * `converse.initialize`.
   *
   * @method api.settings.extend
   * @param {object} settings The configuration settings
   * @example
   * api.settings.extend({
   *    'enable_foo': true
   * });
   *
   * // The user can then override the default value of the configuration setting when
   * // calling `converse.initialize`.
   * converse.initialize({
   *     'enable_foo': false
   * });
   */
  extend(settings4) {
    return extendAppSettings(settings4);
  },
  /**
   * @method _converse.api.settings.get
   * @param {string} [key]
   * @returns {*} Value of the particular configuration setting, or all
   *  settings if no key was specified.
   * @example api.settings.get("play_sounds");
   */
  get(key) {
    return key ? getAppSetting(key) : getAppSettings();
  },
  /**
   * Set one or many configuration settings.
   *
   * Note, this is not an alternative to calling {@link converse.initialize}, which still needs
   * to be called. Generally, you'd use this method after Converse is already
   * running and you want to change the configuration on-the-fly.
   *
   * @method _converse.api.settings.set
   * @param { Object | string } [settings_or_key]
   *  An object containing configuration settings.
   *  Alternatively to passing in an object, you can pass in a key and a value.
   * @param { string } [value]
   * @example api.settings.set("play_sounds", true);
   * @example
   * api.settings.set({
   *     "play_sounds": true,
   *     "hide_offline_users": true
   * });
   */
  set(settings_or_key, value) {
    updateAppSettings(settings_or_key, value);
  },
  /**
   * The `listen` namespace exposes methods for creating event listeners
   * (aka handlers) for events related to settings.
   *
   * @namespace _converse.api.settings.listen
   * @memberOf _converse.api.settings
   */
  listen: {
    /**
     * Register an event listener for the passed in event.
     * @method _converse.api.settings.listen.on
     * @param { ('change') } name - The name of the event to listen for.
     *  Currently there is only the 'change' event.
     * @param { Function } handler - The event handler function
     * @param { Object } [context] - The context of the `this` attribute of the
     *  handler function.
     * @example api.settings.listen.on('change', callback);
     */
    on(name, handler, context) {
      registerListener(name, handler, context);
    },
    /**
     * To stop listening to an event, you can use the `not` method.
     * @method _converse.api.settings.listen.not
     * @param { String } name The event's name
     * @param { Function } handler The callback method that is to no longer be called when the event fires
     * @example api.settings.listen.not('change', callback);
     */
    not(name, handler) {
      unregisterListener(name, handler);
    }
  }
};

// utils/session.js
var settings = settings_api;
function isUniView() {
  return ["fullscreen", "embedded"].includes(settings.get("view_mode"));
}
__name(isUniView, "isUniView");
function isTestEnv() {
  return getInitSettings()["bosh_service_url"] === "montague.lit/http-bind";
}
__name(isTestEnv, "isTestEnv");
function getUnloadEvent() {
  if ("onpagehide" in window) {
    return "pagehide";
  } else if ("onbeforeunload" in window) {
    return "beforeunload";
  }
  return "unload";
}
__name(getUnloadEvent, "getUnloadEvent");
function replacePromise(_converse2, name) {
  const existing_promise = _converse2.promises[name];
  if (!existing_promise) {
    throw new Error(`Tried to replace non-existing promise: ${name}`);
  }
  if (existing_promise.replace) {
    const promise = (0, import_openpromise.getOpenPromise)();
    promise.replace = existing_promise.replace;
    _converse2.promises[name] = promise;
  } else {
    import_log.default.debug(`Not replacing promise "${name}"`);
  }
}
__name(replacePromise, "replacePromise");
function shouldClearCache(_converse2) {
  const { api: api3 } = _converse2;
  return !_converse2.state.config.get("trusted") || api3.settings.get("clear_cache_on_logout") || isTestEnv();
}
__name(shouldClearCache, "shouldClearCache");
async function tearDown(_converse2) {
  const { api: api3 } = _converse2;
  await api3.trigger("beforeTearDown", { "synchronous": true });
  api3.trigger("afterTearDown");
  return _converse2;
}
__name(tearDown, "tearDown");
function clearSession(_converse2) {
  if (shouldClearCache(_converse2)) {
    _converse2.api.user.settings.clear();
    _converse2.state.login_info?.destroy();
  }
  _converse2.initSession();
  return _converse2.api.trigger("clearSession", { "synchronous": true });
}
__name(clearSession, "clearSession");

// shared/constants.js
var constants_exports = {};
__export(constants_exports, {
  ACTIVE: () => ACTIVE,
  ANONYMOUS: () => ANONYMOUS,
  BOSH_WAIT: () => BOSH_WAIT,
  CHATROOMS_TYPE: () => CHATROOMS_TYPE,
  CHAT_STATES: () => CHAT_STATES,
  CLOSED: () => CLOSED,
  COMPOSING: () => COMPOSING,
  CONNECTION_STATUS: () => CONNECTION_STATUS,
  CONTROLBOX_TYPE: () => CONTROLBOX_TYPE,
  CORE_PLUGINS: () => CORE_PLUGINS,
  EXTERNAL: () => EXTERNAL,
  FAILURE: () => FAILURE,
  GONE: () => GONE,
  HEADLINES_TYPE: () => HEADLINES_TYPE,
  INACTIVE: () => INACTIVE,
  KEYCODES: () => KEYCODES,
  LOGIN: () => LOGIN,
  LOGOUT: () => LOGOUT,
  MARKER_TYPES: () => MARKER_TYPES,
  METADATA_ATTRIBUTES: () => METADATA_ATTRIBUTES,
  OPENED: () => OPENED,
  PAUSED: () => PAUSED,
  PREBIND: () => PREBIND,
  PRES_SHOW_VALUES: () => PRES_SHOW_VALUES,
  PRES_TYPE_VALUES: () => PRES_TYPE_VALUES,
  PRIVATE_CHAT_TYPE: () => PRIVATE_CHAT_TYPE,
  STATUS_WEIGHTS: () => STATUS_WEIGHTS,
  SUCCESS: () => SUCCESS,
  VERSION_NAME: () => VERSION_NAME,
  XFORM_TYPE_MAP: () => XFORM_TYPE_MAP,
  XFORM_VALIDATE_TYPE_MAP: () => XFORM_VALIDATE_TYPE_MAP
});
var import_strophe = require("strophe.js");
var BOSH_WAIT = 59;
var VERSION_NAME = "v12.0.0";
var PRES_SHOW_VALUES = ["chat", "dnd", "away", "xa"];
var PRES_TYPE_VALUES = [
  "available",
  "unavailable",
  "error",
  "probe",
  "subscribe",
  "subscribed",
  "unsubscribe",
  "unsubscribed"
];
var STATUS_WEIGHTS = {
  offline: 6,
  unavailable: 5,
  xa: 4,
  away: 3,
  dnd: 2,
  chat: 1,
  // We don't differentiate between "chat" and "online"
  online: 1
};
var METADATA_ATTRIBUTES = [
  "og:article:author",
  "og:article:published_time",
  "og:description",
  "og:image",
  "og:image:height",
  "og:image:width",
  "og:site_name",
  "og:title",
  "og:type",
  "og:url",
  "og:video:height",
  "og:video:secure_url",
  "og:video:tag",
  "og:video:type",
  "og:video:url",
  "og:video:width"
];
var ANONYMOUS = "anonymous";
var CLOSED = "closed";
var EXTERNAL = "external";
var LOGIN = "login";
var LOGOUT = "logout";
var OPENED = "opened";
var PREBIND = "prebind";
var SUCCESS = "success";
var FAILURE = "failure";
var INACTIVE = "inactive";
var ACTIVE = "active";
var COMPOSING = "composing";
var PAUSED = "paused";
var GONE = "gone";
var PRIVATE_CHAT_TYPE = "chatbox";
var CHATROOMS_TYPE = "chatroom";
var HEADLINES_TYPE = "headline";
var CONTROLBOX_TYPE = "controlbox";
var CONNECTION_STATUS = {};
CONNECTION_STATUS[import_strophe.Strophe.Status.ATTACHED] = "ATTACHED";
CONNECTION_STATUS[import_strophe.Strophe.Status.AUTHENTICATING] = "AUTHENTICATING";
CONNECTION_STATUS[import_strophe.Strophe.Status.AUTHFAIL] = "AUTHFAIL";
CONNECTION_STATUS[import_strophe.Strophe.Status.CONNECTED] = "CONNECTED";
CONNECTION_STATUS[import_strophe.Strophe.Status.CONNECTING] = "CONNECTING";
CONNECTION_STATUS[import_strophe.Strophe.Status.CONNFAIL] = "CONNFAIL";
CONNECTION_STATUS[import_strophe.Strophe.Status.DISCONNECTED] = "DISCONNECTED";
CONNECTION_STATUS[import_strophe.Strophe.Status.DISCONNECTING] = "DISCONNECTING";
CONNECTION_STATUS[import_strophe.Strophe.Status.ERROR] = "ERROR";
CONNECTION_STATUS[import_strophe.Strophe.Status.RECONNECTING] = "RECONNECTING";
CONNECTION_STATUS[import_strophe.Strophe.Status.REDIRECT] = "REDIRECT";
import_strophe.Strophe.addNamespace("ACTIVITY", "http://jabber.org/protocol/activity");
import_strophe.Strophe.addNamespace("CARBONS", "urn:xmpp:carbons:2");
import_strophe.Strophe.addNamespace("CHATSTATES", "http://jabber.org/protocol/chatstates");
import_strophe.Strophe.addNamespace("CSI", "urn:xmpp:csi:0");
import_strophe.Strophe.addNamespace("DELAY", "urn:xmpp:delay");
import_strophe.Strophe.addNamespace("EME", "urn:xmpp:eme:0");
import_strophe.Strophe.addNamespace("FALLBACK", "urn:xmpp:fallback:0");
import_strophe.Strophe.addNamespace("FASTEN", "urn:xmpp:fasten:0");
import_strophe.Strophe.addNamespace("FORWARD", "urn:xmpp:forward:0");
import_strophe.Strophe.addNamespace("HINTS", "urn:xmpp:hints");
import_strophe.Strophe.addNamespace("HTTPUPLOAD", "urn:xmpp:http:upload:0");
import_strophe.Strophe.addNamespace("MAM", "urn:xmpp:mam:2");
import_strophe.Strophe.addNamespace("MARKERS", "urn:xmpp:chat-markers:0");
import_strophe.Strophe.addNamespace("MENTIONS", "urn:xmpp:mmn:0");
import_strophe.Strophe.addNamespace("MESSAGE_CORRECT", "urn:xmpp:message-correct:0");
import_strophe.Strophe.addNamespace("MODERATE", "urn:xmpp:message-moderate:1");
import_strophe.Strophe.addNamespace("MODERATE0", "urn:xmpp:message-moderate:0");
import_strophe.Strophe.addNamespace("NICK", "http://jabber.org/protocol/nick");
import_strophe.Strophe.addNamespace("OCCUPANTID", "urn:xmpp:occupant-id:0");
import_strophe.Strophe.addNamespace("OMEMO", "eu.siacs.conversations.axolotl");
import_strophe.Strophe.addNamespace("OUTOFBAND", "jabber:x:oob");
import_strophe.Strophe.addNamespace("PUBSUB", "http://jabber.org/protocol/pubsub");
import_strophe.Strophe.addNamespace("RAI", "urn:xmpp:rai:0");
import_strophe.Strophe.addNamespace("RECEIPTS", "urn:xmpp:receipts");
import_strophe.Strophe.addNamespace("REFERENCE", "urn:xmpp:reference:0");
import_strophe.Strophe.addNamespace("REGISTER", "jabber:iq:register");
import_strophe.Strophe.addNamespace("RETRACT", "urn:xmpp:message-retract:1");
import_strophe.Strophe.addNamespace("RETRACT0", "urn:xmpp:message-retract:0");
import_strophe.Strophe.addNamespace("ROSTERX", "http://jabber.org/protocol/rosterx");
import_strophe.Strophe.addNamespace("RSM", "http://jabber.org/protocol/rsm");
import_strophe.Strophe.addNamespace("SID", "urn:xmpp:sid:0");
import_strophe.Strophe.addNamespace("SPOILER", "urn:xmpp:spoiler:0");
import_strophe.Strophe.addNamespace("STANZAS", "urn:ietf:params:xml:ns:xmpp-stanzas");
import_strophe.Strophe.addNamespace("STYLING", "urn:xmpp:styling:0");
import_strophe.Strophe.addNamespace("VCARD", "vcard-temp");
import_strophe.Strophe.addNamespace("VCARDUPDATE", "vcard-temp:x:update");
import_strophe.Strophe.addNamespace("XFORM", "jabber:x:data");
import_strophe.Strophe.addNamespace("XHTML", "http://www.w3.org/1999/xhtml");
var CORE_PLUGINS = [
  "converse-adhoc",
  "converse-bookmarks",
  "converse-blocklist",
  "converse-bosh",
  "converse-caps",
  "converse-chat",
  "converse-chatboxes",
  "converse-disco",
  "converse-emoji",
  "converse-headlines",
  "converse-mam",
  "converse-muc",
  "converse-ping",
  "converse-pubsub",
  "converse-roster",
  "converse-smacks",
  "converse-status",
  "converse-vcard",
  "converse-omemo"
];
var CHAT_STATES = ["active", "composing", "gone", "inactive", "paused"];
var MARKER_TYPES = ["displayed", "received", "acknowledged"];
var KEYCODES = {
  TAB: "Tab",
  ENTER: "Enter",
  SHIFT: "Shift",
  CTRL: "Control",
  ALT: "Alt",
  ESCAPE: "Escape",
  LEFT_ARROW: "ArrowLeft",
  UP_ARROW: "ArrowUp",
  RIGHT_ARROW: "ArrowRight",
  DOWN_ARROW: "ArrowDown",
  FORWARD_SLASH: "Divide",
  AT: "Alt",
  META: "Meta"
};
var XFORM_TYPE_MAP = {
  "text-private": "password",
  "text-single": "text",
  "fixed": "label",
  "boolean": "checkbox",
  "hidden": "hidden",
  "jid-multi": "textarea",
  "list-single": "dropdown",
  "list-multi": "dropdown"
};
var XFORM_VALIDATE_TYPE_MAP = {
  "xs:anyURI": "url",
  "xs:byte": "number",
  "xs:date": "date",
  "xs:dateTime": "datetime",
  "xs:int": "number",
  "xs:integer": "number",
  "xs:time": "time"
};

// shared/_converse.js
var DEPRECATED_ATTRS = {
  chatboxes: null,
  bookmarks: null,
  ANONYMOUS,
  CLOSED,
  EXTERNAL,
  LOGIN,
  LOGOUT,
  OPENED,
  PREBIND,
  SUCCESS,
  FAILURE,
  INACTIVE,
  ACTIVE,
  COMPOSING,
  PAUSED,
  GONE
};
var ConversePrivateGlobal = class extends (0, import_skeletor2.EventEmitter)(Object) {
  static {
    __name(this, "ConversePrivateGlobal");
  }
  constructor() {
    super();
    const proxy = new Proxy(this, {
      get: /* @__PURE__ */ __name((target, key) => {
        if (!isTestEnv() && typeof key === "string") {
          if (Object.keys(DEPRECATED_ATTRS).includes(key)) {
            import_log2.default.warn(`Accessing ${key} on _converse is DEPRECATED`);
          }
        }
        return Reflect.get(target, key);
      }, "get")
    });
    proxy.initialize();
    return proxy;
  }
  initialize() {
    this.VERSION_NAME = VERSION_NAME;
    this.strict_plugin_dependencies = false;
    this.pluggable = null;
    this.templates = {};
    this.storage = /** @type {Record<string, Storage.LocalForage>} */
    {};
    this.promises = {
      initialized: (0, import_openpromise2.getOpenPromise)()
    };
    this.NUM_PREKEYS = 100;
    this.TIMEOUTS = {
      PAUSED: 1e4,
      INACTIVE: 9e4
    };
    Object.assign(this, DEPRECATED_ATTRS);
    this.api = /** @type {module:shared-api.APIEndpoint} */
    null;
    this.labels = /** @type {UserMessages} */
    {};
    this.exports = /** @type {Record<string, Object>} */
    {};
    this.constants = /** @type {Record<string, string|Object>} */
    {};
    this.env = /** @type {import("./api/types.js").ConverseEnv} */
    {};
    this.state = /** @type {ConverseState} */
    {};
    this.initSession();
  }
  initSession() {
    this.session?.destroy();
    this.session = new import_skeletor2.Model();
    Object.assign(
      this,
      {
        jid: void 0,
        bare_jid: void 0,
        domain: void 0,
        resource: void 0
      }
    );
  }
  /**
   * Translate the given string based on the current locale.
   * @method __
   * @memberOf _converse
   * @param {...String} args
   */
  __(...args) {
    return i18n_default.__(...args);
  }
  /**
   * A no-op method which is used to signal to gettext that the passed in string
   * should be included in the pot translation file.
   *
   * In contrast to the double-underscore method, the triple underscore method
   * doesn't actually translate the strings.
   *
   * One reason for this method might be because we're using strings we cannot
   * send to the translation function because they require variable interpolation
   * and we don't yet have the variables at scan time.
   *
   * @method ___
   * @memberOf _converse
   * @param {String} str
   */
  ___(str) {
    return str;
  }
};
var _converse = new ConversePrivateGlobal();
import_pluggable.default.enable(_converse, "_converse", "pluggable");
var converse_default = _converse;

// shared/api/events.js
var events_default = {
  /**
   * Lets you trigger events, which can be listened to via
   * {@link _converse.api.listen.on} or {@link _converse.api.listen.once}
   * (see [_converse.api.listen](http://localhost:8000/docs/html/api/-_converse.api.listen.html)).
   *
   * Some events also double as promises and can be waited on via {@link _converse.api.waitUntil}.
   *
   * @typedef {object} Options
   * @property {boolean} [Options.synchronous] - Whether the event is synchronous or not.
   *  When a synchronous event is fired, a promise will be returned
   *  by {@link _converse.api.trigger} which resolves once all the
   *  event handlers' promises have been resolved.
   *
   * @method _converse.api.trigger
   * @param {string} name - The event name
   */
  async trigger(name) {
    if (!converse_default._events) {
      return;
    }
    const args = Array.from(arguments);
    const options = (
      /** @type {Options} */
      args.pop()
    );
    if (options && options.synchronous) {
      const events = converse_default._events[name] || [];
      const event_args = args.splice(1);
      await Promise.all(events.map((e) => e.callback.apply(e.ctx, event_args)));
    } else {
      converse_default.trigger.apply(converse_default, arguments);
    }
    const promise = converse_default.promises[name];
    if (promise !== void 0) {
      promise.resolve(arguments[1]);
    }
  },
  /**
   * Triggers a hook which can be intercepted by registered listeners via
   * {@link _converse.api.listen.on} or {@link _converse.api.listen.once}.
   * (see [_converse.api.listen](http://localhost:8000/docs/html/api/-_converse.api.listen.html)).
   * A hook is a special kind of event which allows you to intercept a data
   * structure in order to modify it, before passing it back.
   * @async
   * @param {string} name - The hook name
   * @param {...any} context - The context to which the hook applies
   *  (could be for example, a {@link _converse.ChatBox}).
   * @param {...any} data - The data structure to be intercepted and modified by the hook listeners.
   * @returns {Promise<any>} - A promise that resolves with the modified data structure.
   */
  hook(name, context, data) {
    const events = converse_default._events[name] || [];
    if (events.length) {
      return events.reduce((o, e) => o.then((d) => e.callback(context, d)), Promise.resolve(data));
    } else {
      return data;
    }
  },
  /**
   * Converse emits events to which you can subscribe to.
   *
   * The `listen` namespace exposes methods for creating event listeners
   * (aka handlers) for these events.
   *
   * @namespace _converse.api.listen
   * @memberOf _converse
   */
  listen: {
    /**
     * Lets you listen to an event exactly once.
     * @method _converse.api.listen.once
     * @param {string} name The event's name
     * @param {function} callback The callback method to be called when the event is emitted.
     * @param {object} [context] The value of the `this` parameter for the callback.
     * @example _converse.api.listen.once('message', function (messageXML) { ... });
     */
    once: converse_default.once.bind(converse_default),
    /**
     * Lets you subscribe to an event.
     * Every time the event fires, the callback method specified by `callback` will be called.
     * @method _converse.api.listen.on
     * @param {string} name The event's name
     * @param {function} callback The callback method to be called when the event is emitted.
     * @param {object} [context] The value of the `this` parameter for the callback.
     * @example _converse.api.listen.on('message', function (messageXML) { ... });
     */
    on: converse_default.on.bind(converse_default),
    /**
     * To stop listening to an event, you can use the `not` method.
     * @method _converse.api.listen.not
     * @param {string} name The event's name
     * @param {function} callback The callback method that is to no longer be called when the event fires
     * @example _converse.api.listen.not('message', function (messageXML);
     */
    not: converse_default.off.bind(converse_default),
    /**
     * An options object which lets you set filter criteria for matching
     * against stanzas.
     * @typedef {object} MatchingOptions
     * @property {string} [ns] - The namespace to match against
     * @property {string} [type] - The stanza type to match against
     * @property {string} [id] - The stanza id to match against
     * @property {string} [from] - The stanza sender to match against
     */
    /**
     * Subscribe to an incoming stanza
     * Every a matched stanza is received, the callback method specified by
     * `callback` will be called.
     * @method _converse.api.listen.stanza
     * @param {string} name The stanza's name
     * @param {MatchingOptions|Function} options Matching options or callback
     * @param {function} handler The callback method to be called when the stanza appears
     */
    stanza(name, options, handler) {
      if (isFunction(options)) {
        handler = /** @type {Function} */
        options;
        options = {};
      } else {
        options = options || {};
      }
      converse_default.api.connection.get().addHandler(
        handler,
        options.ns,
        name,
        options.type,
        options.id,
        options.from,
        options
      );
    }
  }
};

// shared/connection/index.js
var import_debounce2 = __toESM(require("lodash-es/debounce"));
var import_log5 = __toESM(require("@converse/log"));
var import_sizzle = __toESM(require("sizzle"));
var import_strophe5 = require("strophe.js");
var import_openpromise3 = require("@converse/openpromise");

// utils/init.js
var init_exports = {};
__export(init_exports, {
  attemptNonPreboundSession: () => attemptNonPreboundSession,
  cleanup: () => cleanup,
  initClientConfig: () => initClientConfig,
  initPersistentStorage: () => initPersistentStorage,
  initPlugins: () => initPlugins,
  initSession: () => initSession,
  initSessionStorage: () => initSessionStorage,
  registerGlobalEventHandlers: () => registerGlobalEventHandlers,
  safeSave: () => safeSave,
  savedLoginInfo: () => savedLoginInfo,
  setUserJID: () => setUserJID
});
var import_storage2 = __toESM(require("@converse/skeletor/src/storage.js"));
var import_debounce = __toESM(require("lodash-es/debounce"));
var import_local = __toESM(require("localforage-webextensionstorage-driver/local"));
var import_log4 = __toESM(require("@converse/log"));
var import_sync = __toESM(require("localforage-webextensionstorage-driver/sync"));
var import_skeletor3 = require("@converse/skeletor");
var import_strophe4 = require("strophe.js");

// utils/storage.js
var storage_exports = {};
__export(storage_exports, {
  createStore: () => createStore,
  getDefaultStorageType: () => getDefaultStorageType,
  initStorage: () => initStorage
});
var import_storage = __toESM(require("@converse/skeletor/src/storage.js"));
var settings2 = settings_api;
function getDefaultStorageType() {
  if (converse_default.state.config.get("trusted")) {
    const is_non_persistent = settings2.get("persistent_store") === "sessionStorage";
    return is_non_persistent ? "session" : "persistent";
  } else {
    return "session";
  }
}
__name(getDefaultStorageType, "getDefaultStorageType");
function storeUsesIndexedDB(type) {
  return type === "persistent" && settings2.get("persistent_store") === "IndexedDB";
}
__name(storeUsesIndexedDB, "storeUsesIndexedDB");
function createStore(id, type) {
  const name = type || getDefaultStorageType();
  const s = converse_default.storage[name];
  if (typeof s === "undefined") {
    throw new TypeError(`createStore: Could not find store for ${id}`);
  }
  return new import_storage.default(id, s, storeUsesIndexedDB(type));
}
__name(createStore, "createStore");
function initStorage(model, id, type) {
  type = type || getDefaultStorageType();
  model.browserStorage = createStore(id, type);
  if (storeUsesIndexedDB(type)) {
    const flush = /* @__PURE__ */ __name(() => model.browserStorage.flush(), "flush");
    const unloadevent = getUnloadEvent();
    window.addEventListener(unloadevent, flush);
    model.on("destroy", () => window.removeEventListener(unloadevent, flush));
    model.listenTo(converse_default, "beforeLogout", flush);
  }
}
__name(initStorage, "initStorage");

// shared/connection/utils.js
var import_log3 = __toESM(require("@converse/log"));
var import_strophe2 = require("strophe.js");
function generateResource() {
  return `/converse.js-${Math.floor(Math.random() * 139749528).toString()}`;
}
__name(generateResource, "generateResource");
function setStropheLogLevel() {
  const level = settings_api.get("loglevel");
  import_strophe2.Strophe.setLogLevel(import_strophe2.Strophe.LogLevel[level.toUpperCase()]);
  const lmap = {};
  lmap[import_strophe2.Strophe.LogLevel.DEBUG] = "debug";
  lmap[import_strophe2.Strophe.LogLevel.INFO] = "info";
  lmap[import_strophe2.Strophe.LogLevel.WARN] = "warn";
  lmap[import_strophe2.Strophe.LogLevel.ERROR] = "error";
  lmap[import_strophe2.Strophe.LogLevel.FATAL] = "fatal";
  import_strophe2.Strophe.log = (l, msg) => import_log3.default.log(msg, lmap[l]);
  import_strophe2.Strophe.error = (msg) => import_log3.default.error(msg);
}
__name(setStropheLogLevel, "setStropheLogLevel");
function getConnectionServiceURL() {
  if (("WebSocket" in window || "MozWebSocket" in window) && settings_api.get("websocket_url")) {
    return settings_api.get("websocket_url");
  } else if (settings_api.get("bosh_service_url")) {
    return settings_api.get("bosh_service_url");
  }
  return "";
}
__name(getConnectionServiceURL, "getConnectionServiceURL");

// utils/jid.js
var jid_exports = {};
__export(jid_exports, {
  getJIDFromURI: () => getJIDFromURI,
  isOwnJID: () => isOwnJID,
  isSameBareJID: () => isSameBareJID,
  isSameDomain: () => isSameDomain,
  isValidJID: () => isValidJID,
  isValidMUCJID: () => isValidMUCJID
});
var import_strophe3 = require("strophe.js");
function isValidJID(jid) {
  if (!(typeof jid === "string")) {
    return false;
  }
  const num_slashes = jid.split("/").length - 1;
  if (num_slashes > 1) {
    return false;
  }
  return jid.split("@").filter((s) => !!s).length === 2 && !jid.startsWith("@") && !jid.endsWith("@");
}
__name(isValidJID, "isValidJID");
function isValidMUCJID(jid) {
  return !jid.startsWith("@") && !jid.endsWith("@");
}
__name(isValidMUCJID, "isValidMUCJID");
function isSameBareJID(jid1, jid2) {
  if (typeof jid1 !== "string" || typeof jid2 !== "string") {
    return false;
  }
  return import_strophe3.Strophe.getBareJidFromJid(jid1).toLowerCase() === import_strophe3.Strophe.getBareJidFromJid(jid2).toLowerCase();
}
__name(isSameBareJID, "isSameBareJID");
function isSameDomain(jid1, jid2) {
  if (typeof jid1 !== "string" || typeof jid2 !== "string") {
    return false;
  }
  return import_strophe3.Strophe.getDomainFromJid(jid1).toLowerCase() === import_strophe3.Strophe.getDomainFromJid(jid2).toLowerCase();
}
__name(isSameDomain, "isSameDomain");
function getJIDFromURI(jid) {
  return jid.startsWith("xmpp:") && jid.endsWith("?join") ? jid.replace(/^xmpp:/, "").replace(/\?join$/, "") : jid;
}
__name(getJIDFromURI, "getJIDFromURI");
function isOwnJID(jid, include_resource = false) {
  if (include_resource) {
    return jid === converse_default.session.get("full_jid");
  }
  return import_strophe3.Strophe.getBareJidFromJid(jid) === converse_default.session.get("bare_jid");
}
__name(isOwnJID, "isOwnJID");

// utils/init.js
function initPlugins(_converse2) {
  _converse2.pluggable.initialized_plugins = [];
  const whitelist = CORE_PLUGINS.concat(_converse2.api.settings.get("whitelisted_plugins"));
  if (_converse2.api.settings.get("singleton")) {
    ["converse-bookmarks", "converse-controlbox", "converse-headline", "converse-register"].forEach(
      (name) => _converse2.api.settings.get("blacklisted_plugins").push(name)
    );
  }
  _converse2.pluggable.initializePlugins({ _converse: _converse2 }, whitelist, _converse2.api.settings.get("blacklisted_plugins"));
  _converse2.api.trigger("pluginsInitialized");
}
__name(initPlugins, "initPlugins");
async function initClientConfig(_converse2) {
  const id = "converse.client-config";
  const config = new import_skeletor3.Model({ id, "trusted": true });
  config.browserStorage = createStore(id, "session");
  Object.assign(_converse2, { config });
  Object.assign(_converse2.state, { config });
  await new Promise((r) => config.fetch({ "success": r, "error": r }));
  _converse2.api.trigger("clientConfigInitialized");
}
__name(initClientConfig, "initClientConfig");
async function initSessionStorage(_converse2) {
  await import_storage2.default.sessionStorageInitialized;
  _converse2.storage["session"] = import_storage2.default.localForage.createInstance({
    name: isTestEnv() ? "converse-test-session" : "converse-session",
    description: "sessionStorage instance",
    driver: ["sessionStorageWrapper"]
  });
}
__name(initSessionStorage, "initSessionStorage");
function initPersistentStorage(_converse2, store_name, key = "persistent") {
  const { api: api3 } = _converse2;
  if (api3.settings.get("persistent_store") === "sessionStorage") {
    _converse2.storage[key] = _converse2.storage["session"];
    return;
  } else if (api3.settings.get("persistent_store") === "BrowserExtLocal") {
    import_storage2.default.localForage.defineDriver(import_local.default).then(() => import_storage2.default.localForage.setDriver("webExtensionLocalStorage"));
    _converse2.storage[key] = import_storage2.default.localForage;
    return;
  } else if (api3.settings.get("persistent_store") === "BrowserExtSync") {
    import_storage2.default.localForage.defineDriver(import_sync.default).then(() => import_storage2.default.localForage.setDriver("webExtensionSyncStorage"));
    _converse2.storage[key] = import_storage2.default.localForage;
    return;
  }
  /*! TOFIND */
  let DBName = "converse-persistent";
  const config = {
    name: isTestEnv() ? "converse-test-persistent" : DBName,
    storeName: store_name
  };
  if (api3.settings.get("persistent_store") === "localStorage") {
    config["description"] = "localStorage instance";
    config["driver"] = [import_storage2.default.localForage.LOCALSTORAGE];
  } else if (api3.settings.get("persistent_store") === "IndexedDB") {
    config["description"] = "indexedDB instance";
    config["driver"] = [import_storage2.default.localForage.INDEXEDDB];
  }
  _converse2.storage[key] = import_storage2.default.localForage.createInstance(config);
}
__name(initPersistentStorage, "initPersistentStorage");
function saveJIDtoSession(_converse2, jid) {
  const { api: api3, session } = _converse2;
  if (api3.settings.get("authentication") !== ANONYMOUS && !import_strophe4.Strophe.getResourceFromJid(jid)) {
    jid = jid.toLowerCase() + generateResource();
  }
  const bare_jid = import_strophe4.Strophe.getBareJidFromJid(jid);
  const resource = import_strophe4.Strophe.getResourceFromJid(jid);
  const domain = import_strophe4.Strophe.getDomainFromJid(jid);
  Object.assign(_converse2, { jid, bare_jid, resource, domain });
  session.save({
    jid,
    bare_jid,
    resource,
    domain,
    // We use the `active` flag to determine whether we should use the values from sessionStorage.
    // When "cloning" a tab (e.g. via middle-click), the `active` flag will be set and we'll create
    // a new empty user session, otherwise it'll be false and we can re-use the user session.
    // When the tab is reloaded, the `active` flag is set to `false`.
    "active": true
  });
  api3.connection.get().jid = jid;
}
__name(saveJIDtoSession, "saveJIDtoSession");
async function setUserJID(jid) {
  await initSession(converse_default, jid);
  converse_default.api.trigger("setUserJID");
  return jid;
}
__name(setUserJID, "setUserJID");
async function initSession(_converse2, jid) {
  const is_shared_session = _converse2.api.settings.get("connection_options").worker;
  const bare_jid = import_strophe4.Strophe.getBareJidFromJid(jid).toLowerCase();
  const id = `converse.session-${bare_jid}`;
  if (_converse2.session?.get("id") !== id) {
    initPersistentStorage(_converse2, bare_jid);
    _converse2.session.set({ id });
    initStorage(_converse2.session, id, is_shared_session ? "persistent" : "session");
    await new Promise((r) => _converse2.session.fetch({ success: r, error: r }));
    if (!is_shared_session && _converse2.session.get("active")) {
      _converse2.session.clear();
      _converse2.session.save({ id });
    }
    saveJIDtoSession(_converse2, jid);
    window.addEventListener(getUnloadEvent(), () => safeSave(_converse2.session, { active: false }));
    _converse2.api.trigger("userSessionInitialized");
  } else {
    saveJIDtoSession(_converse2, jid);
  }
}
__name(initSession, "initSession");
function registerGlobalEventHandlers(_converse2) {
  _converse2.api.trigger("registeredGlobalEventHandlers");
}
__name(registerGlobalEventHandlers, "registerGlobalEventHandlers");
function unregisterGlobalEventHandlers(_converse2) {
  _converse2.api.trigger("unregisteredGlobalEventHandlers");
}
__name(unregisterGlobalEventHandlers, "unregisterGlobalEventHandlers");
async function cleanup(_converse2) {
  const { api: api3 } = _converse2;
  await api3.trigger("cleanup", { "synchronous": true });
  unregisterGlobalEventHandlers(_converse2);
  api3.connection.get()?.reset();
  _converse2.stopListening();
  _converse2.off();
  if (_converse2.promises["initialized"].isResolved) {
    api3.promises.add("initialized");
  }
}
__name(cleanup, "cleanup");
function fetchLoginCredentials(wait = 0) {
  return new Promise(
    (0, import_debounce.default)(async (resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", converse_default.api.settings.get("credentials_url"), true);
      xhr.setRequestHeader("Accept", "application/json, text/javascript");
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 400) {
          const data = JSON.parse(xhr.responseText);
          setUserJID(data.jid).then(() => {
            resolve({
              jid: data.jid,
              password: data.password
            });
          });
        } else {
          reject(new Error(`${xhr.status}: ${xhr.responseText}`));
        }
      };
      xhr.onerror = reject;
      xhr = await converse_default.api.hook("beforeFetchLoginCredentials", this, xhr);
      xhr.send();
    }, wait)
  );
}
__name(fetchLoginCredentials, "fetchLoginCredentials");
async function getLoginCredentialsFromURL() {
  let credentials;
  let wait = 0;
  while (!credentials) {
    try {
      credentials = await fetchLoginCredentials(wait);
    } catch (e) {
      import_log4.default.error("Could not fetch login credentials");
      import_log4.default.error(e);
    }
    wait = 2e3;
  }
  return credentials;
}
__name(getLoginCredentialsFromURL, "getLoginCredentialsFromURL");
async function getLoginCredentialsFromBrowser() {
  const jid = localStorage.getItem("conversejs-session-jid");
  if (!jid) return null;
  try {
    const creds = await navigator.credentials.get({ password: true });
    if (creds && creds.type == "password" && isValidJID(creds.id)) {
      await setUserJID(creds.id);
      return { "jid": creds.id, "password": creds.password };
    }
  } catch (e) {
    import_log4.default.error(e);
    return null;
  }
}
__name(getLoginCredentialsFromBrowser, "getLoginCredentialsFromBrowser");
async function getLoginCredentialsFromSCRAMKeys() {
  const jid = localStorage.getItem("conversejs-session-jid");
  if (!jid) return null;
  await setUserJID(jid);
  const login_info = await savedLoginInfo(jid);
  const scram_keys = login_info.get("scram_keys");
  return scram_keys ? { jid, password: scram_keys } : null;
}
__name(getLoginCredentialsFromSCRAMKeys, "getLoginCredentialsFromSCRAMKeys");
async function attemptNonPreboundSession(credentials, automatic) {
  const { api: api3 } = converse_default;
  const { credentials: new_creds } = await api3.hook("beforeAttemptNonPreboundSession", this, {
    credentials,
    automatic
  });
  if (new_creds) return connect(new_creds);
  if (api3.settings.get("authentication") === LOGIN) {
    const jid = converse_default.session.get("jid");
    if (credentials) {
      return connect(credentials);
    } else if (api3.settings.get("credentials_url")) {
      return connect(await getLoginCredentialsFromURL());
    } else if (jid && (api3.settings.get("password") || api3.connection.get().pass)) {
      return connect();
    }
    if (api3.settings.get("reuse_scram_keys")) {
      const credentials2 = await getLoginCredentialsFromSCRAMKeys();
      if (credentials2) return connect(credentials2);
    }
    if (!isTestEnv() && "credentials" in navigator) {
      const credentials2 = await getLoginCredentialsFromBrowser();
      if (credentials2) return connect(credentials2);
    }
    if (!isTestEnv()) import_log4.default.debug("attemptNonPreboundSession: Couldn't find credentials to log in with");
  } else if ([ANONYMOUS, EXTERNAL].includes(api3.settings.get("authentication")) && (!automatic || api3.settings.get("auto_login"))) {
    connect();
  }
}
__name(attemptNonPreboundSession, "attemptNonPreboundSession");
async function savedLoginInfo(jid) {
  const id = `converse.scram-keys-${import_strophe4.Strophe.getBareJidFromJid(jid)}`;
  if (converse_default.state.login_info?.get("id") === id) {
    return converse_default.state.login_info;
  }
  const login_info = new import_skeletor3.Model({ id });
  converse_default.state.login_info = login_info;
  initStorage(login_info, id, "persistent");
  await new Promise((f) => login_info.fetch({ "success": f, "error": f }));
  return login_info;
}
__name(savedLoginInfo, "savedLoginInfo");
async function connect(credentials) {
  const { api: api3 } = converse_default;
  const jid = converse_default.session.get("jid");
  const connection2 = api3.connection.get();
  if ([ANONYMOUS, EXTERNAL].includes(api3.settings.get("authentication"))) {
    if (!jid) {
      throw new Error(
        "Config Error: when using anonymous login you need to provide the server's domain via the 'jid' option. Either when calling converse.initialize, or when calling _converse.api.user.login."
      );
    }
    if (!connection2.reconnecting) {
      connection2.reset();
    }
    connection2.connect(jid.toLowerCase());
  } else if (api3.settings.get("authentication") === LOGIN) {
    const password = credentials?.password ?? (connection2?.pass || api3.settings.get("password"));
    if (!password) {
      if (api3.settings.get("auto_login")) {
        throw new Error(
          "autoLogin: If you use auto_login and authentication='login' then you also need to provide a password."
        );
      }
      connection2.setDisconnectionCause(import_strophe4.Strophe.Status.AUTHFAIL, void 0, true);
      api3.connection.disconnect();
      return;
    }
    if (!connection2.reconnecting) {
      connection2.reset();
      connection2.service = getConnectionServiceURL();
    }
    let callback;
    if (converse_default.state.config.get("trusted") && jid && api3.settings.get("reuse_scram_keys") && !password?.ck) {
      const login_info = await savedLoginInfo(jid);
      callback = /**
       * @param {string} status
       * @param {string} message
       */
      /* @__PURE__ */ __name((status, message) => {
        const { scram_keys } = connection2;
        if (scram_keys) login_info.save({ scram_keys });
        connection2.onConnectStatusChanged(status, message);
      }, "callback");
    }
    connection2.connect(jid, password, callback);
  }
}
__name(connect, "connect");
function safeSave(model, attributes, options) {
  if (isPersistableModel(model)) {
    model.save(attributes, options);
  } else {
    model.set(attributes, options);
  }
}
__name(safeSave, "safeSave");

// shared/connection/index.js
var i = Object.keys(import_strophe5.Strophe.Status).reduce((max, k) => Math.max(max, import_strophe5.Strophe.Status[k]), 0);
import_strophe5.Strophe.Status.RECONNECTING = i + 1;
var Connection = class extends import_strophe5.Strophe.Connection {
  static {
    __name(this, "Connection");
  }
  constructor(service, options) {
    super(service, options);
    this.send_initial_presence = true;
    this.debouncedReconnect = (0, import_debounce2.default)(this.reconnect, 3e3);
  }
  /** @param {Element} body */
  xmlInput(body) {
    import_log5.default.debug(body.outerHTML, "color: darkgoldenrod");
  }
  /** @param {Element} body */
  xmlOutput(body) {
    import_log5.default.debug(body.outerHTML, "color: darkcyan");
  }
  async bind() {
    const { api: api3 } = converse_default;
    await api3.trigger("beforeResourceBinding", { "synchronous": true });
    super.bind();
  }
  async onDomainDiscovered(response) {
    const { api: api3 } = converse_default;
    const text = await response.text();
    const xrd = new DOMParser().parseFromString(text, "text/xml").firstElementChild;
    if (xrd.nodeName != "XRD" || xrd.namespaceURI != "http://docs.oasis-open.org/ns/xri/xrd-1.0") {
      return import_log5.default.info("Could not discover XEP-0156 connection methods");
    }
    const bosh_links = (0, import_sizzle.default)(`Link[rel="urn:xmpp:alt-connections:xbosh"]`, xrd);
    const ws_links = (0, import_sizzle.default)(`Link[rel="urn:xmpp:alt-connections:websocket"]`, xrd);
    const bosh_methods = bosh_links.map((el) => el.getAttribute("href")).filter((uri) => uri.startsWith("https:"));
    const ws_methods = ws_links.map((el) => el.getAttribute("href")).filter((uri) => uri.startsWith("wss:"));
    if (bosh_methods.length === 0 && ws_methods.length === 0) {
      import_log5.default.info("Neither BOSH nor WebSocket connection methods have been specified with XEP-0156.");
    } else {
      api3.settings.set("websocket_url", ws_methods.pop());
      api3.settings.set("bosh_service_url", bosh_methods.pop());
      this.service = api3.settings.get("websocket_url") || api3.settings.get("bosh_service_url");
      this.setProtocol();
    }
  }
  /**
   * Adds support for XEP-0156 by quering the XMPP server for alternate
   * connection methods. This allows users to use the websocket or BOSH
   * connection of their own XMPP server instead of a proxy provided by the
   * host of Converse.js.
   * @method Connnection.discoverConnectionMethods
   * @param {string} domain
   */
  async discoverConnectionMethods(domain) {
    const options = {
      /*! TOFIND */
      // Changed to no-cors mode for iOS host-meta discovery
      mode: (
        /** @type {RequestMode} */
        "no-cors"
      ),
      headers: {
        Accept: "application/xrd+xml, text/xml"
      }
    };
    const url = `https://${domain}/.well-known/host-meta`;
    let response;
    try {
      response = await fetch(url, options);
    } catch (e) {
      import_log5.default.info(`Failed to discover alternative connection methods at ${url}`);
      import_log5.default.error(e);
      return;
    }
    if (response.status >= 200 && response.status < 400) {
      await this.onDomainDiscovered(response);
    } else {
      import_log5.default.info("Could not discover XEP-0156 connection methods");
    }
  }
  /**
   * Establish a new XMPP session by logging in with the supplied JID and
   * password.
   * @param {String} jid
   * @param {String} password
   * @param {Function} callback
   */
  async connect(jid, password, callback) {
    const { __, api: api3 } = converse_default;
    if (api3.settings.get("discover_connection_methods")) {
      const domain = import_strophe5.Strophe.getDomainFromJid(jid);
      await this.discoverConnectionMethods(domain);
    }
    if (!api3.settings.get("bosh_service_url") && !api3.settings.get("websocket_url")) {
      api3.settings.set("show_connection_url_input", true);
      (callback || this.onConnectStatusChanged.bind(this))(
        import_strophe5.Strophe.Status.DISCONNECTED,
        __("Could not automatically determine a connection URL")
      );
      return;
    }
    super.connect(jid, password, callback || this.onConnectStatusChanged, BOSH_WAIT);
  }
  /**
   * @param {string} reason
   */
  disconnect(reason) {
    super.disconnect(reason);
    this.send_initial_presence = true;
  }
  /**
   * Switch to a different transport if a service URL is available for it.
   *
   * When reconnecting with a new transport, we call setUserJID
   * so that a new resource is generated, to avoid multiple
   * server-side sessions with the same resource.
   *
   * We also call `_proto._doDisconnect` so that connection event handlers
   * for the old transport are removed.
   */
  async switchTransport() {
    const { api: api3 } = converse_default;
    const bare_jid = converse_default.session.get("bare_jid");
    if (api3.connection.isType("websocket") && api3.settings.get("bosh_service_url")) {
      await setUserJID(bare_jid);
      this._proto._doDisconnect();
      this._proto = new import_strophe5.Strophe.Bosh(this);
      this.service = api3.settings.get("bosh_service_url");
    } else if (api3.connection.isType("bosh") && api3.settings.get("websocket_url")) {
      if (api3.settings.get("authentication") === ANONYMOUS) {
        await setUserJID(api3.settings.get("jid"));
      } else {
        await setUserJID(bare_jid);
      }
      this._proto._doDisconnect();
      this._proto = new import_strophe5.Strophe.Websocket(this);
      this.service = api3.settings.get("websocket_url");
    }
  }
  async reconnect() {
    const { api: api3 } = converse_default;
    import_log5.default.debug("RECONNECTING: the connection has dropped, attempting to reconnect.");
    this.reconnecting = true;
    await tearDown(converse_default);
    const conn_status = converse_default.state.connfeedback.get("connection_status");
    if (conn_status === import_strophe5.Strophe.Status.CONNFAIL) {
      this.switchTransport();
    } else if (conn_status === import_strophe5.Strophe.Status.AUTHFAIL && api3.settings.get("authentication") === ANONYMOUS) {
      await setUserJID(api3.settings.get("jid"));
    }
    api3.trigger("will-reconnect");
    if (api3.settings.get("authentication") === ANONYMOUS) {
      await clearSession(converse_default);
    }
    const jid = converse_default.session.get("jid");
    return api3.user.login(jid);
  }
  /**
   * Called as soon as a new connection has been established, either
   * by logging in or by attaching to an existing BOSH session.
   * @method Connection.onConnected
   * @param {Boolean} [reconnecting] - Whether Converse.js reconnected from an earlier dropped session.
   */
  async onConnected(reconnecting) {
    const { api: api3 } = converse_default;
    delete this.reconnecting;
    this.flush();
    await setUserJID(this.jid);
    if (converse_default.state.config.get("trusted")) {
      const bare_jid = converse_default.session.get("bare_jid");
      localStorage.setItem("conversejs-session-jid", bare_jid);
    }
    await api3.trigger("afterResourceBinding", reconnecting, { "synchronous": true });
    if (reconnecting) {
      api3.trigger("reconnected");
    } else {
      api3.trigger("connected");
    }
  }
  /**
   * Used to keep track of why we got disconnected, so that we can
   * decide on what the next appropriate action is (in onDisconnected)
   * @param {Number|'logout'} [cause] - The status number as received from Strophe.
   * @param {String} [reason] - An optional user-facing message as to why
   *  there was a disconnection.
   * @param {Boolean} [override] - An optional flag to replace any previous
   *  disconnection cause and reason.
   */
  setDisconnectionCause(cause, reason, override) {
    if (cause === void 0) {
      delete this.disconnection_cause;
      delete this.disconnection_reason;
    } else if (this.disconnection_cause === void 0 || override) {
      this.disconnection_cause = cause;
      this.disconnection_reason = reason;
    }
  }
  /**
   * @param {Number} [status] - The status number as received from Strophe.
   * @param {String} [message] - An optional user-facing message
   */
  setConnectionStatus(status, message) {
    this.status = status;
    converse_default.state.connfeedback.set({ connection_status: status, message });
  }
  async finishDisconnection() {
    this.setConnectionStatus(import_strophe5.Strophe.Status.DISCONNECTED, this.disconnection_reason);
    const { api: api3 } = converse_default;
    import_log5.default.debug("DISCONNECTED");
    delete this.reconnecting;
    this.reset();
    tearDown(converse_default);
    await clearSession(converse_default);
    api3.connection.destroy();
    api3.trigger("disconnected");
  }
  /**
   * Gets called once strophe's status reaches Strophe.Status.DISCONNECTED.
   * Will either start a teardown process for converse.js or attempt
   * to reconnect.
   * @method onDisconnected
   */
  onDisconnected() {
    const { api: api3 } = converse_default;
    if (api3.settings.get("auto_reconnect")) {
      const reason = this.disconnection_reason;
      if (this.disconnection_cause === import_strophe5.Strophe.Status.AUTHFAIL) {
        if (api3.settings.get("credentials_url") || api3.settings.get("authentication") === ANONYMOUS) {
          return api3.connection.reconnect();
        } else {
          return this.finishDisconnection();
        }
      } else if (this.status === import_strophe5.Strophe.Status.CONNECTING) {
        const { __ } = converse_default;
        this.setConnectionStatus(
          import_strophe5.Strophe.Status.CONNFAIL,
          __("An error occurred while connecting to the chat server.")
        );
        return this.finishDisconnection();
      } else if (this.disconnection_cause === LOGOUT || reason === import_strophe5.Strophe.ErrorCondition.NO_AUTH_MECH || reason === "host-unknown" || reason === "remote-connection-failed") {
        return this.finishDisconnection();
      }
      api3.connection.reconnect();
    } else {
      return this.finishDisconnection();
    }
  }
  /**
   * Callback method called by Strophe as the Connection goes
   * through various states while establishing or tearing down a
   * connection.
   * @param {Number} status
   * @param {String} [condition]
   */
  onConnectStatusChanged(status, condition) {
    const { __ } = converse_default;
    import_log5.default.debug(`Status changed to: ${CONNECTION_STATUS[status]}`);
    if (status === import_strophe5.Strophe.Status.ATTACHFAIL) {
      this.setConnectionStatus(status);
      this.worker_attach_promise?.resolve(false);
    } else if (status === import_strophe5.Strophe.Status.CONNECTED || status === import_strophe5.Strophe.Status.ATTACHED) {
      if (this.worker_attach_promise?.isResolved && this.status === import_strophe5.Strophe.Status.ATTACHED) {
        return;
      }
      this.setConnectionStatus(status);
      this.worker_attach_promise?.resolve(true);
      this.setDisconnectionCause();
      if (this.reconnecting) {
        import_log5.default.debug(status === import_strophe5.Strophe.Status.CONNECTED ? "Reconnected" : "Reattached");
        this.onConnected(true);
      } else {
        import_log5.default.debug(status === import_strophe5.Strophe.Status.CONNECTED ? "Connected" : "Attached");
        if (this.restored) {
          this.send_initial_presence = false;
        }
        this.onConnected();
      }
    } else if (status === import_strophe5.Strophe.Status.DISCONNECTED) {
      this.setDisconnectionCause(status, condition);
      this.onDisconnected();
    } else if (status === import_strophe5.Strophe.Status.BINDREQUIRED) {
      this.bind();
    } else if (status === import_strophe5.Strophe.Status.ERROR) {
      this.setConnectionStatus(
        status,
        __("An error occurred while connecting to the chat server.")
      );
    } else if (status === import_strophe5.Strophe.Status.CONNECTING) {
      this.setConnectionStatus(status);
    } else if (status === import_strophe5.Strophe.Status.AUTHENTICATING) {
      this.setConnectionStatus(status);
    } else if (status === import_strophe5.Strophe.Status.AUTHFAIL) {
      if (!condition) {
        condition = __("Your XMPP address and/or password is incorrect. Please try again.");
      }
      this.setConnectionStatus(status, condition);
      this.setDisconnectionCause(status, condition, true);
      this.onDisconnected();
    } else if (status === import_strophe5.Strophe.Status.CONNFAIL) {
      let feedback = condition;
      if (condition === "host-unknown" || condition == "remote-connection-failed") {
        feedback = __(
          "We could not connect to %1$s, is your XMPP address correct?",
          import_strophe5.Strophe.getDomainFromJid(this.jid)
        );
      } else if (condition === "policy-violation") {
        feedback = __("The XMPP server rejected the connection because of a policy violation");
      } else if (condition !== void 0 && condition === import_strophe5.Strophe?.ErrorCondition?.NO_AUTH_MECH) {
        feedback = __("The XMPP server did not offer a supported authentication mechanism");
      }
      this.setConnectionStatus(status, feedback);
      this.setDisconnectionCause(status, condition);
    } else if (status === import_strophe5.Strophe.Status.DISCONNECTING) {
      this.setConnectionStatus(status);
      this.setDisconnectionCause(status, condition);
    }
  }
  /**
   * @param {string} type
   */
  isType(type) {
    if (type.toLowerCase() === "websocket") {
      return this._proto instanceof import_strophe5.Strophe.Websocket;
    } else if (type.toLowerCase() === "bosh") {
      return import_strophe5.Strophe.Bosh && this._proto instanceof import_strophe5.Strophe.Bosh;
    }
  }
  hasResumed() {
    const { api: api3 } = converse_default;
    if (api3.settings.get("connection_options")?.worker || this.isType("bosh")) {
      return converse_default.state.connfeedback.get("connection_status") === import_strophe5.Strophe.Status.ATTACHED;
    } else {
      return !this.do_bind;
    }
  }
  restoreWorkerSession() {
    this.attach(this.onConnectStatusChanged);
    this.worker_attach_promise = (0, import_openpromise3.getOpenPromise)();
    return this.worker_attach_promise;
  }
};
var MockConnection = class extends Connection {
  static {
    __name(this, "MockConnection");
  }
  /**
   * @param {string} service - The BOSH or WebSocket service URL.
   * @param {import('strophe.js/src/types/connection').ConnectionOptions} options - The configuration options
   */
  constructor(service, options) {
    super(service, options);
    this.sent_stanzas = [];
    this.IQ_stanzas = [];
    this.IQ_ids = [];
    this.features = import_strophe5.Strophe.xmlHtmlNode(
      `<stream:features xmlns:stream="http://etherx.jabber.org/streams" xmlns="jabber:client"><ver xmlns="urn:xmpp:features:rosterver"/><csi xmlns="urn:xmpp:csi:0"/><this xmlns="http://jabber.org/protocol/caps" ver="UwBpfJpEt3IoLYfWma/o/p3FFRo=" hash="sha-1" node="http://prosody.im"/><bind xmlns="urn:ietf:params:xml:ns:xmpp-bind"><required/></bind><sm xmlns='urn:xmpp:sm:3'/><session xmlns="urn:ietf:params:xml:ns:xmpp-session"><optional/></session></stream:features>`
    ).firstElementChild;
    this._proto._processRequest = () => {
    };
    this._proto._disconnect = () => this._onDisconnectTimeout();
    this._proto._onDisconnectTimeout = () => {
    };
    this._proto._connect = () => {
      this.connected = true;
      this.mock = true;
      this.jid = "romeo@montague.lit/orchard";
      this._changeConnectStatus(import_strophe5.Strophe.Status.BINDREQUIRED);
    };
  }
  // @ts-ignore
  get _sasl_mechanism() {
    return new import_strophe5.Strophe.SASLSHA256();
  }
  _processRequest() {
  }
  sendIQ(iq, callback, errback) {
    iq = iq.tree?.() ?? iq;
    this.IQ_stanzas.push(iq);
    const id = super.sendIQ(iq, callback, errback);
    this.IQ_ids.push(id);
    return id;
  }
  send(stanza) {
    stanza = stanza.tree?.() ?? stanza;
    this.sent_stanzas.push(stanza);
    return super.send(stanza);
  }
  async bind() {
    const { api: api3 } = converse_default;
    await api3.trigger("beforeResourceBinding", { "synchronous": true });
    this.authenticated = true;
    this._changeConnectStatus(import_strophe5.Strophe.Status.CONNECTED);
  }
};

// shared/connection/api.js
var import_strophe6 = require("strophe.js");
var connection;
var default_connection_options = { "explicitResourceBinding": true };
var api_default = {
  /**
   * @method api.connection.init
   * @memberOf api.connection
   * @param {string} [jid]
   * @return {Connection|MockConnection}
   */
  init(jid) {
    if (jid && connection?.jid && isSameDomain(connection.jid, jid)) return connection;
    if (!settings_api.get("bosh_service_url") && settings_api.get("authentication") === PREBIND) {
      throw new Error("authentication is set to 'prebind' but we don't have a BOSH connection");
    }
    const XMPPConnection = isTestEnv() ? MockConnection : Connection;
    connection = new XMPPConnection(
      getConnectionServiceURL(),
      Object.assign(default_connection_options, settings_api.get("connection_options"), {
        "keepalive": settings_api.get("keepalive")
      })
    );
    setStropheLogLevel();
    events_default.trigger("connectionInitialized");
    return connection;
  },
  get() {
    return connection;
  },
  destroy() {
    this.disconnect();
    connection?.disconnect();
    connection = void 0;
  },
  /**
   * @method api.connection.authenticated
   * @memberOf api.connection
   * @returns {boolean} Whether we're authenticated to the XMPP server or not
   */
  authenticated() {
    return connection?.authenticated && true;
  },
  /**
   * @method api.connection.connected
   * @memberOf api.connection
   * @returns {boolean} Whether there is an established connection or not.
   */
  connected() {
    return connection?.connected && true;
  },
  /**
   * Terminates the connection.
   *
   * @method api.connection.disconnect
   * @memberOf api.connection
   */
  disconnect() {
    connection?.disconnect();
  },
  /**
   * Can be called once the XMPP connection has dropped and we want
   * to attempt reconnection.
   * Only needs to be called once, if reconnect fails Converse will
   * attempt to reconnect every two seconds, alternating between BOSH and
   * Websocket if URLs for both were provided.
   * @method reconnect
   * @memberOf api.connection
   */
  reconnect() {
    connection.setConnectionStatus(
      import_strophe6.Strophe.Status.RECONNECTING,
      "The connection has dropped, attempting to reconnect."
    );
    if (connection?.reconnecting) {
      return connection.debouncedReconnect();
    } else {
      return connection.reconnect();
    }
  },
  /**
   * Utility method to determine the type of connection we have
   * @method isType
   * @memberOf api.connection
   * @returns {boolean}
   */
  isType(type) {
    return connection.isType(type);
  }
};

// shared/api/promise.js
var import_openpromise5 = require("@converse/openpromise");

// utils/promise.js
var promise_exports = {};
__export(promise_exports, {
  debounce: () => debounce3,
  getOpenPromise: () => import_openpromise4.getOpenPromise,
  waitUntil: () => waitUntil
});
var import_log6 = __toESM(require("@converse/log"));
var import_openpromise4 = require("@converse/openpromise");
function debounce3(func, timeout) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
__name(debounce3, "debounce");
/**
 * Clears the specified timeout and interval.
 * @method u#clearTimers
 * @param {ReturnType<typeof setTimeout>} timeout - Id if the timeout to clear.
 * @param {ReturnType<typeof setInterval>} interval - Id of the interval to clear.
 * @copyright Simen Bekkhus 2016
 * @license MIT
 */
function clearTimers(timeout, interval) {
  clearTimeout(timeout);
  clearInterval(interval);
}
__name(clearTimers, "clearTimers");
/**
 * Creates a {@link Promise} that resolves if the passed in function returns a truthy value.
 * Rejects if it throws or does not return truthy within the given max_wait.
 * @param { Function } func - The function called every check_delay,
 *  and the result of which is the resolved value of the promise.
 * @param { number } [max_wait=300] - The time to wait before rejecting the promise.
 * @param { number } [check_delay=3] - The time to wait before each invocation of {func}.
 * @returns {Promise} A promise resolved with the value of func,
 *  or rejected with the exception thrown by it or it times out.
 * @copyright Simen Bekkhus 2016
 * @license MIT
 */
function waitUntil(func, max_wait = 300, check_delay = 3) {
  try {
    const result = func();
    if (result) {
      return Promise.resolve(result);
    }
  } catch (e) {
    return Promise.reject(e);
  }
  const promise = (0, import_openpromise4.getOpenPromise)();
  const timeout_err = new Error();
  function checker() {
    try {
      const result = func();
      if (result) {
        clearTimers(max_wait_timeout, interval);
        promise.resolve(result);
      }
    } catch (e) {
      clearTimers(max_wait_timeout, interval);
      promise.reject(e);
    }
  }
  __name(checker, "checker");
  const interval = setInterval(checker, check_delay);
  function handler() {
    clearTimers(max_wait_timeout, interval);
    const err_msg = `Wait until promise timed out: 

${timeout_err.stack}`;
    console.trace();
    import_log6.default.error(err_msg);
    promise.reject(new Error(err_msg));
  }
  __name(handler, "handler");
  const max_wait_timeout = setTimeout(handler, max_wait);
  return promise;
}
__name(waitUntil, "waitUntil");

// shared/api/promise.js
var promise_default = {
  /**
   * Converse and its plugins trigger various events which you can listen to via the
   * {@link _converse.api.listen} namespace.
   *
   * Some of these events are also available as [ES2015 Promises](http://es6-features.org/#PromiseUsage)
   * although not all of them could logically act as promises, since some events
   * might be fired multpile times whereas promises are to be resolved (or
   * rejected) only once.
   *
   * Events which are also promises include:
   *
   * * [cachedRoster](/docs/html/events.html#cachedroster)
   * * [chatBoxesFetched](/docs/html/events.html#chatBoxesFetched)
   * * [pluginsInitialized](/docs/html/events.html#pluginsInitialized)
   * * [roster](/docs/html/events.html#roster)
   * * [rosterContactsFetched](/docs/html/events.html#rosterContactsFetched)
   * * [rosterGroupsFetched](/docs/html/events.html#rosterGroupsFetched)
   * * [rosterInitialized](/docs/html/events.html#rosterInitialized)
   *
   * The various plugins might also provide promises, and they do this by using the
   * `promises.add` api method.
   *
   * @namespace _converse.api.promises
   * @memberOf _converse.api
   */
  promises: {
    /**
     * By calling `promises.add`, a new [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
     * is made available for other code or plugins to depend on via the
     * {@link _converse.api.waitUntil} method.
     *
     * Generally, it's the responsibility of the plugin which adds the promise to
     * also resolve it.
     *
     * This is done by calling {@link _converse.api.trigger}, which not only resolves the
     * promise, but also emits an event with the same name (which can be listened to
     * via {@link _converse.api.listen}).
     *
     * @method _converse.api.promises.add
     * @param {string|array} [promises] The name or an array of names for the promise(s) to be added
     * @param {boolean} [replace=true] Whether this promise should be replaced with a new one when the user logs out.
     * @example _converse.api.promises.add('foo-completed');
     */
    add(promises, replace = true) {
      promises = Array.isArray(promises) ? promises : [promises];
      promises.forEach((name) => {
        const promise = (0, import_openpromise5.getOpenPromise)();
        promise.replace = replace;
        converse_default.promises[name] = promise;
      });
    }
  },
  /**
   * Wait until a promise is resolved or until the passed in function returns
   * a truthy value.
   * @method _converse.api.waitUntil
   * @param {string|function} condition - The name of the promise to wait for,
   * or a function which should eventually return a truthy value.
   * @returns {Promise}
   */
  waitUntil(condition) {
    if (isFunction(condition)) {
      return waitUntil(
        /** @type {Function} */
        condition
      );
    } else {
      const promise = converse_default.promises[condition];
      if (promise === void 0) {
        return null;
      }
      return promise;
    }
  }
};

// shared/api/send.js
var import_log7 = __toESM(require("@converse/log"));
var import_strophe7 = require("strophe.js");

// shared/errors.js
var errors_exports = {};
__export(errors_exports, {
  BadRequestError: () => BadRequestError,
  ConflictError: () => ConflictError,
  FeatureNotImplementedError: () => FeatureNotImplementedError,
  ForbiddenError: () => ForbiddenError,
  GoneError: () => GoneError,
  IQError: () => IQError,
  InternalServerError: () => InternalServerError,
  ItemNotFoundError: () => ItemNotFoundError,
  JIDMalformedError: () => JIDMalformedError,
  MethodNotImplementedError: () => MethodNotImplementedError,
  NotAcceptableError: () => NotAcceptableError,
  NotAllowedError: () => NotAllowedError,
  NotAuthorizedError: () => NotAuthorizedError,
  PaymentRequiredError: () => PaymentRequiredError,
  RecipientUnavailableError: () => RecipientUnavailableError,
  RedirectError: () => RedirectError,
  RegistrationRequiredError: () => RegistrationRequiredError,
  RemoteServerNotFoundError: () => RemoteServerNotFoundError,
  RemoteServerTimeoutError: () => RemoteServerTimeoutError,
  ResourceConstraintError: () => ResourceConstraintError,
  ServiceUnavailableError: () => ServiceUnavailableError,
  StanzaError: () => StanzaError,
  StanzaParseError: () => StanzaParseError,
  SubscriptionRequiredError: () => SubscriptionRequiredError,
  TimeoutError: () => TimeoutError,
  UndefinedConditionError: () => UndefinedConditionError,
  UnexpectedRequestError: () => UnexpectedRequestError,
  UserFacingError: () => UserFacingError
});
var MethodNotImplementedError = class extends Error {
  static {
    __name(this, "MethodNotImplementedError");
  }
};
var UserFacingError = class extends Error {
  static {
    __name(this, "UserFacingError");
  }
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = "UserFacingError";
    this.user_facing = true;
  }
};
var IQError = class extends Error {
  static {
    __name(this, "IQError");
  }
  /**
   * @param {string} message
   * @param {Element} iq
   */
  constructor(message, iq) {
    super(message);
    this.name = "IQError";
    this.iq = iq;
  }
};
var TimeoutError = class extends Error {
  static {
    __name(this, "TimeoutError");
  }
  /**
   * @param  {string} message
   */
  constructor(message) {
    super(message);
    this.retry_event_id = null;
  }
};
var StanzaError = class extends Error {
  static {
    __name(this, "StanzaError");
  }
  /**
   * @typedef {import("./types").ErrorName} ErrorName
   * @typedef {import("./types").ErrorType} ErrorType
   * @typedef {import("./types").ErrorExtra} ErrorExtra
   */
  /**
   * @param {ErrorName|'unknown'} name
   * @param {Element} e - The <error> element from a stanza
   * @param {Object} extra - Extra properties from plugin parsers
   */
  constructor(name, e, extra) {
    super(e.querySelector("text")?.textContent ?? "");
    this.name = name;
    this.message = name;
    this.type = /** @type {ErrorType} */
    e.getAttribute("type");
    this.el = e;
    this.extra = extra;
  }
};
var StanzaParseError = class extends Error {
  static {
    __name(this, "StanzaParseError");
  }
  /**
   * @param {Element} stanza
   * @param {string} [message]
   */
  constructor(stanza, message) {
    super(message);
    this.name = "StanzaParseError";
    this.stanza = stanza;
  }
};
var BadRequestError = class extends StanzaError {
  static {
    __name(this, "BadRequestError");
  }
};
var ConflictError = class extends StanzaError {
  static {
    __name(this, "ConflictError");
  }
};
var FeatureNotImplementedError = class extends StanzaError {
  static {
    __name(this, "FeatureNotImplementedError");
  }
};
var ForbiddenError = class extends StanzaError {
  static {
    __name(this, "ForbiddenError");
  }
};
var GoneError = class extends StanzaError {
  static {
    __name(this, "GoneError");
  }
};
var InternalServerError = class extends StanzaError {
  static {
    __name(this, "InternalServerError");
  }
};
var ItemNotFoundError = class extends StanzaError {
  static {
    __name(this, "ItemNotFoundError");
  }
};
var JIDMalformedError = class extends StanzaError {
  static {
    __name(this, "JIDMalformedError");
  }
};
var NotAcceptableError = class extends StanzaError {
  static {
    __name(this, "NotAcceptableError");
  }
};
var NotAllowedError = class extends StanzaError {
  static {
    __name(this, "NotAllowedError");
  }
};
var NotAuthorizedError = class extends StanzaError {
  static {
    __name(this, "NotAuthorizedError");
  }
};
var PaymentRequiredError = class extends StanzaError {
  static {
    __name(this, "PaymentRequiredError");
  }
};
var RecipientUnavailableError = class extends StanzaError {
  static {
    __name(this, "RecipientUnavailableError");
  }
};
var RedirectError = class extends StanzaError {
  static {
    __name(this, "RedirectError");
  }
};
var RegistrationRequiredError = class extends StanzaError {
  static {
    __name(this, "RegistrationRequiredError");
  }
};
var RemoteServerNotFoundError = class extends StanzaError {
  static {
    __name(this, "RemoteServerNotFoundError");
  }
};
var RemoteServerTimeoutError = class extends StanzaError {
  static {
    __name(this, "RemoteServerTimeoutError");
  }
};
var ResourceConstraintError = class extends StanzaError {
  static {
    __name(this, "ResourceConstraintError");
  }
};
var ServiceUnavailableError = class extends StanzaError {
  static {
    __name(this, "ServiceUnavailableError");
  }
};
var SubscriptionRequiredError = class extends StanzaError {
  static {
    __name(this, "SubscriptionRequiredError");
  }
};
var UndefinedConditionError = class extends StanzaError {
  static {
    __name(this, "UndefinedConditionError");
  }
};
var UnexpectedRequestError = class extends StanzaError {
  static {
    __name(this, "UnexpectedRequestError");
  }
};

// shared/api/send.js
var send_default = {
  /**
   * @typedef {import('strophe.js').Builder} Builder
   *
   * Allows you to send XML stanzas.
   * @method _converse.api.send
   * @param {Element|Builder} stanza
   * @returns {void}
   * @example
   *     const { stx } = _converse.env;
   *     const msg = stx`<message from="juliet@example.com/balcony" to="romeo@example.net" type="chat"/>`;
   *     _converse.api.send(msg);
   */
  send(stanza) {
    const { api: api3 } = converse_default;
    if (!api3.connection.connected()) {
      import_log7.default.warn("Not sending stanza because we're not connected!");
      import_log7.default.warn(import_strophe7.Strophe.serialize(stanza));
      return;
    }
    const el = stanza instanceof Element ? stanza : stanza.tree();
    if (el.tagName === "iq") {
      return api3.sendIQ(el);
    } else {
      api3.connection.get().send(el);
      api3.trigger("send", el);
    }
  },
  /**
   * Send an IQ stanza
   * @method _converse.api.sendIQ
   * @param {Element|Builder} stanza
   * @param {number} [timeout] - The default timeout value is taken from
   *  the `stanza_timeout` configuration setting.
   * @param {boolean} [reject=true] - Whether an error IQ should cause the promise
   *  to be rejected. If `false`, the promise will resolve instead of being rejected.
   * @returns {Promise} A promise which resolves (or potentially rejected) once we
   *  receive a `result` or `error` stanza or once a timeout is reached.
   *  If the IQ stanza being sent is of type `result` or `error`, there's
   *  nothing to wait for, so an already resolved promise is returned.
   */
  sendIQ(stanza, timeout, reject = true) {
    const { api: api3 } = converse_default;
    if (!api3.connection.connected()) {
      throw new Error("Not sending IQ stanza because we're not connected!");
    }
    const connection2 = api3.connection.get();
    let promise;
    const el = stanza instanceof Element ? stanza : stanza.tree();
    if (["get", "set"].includes(el.getAttribute("type"))) {
      timeout = timeout || api3.settings.get("stanza_timeout");
      if (reject) {
        promise = new Promise((resolve, reject2) => connection2.sendIQ(el, resolve, reject2, timeout));
        promise.catch((e) => {
          if (e === null) {
            throw new TimeoutError(
              `Timeout error after ${timeout}ms for the following IQ stanza: ${import_strophe7.Strophe.serialize(el)}`
            );
          }
        });
      } else {
        promise = new Promise((resolve) => connection2.sendIQ(el, resolve, resolve, timeout));
      }
    } else {
      connection2.sendIQ(el);
      promise = Promise.resolve();
    }
    api3.trigger("send", el);
    return promise;
  }
};

// plugins/chatboxes/utils.js
var import_strophe8 = require("strophe.js");
var import_log8 = __toESM(require("@converse/log"));
async function onClearSession() {
  if (shouldClearCache(converse_default)) {
    const { chatboxes } = converse_default.state;
    await Promise.all(chatboxes.map(
      /** @param {ChatBox} c */
      (c) => c.messages?.clearStore({ "silent": true })
    ));
    chatboxes.clearStore(
      { silent: true },
      /** @param {import('../../shared/chatbox').default} o */
      (o) => o.get("type") !== CONTROLBOX_TYPE
    );
  }
}
__name(onClearSession, "onClearSession");
async function createChatBox(jid, attrs, Model33) {
  jid = import_strophe8.Strophe.getBareJidFromJid(jid.toLowerCase());
  Object.assign(attrs, { "jid": jid, "id": jid });
  let chatbox;
  try {
    chatbox = new Model33(attrs, { "collection": converse_default.state.chatboxes });
  } catch (e) {
    import_log8.default.error(e);
    return null;
  }
  await chatbox.initialized;
  if (!chatbox.isValid()) {
    chatbox.destroy();
    return null;
  }
  converse_default.state.chatboxes.add(chatbox);
  return chatbox;
}
__name(createChatBox, "createChatBox");

// plugins/chatboxes/api.js
var { waitUntil: waitUntil2 } = promise_default;
var _chatBoxTypes = {};
var api_default2 = {
  /**
   * @typedef {new (attrs: object, options: object) => ChatBox} ModelClass
   */
  /**
   * @method api.chatboxes.create
   * @param {string|string[]} jids - A JID or array of JIDs
   * @param {Object} attrs An object containing configuration attributes
   * @param {ModelClass} model - The type of chatbox that should be created
   */
  async create(jids = [], attrs = {}, model) {
    await waitUntil2("chatBoxesFetched");
    if (typeof jids === "string") {
      return createChatBox(jids, attrs, model);
    } else {
      return Promise.all(jids.map((jid) => createChatBox(jid, attrs, model)));
    }
  },
  /**
   * @method api.chatboxes.get
   * @param {string|string[]} [jids] - A JID or array of JIDs
   */
  async get(jids) {
    await waitUntil2("chatBoxesFetched");
    const { chatboxes } = converse_default.state;
    if (jids === void 0) {
      return chatboxes.models;
    } else if (typeof jids === "string") {
      return chatboxes.get(jids.toLowerCase());
    } else {
      jids = jids.map((j) => j.toLowerCase());
      return chatboxes.models.filter((m) => jids.includes(m.get("jid")));
    }
  },
  /**
   * The "chatboxes" registry.
   * Allows you to register more chatbox types that can be created via
   * `api.chatboxes.create`.
   * @namespace api.chatboxes.registry
   * @memberOf api.chatboxes
   */
  registry: {
    /**
     * @method api.chatboxes.registry.add
     * Add another type of chatbox that can be added to this collection.
     * This is used in the `createModel` function to determine what type of
     * chatbox class to instantiate (e.g. ChatBox, MUC, Feed etc.) based on the
     * passed in attributes.
     * @param {string} type - The type name
     * @param {ModelClass} model - The model which will be instantiated for the given type name.
     */
    add(type, model) {
      _chatBoxTypes[type] = model;
    },
    /**
     * @method api.chatboxes.registry.get
     * @param {string} type - The type name
     * @return {ModelClass} model - The model which will be instantiated for the given type name.
     */
    get(type) {
      return _chatBoxTypes[type];
    }
  }
};

// plugins/muc/api.js
var import_log9 = __toESM(require("@converse/log"));
var import_strophe9 = require("strophe.js");
var { waitUntil: waitUntil3 } = promise_default;
var rooms = {
  /**
   * Creates a new MUC chatroom (aka groupchat)
   *
   * Similar to {@link api.rooms.open}, but creates
   * the chatroom in the background (i.e. doesn't cause a view to open).
   *
   * @method api.rooms.create
   * @param {(string[]|string)} jids The JID or array of
   *     JIDs of the chatroom(s) to create
   * @param {object} [attrs] attrs The room attributes
   * @returns {Promise<MUC[]|MUC>} Promise which resolves with the Model representing the chat.
   */
  create(jids, attrs = {}) {
    attrs = typeof attrs === "string" ? { "nick": attrs } : attrs || {};
    if (!attrs.nick && settings_api.get("muc_nickname_from_jid")) {
      const bare_jid = converse_default.session.get("bare_jid");
      attrs.nick = import_strophe9.Strophe.getNodeFromJid(bare_jid);
    }
    if (jids === void 0) {
      throw new TypeError("rooms.create: You need to provide at least one JID");
    } else if (typeof jids === "string") {
      return rooms.get(getJIDFromURI(jids), attrs, true);
    }
    return Promise.all(jids.map((jid) => (
      /** @type {Promise<MUC>} */
      rooms.get(getJIDFromURI(jid), attrs, true)
    )));
  },
  /**
   * Opens a MUC chatroom (aka groupchat)
   *
   * Similar to {@link api.chats.open}, but for groupchats.
   *
   * @method api.rooms.open
   * @param {string|string[]} jids The room JID or JIDs (if not specified, all
   *     currently open rooms will be returned).
   * @param {object} attrs A map  containing any extra room attributes.
   * @param {string} [attrs.nick] The current user's nickname for the MUC
   * @param {boolean} [attrs.hidden]
   * @param {boolean} [attrs.auto_configure] A boolean, indicating
   *     whether the room should be configured automatically or not.
   *     If set to `true`, then it makes sense to pass in configuration settings.
   * @param {object} [attrs.roomconfig] A map of configuration settings to be used when the room gets
   *     configured automatically. Currently it doesn't make sense to specify
   *     `roomconfig` values if `auto_configure` is set to `false`.
   *     For a list of configuration values that can be passed in, refer to these values
   *     in the [XEP-0045 MUC specification](https://xmpp.org/extensions/xep-0045.html#registrar-formtype-owner).
   *     The values should be named without the `muc#roomconfig_` prefix.
   * @param {boolean} [attrs.minimized] A boolean, indicating whether the room should be opened minimized or not.
   * @param {boolean} [force=false] - By default, a minimized
   *   room won't be maximized (in `overlayed` view mode) and in
   *   `fullscreen` view mode a newly opened room won't replace
   *   another chat already in the foreground.
   *   Set `force` to `true` if you want to force the room to be
   *   maximized or shown.
   * @returns {Promise<MUC[]|MUC>} Promise which resolves with the Model representing the chat.
   *
   * @example
   * api.rooms.open('group@muc.example.com')
   *
   * @example
   * // To return an array of rooms, provide an array of room JIDs:
   * api.rooms.open(['group1@muc.example.com', 'group2@muc.example.com'])
   *
   * @example
   * // To setup a custom nickname when joining the room, provide the optional nick argument:
   * api.rooms.open('group@muc.example.com', {'nick': 'mycustomnick'})
   *
   * @example
   * // For example, opening a room with a specific default configuration:
   * api.rooms.open(
   *     'myroom@conference.example.org',
   *     { 'nick': 'coolguy69',
   *       'auto_configure': true,
   *       'roomconfig': {
   *           'changesubject': false,
   *           'membersonly': true,
   *           'persistentroom': true,
   *           'publicroom': true,
   *           'roomdesc': 'Comfy room for hanging out',
   *           'whois': 'anyone'
   *       }
   *     }
   * );
   */
  async open(jids, attrs = {}, force = false) {
    await waitUntil3("chatBoxesFetched");
    if (jids === void 0) {
      const err_msg = "rooms.open: You need to provide at least one JID";
      import_log9.default.error(err_msg);
      throw new TypeError(err_msg);
    } else if (typeof jids === "string") {
      const room = (
        /** @type {MUC} */
        await rooms.get(jids, attrs, true)
      );
      !attrs.hidden && room?.maybeShow(force);
      return room;
    } else {
      const rooms3 = await Promise.all(jids.map((jid) => rooms3.get(jid, attrs, true)));
      rooms3.forEach((r) => !attrs.hidden && r.maybeShow(force));
      return rooms3;
    }
  },
  /**
   * Fetches the object representing a MUC chatroom (aka groupchat)
   *
   * @method api.rooms.get
   * @param {string|string[]} [jids] The room JID (if not specified, all rooms will be returned).
   * @param {object} [attrs] A map containing any extra room attributes
   *  to be set if `create` is set to `true`
   * @param {string} [attrs.nick] Specify the nickname
   * @param {string} [attrs.password ] Specify a password if needed to enter a new room
   * @param {boolean} create A boolean indicating whether the room should be created
   *     if not found (default: `false`)
   * @returns {Promise<MUC[]|MUC>}
   * @example
   * api.waitUntil('roomsAutoJoined').then(() => {
   *     const create_if_not_found = true;
   *     api.rooms.get(
   *         'group@muc.example.com',
   *         {'nick': 'dread-pirate-roberts', 'password': 'secret'},
   *         create_if_not_found
   *     )
   * });
   */
  async get(jids, attrs = {}, create = false) {
    await waitUntil3("chatBoxesFetched");
    async function _get(jid) {
      jid = getJIDFromURI(jid);
      let model = await api_default2.get(jid);
      if (!model && create) {
        model = await api_default2.create(jid, attrs, converse_default.exports.MUC);
      } else {
        model = model && model.get("type") === CHATROOMS_TYPE ? model : null;
        if (model && Object.keys(attrs).length) {
          model.save(attrs);
        }
      }
      return model;
    }
    __name(_get, "_get");
    if (jids === void 0) {
      const chats = await api_default2.get();
      return chats.filter((c) => c.get("type") === CHATROOMS_TYPE);
    } else if (typeof jids === "string") {
      return _get(jids);
    }
    return Promise.all(jids.map((jid) => _get(jid)));
  }
};
var rooms_api = { rooms };
var api_default3 = rooms_api;

// shared/api/presence.js
var { waitUntil: waitUntil4 } = promise_default;
var { send } = send_default;
var { rooms: rooms2 } = api_default3;
var presence_default = {
  /**
   * @namespace _converse.api.user.presence
   * @memberOf _converse.api.user
   */
  presence: {
    /**
     * Send out a presence stanza
     * @method _converse.api.user.presence.send
     * @param {import('../../plugins/status/types').presence_attrs} [attrs]
     * @param {Array<Element>|Array<Builder>|Element|Builder} [nodes]
     *  Nodes(s) to be added as child nodes of the `presence` XML element.
     */
    async send(attrs, nodes) {
      await waitUntil4("statusInitialized");
      let children = [];
      if (nodes) {
        children = Array.isArray(nodes) ? nodes : [nodes];
      }
      const model = (
        /** @type {Profile} */
        converse_default.state.profile
      );
      const presence = await model.constructPresence(attrs);
      children.map((c) => c?.tree() ?? c).forEach((c) => presence.cnode(c).up());
      send(presence);
      const { show, type } = attrs || {};
      if (show || !type) {
        const mucs = (
          /** @type {MUC[]} */
          await rooms2.get()
        );
        mucs.forEach((muc) => muc.sendStatusPresence(attrs, children));
      }
    }
  }
};

// shared/api/user.js
var import_openpromise6 = require("@converse/openpromise");

// shared/settings/user/utils.js
var import_log10 = __toESM(require("@converse/log"));
var import_skeletor4 = require("@converse/skeletor");
var user_settings;
function initUserSettings() {
  const bare_jid = converse_default.session.get("bare_jid");
  if (!bare_jid) {
    const msg = "No JID to fetch user settings for";
    import_log10.default.error(msg);
    throw Error(msg);
  }
  const id = `converse.user-settings.${bare_jid}`;
  if (user_settings?.get("id") !== id) {
    user_settings = new import_skeletor4.Model({ id });
    initStorage(user_settings, id);
    return user_settings.fetch({ "promise": true });
  }
}
__name(initUserSettings, "initUserSettings");
async function getUserSettings() {
  await initUserSettings();
  return user_settings;
}
__name(getUserSettings, "getUserSettings");
async function updateUserSettings(data, options) {
  await initUserSettings();
  return user_settings.save(data, options);
}
__name(updateUserSettings, "updateUserSettings");
async function clearUserSettings() {
  const bare_jid = converse_default.session.get("bare_jid");
  if (bare_jid) {
    await initUserSettings();
    return user_settings.clear();
  }
  user_settings = void 0;
}
__name(clearUserSettings, "clearUserSettings");

// shared/settings/user/api.js
var user_settings_api = {
  /**
   * Returns the user settings model. Useful when you want to listen for change events.
   * @async
   * @method _converse.api.user.settings.getModel
   * @returns {Promise<Model>}
   * @example const settings = await api.user.settings.getModel();
   */
  getModel() {
    return getUserSettings();
  },
  /**
   * Get the value of a particular user setting.
   * @method _converse.api.user.settings.get
   * @param {string} key - The setting name
   * @param {*} [fallback] - An optional fallback value if the user setting is undefined
   * @returns {Promise} Promise which resolves with the value of the particular configuration setting.
   * @example api.user.settings.get("foo");
   */
  async get(key, fallback) {
    const user_settings2 = await getUserSettings();
    return user_settings2.get(key) === void 0 ? fallback : user_settings2.get(key);
  },
  /**
   * Set one or many user settings.
   * @async
   * @method _converse.api.user.settings.set
   * @param {Object|string} key An object containing config settings or alternatively a string key
   * @param {string} [val] The value, if the previous parameter is a key
   * @example api.user.settings.set("foo", "bar");
   * @example
   * api.user.settings.set({
   *     "foo": "bar",
   *     "baz": "buz"
   * });
   */
  set(key, val) {
    if (key instanceof Object) {
      return updateUserSettings(key, { "promise": true });
    } else {
      const o = {};
      o[key] = val;
      return updateUserSettings(o, { "promise": true });
    }
  },
  /**
   * Clears all the user settings
   * @async
   * @method api.user.settings.clear
   */
  clear() {
    return clearUserSettings();
  }
};

// shared/api/user.js
var api = {
  /**
   * This grouping collects API functions related to the current logged in user.
   *
   * @namespace _converse.api.user
   * @memberOf _converse.api
   */
  user: {
    settings: user_settings_api,
    ...presence_default,
    /**
     * @method _converse.api.user.jid
     * @returns {string} The current user's full JID (Jabber ID)
     * @example _converse.api.user.jid())
     */
    jid() {
      return api_default.get()?.jid;
    },
    /**
     * Logs the user in.
     *
     * If called without any parameters, Converse will try
     * to log the user in by calling the `prebind_url` or `credentials_url` depending
     * on whether prebinding is used or not.
     *
     * @method _converse.api.user.login
     * @param { string } [jid]
     * @param { string } [password]
     * @param { boolean } [automatic=false] - An internally used flag that indicates whether
     *  this method was called automatically once the connection has been
     *  initialized. It's used together with the `auto_login` configuration flag
     *  to determine whether Converse should try to log the user in if it
     *  fails to restore a previous auth'd session.
     *  @returns  { Promise<void> }
     */
    async login(jid, password, automatic = false) {
      const { api: api3 } = converse_default;
      jid = jid || api3.settings.get("jid");
      const connection2 = api_default.init(jid);
      if (api3.settings.get("connection_options")?.worker && await connection2.restoreWorkerSession()) {
        return;
      }
      if (jid) {
        jid = await setUserJID(jid);
      }
      const { success } = await converse_default.api.hook("login", this, { jid, password, automatic });
      if (success) return;
      password = password || api3.settings.get("password");
      const credentials = jid && password ? { jid, password } : null;
      await attemptNonPreboundSession(credentials, automatic);
    },
    /**
     * Logs the user out of the current XMPP session.
     * @method _converse.api.user.logout
     * @example _converse.api.user.logout();
     */
    async logout() {
      const { api: api3 } = converse_default;
      await api3.trigger("beforeLogout", { "synchronous": true });
      const promise = (0, import_openpromise6.getOpenPromise)();
      const complete = /* @__PURE__ */ __name(() => {
        Object.keys(converse_default.promises).forEach((p) => replacePromise(converse_default, p));
        localStorage.removeItem("conversejs-session-jid");
        api3.trigger("logout");
        promise.resolve();
      }, "complete");
      const connection2 = api_default.get();
      if (connection2) {
        connection2.setDisconnectionCause(LOGOUT, void 0, true);
        api3.listen.once("disconnected", () => complete());
        connection2.disconnect();
      } else {
        complete();
      }
      return promise;
    }
  }
};
var user_default = api;

// shared/api/index.js
var api2 = {
  connection: api_default,
  settings: settings_api,
  ...send_default,
  ...user_default,
  ...events_default,
  ...promise_default,
  disco: null,
  elements: null,
  contacts: null
};
var api_default4 = api2;

// shared/parsers.js
var import_dayjs2 = __toESM(require("dayjs"));
var import_log15 = __toESM(require("@converse/log"));
var import_strophe17 = require("strophe.js");

// utils/html.js
var html_exports = {};
__export(html_exports, {
  decodeHTMLEntities: () => decodeHTMLEntities,
  isElement: () => isElement,
  isEqualNode: () => isEqualNode,
  isTagEqual: () => isTagEqual,
  queryChildren: () => queryChildren,
  siblingIndex: () => siblingIndex,
  stringToElement: () => stringToElement
});
var import_dompurify = __toESM(require("dompurify"));
var import_strophe10 = require("strophe.js");
function isElement(el) {
  return el instanceof Element || el instanceof HTMLDocument;
}
__name(isElement, "isElement");
var EMPTY_TEXT_REGEX = /\s*\n\s*/;
function stripEmptyTextNodes(el) {
  if (el instanceof import_strophe10.Builder || el instanceof import_strophe10.Stanza) {
    el = el.tree();
  }
  let n;
  const text_nodes = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, (node) => {
    if (node.parentElement.nodeName.toLowerCase() === "body") {
      return NodeFilter.FILTER_REJECT;
    }
    return NodeFilter.FILTER_ACCEPT;
  });
  while (n = walker.nextNode()) text_nodes.push(n);
  text_nodes.forEach((n2) => EMPTY_TEXT_REGEX.test(
    /** @type {Text} */
    n2.data
  ) && n2.parentElement.removeChild(n2));
  return el;
}
__name(stripEmptyTextNodes, "stripEmptyTextNodes");
function isEqualNode(actual, expected) {
  if (!isElement(actual)) throw new Error("Element being compared must be an Element!");
  expected = stripEmptyTextNodes(expected);
  actual = stripEmptyTextNodes(actual);
  let isEqual2 = actual.isEqualNode(expected);
  if (!isEqual2) {
    const { xmlHtmlNode } = import_strophe10.Strophe;
    const actual_string = import_strophe10.Strophe.serialize(actual);
    const expected_string = import_strophe10.Strophe.serialize(expected);
    isEqual2 = actual_string === expected_string || xmlHtmlNode(actual_string).isEqualNode(xmlHtmlNode(expected_string));
  }
  return isEqual2;
}
__name(isEqualNode, "isEqualNode");
function isTagEqual(stanza, name) {
  if (stanza instanceof import_strophe10.Strophe.Builder) {
    return isTagEqual(stanza.tree(), name);
  } else if (!(stanza instanceof Element)) {
    throw Error("isTagEqual called with value which isn't an element or Strophe.Builder instance");
  } else {
    return import_strophe10.Strophe.isTagEqual(stanza, name);
  }
}
__name(isTagEqual, "isTagEqual");
function stringToElement(s) {
  var div = document.createElement("div");
  div.innerHTML = s;
  return div.firstElementChild;
}
__name(stringToElement, "stringToElement");
function queryChildren(el, selector) {
  return Array.from(el.childNodes).filter((el2) => el2 instanceof Element && el2.matches(selector));
}
__name(queryChildren, "queryChildren");
function siblingIndex(el) {
  for (var i2 = 0; el = el.previousElementSibling; i2++) ;
  return i2;
}
__name(siblingIndex, "siblingIndex");
var element = document.createElement("div");
function decodeHTMLEntities(str) {
  if (str && typeof str === "string") {
    element.innerHTML = import_dompurify.default.sanitize(str);
    str = element.textContent;
    element.textContent = "";
  }
  return str;
}
__name(decodeHTMLEntities, "decodeHTMLEntities");

// utils/stanza.js
var stanza_exports = {};
__export(stanza_exports, {
  getAttributes: () => getAttributes,
  isErrorStanza: () => isErrorStanza,
  isForbiddenError: () => isForbiddenError,
  isServiceUnavailableError: () => isServiceUnavailableError,
  toStanza: () => import_strophe12.toStanza
});
var import_sizzle2 = __toESM(require("sizzle"));
var import_strophe11 = require("strophe.js");
var import_strophe12 = require("strophe.js");
function isErrorStanza(stanza) {
  if (!isElement(stanza)) {
    return false;
  }
  return stanza.getAttribute("type") === "error";
}
__name(isErrorStanza, "isErrorStanza");
function isForbiddenError(stanza) {
  if (!isElement(stanza)) {
    return false;
  }
  return (0, import_sizzle2.default)(`error[type="auth"] forbidden[xmlns="${import_strophe11.Strophe.NS.STANZAS}"]`, stanza).length > 0;
}
__name(isForbiddenError, "isForbiddenError");
function isServiceUnavailableError(stanza) {
  if (!isElement(stanza)) {
    return false;
  }
  return (0, import_sizzle2.default)(`error[type="cancel"] service-unavailable[xmlns="${import_strophe11.Strophe.NS.STANZAS}"]`, stanza).length > 0;
}
__name(isServiceUnavailableError, "isServiceUnavailableError");
function getAttributes(stanza) {
  return stanza.getAttributeNames().reduce((acc, name) => {
    acc[name] = import_strophe11.Strophe.xmlunescape(stanza.getAttribute(name));
    return acc;
  }, {});
}
__name(getAttributes, "getAttributes");

// shared/actions.js
var import_log14 = __toESM(require("@converse/log"));
var import_strophe16 = require("strophe.js");

// shared/api/public.js
var import_sprintf_js2 = require("sprintf-js");
var import_dayjs = __toESM(require("dayjs"));
var import_sizzle3 = __toESM(require("sizzle"));
var import_strophe15 = require("strophe.js");
var import_skeletor7 = require("@converse/skeletor");
var import_filesize = require("filesize");
var import_lit = require("lit");
var import_log13 = __toESM(require("@converse/log"));

// shared/connection/feedback.js
var import_skeletor5 = require("@converse/skeletor");
var import_strophe13 = require("strophe.js");
var Feedback = class extends import_skeletor5.Model {
  static {
    __name(this, "Feedback");
  }
  defaults() {
    return {
      "connection_status": import_strophe13.Strophe.Status.DISCONNECTED,
      "message": ""
    };
  }
  initialize() {
    super.initialize();
    const { api: api3 } = converse_default;
    this.on("change", () => api3.trigger("connfeedback", converse_default.state.connfeedback));
  }
};
var feedback_default = Feedback;

// utils/index.js
var import_skeletor6 = require("@converse/skeletor");
var import_log12 = __toESM(require("@converse/log"));

// utils/array.js
var array_exports = {};
__export(array_exports, {
  unique: () => unique
});
function unique(arr) {
  return [...new Set(arr)];
}
__name(unique, "unique");

// utils/arraybuffer.js
var arraybuffer_exports = {};
__export(arraybuffer_exports, {
  appendArrayBuffer: () => appendArrayBuffer,
  arrayBufferToBase64: () => arrayBufferToBase64,
  arrayBufferToHex: () => arrayBufferToHex,
  arrayBufferToString: () => arrayBufferToString,
  base64ToArrayBuffer: () => base64ToArrayBuffer,
  hexToArrayBuffer: () => hexToArrayBuffer,
  stringToArrayBuffer: () => stringToArrayBuffer
});
function appendArrayBuffer(buffer1, buffer2) {
  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  return tmp.buffer;
}
__name(appendArrayBuffer, "appendArrayBuffer");
function arrayBufferToHex(ab) {
  return Array.prototype.map.call(new Uint8Array(ab), (x) => ("00" + x.toString(16)).slice(-2)).join("");
}
__name(arrayBufferToHex, "arrayBufferToHex");
function arrayBufferToString(ab) {
  return new TextDecoder("utf-8").decode(ab);
}
__name(arrayBufferToString, "arrayBufferToString");
function stringToArrayBuffer(string) {
  const bytes = new TextEncoder().encode(string);
  return bytes.buffer;
}
__name(stringToArrayBuffer, "stringToArrayBuffer");
function arrayBufferToBase64(ab) {
  return btoa(new Uint8Array(ab).reduce((data, byte) => data + String.fromCharCode(byte), ""));
}
__name(arrayBufferToBase64, "arrayBufferToBase64");
function base64ToArrayBuffer(b64) {
  const binary_string = atob(b64);
  const len = binary_string.length;
  const bytes = new Uint8Array(len);
  for (let i2 = 0; i2 < len; i2++) {
    bytes[i2] = binary_string.charCodeAt(i2);
  }
  return bytes.buffer;
}
__name(base64ToArrayBuffer, "base64ToArrayBuffer");
function hexToArrayBuffer(hex) {
  const typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map((h) => parseInt(h, 16)));
  return typedArray.buffer;
}
__name(hexToArrayBuffer, "hexToArrayBuffer");

// utils/color.js
var color_exports = {};
__export(color_exports, {
  colorize: () => colorize
});
var import_hsluv = require("hsluv");
var cache = /* @__PURE__ */ new Map();
async function colorize(s) {
  const v = cache.get(s);
  if (v) return v;
  const digest = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-1", new TextEncoder().encode(s))));
  const angle = (digest[0] + digest[1] * 256) / 65536 * 360;
  const hsluv = new import_hsluv.Hsluv();
  hsluv.hsluv_h = angle;
  hsluv.hsluv_s = 100;
  hsluv.hsluv_l = 50;
  hsluv.hsluvToHex();
  cache.set(s, hsluv.hex);
  return hsluv.hex;
}
__name(colorize, "colorize");

// utils/form.js
var form_exports = {};
__export(form_exports, {
  getCurrentWord: () => getCurrentWord,
  getSelectValues: () => getSelectValues,
  isMentionBoundary: () => isMentionBoundary,
  placeCaretAtEnd: () => placeCaretAtEnd,
  replaceCurrentWord: () => replaceCurrentWord,
  webForm2xForm: () => webForm2xForm
});
var import_strophe14 = require("strophe.js");
/**
 * @copyright 2022, the Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 * @description This is the form utilities module.
 */
var tplXformField = /* @__PURE__ */ __name((name, value) => `<field var="${name}">${value}</field>`, "tplXformField");
var tplXformValue = /* @__PURE__ */ __name((value) => `<value>${import_strophe14.Strophe.xmlescape(value)}</value>`, "tplXformValue");
function getSelectValues(select) {
  const result = [];
  const options = select?.options;
  for (let i2 = 0, iLen = options.length; i2 < iLen; i2++) {
    const opt = options[i2];
    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}
__name(getSelectValues, "getSelectValues");
function webForm2xForm(field) {
  const name = field.getAttribute("name");
  if (!name) {
    return null;
  }
  let value;
  if (field.getAttribute("type") === "checkbox") {
    value = /** @type {HTMLInputElement} */
    field.checked && "1" || "0";
  } else if (field.tagName == "TEXTAREA") {
    value = field.value.split("\n").filter((s) => s.trim());
  } else if (field.tagName == "SELECT") {
    value = getSelectValues(
      /** @type {HTMLSelectElement} */
      field
    );
  } else {
    value = field.value;
  }
  return (0, import_strophe14.toStanza)(tplXformField(name, Array.isArray(value) ? value.map(tplXformValue) : tplXformValue(value)));
}
__name(webForm2xForm, "webForm2xForm");
function getCurrentWord(input, index, delineator) {
  if (!index) {
    index = input.selectionEnd || void 0;
  }
  let [word] = input.value.slice(0, index).split(/\s/).slice(-1);
  if (delineator) {
    [word] = word.split(delineator).slice(-1);
  }
  return word;
}
__name(getCurrentWord, "getCurrentWord");
function isMentionBoundary(s) {
  return s !== "@" && RegExp(`(\\p{Z}|\\p{P})`, "u").test(s);
}
__name(isMentionBoundary, "isMentionBoundary");
function replaceCurrentWord(input, new_value) {
  const caret = input.selectionEnd || void 0;
  const current_word = input.value.slice(0, caret).split(/\s/).pop();
  const value = input.value;
  const mention_boundary = isMentionBoundary(current_word[0]) ? current_word[0] : "";
  input.value = value.slice(0, caret - current_word.length) + mention_boundary + `${new_value} ` + value.slice(caret);
  const selection_end = caret - current_word.length + new_value.length + 1;
  input.selectionEnd = mention_boundary ? selection_end + 1 : selection_end;
}
__name(replaceCurrentWord, "replaceCurrentWord");
function placeCaretAtEnd(textarea) {
  if (textarea !== document.activeElement) {
    textarea.focus();
  }
  const len = textarea.value.length * 2;
  setTimeout(() => textarea.setSelectionRange(len, len), 1);
  textarea.scrollTop = 999999;
}
__name(placeCaretAtEnd, "placeCaretAtEnd");

// utils/text.js
var text_exports = {};
__export(text_exports, {
  firstCharToUpperCase: () => firstCharToUpperCase,
  getLongestSubstring: () => getLongestSubstring,
  isString: () => isString
});
function firstCharToUpperCase(text) {
  if (!text) {
    return "";
  }
  if ("\u{1F600}".length === 1) {
    return text.charAt(0).toLocaleUpperCase() + text.substring(1);
  }
  const firstChar = text.codePointAt(0);
  const index = firstChar > 65535 ? 2 : 1;
  return String.fromCodePoint(firstChar).toLocaleUpperCase() + text.substring(index);
}
__name(firstCharToUpperCase, "firstCharToUpperCase");
function getLongestSubstring(string, candidates) {
  function reducer(accumulator, current_value) {
    if (string.startsWith(current_value)) {
      if (current_value.length > accumulator.length) {
        return current_value;
      } else {
        return accumulator;
      }
    } else {
      return accumulator;
    }
  }
  __name(reducer, "reducer");
  return candidates.reduce(reducer, "");
}
__name(getLongestSubstring, "getLongestSubstring");
function isString(s) {
  return typeof s === "string" || s instanceof String;
}
__name(isString, "isString");

// utils/url.js
var url_exports = {};
__export(url_exports, {
  addMediaURLsOffset: () => addMediaURLsOffset,
  checkFileTypes: () => checkFileTypes,
  getHeaders: () => getHeaders,
  getMediaURLs: () => getMediaURLs,
  getMediaURLsMetadata: () => getMediaURLsMetadata,
  getMetadataForURL: () => getMetadataForURL,
  getURL: () => getURL,
  isAudioURL: () => isAudioURL,
  isEncryptedFileURL: () => isEncryptedFileURL,
  isGIFURL: () => isGIFURL,
  isImageURL: () => isImageURL,
  isURLWithImageExtension: () => isURLWithImageExtension,
  isValidURL: () => isValidURL,
  isVideoURL: () => isVideoURL,
  withinString: () => withinString
});
var import_log11 = __toESM(require("@converse/log"));
var settings3 = settings_api;
var URL_REGEXES = {
  // valid "scheme://" or "www."
  start: /(\b|_)(?:([a-z][a-z0-9.+-]*:\/\/)|xmpp:|mailto:|www\.)/gi,
  // everything up to the next whitespace
  end: /[\s\r\n]|$/,
  // trim trailing punctuation captured by end RegExp
  trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,
  // balanced parens inclusion (), [], {}, <>
  parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g
};
function isValidURL(text) {
  try {
    if (text.startsWith("www.")) {
      return !!getURL(`http://${text}`);
    }
    return !!getURL(text);
  } catch {
    return false;
  }
}
__name(isValidURL, "isValidURL");
function getURL(url) {
  if (url instanceof URL) {
    return url;
  }
  return url.toLowerCase().startsWith("www.") ? getURL(`http://${url}`) : new URL(url);
}
__name(getURL, "getURL");
function checkFileTypes(types, url) {
  let parsed_url;
  try {
    parsed_url = getURL(url);
  } catch (error) {
    throw new Error(`checkFileTypes: could not parse url ${url}`);
  }
  const filename = parsed_url.pathname.split("/").pop().toLowerCase();
  return !!types.filter((ext) => filename.endsWith(ext)).length;
}
__name(checkFileTypes, "checkFileTypes");
function isURLWithImageExtension(url) {
  return checkFileTypes([".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".svg"], url);
}
__name(isURLWithImageExtension, "isURLWithImageExtension");
function isGIFURL(url) {
  return checkFileTypes([".gif"], url);
}
__name(isGIFURL, "isGIFURL");
function isAudioURL(url, headers) {
  if (headers?.get("content-type")?.startsWith("audio")) {
    return true;
  }
  return checkFileTypes([".ogg", ".mp3", ".m4a"], url);
}
__name(isAudioURL, "isAudioURL");
function isVideoURL(url, headers) {
  if (headers?.get("content-type")?.startsWith("video")) {
    return true;
  }
  return checkFileTypes([".mp4", ".webm"], url);
}
__name(isVideoURL, "isVideoURL");
function isImageURL(url, headers) {
  if (headers?.get("content-type")?.startsWith("video")) {
    return true;
  }
  const regex = settings3.get("image_urls_regex");
  return regex?.test(url) || isURLWithImageExtension(url);
}
__name(isImageURL, "isImageURL");
function isEncryptedFileURL(url) {
  return getURL(url).href.startsWith("aesgcm://");
}
__name(isEncryptedFileURL, "isEncryptedFileURL");
function withinString(string, callback, options) {
  options = options || {};
  const _start = options.start || URL_REGEXES.start;
  const _end = options.end || URL_REGEXES.end;
  const _trim = options.trim || URL_REGEXES.trim;
  const _parens = options.parens || URL_REGEXES.parens;
  const _attributeOpen = /[a-z0-9-]=["']?$/i;
  _start.lastIndex = 0;
  while (true) {
    const match = _start.exec(string);
    if (!match) break;
    let start = match.index;
    if (options.ignoreHtml) {
      const attributeOpen = string.slice(Math.max(start - 3, 0), start);
      if (attributeOpen && _attributeOpen.test(attributeOpen)) {
        continue;
      }
    }
    let end = start + string.slice(start).search(_end);
    let slice = string.slice(start, end);
    let parensEnd = -1;
    while (true) {
      const parensMatch = _parens.exec(slice);
      if (!parensMatch) break;
      const parensMatchEnd = parensMatch.index + parensMatch[0].length;
      parensEnd = Math.max(parensEnd, parensMatchEnd);
    }
    if (parensEnd > -1) {
      slice = slice.slice(0, parensEnd) + slice.slice(parensEnd).replace(_trim, "");
    } else {
      slice = slice.replace(_trim, "");
    }
    if (slice.length <= match[0].length) continue;
    if (options.ignore && options.ignore.test(slice)) continue;
    end = start + slice.length;
    const result = callback(slice, start, end);
    if (result === void 0) {
      _start.lastIndex = end;
      continue;
    }
    string = string.slice(0, start) + String(result) + string.slice(end);
    _start.lastIndex = start + String(result).length;
  }
  _start.lastIndex = 0;
  return string;
}
__name(withinString, "withinString");
async function getHeaders(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.headers;
  } catch (e) {
    console.debug(`Error calling HEAD on url ${url}: ${e}`);
    return null;
  }
}
__name(getHeaders, "getHeaders");
async function getMetadataForURL(o) {
  const fetch_headers = settings_api.get("fetch_url_headers");
  const headers = fetch_headers ? await getHeaders(o.url) : null;
  return {
    ...o,
    is_gif: isGIFURL(o.url),
    is_audio: isAudioURL(o.url, headers),
    is_image: isImageURL(o.url, headers),
    is_video: isVideoURL(o.url, headers),
    is_encrypted: isEncryptedFileURL(o.url)
  };
}
__name(getMetadataForURL, "getMetadataForURL");
async function getMediaURLsMetadata(text, offset = 0) {
  const objs = [];
  if (!text) {
    return {};
  }
  try {
    withinString(
      text,
      /**
       * @param {string} url
       * @param {number} start
       * @param {number} end
       * @returns {string|undefined}
       */
      (url, start, end) => {
        if (url.startsWith("_")) {
          url = url.slice(1);
          start += 1;
        }
        if (url.endsWith("_")) {
          url = url.slice(0, url.length - 1);
          end -= 1;
        }
        if (isValidURL(url)) {
          objs.push({ url, start: start + offset, end: end + offset });
        }
        return url;
      }
    );
  } catch (error) {
    import_log11.default.debug(error);
  }
  const media_urls = await Promise.all(objs.map(getMetadataForURL));
  return media_urls.length ? { media_urls } : {};
}
__name(getMediaURLsMetadata, "getMediaURLsMetadata");
function getMediaURLs(arr, text) {
  return arr.map((o) => {
    if (o.start < 0 || o.start >= text.length) {
      return null;
    }
    const url = text.substring(o.start, o.end);
    return {
      ...o,
      url
    };
  }).filter((o) => o);
}
__name(getMediaURLs, "getMediaURLs");
function addMediaURLsOffset(arr, text, offset = 0) {
  return arr.map((o) => {
    const start = o.start - offset;
    const end = o.end - offset;
    if (start < 0 || start >= text.length) {
      return null;
    }
    return Object.assign({}, o, {
      start,
      end,
      url: text.substring(o.start - offset, o.end - offset)
      // BBB
    });
  }).filter((o) => o);
}
__name(addMediaURLsOffset, "addMediaURLsOffset");

// utils/index.js
/**
 * @copyright The Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 * @description This is the core utilities module.
 */
var u = {
  muc: null,
  mam: null,
  roster: null,
  omemo: null
};
function setLogLevelFromRoute(event) {
  if (location.hash.startsWith("#converse?loglevel=")) {
    event?.preventDefault();
    const level = location.hash.split("=").pop();
    if (Object.keys(import_log12.LEVELS).includes(level)) {
      import_log12.default.setLogLevel(
        /** @type {keyof LEVELS} */
        level
      );
    } else {
      import_log12.default.error(`Could not set loglevel of ${level}`);
    }
  }
}
__name(setLogLevelFromRoute, "setLogLevelFromRoute");
function isEmptyMessage(attrs) {
  if (attrs instanceof import_skeletor6.Model) {
    attrs = attrs.attributes;
  }
  return !attrs["oob_url"] && !attrs["file"] && !(attrs["is_encrypted"] && attrs["plaintext"]) && !attrs["message"] && !attrs["body"];
}
__name(isEmptyMessage, "isEmptyMessage");
function prefixMentions(message) {
  let text = message.getMessageText();
  (message.get("references") || []).sort((a, b) => b.begin - a.begin).forEach((ref) => {
    text = `${text.slice(0, ref.begin)}@${text.slice(ref.begin)}`;
  });
  return text;
}
__name(prefixMentions, "prefixMentions");
function shouldCreateMessage(attrs) {
  return attrs["retracted"] || // Retraction received *before* the message
  !isEmptyMessage(attrs);
}
__name(shouldCreateMessage, "shouldCreateMessage");
function onMultipleEvents(events = [], callback) {
  let triggered = [];
  function handler(result) {
    triggered.push(result);
    if (events.length === triggered.length) {
      callback(triggered);
      triggered = [];
    }
  }
  __name(handler, "handler");
  events.forEach((e) => e.object.on(e.event, handler));
}
__name(onMultipleEvents, "onMultipleEvents");
function triggerEvent(el, name, type = "Event", bubbles = true, cancelable = true) {
  const evt = document.createEvent(type);
  evt.initEvent(name, bubbles, cancelable);
  el.dispatchEvent(evt);
}
__name(triggerEvent, "triggerEvent");
function getRandomInt(max) {
  return Math.random() * max | 0;
}
__name(getRandomInt, "getRandomInt");
function getUniqueId(suffix) {
  const uuid = crypto.randomUUID?.() ?? "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = getRandomInt(16);
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
  if (typeof suffix === "string" || typeof suffix === "number") {
    return uuid + ":" + suffix;
  } else {
    return uuid;
  }
}
__name(getUniqueId, "getUniqueId");
var utils_default = Object.assign({
  ...array_exports,
  ...arraybuffer_exports,
  ...color_exports,
  ...form_exports,
  ...html_exports,
  ...init_exports,
  ...jid_exports,
  ...object_exports,
  ...promise_exports,
  ...session_exports,
  ...stanza_exports,
  ...storage_exports,
  ...text_exports,
  ...url_exports,
  getRandomInt,
  getUniqueId,
  isEmptyMessage,
  onMultipleEvents,
  prefixMentions,
  shouldCreateMessage,
  triggerEvent
}, u);

// shared/api/public.js
converse_default.api = api_default4;
var env = (
  /** @type {import('./types').ConverseEnv} */
  {
    $build: import_strophe15.$build,
    $iq: import_strophe15.$iq,
    $msg: import_strophe15.$msg,
    $pres: import_strophe15.$pres,
    Collection: import_skeletor7.Collection,
    Model: import_skeletor7.Model,
    Stanza: import_strophe15.Stanza,
    Strophe: import_strophe15.Strophe,
    TimeoutError,
    VERSION_NAME,
    css: import_lit.css,
    dayjs: import_dayjs.default,
    errors: errors_exports,
    filesize: import_filesize.filesize,
    html: import_lit.html,
    log: import_log13.default,
    nothing: import_lit.nothing,
    render: import_lit.render,
    sizzle: import_sizzle3.default,
    sprintf: import_sprintf_js2.sprintf,
    stx: import_strophe15.stx,
    u: utils_default,
    utils: utils_default
  }
);
var converse = Object.assign(
  /** @type {ConversePrivateGlobal} */
  window.converse || {},
  {
    CHAT_STATES,
    keycodes: KEYCODES,
    /**
     * Public API method which initializes Converse.
     * This method must always be called when using Converse.
     * @async
     * @memberOf converse
     * @method initialize
     * @param { object } settings A map of [configuration-settings](https://conversejs.org/docs/html/configuration.html#configuration-settings).
     * @example
     * converse.initialize({
     *     auto_list_rooms: false,
     *     auto_subscribe: false,
     *     bosh_service_url: 'https://bind.example.com',
     *     hide_muc_server: false,
     *     i18n: 'en',
     *     play_sounds: true,
     *     show_controlbox_by_default: true,
     *     debug: false,
     *     roster_groups: true
     * });
     */
    async initialize(settings4) {
      const { api: api3 } = converse_default;
      await cleanup(converse_default);
      initAppSettings(settings4);
      converse_default.strict_plugin_dependencies = settings4.strict_plugin_dependencies;
      import_log13.default.setLogLevel(api3.settings.get("loglevel"));
      if (api3.settings.get("authentication") === ANONYMOUS) {
        if (api3.settings.get("auto_login") && !api3.settings.get("jid")) {
          throw new Error("Config Error: you need to provide the server's domain via the 'jid' option when using anonymous authentication with auto_login.");
        }
      }
      setLogLevelFromRoute();
      addEventListener("hashchange", setLogLevelFromRoute);
      const connfeedback = new feedback_default();
      Object.assign(converse_default, { connfeedback });
      Object.assign(converse_default.state, { connfeedback });
      converse_default.env = env;
      await initSessionStorage(converse_default);
      await initClientConfig(converse_default);
      await i18n_default.initialize();
      initPlugins(converse_default);
      api3.elements?.register();
      registerGlobalEventHandlers(converse_default);
      const plugins = converse_default.pluggable.plugins;
      if (api3.settings.get("auto_login") || api3.settings.get("keepalive") && plugins["converse-bosh"]?.enabled()) {
        await api3.user.login(null, null, true);
      }
      api3.trigger("initialized");
      if (isTestEnv()) {
        return converse_default;
      }
    },
    /**
     * Exposes methods for adding and removing plugins. You'll need to write a plugin
     * if you want to have access to the private API methods defined further down below.
     *
     * For more information on plugins, read the documentation on [writing a plugin](/docs/html/plugin_development.html).
     * @namespace plugins
     * @memberOf converse
     */
    plugins: {
      /**
       * Registers a new plugin.
       * @method converse.plugins.add
       * @param { string } name The name of the plugin
       * @param { object } plugin The plugin object
       * @example
       *  const plugin = {
       *      initialize: function () {
       *          // Gets called as soon as the plugin has been loaded.
       *
       *          // Inside this method, you have access to the private
       *          // API via `_covnerse.api`.
       *
       *          // The private _converse object contains the core logic
       *          // and data-structures of Converse.
       *      }
       *  }
       *  converse.plugins.add('myplugin', plugin);
       */
      add(name, plugin) {
        plugin.__name__ = name;
        if (converse_default.pluggable.plugins[name] !== void 0) {
          throw new TypeError(
            `Error: plugin with name "${name}" has already been registered!`
          );
        } else {
          converse_default.pluggable.plugins[name] = plugin;
        }
      }
    },
    env
  }
);
var public_default = converse;

// shared/actions.js
var { u: u2, stx: stx2, Stanza: Stanza3 } = public_default.env;
function rejectMessage(stanza, text) {
  api_default4.send(
    stx2`<message to="${stanza.getAttribute("from")}"
                    type="error"
                    id="${stanza.getAttribute("id")}"
                    xmlns="jabber:client">
                <error type="cancel">
                    <not-allowed xmlns="${import_strophe16.Strophe.NS.STANZAS}"/>
                    <text xmlns="${import_strophe16.Strophe.NS.STANZAS}">${text}</text>
                </error>
            </message>`
  );
  import_log14.default.warn(`Rejecting message stanza with the following reason: ${text}`);
  import_log14.default.warn(stanza);
}
__name(rejectMessage, "rejectMessage");
function sendMarker(to_jid, id, type, msg_type) {
  /*! TOFIND */
  return;
  if (!MARKER_TYPES.includes(type)) {
    import_log14.default.error(`Invalid marker type: ${type}`);
    return;
  }
  const stanza = stx2`
        <message from="${api_default4.connection.get().jid}"
                id="${u2.getUniqueId()}"
                to="${to_jid}"
                type="${msg_type ? msg_type : "chat"}"
                xmlns="jabber:client">
            <${Stanza3.unsafeXML(type)} xmlns="${import_strophe16.Strophe.NS.MARKERS}" id="${id}"/>
        </message>`;
  api_default4.send(stanza);
}
__name(sendMarker, "sendMarker");
function sendReceiptStanza(to_jid, id) {
  /*! TOFIND */
  return;
  const receipt_stanza = stx2`
        <message from="${api_default4.connection.get().jid}"
                id="${u2.getUniqueId()}"
                to="${to_jid}"
                type="chat"
                xmlns="jabber:client">
            <received xmlns="${import_strophe16.Strophe.NS.RECEIPTS}" id="${id}"/>
            <store xmlns="${import_strophe16.Strophe.NS.HINTS}"/>
        </message>`;
  api_default4.send(receipt_stanza);
}
__name(sendReceiptStanza, "sendReceiptStanza");
function sendChatState(jid, chat_state) {
  if (!jid) {
    import_log14.default.error(`sendChatState called with no JID`);
    return;
  } else if (!CHAT_STATES.includes(chat_state)) {
    import_log14.default.error(`Invalid chat state: ${chat_state}`);
    return;
  }
  if (api_default4.settings.get("send_chat_state_notifications") && chat_state) {
    const allowed = api_default4.settings.get("send_chat_state_notifications");
    if (Array.isArray(allowed) && !allowed.includes(chat_state)) {
      return;
    }
    api_default4.send(
      stx2`<message id="${u2.getUniqueId()}" to="${jid}" type="chat" xmlns="jabber:client">
                <${Stanza3.unsafeXML(chat_state)} xmlns="${import_strophe16.Strophe.NS.CHATSTATES}"/>
                <no-store xmlns="${import_strophe16.Strophe.NS.HINTS}"/>
                <no-permanent-store xmlns="${import_strophe16.Strophe.NS.HINTS}"/>
            </message>`
    );
  }
}
__name(sendChatState, "sendChatState");
function sendRetractionMessage(jid, message, retraction_id) {
  const origin_id = message.get("origin_id");
  if (!origin_id) {
    throw new Error("Can't retract message without a XEP-0359 Origin ID");
  }
  const stanza = stx2`
        <message id="${retraction_id}"
                 to="${jid}"
                 type="chat"
                 xmlns="jabber:client">
            <retract id="${origin_id}" xmlns="${import_strophe16.Strophe.NS.RETRACT}"/>
            <body>/me retracted a message</body>
            <store xmlns="${import_strophe16.Strophe.NS.HINTS}"/>
            <fallback xmlns="${import_strophe16.Strophe.NS.FALLBACK}" for="${import_strophe16.Strophe.NS.RETRACT}" />
        </message>`;
  return api_default4.connection.get().send(stanza);
}
__name(sendRetractionMessage, "sendRetractionMessage");

// shared/parsers.js
var { NS } = import_strophe17.Strophe;
async function parseErrorStanza(stanza) {
  if (stanza === null) return null;
  if (stanza instanceof Error) return stanza;
  if (stanza.getAttribute("type") !== "error") return null;
  const error = stanza.querySelector("error");
  if (!error) return null;
  const els = (0, import_sizzle4.default)(`[xmlns="${import_strophe17.Strophe.NS.STANZAS}"]`, error);
  const name = els.filter((el) => el.nodeName && el.nodeName !== "text").pop()?.nodeName;
  const extra = await api_default4.hook("parseErrorStanza", stanza, {});
  if (name === "bad-request") {
    return new BadRequestError(name, error, extra);
  } else if (name === "conflict") {
    return new ConflictError(name, error, extra);
  } else if (name === "feature-not-implemented") {
    return new FeatureNotImplementedError(name, error, extra);
  } else if (name === "forbidden") {
    return new ForbiddenError(name, error, extra);
  } else if (name === "gone") {
    return new GoneError(name, error, extra);
  } else if (name === "internal-server-error") {
    return new InternalServerError(name, error, extra);
  } else if (name === "item-not-found") {
    return new ItemNotFoundError(name, error, extra);
  } else if (name === "jid-malformed") {
    return new JIDMalformedError(name, error, extra);
  } else if (name === "not-acceptable") {
    return new NotAcceptableError(name, error, extra);
  } else if (name === "not-allowed") {
    return new NotAllowedError(name, error, extra);
  } else if (name === "not-authorized") {
    return new NotAuthorizedError(name, error, extra);
  } else if (name === "payment-required") {
    return new PaymentRequiredError(name, error, extra);
  } else if (name === "recipient-unavailable") {
    return new RecipientUnavailableError(name, error, extra);
  } else if (name === "redirect") {
    return new RedirectError(name, error, extra);
  } else if (name === "registration-required") {
    return new RegistrationRequiredError(name, error, extra);
  } else if (name === "remote-server-not-found") {
    return new RemoteServerNotFoundError(name, error, extra);
  } else if (name === "remote-server-timeout") {
    return new RemoteServerTimeoutError(name, error, extra);
  } else if (name === "resource-constraint") {
    return new ResourceConstraintError(name, error, extra);
  } else if (name === "service-unavailable") {
    return new ServiceUnavailableError(name, error, extra);
  } else if (name === "subscription-required") {
    return new SubscriptionRequiredError(name, error, extra);
  } else if (name === "undefined-condition") {
    return new UndefinedConditionError(name, error, extra);
  } else if (name === "unexpected-request") {
    return new UnexpectedRequestError(name, error, extra);
  }
  return new StanzaError("unknown", error);
}
__name(parseErrorStanza, "parseErrorStanza");
function getStanzaIDs(stanza, original_stanza) {
  const sids = (0, import_sizzle4.default)(`stanza-id[xmlns="${import_strophe17.Strophe.NS.SID}"]`, stanza);
  const sid_attrs = sids.reduce((acc, s) => {
    acc[`stanza_id ${s.getAttribute("by")}`] = s.getAttribute("id");
    return acc;
  }, {});
  const origin_id = (0, import_sizzle4.default)(`origin-id[xmlns="${import_strophe17.Strophe.NS.SID}"]`, stanza).pop()?.getAttribute("id");
  const attrs = {
    origin_id,
    msgid: stanza.getAttribute("id") || original_stanza.getAttribute("id"),
    ...sid_attrs
  };
  const result = (0, import_sizzle4.default)(`message > result[xmlns="${import_strophe17.Strophe.NS.MAM}"]`, original_stanza).pop();
  if (result) {
    const bare_jid = converse_default.session.get("bare_jid");
    const by_jid = original_stanza.getAttribute("from") || bare_jid;
    attrs[`stanza_id ${by_jid}`] = result.getAttribute("id");
  }
  return attrs;
}
__name(getStanzaIDs, "getStanzaIDs");
function getEncryptionAttributes(stanza) {
  const eme_tag = (0, import_sizzle4.default)(`encryption[xmlns="${import_strophe17.Strophe.NS.EME}"]`, stanza).pop();
  const namespace = eme_tag?.getAttribute("namespace");
  const attrs = {};
  if (namespace) {
    attrs.is_encrypted = true;
    attrs.encryption_namespace = namespace;
  } else if ((0, import_sizzle4.default)(`encrypted[xmlns="${import_strophe17.Strophe.NS.OMEMO}"]`, stanza).pop()) {
    attrs.is_encrypted = true;
    attrs.encryption_namespace = import_strophe17.Strophe.NS.OMEMO;
  }
  return attrs;
}
__name(getEncryptionAttributes, "getEncryptionAttributes");
function getDeprecatedRetractionAttributes(stanza, original_stanza) {
  const fastening = (0, import_sizzle4.default)(`> apply-to[xmlns="${import_strophe17.Strophe.NS.FASTEN}"]`, stanza).pop();
  if (fastening) {
    const applies_to_id = fastening.getAttribute("id");
    const retracted = (0, import_sizzle4.default)(`> retract[xmlns="${import_strophe17.Strophe.NS.RETRACT0}"]`, fastening).pop();
    if (retracted) {
      const delay = (0, import_sizzle4.default)(`delay[xmlns="${import_strophe17.Strophe.NS.DELAY}"]`, original_stanza).pop();
      const time = delay ? (0, import_dayjs2.default)(delay.getAttribute("stamp")).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
      return {
        editable: false,
        retracted: time,
        retracted_id: applies_to_id
      };
    }
  }
  return {};
}
__name(getDeprecatedRetractionAttributes, "getDeprecatedRetractionAttributes");
function getRetractionAttributes(stanza, original_stanza) {
  const retraction = (0, import_sizzle4.default)(`> retract[xmlns="${import_strophe17.Strophe.NS.RETRACT}"]`, stanza).pop();
  if (retraction) {
    const delay = (0, import_sizzle4.default)(`> delay[xmlns="${import_strophe17.Strophe.NS.DELAY}"]`, original_stanza).pop();
    const time = delay ? (0, import_dayjs2.default)(delay.getAttribute("stamp")).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
    return {
      editable: false,
      retracted: time,
      retracted_id: retraction.getAttribute("id")
    };
  } else {
    const tombstone = (0, import_sizzle4.default)(`> retracted[xmlns="${import_strophe17.Strophe.NS.RETRACT}"]`, stanza).pop() || (0, import_sizzle4.default)(`> retracted[xmlns="${import_strophe17.Strophe.NS.RETRACT0}"]`, stanza).pop();
    if (tombstone) {
      return {
        editable: false,
        is_tombstone: true,
        retracted: tombstone.getAttribute("stamp"),
        retraction_id: tombstone.getAttribute("id")
      };
    }
  }
  return getDeprecatedRetractionAttributes(stanza, original_stanza);
}
__name(getRetractionAttributes, "getRetractionAttributes");
function getCorrectionAttributes(stanza, original_stanza) {
  const el = (0, import_sizzle4.default)(`replace[xmlns="${import_strophe17.Strophe.NS.MESSAGE_CORRECT}"]`, stanza).pop();
  if (el) {
    const replace_id = el.getAttribute("id");
    if (replace_id) {
      const delay = (0, import_sizzle4.default)(`delay[xmlns="${import_strophe17.Strophe.NS.DELAY}"]`, original_stanza).pop();
      const time = delay ? (0, import_dayjs2.default)(delay.getAttribute("stamp")).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
      return {
        replace_id,
        "edited": time
      };
    }
  }
  return {};
}
__name(getCorrectionAttributes, "getCorrectionAttributes");
function getOpenGraphMetadata(stanza) {
  const fastening = (0, import_sizzle4.default)(`> apply-to[xmlns="${import_strophe17.Strophe.NS.FASTEN}"]`, stanza).pop();
  if (fastening) {
    const applies_to_id = fastening.getAttribute("id");
    const meta = (0, import_sizzle4.default)(`> meta[xmlns="${import_strophe17.Strophe.NS.XHTML}"]`, fastening);
    if (meta.length) {
      const msg_limit = api_default4.settings.get("message_limit");
      const data = meta.reduce((acc, el) => {
        const property = el.getAttribute("property");
        if (property) {
          let value = decodeHTMLEntities(el.getAttribute("content") || "");
          if (msg_limit && property === "og:description" && value.length >= msg_limit) {
            value = `${value.slice(0, msg_limit)}${decodeHTMLEntities("&#8230;")}`;
          }
          acc[property] = value;
        }
        return acc;
      }, {
        ogp_for_id: applies_to_id
      });
      const url = data["og:url"];
      if (url?.startsWith("/") && data["og:site_name"]?.toLowerCase() === "github") {
        data["og:url"] = `https://github.com${url}`;
      }
      if ("og:description" in data || "og:title" in data || "og:image" in data) {
        return data;
      }
    }
  }
  return {};
}
__name(getOpenGraphMetadata, "getOpenGraphMetadata");
function getSpoilerAttributes(stanza) {
  const spoiler = (0, import_sizzle4.default)(`spoiler[xmlns="${import_strophe17.Strophe.NS.SPOILER}"]`, stanza).pop();
  return {
    "is_spoiler": !!spoiler,
    "spoiler_hint": spoiler?.textContent
  };
}
__name(getSpoilerAttributes, "getSpoilerAttributes");
function getOutOfBandAttributes(stanza) {
  const xform = (0, import_sizzle4.default)(`x[xmlns="${import_strophe17.Strophe.NS.OUTOFBAND}"]`, stanza).pop();
  if (xform) {
    return {
      "oob_url": xform.querySelector("url")?.textContent,
      "oob_desc": xform.querySelector("desc")?.textContent
    };
  }
  return {};
}
__name(getOutOfBandAttributes, "getOutOfBandAttributes");
function getErrorAttributes(stanza) {
  if (stanza.getAttribute("type") === "error") {
    const error = stanza.querySelector("error");
    const text = (0, import_sizzle4.default)(`text[xmlns="${import_strophe17.Strophe.NS.STANZAS}"]`, error).pop();
    return {
      is_error: true,
      error_text: text?.textContent,
      error_type: error.getAttribute("type"),
      error_condition: error.firstElementChild.nodeName,
      errors: Array.from(error.children).map((e) => ({ name: e.nodeName, xmlns: e.getAttribute("xmlns") }))
    };
  }
  return {};
}
__name(getErrorAttributes, "getErrorAttributes");
function getReferences(stanza) {
  return (0, import_sizzle4.default)(`reference[xmlns="${import_strophe17.Strophe.NS.REFERENCE}"]`, stanza).map((ref) => {
    const anchor = ref.getAttribute("anchor");
    const text = stanza.querySelector(anchor ? `#${anchor}` : "body")?.textContent;
    if (!text) {
      import_log15.default.warn(`Could not find referenced text for ${ref}`);
      return null;
    }
    const begin = Number(ref.getAttribute("begin"));
    const end = Number(ref.getAttribute("end"));
    return {
      begin,
      end,
      type: ref.getAttribute("type"),
      value: text.slice(begin, end),
      uri: ref.getAttribute("uri")
    };
  }).filter((r) => r);
}
__name(getReferences, "getReferences");
function getReceiptId(stanza) {
  const receipt = (0, import_sizzle4.default)(`received[xmlns="${import_strophe17.Strophe.NS.RECEIPTS}"]`, stanza).pop();
  return receipt?.getAttribute("id");
}
__name(getReceiptId, "getReceiptId");
function isCarbon(stanza) {
  const xmlns = import_strophe17.Strophe.NS.CARBONS;
  return (0, import_sizzle4.default)(`message > received[xmlns="${xmlns}"]`, stanza).length > 0 || (0, import_sizzle4.default)(`message > sent[xmlns="${xmlns}"]`, stanza).length > 0;
}
__name(isCarbon, "isCarbon");
function getChatState(stanza) {
  return (0, import_sizzle4.default)(
    `
        composing[xmlns="${NS.CHATSTATES}"],
        paused[xmlns="${NS.CHATSTATES}"],
        inactive[xmlns="${NS.CHATSTATES}"],
        active[xmlns="${NS.CHATSTATES}"],
        gone[xmlns="${NS.CHATSTATES}"]`,
    stanza
  ).pop()?.nodeName;
}
__name(getChatState, "getChatState");
function isValidReceiptRequest(stanza, attrs) {
  return attrs.sender !== "me" && !attrs.is_carbon && !attrs.is_archived && (0, import_sizzle4.default)(`request[xmlns="${import_strophe17.Strophe.NS.RECEIPTS}"]`, stanza).length;
}
__name(isValidReceiptRequest, "isValidReceiptRequest");
function throwErrorIfInvalidForward(stanza) {
  const bare_forward = (0, import_sizzle4.default)(`message > forwarded[xmlns="${import_strophe17.Strophe.NS.FORWARD}"]`, stanza).length;
  if (bare_forward) {
    rejectMessage(stanza, "Forwarded messages not part of an encapsulating protocol are not supported");
    const from_jid = stanza.getAttribute("from");
    throw new StanzaParseError(stanza, `Ignoring unencapsulated forwarded message from ${from_jid}`);
  }
}
__name(throwErrorIfInvalidForward, "throwErrorIfInvalidForward");
function getChatMarker(stanza) {
  return (0, import_sizzle4.default)(
    `
        acknowledged[xmlns="${import_strophe17.Strophe.NS.MARKERS}"],
        displayed[xmlns="${import_strophe17.Strophe.NS.MARKERS}"],
        received[xmlns="${import_strophe17.Strophe.NS.MARKERS}"]`,
    stanza
  ).pop();
}
__name(getChatMarker, "getChatMarker");
function isHeadline(stanza) {
  return stanza.getAttribute("type") === "headline";
}
__name(isHeadline, "isHeadline");
async function isMUCPrivateMessage(stanza) {
  const bare_jid = import_strophe17.Strophe.getBareJidFromJid(stanza.getAttribute("from"));
  return !!await api_default4.rooms.get(bare_jid);
}
__name(isMUCPrivateMessage, "isMUCPrivateMessage");
function isServerMessage(stanza) {
  if ((0, import_sizzle4.default)(`mentions[xmlns="${import_strophe17.Strophe.NS.MENTIONS}"]`, stanza).pop()) {
    return false;
  }
  const from_jid = stanza.getAttribute("from");
  if (stanza.getAttribute("type") !== "error" && from_jid && !from_jid.includes("@")) {
    return true;
  }
  return false;
}
__name(isServerMessage, "isServerMessage");
function isArchived(original_stanza) {
  return !!(0, import_sizzle4.default)(`message > result[xmlns="${import_strophe17.Strophe.NS.MAM}"]`, original_stanza).pop();
}
__name(isArchived, "isArchived");
function parseXFormField(field, readonly, stanza) {
  const v = field.getAttribute("var");
  const label = field.getAttribute("label") || "";
  const type = field.getAttribute("type");
  const desc = field.querySelector("desc")?.textContent;
  const result = { readonly, desc };
  if (type === "list-single" || type === "list-multi") {
    const values = Array.from(field.querySelectorAll(":scope > value")).map((el) => el?.textContent);
    const options = Array.from(field.querySelectorAll(":scope > option")).map(
      (option) => {
        const value = option.querySelector("value")?.textContent;
        return {
          value,
          label: option.getAttribute("label"),
          selected: values.includes(value),
          required: !!field.querySelector("required"),
          ...result
        };
      }
    );
    return {
      type,
      options,
      label: field.getAttribute("label"),
      var: v,
      required: !!field.querySelector("required"),
      ...result
    };
  } else if (type === "fixed") {
    const text = field.querySelector("value")?.textContent;
    return { text, label, type, var: v, ...result };
  } else if (type === "jid-multi") {
    return {
      type,
      var: v,
      label,
      value: field.querySelector("value")?.textContent,
      required: !!field.querySelector("required"),
      ...result
    };
  } else if (type === "boolean") {
    const value = field.querySelector("value")?.textContent;
    return {
      type,
      var: v,
      label,
      checked: (value === "1" || value === "true") && true || false,
      ...result
    };
  } else if (v === "url") {
    return {
      var: v,
      label,
      value: field.querySelector("value")?.textContent,
      ...result
    };
  } else if (v === "username") {
    return {
      var: v,
      label,
      value: field.querySelector("value")?.textContent,
      required: !!field.querySelector("required"),
      type: getInputType(field),
      ...result
    };
  } else if (v === "password") {
    return {
      var: v,
      label,
      value: field.querySelector("value")?.textContent,
      required: !!field.querySelector("required"),
      ...result
    };
  } else if (v === "ocr") {
    const uri = field.querySelector("uri");
    const el = (0, import_sizzle4.default)('data[cid="' + uri.textContent.replace(/^cid:/, "") + '"]', stanza)[0];
    return {
      label: field.getAttribute("label"),
      var: v,
      uri: {
        type: uri.getAttribute("type"),
        data: el?.textContent
      },
      required: !!field.querySelector("required"),
      ...result
    };
  } else {
    return {
      label,
      var: v,
      required: !!field.querySelector("required"),
      value: field.querySelector("value")?.textContent,
      type: getInputType(field),
      ...result
    };
  }
}
__name(parseXFormField, "parseXFormField");
function getInputType(field) {
  const type = XFORM_TYPE_MAP[field.getAttribute("type")];
  if (type == "text") {
    const datatypes = field.getElementsByTagNameNS("http://jabber.org/protocol/xdata-validate", "validate");
    if (datatypes.length === 1) {
      const datatype = datatypes[0].getAttribute("datatype");
      return XFORM_VALIDATE_TYPE_MAP[datatype] || type;
    }
  }
  return type;
}
__name(getInputType, "getInputType");
function parseXForm(stanza) {
  const xs = (0, import_sizzle4.default)(`x[xmlns="${import_strophe17.Strophe.NS.XFORM}"]`, stanza);
  if (xs.length > 1) {
    import_log15.default.error(stanza);
    throw new Error("Invalid stanza");
  } else if (xs.length === 0) {
    return null;
  }
  const x = xs[0];
  const type = (
    /** @type {import('./types').XFormResponseType} */
    x.getAttribute("type")
  );
  const result = {
    type,
    title: x.querySelector("title")?.textContent
  };
  if (type === "result") {
    const reported = x.querySelector(":scope > reported");
    if (reported) {
      const reported_fields = reported ? Array.from(reported.querySelectorAll(":scope > field")) : [];
      const items = Array.from(x.querySelectorAll(":scope > item"));
      return (
        /** @type {import('./types').XForm} */
        {
          ...result,
          reported: (
            /** @type {import('./types').XFormReportedField[]} */
            reported_fields.map(getAttributes)
          ),
          items: items.map((item) => {
            return Array.from(item.querySelectorAll("field")).map((field) => {
              return (
                /** @type {import('./types').XFormResultItemField} */
                {
                  ...getAttributes(field),
                  value: field.querySelector("value")?.textContent ?? ""
                }
              );
            });
          })
        }
      );
    }
    return {
      ...result,
      fields: Array.from(x.querySelectorAll("field")).map((field) => parseXFormField(field, true, stanza))
    };
  } else if (type === "form") {
    return {
      ...result,
      instructions: x.querySelector("instructions")?.textContent,
      fields: Array.from(x.querySelectorAll("field")).map((field) => parseXFormField(field, false, stanza))
    };
  } else {
    throw new Error(`Invalid type in XForm response stanza: ${type}`);
  }
}
__name(parseXForm, "parseXForm");

// index.js
var import_skeletor45 = require("@converse/skeletor");
var import_strophe30 = require("strophe.js");

// shared/message.js
var import_dayjs3 = __toESM(require("dayjs"));
var import_sizzle5 = __toESM(require("sizzle"));
var import_strophe19 = require("strophe.js");
var import_skeletor8 = require("@converse/skeletor");
var import_log17 = __toESM(require("@converse/log"));

// shared/color.js
var { safeSave: safeSave2, colorize: colorize2 } = utils_default;
function ColorAwareModel(BaseModel) {
  return class ColorAwareModel extends BaseModel {
    static {
      __name(this, "ColorAwareModel");
    }
    async setColor() {
      const color = await colorize2(this.getIdentifier());
      safeSave2(this, { color });
    }
    getIdentifier() {
      if (this.get("type") === CHATROOMS_TYPE) {
        return this.get("jid");
      } else if (this.get("type") === "groupchat") {
        return this.get("from_real_jid") || this.get("from");
      } else {
        return this.get("occupant_id") || this.get("jid") || this.get("from") || this.get("nick");
      }
    }
    /**
    * @returns {Promise<string>}
    */
    async getColor() {
      if (!this.get("color")) {
        await this.setColor();
      }
      return this.get("color");
    }
    /**
    * @param {string} append_style
    * @returns {Promise<string>}
    */
    async getAvatarStyle(append_style = "") {
      try {
        const color = await this.getColor();
        return `background-color: ${color} !important; ${append_style}`;
      } catch {
        return `background-color: gray !important; ${append_style}`;
      }
    }
  };
}
__name(ColorAwareModel, "ColorAwareModel");

// shared/model-with-contact.js
var import_openpromise7 = require("@converse/openpromise");
var import_strophe18 = require("strophe.js");
function ModelWithContact(BaseModel) {
  return class ModelWithContact extends BaseModel {
    static {
      __name(this, "ModelWithContact");
    }
    /**
     * @typedef {import('../plugins/roster/contact').default} RosterContact
     * @typedef {import('./_converse.js').Profile} Profile
     */
    initialize() {
      super.initialize();
      this.rosterContactAdded = (0, import_openpromise7.getOpenPromise)();
      this.onClosedChanged = () => this.setModelContact(this.get("jid"));
      this.contact = null;
    }
    /**
     * @param {string} jid
     */
    async setModelContact(jid) {
      if (this.contact?.get("jid") === jid) return;
      if (this.get("closed")) {
        this.off("change:closed", this.onClosedChanged);
        this.on("change:closed", this.onClosedChanged);
        return;
      }
      const { session, state } = converse_default;
      let contact;
      if (import_strophe18.Strophe.getBareJidFromJid(jid) === session.get("bare_jid")) {
        contact = state.profile;
      } else {
        contact = await api_default4.contacts.get(jid);
        if (!contact && !(await api_default4.blocklist.get()).get(jid)) {
          contact = await api_default4.contacts.add({ jid }, false, false);
        }
      }
      if (contact) {
        this.contact = contact;
        this.set("nickname", contact.get("nickname"));
        this.listenTo(this.contact, "vcard:add", (changed) => {
          this.trigger("contact:change", changed);
        });
        this.listenTo(this.contact, "vcard:change", (changed) => {
          this.trigger("contact:change", changed);
        });
        this.listenTo(this.contact, "change", (changed) => {
          if (changed.nickname) {
            this.set("nickname", changed.nickname);
          }
          this.trigger("contact:change", changed);
        });
        this.listenTo(this.contact, "destroy", () => {
          delete this.contact;
          this.trigger("contact:destroy");
        });
        this.rosterContactAdded.resolve();
        this.trigger("contact:add", this.contact);
      }
    }
  };
}
__name(ModelWithContact, "ModelWithContact");

// plugins/vcard/utils.js
var import_log16 = __toESM(require("@converse/log"));

// plugins/vcard/parsers.js
var { u: u3 } = public_default.env;
async function parseVCardResultStanza(iq) {
  const result = {
    email: iq.querySelector(":scope > vCard EMAIL USERID")?.textContent,
    fullname: iq.querySelector(":scope > vCard FN")?.textContent,
    image: iq.querySelector(":scope > vCard PHOTO BINVAL")?.textContent,
    image_type: iq.querySelector(":scope > vCard PHOTO TYPE")?.textContent,
    nickname: iq.querySelector(":scope > vCard NICKNAME")?.textContent,
    role: iq.querySelector(":scope > vCard ROLE")?.textContent,
    stanza: iq,
    // TODO: remove?
    url: iq.querySelector(":scope > vCard URL")?.textContent,
    vcard_updated: (/* @__PURE__ */ new Date()).toISOString(),
    error: void 0,
    vcard_error: void 0,
    image_hash: void 0
  };
  if (result.image) {
    const buffer = u3.base64ToArrayBuffer(result.image);
    const ab = await crypto.subtle.digest("SHA-1", buffer);
    result["image_hash"] = u3.arrayBufferToHex(ab);
  }
  return result;
}
__name(parseVCardResultStanza, "parseVCardResultStanza");

// plugins/vcard/utils.js
var { Strophe: Strophe18, $iq: $iq2, sizzle: sizzle5, stx: stx3 } = public_default.env;
Strophe18.addNamespace("VCARD_UPDATE", "vcard-temp:x:update");
function createStanza(type, jid, vcard_el) {
  const iq = $iq2(jid ? { "type": type, "to": jid } : { "type": type });
  if (!vcard_el) {
    iq.c("vCard", { "xmlns": Strophe18.NS.VCARD });
  } else {
    iq.cnode(vcard_el);
  }
  return iq;
}
__name(createStanza, "createStanza");
function onOccupantAvatarChanged(occupant) {
  const hash = occupant.get("image_hash");
  const vcards = [];
  if (occupant.get("jid")) {
    vcards.push(converse_default.state.vcards.get(occupant.get("jid")));
  }
  vcards.push(converse_default.state.vcards.get(occupant.get("from")));
  vcards.forEach((v) => hash && v && v?.get("image_hash") !== hash && api_default4.vcard.update(v, true));
}
__name(onOccupantAvatarChanged, "onOccupantAvatarChanged");
async function getVCardForModel(model, lazy_load = false) {
  await api_default4.waitUntil("VCardsInitialized");
  let vcard;
  if (model instanceof converse_default.exports.MUCOccupant) {
    vcard = await getVCardForOccupant(
      /** @type {MUCOccupant} */
      model,
      lazy_load
    );
  } else if (model instanceof converse_default.exports.MUCMessage) {
    vcard = await getVCardForMUCMessage(
      /** @type {MUCMessage} */
      model,
      lazy_load
    );
  } else {
    let jid;
    if (model instanceof converse_default.exports.Message) {
      if (["error", "info"].includes(model.get("type"))) {
        return;
      }
      jid = Strophe18.getBareJidFromJid(model.get("from"));
    } else {
      jid = model.get("jid");
    }
    if (!jid) {
      import_log16.default.warn(`Could not set VCard on model because no JID found!`);
      return null;
    }
    const { vcards } = converse_default.state;
    vcard = vcards.get(jid) || vcards.create({ jid }, { lazy_load });
  }
  if (vcard) {
    vcard.on("change", () => model.trigger("vcard:change"));
  }
  return vcard;
}
__name(getVCardForModel, "getVCardForModel");
async function getVCardForOccupant(occupant, lazy_load = true) {
  await api_default4.waitUntil("VCardsInitialized");
  const { vcards, profile } = converse_default.state;
  const muc = occupant?.collection?.chatroom;
  const nick = occupant.get("nick");
  if (nick && muc?.get("nick") === nick) {
    return profile.vcard;
  } else {
    const jid = occupant.get("jid") || occupant.get("from");
    if (jid) {
      return vcards.get(jid) || vcards.create({ jid }, { lazy_load });
    } else {
      import_log16.default.debug(`Could not get VCard for occupant because no JID found!`);
      return null;
    }
  }
}
__name(getVCardForOccupant, "getVCardForOccupant");
async function getVCardForMUCMessage(message, lazy_load = true) {
  if (["error", "info"].includes(message.get("type"))) return;
  await api_default4.waitUntil("VCardsInitialized");
  const { vcards, profile } = converse_default.state;
  const muc = message?.collection?.chatbox;
  const nick = Strophe18.getResourceFromJid(message.get("from"));
  if (nick && muc?.get("nick") === nick) {
    return profile.vcard;
  } else {
    const jid = message.occupant?.get("jid") || message.get("from");
    if (jid) {
      return vcards.get(jid) || vcards.create({ jid }, { lazy_load });
    } else {
      import_log16.default.warn(`Could not get VCard for message because no JID found! msgid: ${message.get("msgid")}`);
      return null;
    }
  }
}
__name(getVCardForMUCMessage, "getVCardForMUCMessage");
function clearVCardsSession() {
  if (shouldClearCache(converse_default)) {
    api_default4.promises.add("VCardsInitialized");
    if (converse_default.state.vcards) {
      converse_default.state.vcards.clearStore();
      Object.assign(converse_default, { vcards: void 0 });
      delete converse_default.state.vcards;
    }
  }
}
__name(clearVCardsSession, "clearVCardsSession");
async function fetchVCard(jid) {
  const bare_jid = converse_default.session.get("bare_jid");
  const to = Strophe18.getBareJidFromJid(jid) === bare_jid ? null : jid;
  let iq;
  try {
    iq = await api_default4.sendIQ(createStanza("get", to));
  } catch (error) {
    const parsed_error = isElement(error) ? await parseErrorStanza(error) : error;
    const error_msg = parsed_error?.message;
    return {
      jid,
      stanza: isElement(error) ? error : null,
      // TODO: remove?
      error: error_msg,
      vcard_error: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  return parseVCardResultStanza(iq);
}
__name(fetchVCard, "fetchVCard");
async function handleVCardUpdatePresence(pres) {
  await api_default4.waitUntil("VCardsInitialized");
  const photo = sizzle5(`x[xmlns="${Strophe18.NS.VCARD_UPDATE}"] photo`, pres).pop();
  if (photo) {
    const avatar_hash = photo.textContent;
    const from_jid = Strophe18.getBareJidFromJid(pres.getAttribute("from"));
    const vcard = await converse_default.state.vcards.get(from_jid);
    if (vcard?.get("image_hash") !== avatar_hash) {
      api_default4.vcard.update(from_jid, true).catch((e) => import_log16.default.error(e));
    }
  }
}
__name(handleVCardUpdatePresence, "handleVCardUpdatePresence");
var presence_ref;
function unregisterPresenceHandler() {
  if (presence_ref) {
    const connection2 = api_default4.connection.get();
    connection2.deleteHandler(presence_ref);
    presence_ref = null;
  }
}
__name(unregisterPresenceHandler, "unregisterPresenceHandler");
function registerPresenceHandler() {
  const connection2 = api_default4.connection.get();
  presence_ref = connection2.addHandler(
    /** @param {Element} pres */
    (pres) => {
      try {
        handleVCardUpdatePresence(pres);
      } catch (e) {
        import_log16.default.error(e);
      }
      return true;
    },
    null,
    "presence",
    null
  );
}
__name(registerPresenceHandler, "registerPresenceHandler");
function updatePresence(stanza) {
  if (sizzle5(`x[xmlns=${Strophe18.NS.VCARD_UPDATE}"]`, stanza.root()).length === 0) {
    const node = stx3`<x xmlns="${Strophe18.NS.VCARD_UPDATE}"></x>`;
    stanza.root().cnode(node).up();
  }
  return stanza;
}
__name(updatePresence, "updatePresence");

// shared/model-with-vcard.js
function ModelWithVCard(BaseModel) {
  return class ModelWithVCard extends BaseModel {
    static {
      __name(this, "ModelWithVCard");
    }
    /**
     * @param {any[]} args
     */
    constructor(...args) {
      super(...args);
      this._vcard = null;
      this.lazy_load_vcard = false;
    }
    initialize() {
      super.initialize();
      this.getVCard();
    }
    get vcard() {
      return this._vcard;
    }
    /**
     * @returns {Promise<VCard|null>}
     */
    async getVCard() {
      const { pluggable: pluggable2 } = converse_default;
      if (!pluggable2.plugins["converse-vcard"]?.enabled(converse_default)) return null;
      if (this._vcard) return this._vcard;
      this._vcard = await getVCardForModel(this, this.lazy_load_vcard);
      this.trigger("vcard:add", { vcard: this._vcard });
      return this._vcard;
    }
  };
}
__name(ModelWithVCard, "ModelWithVCard");

// shared/message.js
var BaseMessage = class extends ModelWithVCard(ModelWithContact(ColorAwareModel(import_skeletor8.Model))) {
  static {
    __name(this, "BaseMessage");
  }
  defaults() {
    return {
      msgid: getUniqueId(),
      time: (/* @__PURE__ */ new Date()).toISOString(),
      is_ephemeral: false
    };
  }
  /**
   * @param {Model[]} [models]
   * @param {object} [options]
   */
  constructor(models, options) {
    super(models, options);
    this.file = null;
    this.attributes;
  }
  initialize() {
    this.lazy_load_vcard = true;
    super.initialize();
    this.chatbox = this.collection?.chatbox;
    if (!this.checkValidity()) return;
    if (this.get("file")) {
      this.on("change:put", () => this.uploadFile());
    }
    this.on("change:is_ephemeral", () => this.setTimerForEphemeralMessage());
    this.setTimerForEphemeralMessage();
  }
  checkValidity() {
    if (Object.keys(this.attributes).length === 3) {
      this.validationError = "Empty message";
      this.safeDestroy();
      return false;
    }
    return true;
  }
  safeDestroy() {
    try {
      this.destroy();
    } catch (e) {
      import_log17.default.warn(`safeDestroy: ${e}`);
    }
  }
  /**
   * Sets an auto-destruct timer for this message, if it's is_ephemeral.
   */
  setTimerForEphemeralMessage() {
    if (this.ephemeral_timer) {
      clearTimeout(this.ephemeral_timer);
    }
    const is_ephemeral = this.isEphemeral();
    if (is_ephemeral) {
      const timeout = typeof is_ephemeral === "number" ? is_ephemeral : 1e4;
      this.ephemeral_timer = setTimeout(() => this.safeDestroy(), timeout);
    }
  }
  /**
   * Returns a boolean indicating whether this message is ephemeral,
   * meaning it will get automatically removed after ten seconds.
   * @returns {boolean}
   */
  isEphemeral() {
    return this.get("is_ephemeral");
  }
  /**
   * Returns a boolean indicating whether this message is a XEP-0245 /me command.
   * @returns {boolean}
   */
  isMeCommand() {
    const text = this.getMessageText();
    if (!text) {
      return false;
    }
    return text.startsWith("/me ");
  }
  /**
   * @returns {boolean}
   */
  isRetracted() {
    return this.get("retracted") || this.get("moderated") === "retracted";
  }
  /**
   * Returns a boolean indicating whether this message is considered a followup
   * message from the previous one. Followup messages are shown grouped together
   * under one author heading.
   * A message is considered a followup of it's predecessor when it's a chat
   * message from the same author, within 10 minutes.
   * @returns {boolean}
   */
  isFollowup() {
    const messages = this.collection?.models;
    if (!messages) {
      return false;
    }
    const idx = messages.indexOf(this);
    const prev_model = idx ? messages[idx - 1] : null;
    if (prev_model === null) {
      return false;
    }
    const date = (0, import_dayjs3.default)(this.get("time"));
    return this.get("from") === prev_model.get("from") && !this.isRetracted() && !prev_model.isRetracted() && !this.isMeCommand() && !prev_model.isMeCommand() && !!this.get("is_encrypted") === !!prev_model.get("is_encrypted") && this.get("type") === prev_model.get("type") && this.get("type") !== "info" && date.isBefore((0, import_dayjs3.default)(prev_model.get("time")).add(10, "minutes")) && (this.get("type") === "groupchat" ? this.get("occupant_id") === prev_model.get("occupant_id") : true);
  }
  /**
   * Determines whether this messsage may be retracted by the current user.
   * @returns { Boolean }
   */
  mayBeRetracted() {
    const is_own_message = this.get("sender") === "me";
    const not_canceled = this.get("error_type") !== "cancel";
    return is_own_message && not_canceled && ["all", "own"].includes(api_default4.settings.get("allow_message_retraction"));
  }
  getMessageText() {
    if (this.get("is_encrypted")) {
      const { __ } = converse_default;
      return this.get("plaintext") || this.get("body") || __("Undecryptable OMEMO message");
    } else if (["groupchat", "chat", "normal"].includes(this.get("type"))) {
      return this.get("body");
    } else {
      return this.get("message");
    }
  }
  /**
   * Send out an IQ stanza to request a file upload slot.
   * https://xmpp.org/extensions/xep-0363.html#request
   */
  sendSlotRequestStanza() {
    if (!this.file) return Promise.reject(new Error("file is undefined"));
    const iq = (0, import_strophe19.$iq)({
      "from": converse_default.session.get("jid"),
      "to": this.get("slot_request_url"),
      "type": "get"
    }).c("request", {
      "xmlns": import_strophe19.Strophe.NS.HTTPUPLOAD,
      "filename": this.file.name,
      "size": this.file.size,
      "content-type": this.file.type
    });
    return api_default4.sendIQ(iq);
  }
  /**
   * @param {Element} stanza
   */
  getUploadRequestMetadata(stanza) {
    const headers = (0, import_sizzle5.default)(`slot[xmlns="${import_strophe19.Strophe.NS.HTTPUPLOAD}"] put header`, stanza);
    return {
      headers: headers.map((h) => ({ "name": h.getAttribute("name"), "value": h.textContent })).filter((h) => ["Authorization", "Expires"].includes(h.name))
    };
  }
  async getRequestSlotURL() {
    const { __ } = converse_default;
    let stanza;
    try {
      stanza = await this.sendSlotRequestStanza();
    } catch (e) {
      import_log17.default.error(e);
      return this.save({
        is_ephemeral: true,
        message: __("Sorry, could not determine upload URL."),
        type: "error"
      });
    }
    const slot = (0, import_sizzle5.default)(`slot[xmlns="${import_strophe19.Strophe.NS.HTTPUPLOAD}"]`, stanza).pop();
    if (slot) {
      this.upload_metadata = this.getUploadRequestMetadata(stanza);
      this.save({
        get: slot.querySelector("get").getAttribute("url"),
        put: slot.querySelector("put").getAttribute("url")
      });
    } else {
      return this.save({
        is_ephemeral: true,
        message: __("Sorry, could not determine file upload URL."),
        type: "error"
      });
    }
  }
  uploadFile() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = async (event) => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        import_log17.default.info("Status: " + xhr.status);
        if (xhr.status === 200 || xhr.status === 201) {
          let attrs = {
            body: this.get("get"),
            message: this.get("get"),
            oob_url: this.get("get"),
            upload: SUCCESS
          };
          attrs = await api_default4.hook("afterFileUploaded", this, attrs);
          this.save(attrs);
        } else {
          import_log17.default.error(event);
          xhr.onerror(new ProgressEvent(`Response status: ${xhr.status}`));
        }
      }
    };
    xhr.upload.addEventListener(
      "progress",
      (evt) => {
        if (evt.lengthComputable) {
          this.set("progress", evt.loaded / evt.total);
        }
      },
      false
    );
    xhr.onerror = () => {
      const { __ } = converse_default;
      let message;
      if (xhr.responseText) {
        message = __(
          'Sorry, could not succesfully upload your file. Your server\u2019s response: "%1$s"',
          xhr.responseText
        );
      } else {
        message = __("Sorry, could not succesfully upload your file.");
      }
      this.save({
        is_ephemeral: true,
        message,
        type: "error",
        upload: FAILURE
      });
    };
    xhr.open("PUT", this.get("put"), true);
    xhr.setRequestHeader("Content-type", this.file.type);
    this.upload_metadata.headers?.forEach((h) => xhr.setRequestHeader(h.name, h.value));
    xhr.send(this.file);
  }
};
var message_default = BaseMessage;

// shared/model-with-messages.js
var import_filesize2 = require("filesize");
var import_pick2 = __toESM(require("lodash-es/pick"));
var import_debounce3 = __toESM(require("lodash-es/debounce.js"));
var import_openpromise8 = require("@converse/openpromise");
var import_skeletor10 = require("@converse/skeletor");
var import_log20 = __toESM(require("@converse/log"));

// plugins/chat/utils.js
var import_sizzle6 = __toESM(require("sizzle"));
var import_skeletor9 = require("@converse/skeletor");
var import_log19 = __toESM(require("@converse/log"));

// plugins/chat/parsers.js
var import_dayjs4 = __toESM(require("dayjs"));
var import_log18 = __toESM(require("@converse/log"));
var { Strophe: Strophe20, sizzle: sizzle7 } = public_default.env;
async function parseMessage(stanza) {
  throwErrorIfInvalidForward(stanza);
  let to_jid = stanza.getAttribute("to");
  const to_resource = Strophe20.getResourceFromJid(to_jid);
  const resource = converse_default.session.get("resource");
  if (api_default4.settings.get("filter_by_resource") && to_resource && to_resource !== resource) {
    return new StanzaParseError(
      stanza,
      `Ignoring incoming message intended for a different resource: ${to_jid}`
    );
  }
  const bare_jid = converse_default.session.get("bare_jid");
  const original_stanza = stanza;
  let from_jid = stanza.getAttribute("from") || bare_jid;
  if (isCarbon(stanza)) {
    if (from_jid === bare_jid) {
      const selector = `[xmlns="${Strophe20.NS.CARBONS}"] > forwarded[xmlns="${Strophe20.NS.FORWARD}"] > message`;
      stanza = sizzle7(selector, stanza).pop();
      to_jid = stanza.getAttribute("to");
      from_jid = stanza.getAttribute("from");
    } else {
      rejectMessage(stanza, "Rejecting carbon from invalid JID");
      return new StanzaParseError(stanza, `Rejecting carbon from invalid JID ${to_jid}`);
    }
  }
  const is_archived = isArchived(stanza);
  if (is_archived) {
    if (from_jid === bare_jid) {
      const selector = `[xmlns="${Strophe20.NS.MAM}"] > forwarded[xmlns="${Strophe20.NS.FORWARD}"] > message`;
      stanza = sizzle7(selector, stanza).pop();
      to_jid = stanza.getAttribute("to");
      from_jid = stanza.getAttribute("from");
    } else {
      return new StanzaParseError(
        stanza,
        `Invalid Stanza: alleged MAM message from ${stanza.getAttribute("from")}`
      );
    }
  }
  const from_bare_jid = Strophe20.getBareJidFromJid(from_jid);
  const is_me = from_bare_jid === bare_jid;
  if (is_me && to_jid === null) {
    return new StanzaParseError(
      stanza,
      `Don't know how to handle message stanza without 'to' attribute. ${stanza.outerHTML}`
    );
  }
  const is_headline = isHeadline(stanza);
  const is_server_message = isServerMessage(stanza);
  let contact, contact_jid;
  if (!is_headline && !is_server_message) {
    contact_jid = is_me ? Strophe20.getBareJidFromJid(to_jid) : from_bare_jid;
    contact = await api_default4.contacts.get(contact_jid);
    if (contact === void 0 && !api_default4.settings.get("allow_non_roster_messaging")) {
      import_log18.default.error(stanza);
      return new StanzaParseError(
        stanza,
        `Blocking messaging with a JID not in our roster because allow_non_roster_messaging is false.`
      );
    }
  }
  const delay = sizzle7(`delay[xmlns="${Strophe20.NS.DELAY}"]`, original_stanza).pop();
  const marker = getChatMarker(stanza);
  const now = (/* @__PURE__ */ new Date()).toISOString();
  let attrs = Object.assign(
    {
      contact_jid,
      is_archived,
      is_headline,
      is_server_message,
      "body": stanza.querySelector("body")?.textContent?.trim(),
      "chat_state": getChatState(stanza),
      "from": stanza.getAttribute("from"),
      "is_carbon": isCarbon(original_stanza),
      "is_delayed": !!delay,
      "is_markable": !!sizzle7(`markable[xmlns="${Strophe20.NS.MARKERS}"]`, stanza).length,
      "is_marker": !!marker,
      "is_unstyled": !!sizzle7(`unstyled[xmlns="${Strophe20.NS.STYLING}"]`, stanza).length,
      "marker_id": marker && marker.getAttribute("id"),
      "nick": contact?.attributes?.nickname,
      "receipt_id": getReceiptId(stanza),
      "received": (/* @__PURE__ */ new Date()).toISOString(),
      "references": getReferences(stanza),
      "sender": is_me ? "me" : "them",
      "subject": stanza.querySelector("subject")?.textContent,
      "thread": stanza.querySelector("thread")?.textContent,
      "time": delay ? (0, import_dayjs4.default)(delay.getAttribute("stamp")).toISOString() : now,
      "to": stanza.getAttribute("to"),
      "type": stanza.getAttribute("type") || "normal"
    },
    getErrorAttributes(stanza),
    getOutOfBandAttributes(stanza),
    getSpoilerAttributes(stanza),
    getCorrectionAttributes(stanza, original_stanza),
    getStanzaIDs(stanza, original_stanza),
    getRetractionAttributes(stanza, original_stanza),
    getEncryptionAttributes(stanza)
  );
  if (attrs.is_archived) {
    const from = original_stanza.getAttribute("from");
    if (from && from !== bare_jid) {
      return new StanzaParseError(stanza, `Invalid Stanza: Forged MAM message from ${from}`);
    }
  }
  attrs = Object.assign(
    {
      "message": attrs.body || attrs.error,
      // TODO: Remove and use body and error attributes instead
      "is_valid_receipt_request": isValidReceiptRequest(stanza, attrs)
    },
    attrs
  );
  attrs["id"] = attrs["origin_id"] || attrs[`stanza_id ${attrs.from}`] || utils_default.getUniqueId();
  attrs = await api_default4.hook("parseMessage", stanza, attrs);
  const metadata = await utils_default.getMediaURLsMetadata(attrs.is_encrypted ? attrs.plaintext : attrs.body);
  return Object.assign(attrs, metadata);
}
__name(parseMessage, "parseMessage");

// plugins/chat/utils.js
var { Strophe: Strophe21, u: u4 } = public_default.env;
function routeToChat(event) {
  if (!location.hash.startsWith("#converse/chat?jid=")) {
    return;
  }
  event?.preventDefault();
  const jid = location.hash.split("=").pop();
  if (!u4.isValidJID(jid)) {
    return import_log19.default.warn(`Invalid JID "${jid}" provided in URL fragment`);
  }
  api_default4.chats.open(jid);
}
__name(routeToChat, "routeToChat");
function isNewMessage(message) {
  if (message instanceof Element) {
    return !((0, import_sizzle6.default)(`result[xmlns="${Strophe21.NS.MAM}"]`, message).length && (0, import_sizzle6.default)(`delay[xmlns="${Strophe21.NS.DELAY}"]`, message).length);
  } else if (message instanceof import_skeletor9.Model) {
    message = message.attributes;
  }
  return !(message["is_delayed"] && message["is_archived"]);
}
__name(isNewMessage, "isNewMessage");
async function handleErrorMessage(stanza) {
  const from_jid = Strophe21.getBareJidFromJid(stanza.getAttribute("from"));
  const bare_jid = converse_default.session.get("bare_jid");
  if (u4.isSameBareJID(from_jid, bare_jid)) {
    return;
  }
  const chatbox = await api_default4.chatboxes.get(from_jid);
  if (chatbox?.get("type") === PRIVATE_CHAT_TYPE) {
    chatbox?.handleErrorMessageStanza(stanza);
  }
}
__name(handleErrorMessage, "handleErrorMessage");
function autoJoinChats() {
  api_default4.settings.get("auto_join_private_chats").forEach(
    /** @param {string} jid */
    (jid) => {
      if (converse_default.state.chatboxes.where({ "jid": jid }).length) {
        return;
      }
      if (typeof jid === "string") {
        api_default4.chats.open(jid);
      } else {
        import_log19.default.error('Invalid jid criteria specified for "auto_join_private_chats"');
      }
    }
  );
  api_default4.trigger("privateChatsAutoJoined");
}
__name(autoJoinChats, "autoJoinChats");
function registerMessageHandlers() {
  api_default4.connection.get().addHandler(
    /** @param {Element} stanza */
    (stanza) => {
      if (["groupchat", "error"].includes(stanza.getAttribute("type")) || isHeadline(stanza) || isServerMessage(stanza) || isArchived(stanza)) {
        return true;
      }
      return converse_default.exports.handleMessageStanza(stanza) || true;
    },
    null,
    "message"
  );
  api_default4.connection.get().addHandler(
    /** @param {Element} stanza */
    (stanza) => {
      handleErrorMessage(stanza);
      return true;
    },
    null,
    "message",
    "error"
  );
}
__name(registerMessageHandlers, "registerMessageHandlers");
async function handleMessageStanza(stanza) {
  stanza = stanza instanceof Element ? stanza : stanza.tree();
  if (isServerMessage(stanza)) {
    const from = stanza.getAttribute("from");
    return import_log19.default.info(`handleMessageStanza: Ignoring incoming server message from JID: ${from}`);
  }
  if (await isMUCPrivateMessage(stanza)) {
    return true;
  }
  let attrs;
  try {
    attrs = await parseMessage(stanza);
  } catch (e) {
    return import_log19.default.error(e);
  }
  if (u4.isErrorObject(attrs)) {
    const { stanza: stanza2, message } = (
      /** @type {StanzaParseError} */
      attrs
    );
    if (stanza2) import_log19.default.error(stanza2);
    return import_log19.default.error(message);
  }
  const { body, plaintext, contact_jid, nick } = (
    /** @type {MessageAttributes} */
    attrs
  );
  const has_body = !!(body || plaintext);
  const chatbox = await api_default4.chats.get(contact_jid, { nickname: nick }, has_body);
  await chatbox?.queueMessage(attrs);
  const data = { stanza, attrs, chatbox };
  api_default4.trigger("message", data);
}
__name(handleMessageStanza, "handleMessageStanza");
async function enableCarbons() {
  const bare_jid = converse_default.session.get("bare_jid");
  const domain = Strophe21.getDomainFromJid(bare_jid);
  const supported = await api_default4.disco.supports(Strophe21.NS.CARBONS, domain);
  if (!supported) {
    import_log19.default.warn("Not enabling carbons because it's not supported!");
    return;
  }
  const iq = new Strophe21.Builder("iq", {
    "from": api_default4.connection.get().jid,
    "type": "set"
  }).c("enable", { xmlns: Strophe21.NS.CARBONS });
  const result = await api_default4.sendIQ(iq, null, false);
  if (result === null) {
    import_log19.default.warn(`A timeout occurred while trying to enable carbons`);
  } else if (u4.isErrorStanza(result)) {
    import_log19.default.warn("An error occurred while trying to enable message carbons.");
    import_log19.default.error(result);
  } else {
    import_log19.default.debug("Message carbons have been enabled.");
  }
}
__name(enableCarbons, "enableCarbons");

// shared/model-with-messages.js
var { Strophe: Strophe22, stx: stx4, u: u5 } = public_default.env;
function ModelWithMessages(BaseModel) {
  return class ModelWithMessages extends BaseModel {
    static {
      __name(this, "ModelWithMessages");
    }
    /** @param {...any} args */
    constructor(...args) {
      super(args[0], args[1]);
      this.disable_mam = false;
    }
    async initialize() {
      super.initialize();
      this.initUI();
      this.initMessages();
      this.initNotifications();
      this.ui.on("change:scrolled", () => this.onScrolledChanged());
    }
    initNotifications() {
      this.notifications = new import_skeletor10.Model();
    }
    initUI() {
      this.ui = new import_skeletor10.Model();
    }
    /**
     * @returns {string}
     */
    getDisplayName() {
      return this.get("jid");
    }
    canPostMessages() {
      return true;
    }
    /**
     * Queue the creation of a message, to make sure that we don't run
     * into a race condition whereby we're creating a new message
     * before the collection has been fetched.
     * @param {Object} attrs
     * @param {Object} options
     */
    async createMessage(attrs, options) {
      attrs.time = attrs.time || (/* @__PURE__ */ new Date()).toISOString();
      /*! TOFIND */
      return this.messages.create(attrs, options);
    }
    getMessagesCacheKey() {
      return `converse.messages-${this.get("jid")}-${converse_default.session.get("bare_jid")}`;
    }
    getMessagesCollection() {
      return new converse_default.exports.Messages();
    }
    getNotificationsText() {
      const { __ } = converse_default;
      if (this.notifications?.get("chat_state") === COMPOSING) {
        return __("%1$s is typing", this.getDisplayName());
      } else if (this.notifications?.get("chat_state") === PAUSED) {
        return __("%1$s has stopped typing", this.getDisplayName());
      } else if (this.notifications?.get("chat_state") === GONE) {
        return __("%1$s has gone away", this.getDisplayName());
      } else {
        return "";
      }
    }
    initMessages() {
      this.messages = this.getMessagesCollection();
      this.messages.fetched = (0, import_openpromise8.getOpenPromise)();
      this.messages.chatbox = this;
      initStorage(this.messages, this.getMessagesCacheKey());
      this.listenTo(this.messages, "add", (m) => this.onMessageAdded(m));
      this.listenTo(this.messages, "change:upload", (m) => this.onMessageUploadChanged(m));
      this.listenTo(this.messages, "change:correcting", (m) => this.onMessageCorrecting(m));
    }
    fetchMessages() {
      if (this.messages.fetched_flag) {
        import_log20.default.info(`Not re-fetching messages for ${this.get("jid")}`);
        return;
      }
      this.messages.fetched_flag = true;
      const resolve = this.messages.fetched.resolve;
      this.messages.fetch({
        add: true,
        success: /* @__PURE__ */ __name(() => {
          this.afterMessagesFetched();
          resolve();
        }, "success"),
        error: /* @__PURE__ */ __name(() => {
          this.afterMessagesFetched();
          resolve();
        }, "error")
      });
      return this.messages.fetched;
    }
    afterMessagesFetched() {
      this.pruneHistoryWhenScrolledDown();
      api_default4.trigger("afterMessagesFetched", this);
    }
    /**
     * @param {MessageAttributes|Error} _attrs_or_error
     */
    async onMessage(_attrs_or_error) {
      throw new MethodNotImplementedError("onMessage is not implemented");
    }
    /**
     * @param {BaseMessage} message
     * @param {MessageAttributes} attrs
     * @returns {object}
     */
    getUpdatedMessageAttributes(message, attrs) {
      if (!attrs.error_type && message.get("error_type") === "Decryption") {
        return Object.assign({}, attrs, {
          error_condition: void 0,
          error_message: void 0,
          error_text: void 0,
          error_type: void 0,
          is_archived: attrs.is_archived,
          is_ephemeral: false,
          is_error: false
        });
      } else {
        return {
          is_archived: attrs.is_archived,
          time: attrs.time ? attrs.time : message.get("time")
        };
      }
    }
    /**
     * @param {BaseMessage} message
     * @param {MessageAttributes} attrs
     */
    updateMessage(message, attrs) {
      const new_attrs = this.getUpdatedMessageAttributes(message, attrs);
      new_attrs && message.save(new_attrs);
    }
    /**
     * Determines whether the given attributes of an incoming message
     * represent a XEP-0308 correction and, if so, handles it appropriately.
     * @param {MessageAttributes|MUCMessageAttributes} attrs - Attributes representing a received
     *  message, as returned by {@link parseMessage}
     * @returns {Promise<BaseMessage|void>} Returns the corrected
     *  message or `undefined` if not applicable.
     */
    async handleCorrection(attrs) {
      if (!attrs.replace_id || !attrs.from) {
        return;
      }
      let query;
      if (attrs.type === "groupchat") {
        const { occupant_id, replace_id } = (
          /** @type {MUCMessageAttributes} */
          attrs
        );
        query = occupant_id ? ({ attributes: m }) => m.msgid === replace_id && m.occupant_id == occupant_id : ({ attributes: m }) => m.msgid === attrs.replace_id && m.from === attrs.from && m.occupant_id == null;
      } else {
        query = /* @__PURE__ */ __name(({ attributes: m }) => m.msgid === attrs.replace_id && m.from === attrs.from && m.occupant_id == null, "query");
      }
      const message = this.messages.models.find(query);
      if (!message) {
        attrs["older_versions"] = {};
        return await this.createMessage(attrs);
      }
      const older_versions = message.get("older_versions") || {};
      if (attrs.time < message.get("time") && message.get("edited")) {
        older_versions[attrs.time] = attrs["message"];
        message.save({ "older_versions": older_versions });
      } else {
        if (Object.keys(older_versions).length) {
          older_versions[message.get("edited")] = message.getMessageText();
        } else {
          older_versions[message.get("time")] = message.getMessageText();
        }
        attrs = Object.assign(attrs, { older_versions });
        delete attrs["msgid"];
        delete attrs["id"];
        attrs["time"] = message.get("time");
        message.save(attrs);
      }
      return message;
    }
    /**
     * Queue an incoming `chat` message stanza for processing.
     * @param {MessageAttributes} attrs - A promise which resolves to the message attributes
     */
    queueMessage(attrs) {
      this.msg_chain = (this.msg_chain || this.messages.fetched).then(() => this.onMessage(attrs)).catch((e) => import_log20.default.error(e));
      return this.msg_chain;
    }
    /**
     * @param {MessageAttributes} [_attrs]
     * @return {Promise<MessageAttributes>}
     */
    async getOutgoingMessageAttributes(_attrs) {
      throw new MethodNotImplementedError("getOutgoingMessageAttributes is not implemented");
    }
    /**
     * Responsible for sending off a text message inside an ongoing chat conversation.
     * @param {Object} [attrs] - A map of attributes to be saved on the message
     * @returns {Promise<BaseMessage>}
     * @example
     *  const chat = api.chats.get('buddy1@example.org');
     *  chat.sendMessage({'body': 'hello world'});
     */
    async sendMessage(attrs) {
      await api_default4.emojis.initialize();
      if (!this.canPostMessages()) {
        import_log20.default.warn("sendMessage was called but canPostMessages is false");
        return;
      }
      attrs = await this.getOutgoingMessageAttributes(attrs);
      let message = this.messages.findWhere("correcting");
      if (message) {
        const older_versions = message.get("older_versions") || {};
        const edited_time = message.get("edited") || message.get("time");
        older_versions[edited_time] = message.getMessageText();
        message.save({
          ...["body", "is_only_emojis", "media_urls", "references", "is_encrypted"].reduce((obj, k) => {
            if (attrs.hasOwnProperty(k)) obj[k] = attrs[k];
            return obj;
          }, {}),
          ...{
            correcting: false,
            edited: (/* @__PURE__ */ new Date()).toISOString(),
            message: attrs.body,
            ogp_metadata: [],
            older_versions,
            origin_id: u5.getUniqueId(),
            plaintext: attrs.is_encrypted ? attrs.message : void 0,
            received: void 0
          }
        });
      } else {
        this.setEditable(attrs, (/* @__PURE__ */ new Date()).toISOString());
        message = await this.createMessage(attrs);
      }
      try {
        const stanza = await this.createMessageStanza(message);
        api_default4.send(stanza);
      } catch (e) {
        message.destroy();
        import_log20.default.error(e);
        return;
      }
      api_default4.trigger("sendMessage", { "chatbox": this, message });
      return message;
    }
    /**
     * Retract one of your messages in this chat
     * @param {BaseMessage} message - The message which we're retracting.
     */
    retractOwnMessage(message) {
      const retraction_id = u5.getUniqueId();
      sendRetractionMessage(this.get("jid"), message, retraction_id);
      message.save({
        "retracted": (/* @__PURE__ */ new Date()).toISOString(),
        "retracted_id": message.get("origin_id"),
        "retraction_id": retraction_id,
        "is_ephemeral": true,
        "editable": false
      });
    }
    /**
     * @param {File[]} files'
     */
    async sendFiles(files) {
      const { __, session } = converse_default;
      const result = await api_default4.disco.features.get(Strophe22.NS.HTTPUPLOAD, session.get("domain"));
      const item = result.pop();
      if (!item) {
        this.createMessage({
          "message": __("Sorry, looks like file upload is not supported by your server."),
          "type": "error",
          "is_ephemeral": true
        });
        return;
      }
      const data = item.dataforms.where({ "FORM_TYPE": { "value": Strophe22.NS.HTTPUPLOAD, "type": "hidden" } }).pop();
      const max_file_size = parseInt((data?.attributes || {})["max-file-size"]?.value, 10);
      const slot_request_url = item?.id;
      if (!slot_request_url) {
        this.createMessage({
          "message": __("Sorry, looks like file upload is not supported by your server."),
          "type": "error",
          "is_ephemeral": true
        });
        return;
      }
      Array.from(files).forEach(async (file) => {
        file = await api_default4.hook("beforeFileUpload", this, file);
        if (!isNaN(max_file_size) && file.size > max_file_size) {
          const size = (0, import_filesize2.filesize)(max_file_size);
          const message = Array.isArray(size) ? __("The size of your file, %1$s, exceeds the maximum allowed by your server.", file.name) : __(
            "The size of your file, %1$s, exceeds the maximum allowed by your server, which is %2$s.",
            file.name,
            size
          );
          return this.createMessage({
            message,
            type: "error",
            is_ephemeral: true
          });
        } else {
          const initial_attrs = await this.getOutgoingMessageAttributes();
          const attrs = Object.assign(initial_attrs, {
            "file": true,
            "progress": 0,
            "slot_request_url": slot_request_url
          });
          this.setEditable(attrs, (/* @__PURE__ */ new Date()).toISOString());
          const message = await this.createMessage(attrs, { "silent": true });
          message.file = file;
          this.messages.trigger("add", message);
          message.getRequestSlotURL();
        }
      });
    }
    /**
     * Responsible for setting the editable attribute of messages.
     * If api.settings.get('allow_message_corrections') is "last", then only the last
     * message sent from me will be editable. If set to "all" all messages
     * will be editable. Otherwise no messages will be editable.
     * @param {Object} attrs An object containing message attributes.
     * @param {String} send_time - time when the message was sent
     */
    setEditable(attrs, send_time) {
      if (attrs.is_headline || u5.isEmptyMessage(attrs) || attrs.sender !== "me") {
        return;
      }
      if (api_default4.settings.get("allow_message_corrections") === "all") {
        attrs.editable = !(attrs.file || attrs.retracted || "oob_url" in attrs);
      } else if (api_default4.settings.get("allow_message_corrections") === "last" && send_time > this.get("time_sent")) {
        this.set({ "time_sent": send_time });
        this.messages.findWhere({ "editable": true })?.save({ "editable": false });
        attrs.editable = !(attrs.file || attrs.retracted || "oob_url" in attrs);
      }
    }
    /**
     * Mutator for setting the chat state of this chat session.
     * Handles clearing of any chat state notification timeouts and
     * setting new ones if necessary.
     * Timeouts are set when the  state being set is COMPOSING or PAUSED.
     * After the timeout, COMPOSING will become PAUSED and PAUSED will become INACTIVE.
     * See XEP-0085 Chat State Notifications.
     * @param {string} state - The chat state (consts ACTIVE, COMPOSING, PAUSED, INACTIVE, GONE)
     * @param {object} [options]
     */
    setChatState(state, options) {
      if (this.chat_state_timeout !== void 0) {
        clearTimeout(this.chat_state_timeout);
        delete this.chat_state_timeout;
      }
      if (state === COMPOSING) {
        this.chat_state_timeout = setTimeout(
          this.setChatState.bind(this),
          converse_default.TIMEOUTS.PAUSED,
          PAUSED
        );
      } else if (state === PAUSED) {
        this.chat_state_timeout = setTimeout(
          this.setChatState.bind(this),
          converse_default.TIMEOUTS.INACTIVE,
          INACTIVE
        );
      }
      this.set("chat_state", state, options);
      return this;
    }
    /**
     * @param {BaseMessage} message
     */
    onMessageAdded(message) {
      if (api_default4.settings.get("prune_messages_above") && (api_default4.settings.get("pruning_behavior") === "scrolled" || !this.ui.get("scrolled")) && !u5.isEmptyMessage(message)) {
        this.debouncedPruneHistory();
      }
    }
    /**
     * @param {BaseMessage} message
     */
    async onMessageUploadChanged(message) {
      if (message.get("upload") === SUCCESS) {
        const attrs = {
          "body": message.get("body"),
          "spoiler_hint": message.get("spoiler_hint"),
          "oob_url": message.get("oob_url")
        };
        await this.sendMessage(attrs);
        message.destroy();
      }
    }
    /**
     * @param {BaseMessage} message
     */
    onMessageCorrecting(message) {
      if (message.get("correcting")) {
        this.save({ correcting: message.get("id"), draft: u5.prefixMentions(message) });
      } else {
        this.save({ correcting: void 0, draft: void 0 });
      }
    }
    onScrolledChanged() {
      if (!this.ui.get("scrolled")) {
        this.clearUnreadMsgCounter();
        this.pruneHistoryWhenScrolledDown();
      }
    }
    pruneHistoryWhenScrolledDown() {
      if (api_default4.settings.get("prune_messages_above") && api_default4.settings.get("pruning_behavior") === "unscrolled" && !this.ui.get("scrolled")) {
        this.debouncedPruneHistory();
      }
    }
    /**
     * @param {MessageAttributes} attrs
     * @returns {Promise<boolean>}
     */
    shouldShowErrorMessage(attrs) {
      const msg = this.getMessageReferencedByError(attrs);
      if (!msg && attrs.chat_state) {
        return;
      }
      return Promise.resolve(true);
    }
    async clearMessages() {
      try {
        await this.messages.clearStore();
      } catch (e) {
        this.messages.trigger("reset");
        import_log20.default.error(e);
      } finally {
        this.messages.fetched.resolve();
      }
    }
    editEarlierMessage() {
      let message;
      let idx = this.messages.findLastIndex("correcting");
      if (idx >= 0) {
        this.messages.at(idx).save("correcting", false);
        while (idx > 0) {
          idx -= 1;
          const candidate = this.messages.at(idx);
          if (candidate.get("editable")) {
            message = candidate;
            break;
          }
        }
      }
      message = message || this.messages.filter({ sender: "me" }).reverse().find((m) => m.get("editable"));
      message?.save("correcting", true);
    }
    editLaterMessage() {
      let message;
      let idx = this.messages.findLastIndex("correcting");
      if (idx >= 0) {
        this.messages.at(idx).save("correcting", false);
        while (idx < this.messages.length - 1) {
          idx += 1;
          const candidate = this.messages.at(idx);
          if (candidate.get("editable")) {
            message = candidate;
            message.save("correcting", true);
            break;
          }
        }
      }
      return message;
    }
    /**
     * Used by sub-classes to indicate wether a message is a chat
     * message, as opposed to error or info messages.
     * @param {BaseMessage} _message
     * @returns {boolean}
     */
    isChatMessage(_message) {
      throw new MethodNotImplementedError();
    }
    /** @returns {BaseMessage} */
    getOldestMessage() {
      for (let i2 = 0; i2 < this.messages.length; i2++) {
        const message = this.messages.at(i2);
        if (this.isChatMessage(message)) {
          return message;
        }
      }
    }
    /** @returns {BaseMessage} */
    getMostRecentMessage() {
      for (let i2 = this.messages.length - 1; i2 >= 0; i2--) {
        const message = this.messages.at(i2);
        if (this.isChatMessage(message)) {
          return message;
        }
      }
    }
    /**
     * Given an error `<message>` stanza's attributes, find the saved message model which is
     * referenced by that error.
     * @param {object} attrs
     */
    getMessageReferencedByError(attrs) {
      const id = attrs.msgid;
      return id && this.messages.models.find((m) => [m.get("msgid"), m.get("retraction_id")].includes(id));
    }
    /**
     * Looks whether we already have a retraction for this
     * incoming message. If so, it's considered "dangling" because it
     * probably hasn't been applied to anything yet, given that the
     * relevant message is only coming in now.
     * @param {object} attrs - Attributes representing a received
     *  message, as returned by {@link parseMessage}
     * @returns {BaseMessage|null}
     */
    findDanglingRetraction(attrs) {
      if (!attrs.origin_id || !this.messages.length) {
        return null;
      }
      if (this.messages.last().get("time") > attrs.time) {
        const messages = Array.from(this.messages.models);
        messages.reverse();
        return messages.find(
          ({ attributes }) => attributes.retracted_id === attrs.origin_id && attributes.from === attrs.from && !attributes.moderated_by
        );
      }
      return null;
    }
    /**
     * Returns an already cached message (if it exists) based on the
     * passed in attributes map.
     * @param {object} attrs - Attributes representing a received
     *  message, as returned by {@link parseMessage}
     * @returns {BaseMessage}
     */
    getDuplicateMessage(attrs) {
      const queries = [
        ...this.getStanzaIdQueryAttrs(attrs),
        this.getOriginIdQueryAttrs(attrs),
        this.getMessageBodyQueryAttrs(attrs)
      ].filter((s) => s);
      return this.messages.models.find(
        /** @param {BaseMessage} m */
        (m) => queries.find((q) => Object.keys(q).every((k) => m.get(k) === q[k]))
      );
    }
    /**
     * @param {object} attrs - Attributes representing a received
     */
    getOriginIdQueryAttrs(attrs) {
      return attrs.origin_id && { origin_id: attrs.origin_id, from: attrs.from };
    }
    /**
     * @param {object} attrs - Attributes representing a received
     */
    getStanzaIdQueryAttrs(attrs) {
      const keys = Object.keys(attrs).filter((k) => k.startsWith("stanza_id "));
      return keys.map((key) => {
        const by_jid = key.replace(/^stanza_id /, "");
        const query = {};
        query[`stanza_id ${by_jid}`] = attrs[key];
        return query;
      });
    }
    /**
     * @param {object} attrs - Attributes representing a received
     */
    getMessageBodyQueryAttrs(attrs) {
      if (attrs.msgid) {
        const query = {
          from: attrs.from,
          msgid: attrs.msgid
        };
        if (!attrs.is_encrypted && attrs.body) {
          query["body"] = attrs.body;
        }
        return query;
      }
    }
    /**
     * Given the passed in message object, send a XEP-0333 chat marker.
     * @param {BaseMessage} msg
     * @param {('received'|'displayed'|'acknowledged')} [type='displayed']
     * @param {boolean} [force=false] - Whether a marker should be sent for the
     *  message, even if it didn't include a `markable` element.
     */
    async sendMarkerForMessage(msg, type = "displayed", force = false) {
      if (!msg || msg?.get("type") === "groupchat" || !api_default4.settings.get("send_chat_markers").includes(type)) {
        return;
      }
      const contact = await api_default4.contacts.get(this.get("jid"));
      const subscription = contact?.get("subscription");
      if (!contact || subscription === "none" || subscription === "to") {
        return;
      }
      if (msg?.get("is_markable") || force) {
        const from_jid = Strophe22.getBareJidFromJid(msg.get("from"));
        sendMarker(from_jid, msg.get("msgid"), type, msg.get("type"));
      }
    }
    /**
     * Given a newly received {@link BaseMessage} instance,
     * update the unread counter if necessary.
     * @param {BaseMessage} message
     */
    handleUnreadMessage(message) {
      if (!message?.get("body")) {
        return;
      }
      if (isNewMessage(message)) {
        if (message.get("sender") === "me") {
          this.ui.set("scrolled", false);
        } else if (this.isHidden()) {
          this.incrementUnreadMsgsCounter(message);
        } else {
          this.sendMarkerForMessage(message);
        }
      }
    }
    /**
     * @param {BaseMessage} message
     * @param {MessageAttributes} attrs
     */
    async getErrorAttributesForMessage(message, attrs) {
      const { __ } = converse_default;
      const new_attrs = {
        editable: false,
        error: attrs.error,
        error_condition: attrs.error_condition,
        error_text: attrs.error_text,
        error_type: attrs.error_type,
        is_error: true
      };
      if (attrs.msgid === message.get("retraction_id")) {
        new_attrs.retraction_id = void 0;
        if (!attrs.error) {
          if (attrs.error_condition === "forbidden") {
            new_attrs.error = __("You're not allowed to retract your message.");
          } else {
            new_attrs.error = __("Sorry, an error occurred while trying to retract your message.");
          }
        }
      } else if (!attrs.error) {
        if (attrs.error_condition === "forbidden") {
          new_attrs.error = __("You're not allowed to send a message.");
        } else {
          new_attrs.error = __("Sorry, an error occurred while trying to send your message.");
        }
      }
      return await api_default4.hook("getErrorAttributesForMessage", attrs, new_attrs);
    }
    /**
     * @param {Element} stanza
     */
    async handleErrorMessageStanza(stanza) {
      const attrs_or_error = await parseMessage(stanza);
      if (u5.isErrorObject(attrs_or_error)) {
        const { stanza: stanza2, message: message2 } = (
          /** @type {errors.StanzaParseError} */
          attrs_or_error
        );
        if (stanza2) import_log20.default.error(stanza2);
        return import_log20.default.error(message2);
      }
      const attrs = (
        /** @type {MessageAttributes} */
        attrs_or_error
      );
      if (!await this.shouldShowErrorMessage(attrs)) {
        return;
      }
      const message = this.getMessageReferencedByError(attrs);
      if (message) {
        const new_attrs = await this.getErrorAttributesForMessage(message, attrs);
        message.save(new_attrs);
      } else {
        this.createMessage(attrs);
      }
    }
    /**
     * @param {BaseMessage} message
     */
    incrementUnreadMsgsCounter(message) {
      const settings4 = {
        "num_unread": this.get("num_unread") + 1
      };
      if (this.get("num_unread") === 0) {
        settings4["first_unread_id"] = message.get("id");
      }
      this.save(settings4);
    }
    clearUnreadMsgCounter() {
      if (this.get("num_unread") > 0) {
        this.sendMarkerForMessage(this.messages.last());
      }
      u5.safeSave(this, { num_unread: 0 });
    }
    /**
     * Handles message retraction based on the passed in attributes.
     * @param {MessageAttributes} attrs - Attributes representing a received
     *  message, as returned by {@link parseMessage}
     * @returns {Promise<Boolean>} Returns `true` or `false` depending on
     *  whether a message was retracted or not.
     */
    async handleRetraction(attrs) {
      const RETRACTION_ATTRIBUTES = ["retracted", "retracted_id", "editable"];
      if (attrs.retracted) {
        if (attrs.is_tombstone) return false;
        for (const m of this.messages.models) {
          if (m.get("from") !== attrs.from) continue;
          if (m.get("origin_id") === attrs.retracted_id || m.get("msgid") === attrs.retracted_id) {
            m.save((0, import_pick2.default)(attrs, RETRACTION_ATTRIBUTES));
            return true;
          }
        }
        attrs["dangling_retraction"] = true;
        await this.createMessage(attrs);
        return true;
      } else {
        const message = this.findDanglingRetraction(attrs);
        if (message) {
          const retraction_attrs = (0, import_pick2.default)(message.attributes, RETRACTION_ATTRIBUTES);
          const new_attrs = Object.assign({ dangling_retraction: false }, attrs, retraction_attrs);
          delete new_attrs["id"];
          message.save(new_attrs);
          return true;
        }
      }
      return false;
    }
    /**
     * @param {MessageAttributes} attrs
     */
    handleReceipt(attrs) {
      if (attrs.sender === "them") {
        if (attrs.is_valid_receipt_request) {
          sendReceiptStanza(attrs.from, attrs.msgid);
        } else if (attrs.receipt_id) {
          const message = this.messages.findWhere({ "msgid": attrs.receipt_id });
          if (message && !message.get("received")) {
            message.save({ "received": (/* @__PURE__ */ new Date()).toISOString() });
          }
          return true;
        }
      }
      return false;
    }
    /**
     * Given a {@link BaseMessage} return the XML stanza that represents it.
     * @method ChatBox#createMessageStanza
     * @param {BaseMessage} message - The message object
     */
    async createMessageStanza(message) {
      const {
        body,
        edited,
        is_encrypted,
        is_spoiler,
        msgid,
        oob_url,
        origin_id,
        references,
        spoiler_hint,
        type
      } = message.attributes;
      const stanza = stx4`
                <message xmlns="jabber:client"
                        from="${message.get("type") === "groupchat" ? api_default4.connection.get().jid : message.get("from")}"
                        to="${message.get("to") || this.get("jid")}"
                        type="${this.get("message_type")}"
                        id="${edited && u5.getUniqueId() || msgid}">
                    ${body ? stx4`<body>${body}</body>` : ""}
                    <active xmlns="${Strophe22.NS.CHATSTATES}"/>
                    ${type === "chat" ? stx4`<request xmlns="${Strophe22.NS.RECEIPTS}"></request>` : ""}
                    ${!is_encrypted && oob_url ? stx4`<x xmlns="${Strophe22.NS.OUTOFBAND}"><url>${oob_url}</url></x>` : ""}
                    ${!is_encrypted && is_spoiler ? stx4`<spoiler xmlns="${Strophe22.NS.SPOILER}">${spoiler_hint ?? ""}</spoiler>` : ""}
                    ${!is_encrypted ? references?.map(
        (ref) => stx4`<reference xmlns="${Strophe22.NS.REFERENCE}"
                                                begin="${ref.begin}"
                                                end="${ref.end}"
                                                type="${ref.type}"
                                                uri="${ref.uri}"></reference>`
      ) : ""}
                    ${edited ? stx4`<replace xmlns="${Strophe22.NS.MESSAGE_CORRECT}" id="${msgid}"></replace>` : ""}
                    ${origin_id ? stx4`<origin-id xmlns="${Strophe22.NS.SID}" id="${origin_id}"></origin-id>` : ""}
                </message>`;
      const data = await api_default4.hook("createMessageStanza", this, { message, stanza });
      return data.stanza;
    }
    /**
     * Prunes the message history to ensure it does not exceed the maximum
     * number of messages specified in the settings.
     */
    pruneHistory() {
      const max_history = api_default4.settings.get("prune_messages_above");
      if (max_history && typeof max_history === "number") {
        if (this.messages.length > max_history) {
          const non_empty_messages = this.messages.filter((m) => !u5.isEmptyMessage(m));
          if (non_empty_messages.length > max_history) {
            while (non_empty_messages.length > max_history) {
              non_empty_messages.shift().destroy();
            }
            this.trigger("historyPruned");
          }
        }
      }
    }
    debouncedPruneHistory = (0, import_debounce3.default)(() => this.pruneHistory(), 500, { maxWait: 2e3 });
    isScrolledUp() {
      return this.ui.get("scrolled");
    }
    /**
     * Indicates whether the chat is hidden and therefore
     * whether a newly received message will be visible to the user or not.
     * @returns {boolean}
     */
    isHidden() {
      return this.get("hidden") || this.isScrolledUp() || document.hidden;
    }
  };
}
__name(ModelWithMessages, "ModelWithMessages");

// plugins/emoji/picker.js
var import_skeletor11 = require("@converse/skeletor");
var EmojiPicker = class extends import_skeletor11.Model {
  static {
    __name(this, "EmojiPicker");
  }
  defaults() {
    return {
      "current_category": "smileys",
      "current_skintone": "",
      "scroll_position": 0
    };
  }
};
var picker_default = EmojiPicker;

// plugins/emoji/plugin.js
var import_openpromise9 = require("@converse/openpromise");

// plugins/emoji/api.js
var emojis = {
  /**
   * Initializes Emoji support by downloading the emojis JSON (and any applicable images).
   * @method api.emojis.initialize
   * @returns {Promise}
   */
  async initialize() {
    if (!public_default.emojis.initialized) {
      public_default.emojis.initialized = true;
      let json;
      try {
        const path = api_default4.settings.get("assets_path");
        const response = await fetch(`${path}/emoji.json`);
        if (!response.ok) throw new Error("Failed to fetch emoji.json");
        json = await response.json();
      } catch (e) {
        console.error("Failed to load emoji.json:", e);
        json = {};
      }
      json = await api_default4.hook("loadEmojis", {}, json);
      public_default.emojis.json = json;
      public_default.emojis.by_sn = Object.keys(json).reduce((result, cat) => Object.assign(result, json[cat]), {});
      public_default.emojis.list = Object.values(public_default.emojis.by_sn);
      public_default.emojis.list.sort((a, b) => a.sn < b.sn ? -1 : a.sn > b.sn ? 1 : 0);
      public_default.emojis.shortnames = public_default.emojis.list.map((m) => m.sn);
      const getShortNames = /* @__PURE__ */ __name(() => public_default.emojis.shortnames.map((s) => s.replace(/[+]/g, "\\$&")).join("|"), "getShortNames");
      public_default.emojis.shortnames_regex = new RegExp(getShortNames(), "gi");
      public_default.emojis.initialized_promise.resolve();
    }
    return public_default.emojis.initialized_promise;
  }
};
var emojis_api = { emojis };
var api_default5 = emojis_api;

// plugins/emoji/regexes.js
var ASCII_REGEX = "(\\*\\\\0\\/\\*|\\*\\\\O\\/\\*|\\-___\\-|\\:'\\-\\)|'\\:\\-\\)|'\\:\\-D|\\>\\:\\-\\)|>\\:\\-\\)|'\\:\\-\\(|\\>\\:\\-\\(|>\\:\\-\\(|\\:'\\-\\(|O\\:\\-\\)|0\\:\\-3|0\\:\\-\\)|0;\\^\\)|O;\\-\\)|0;\\-\\)|O\\:\\-3|\\-__\\-|\\:\\-\xDE|\\:\\-\xDE|\\<\\/3|<\\/3|\\:'\\)|\\:\\-D|'\\:\\)|'\\=\\)|'\\:D|'\\=D|\\>\\:\\)|>\\:\\)|\\>;\\)|>;\\)|\\>\\=\\)|>\\=\\)|;\\-\\)|\\*\\-\\)|;\\-\\]|;\\^\\)|'\\:\\(|'\\=\\(|\\:\\-\\*|\\:\\^\\*|\\>\\:P|>\\:P|X\\-P|\\>\\:\\[|>\\:\\[|\\:\\-\\(|\\:\\-\\[|\\>\\:\\(|>\\:\\(|\\:'\\(|;\\-\\(|\\>\\.\\<|>\\.<|#\\-\\)|%\\-\\)|X\\-\\)|\\\\0\\/|\\\\O\\/|0\\:3|0\\:\\)|O\\:\\)|O\\=\\)|O\\:3|B\\-\\)|8\\-\\)|B\\-D|8\\-D|\\-_\\-|\\>\\:\\\\|>\\:\\\\|\\>\\:\\/|>\\:\\/|\\:\\-\\/|\\:\\-\\.|\\:\\-P|\\:\xDE|\\:\xDE|\\:\\-b|\\:\\-O|O_O|\\>\\:O|>\\:O|\\:\\-X|\\:\\-#|\\:\\-\\)|\\(y\\)|\\<3|<3|\\:D|\\=D|;\\)|\\*\\)|;\\]|;D|\\:\\*|\\=\\*|\\:\\(|\\:\\[|\\=\\(|\\:@|;\\(|D\\:|\\:\\$|\\=\\$|#\\)|%\\)|X\\)|B\\)|8\\)|\\:\\/|\\:\\\\|\\=\\/|\\=\\\\|\\:L|\\=L|\\:P|\\=P|\\:b|\\:O|\\:X|\\:#|\\=X|\\=#|\\:\\)|\\=\\]|\\=\\)|\\:\\])";
var ASCII_REPLACE_REGEX = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|((\\s|^)" + ASCII_REGEX + "(?=\\s|$|[!,.?]))", "gi");
var CODEPOINTS_REGEX = /(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;

// plugins/emoji/utils.js
var { u: u6 } = public_default.env;
var emojis_by_attribute = {};
var ASCII_LIST = {
  "*\\0/*": "1f646",
  "*\\O/*": "1f646",
  "-___-": "1f611",
  ":'-)": "1f602",
  "':-)": "1f605",
  "':-D": "1f605",
  ">:-)": "1f606",
  "':-(": "1f613",
  ">:-(": "1f620",
  ":'-(": "1f622",
  "O:-)": "1f607",
  "0:-3": "1f607",
  "0:-)": "1f607",
  "0;^)": "1f607",
  "O;-)": "1f607",
  "0;-)": "1f607",
  "O:-3": "1f607",
  "-__-": "1f611",
  ":-\xDE": "1f61b",
  "</3": "1f494",
  ":')": "1f602",
  ":-D": "1f603",
  "':)": "1f605",
  "'=)": "1f605",
  "':D": "1f605",
  "'=D": "1f605",
  ">:)": "1f606",
  ">;)": "1f606",
  ">=)": "1f606",
  ";-)": "1f609",
  "*-)": "1f609",
  ";-]": "1f609",
  ";^)": "1f609",
  "':(": "1f613",
  "'=(": "1f613",
  ":-*": "1f618",
  ":^*": "1f618",
  ">:P": "1f61c",
  "X-P": "1f61c",
  ">:[": "1f61e",
  ":-(": "1f61e",
  ":-[": "1f61e",
  ">:(": "1f620",
  ":'(": "1f622",
  ";-(": "1f622",
  ">.<": "1f623",
  "#-)": "1f635",
  "%-)": "1f635",
  "X-)": "1f635",
  "\\0/": "1f646",
  "\\O/": "1f646",
  "0:3": "1f607",
  "0:)": "1f607",
  "O:)": "1f607",
  "O=)": "1f607",
  "O:3": "1f607",
  "B-)": "1f60e",
  "8-)": "1f60e",
  "B-D": "1f60e",
  "8-D": "1f60e",
  "-_-": "1f611",
  ">:\\": "1f615",
  ">:/": "1f615",
  ":-/": "1f615",
  ":-.": "1f615",
  ":-P": "1f61b",
  ":\xDE": "1f61b",
  ":-b": "1f61b",
  ":-O": "1f62e",
  "O_O": "1f62e",
  ">:O": "1f62e",
  ":-X": "1f636",
  ":-#": "1f636",
  ":-)": "1f642",
  "(y)": "1f44d",
  "<3": "2764",
  ":D": "1f603",
  "=D": "1f603",
  ";)": "1f609",
  "*)": "1f609",
  ";]": "1f609",
  ";D": "1f609",
  ":*": "1f618",
  "=*": "1f618",
  ":(": "1f61e",
  ":[": "1f61e",
  "=(": "1f61e",
  ":@": "1f620",
  ";(": "1f622",
  "D:": "1f628",
  ":$": "1f633",
  "=$": "1f633",
  "#)": "1f635",
  "%)": "1f635",
  "X)": "1f635",
  "B)": "1f60e",
  "8)": "1f60e",
  ":/": "1f615",
  ":\\": "1f615",
  "=/": "1f615",
  "=\\": "1f615",
  ":L": "1f615",
  "=L": "1f615",
  ":P": "1f61b",
  "=P": "1f61b",
  ":b": "1f61b",
  ":O": "1f62e",
  ":X": "1f636",
  ":#": "1f636",
  "=X": "1f636",
  "=#": "1f636",
  ":)": "1f642",
  "=]": "1f642",
  "=)": "1f642",
  ":]": "1f642"
};
function toCodePoint(unicode_surrogates) {
  const r = [];
  let p = 0;
  let i2 = 0;
  while (i2 < unicode_surrogates.length) {
    const c = unicode_surrogates.charCodeAt(i2++);
    if (p) {
      r.push((65536 + (p - 55296 << 10) + (c - 56320)).toString(16));
      p = 0;
    } else if (55296 <= c && c <= 56319) {
      p = c;
    } else {
      r.push(c.toString(16));
    }
  }
  return r.join("-");
}
__name(toCodePoint, "toCodePoint");
function fromCodePoint(codepoint) {
  let code = typeof codepoint === "string" ? parseInt(codepoint, 16) : codepoint;
  if (code < 65536) {
    return String.fromCharCode(code);
  }
  code -= 65536;
  return String.fromCharCode(
    55296 + (code >> 10),
    56320 + (code & 1023)
  );
}
__name(fromCodePoint, "fromCodePoint");
function convert(unicode) {
  if (unicode.indexOf("-") > -1) {
    const parts = [];
    const s = unicode.split("-");
    for (let i2 = 0; i2 < s.length; i2++) {
      const part = parseInt(s[i2], 16);
      if (part >= 65536 && part <= 1114111) {
        const hi = Math.floor((part - 65536) / 1024) + 55296;
        const lo = (part - 65536) % 1024 + 56320;
        parts.push(String.fromCharCode(hi) + String.fromCharCode(lo));
      } else {
        parts.push(String.fromCharCode(part));
      }
    }
    return parts.join("");
  }
  return fromCodePoint(unicode);
}
__name(convert, "convert");
function convertASCII2Emoji(str) {
  return str.replace(ASCII_REPLACE_REGEX, (entire, _, m2, m3) => {
    if (typeof m3 === "undefined" || m3 === "" || !(u6.unescapeHTML(m3) in ASCII_LIST)) {
      return entire;
    }
    m3 = u6.unescapeHTML(m3);
    const unicode = ASCII_LIST[m3].toUpperCase();
    return m2 + convert(unicode);
  });
}
__name(convertASCII2Emoji, "convertASCII2Emoji");
function getShortnameReferences(text) {
  /*! TOFIND */
  return [];
  if (!public_default.emojis.initialized) {
    throw new Error(
      "getShortnameReferences called before emojis are initialized. To avoid this problem, first await the converse.emojis.initialized_promise"
    );
  }
  const references = [...text.matchAll(public_default.emojis.shortnames_regex)].filter((ref) => ref[0].length > 0);
  return references.map((ref) => {
    const cp = public_default.emojis.by_sn[ref[0].toLowerCase()]?.cp;
    return {
      cp,
      "begin": ref.index,
      "end": ref.index + ref[0].length,
      "shortname": ref[0],
      "emoji": cp ? convert(cp) : null
    };
  });
}
__name(getShortnameReferences, "getShortnameReferences");
function parseStringForEmojis(str, callback) {
  const UFE0Fg = /\uFE0F/g;
  const U200D = String.fromCharCode(8205);
  return String(str).replace(CODEPOINTS_REGEX, (emoji, _, offset) => {
    const icon_id = toCodePoint(emoji.indexOf(U200D) < 0 ? emoji.replace(UFE0Fg, "") : emoji);
    if (icon_id) callback(icon_id, emoji, offset);
    return emoji;
  });
}
__name(parseStringForEmojis, "parseStringForEmojis");
function getCodePointReferences(text) {
  const references = [];
  parseStringForEmojis(text, (icon_id, emoji, offset) => {
    references.push({
      "begin": offset,
      "cp": icon_id,
      "emoji": emoji,
      "end": offset + emoji.length,
      "shortname": getEmojisByAttribute("cp")[icon_id]?.sn || ""
    });
  });
  return references;
}
__name(getCodePointReferences, "getCodePointReferences");
function addEmojisMarkup(text) {
  let list = [text];
  [...getShortnameReferences(text), ...getCodePointReferences(text)].sort((a, b) => b.begin - a.begin).forEach((ref) => {
    const text2 = list.shift();
    const emoji = ref.emoji || ref.shortname;
    list = [text2.slice(0, ref.begin) + emoji + text2.slice(ref.end), ...list];
  });
  return list;
}
__name(addEmojisMarkup, "addEmojisMarkup");
function shortnamesToUnicode(str) {
  return addEmojisMarkup(convertASCII2Emoji(str)).pop();
}
__name(shortnamesToUnicode, "shortnamesToUnicode");
function isOnlyEmojis(text) {
  const words = text.trim().split(/\s+/);
  if (words.length === 0 || words.length > 3) {
    return false;
  }
  const emojis2 = words.filter((text2) => {
    const refs = getCodePointReferences(u6.shortnamesToUnicode(text2));
    return refs.length === 1 && (text2.toLowerCase() === refs[0]["shortname"] || text2 === refs[0]["emoji"]);
  });
  return emojis2.length === words.length;
}
__name(isOnlyEmojis, "isOnlyEmojis");
function getEmojisByAttribute(attr) {
  if (emojis_by_attribute[attr]) {
    return emojis_by_attribute[attr];
  }
  if (attr === "category") {
    return public_default.emojis.json;
  }
  const all_variants = public_default.emojis.list.map((e) => e[attr]).filter((c, i2, arr) => arr.indexOf(c) == i2);
  emojis_by_attribute[attr] = {};
  all_variants.forEach((v) => emojis_by_attribute[attr][v] = public_default.emojis.list.find((i2) => i2[attr] === v));
  return emojis_by_attribute[attr];
}
__name(getEmojisByAttribute, "getEmojisByAttribute");
Object.assign(u6, {
  getCodePointReferences,
  getShortnameReferences,
  convertASCII2Emoji,
  getEmojisByAttribute,
  isOnlyEmojis,
  shortnamesToUnicode
});

// plugins/emoji/plugin.js
/**
 * @module converse-emoji
 * @copyright 2022, the Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 */
public_default.emojis = {
  initialized: false,
  initialized_promise: (0, import_openpromise9.getOpenPromise)()
};
public_default.plugins.add("converse-emoji", {
  initialize() {
    const { ___ } = converse_default;
    api_default4.settings.extend({
      "emoji_image_path": "https://twemoji.maxcdn.com/v/12.1.6/",
      "emoji_categories": {
        "smileys": ":grinning:",
        "people": ":thumbsup:",
        "activity": ":soccer:",
        "travel": ":motorcycle:",
        "objects": ":bomb:",
        "nature": ":rainbow:",
        "food": ":hotdog:",
        "symbols": ":musical_note:",
        "flags": ":flag_ac:",
        "custom": null
      },
      // We use the triple-underscore method which doesn't actually
      // translate but does signify to gettext that these strings should
      // go into the POT file. The translation then happens in the
      // template. We do this so that users can pass in their own
      // strings via converse.initialize, which is before __ is
      // available.
      "emoji_category_labels": {
        "smileys": ___("Smileys and emotions"),
        "people": ___("People"),
        "activity": ___("Activities"),
        "travel": ___("Travel"),
        "objects": ___("Objects"),
        "nature": ___("Animals and nature"),
        "food": ___("Food and drink"),
        "symbols": ___("Symbols"),
        "flags": ___("Flags"),
        "custom": ___("Stickers")
      }
    });
    const exports2 = { EmojiPicker: picker_default };
    Object.assign(converse_default, exports2);
    Object.assign(converse_default.exports, exports2);
    Object.assign(api_default4, api_default5);
    api_default4.listen.on("getOutgoingMessageAttributes", async (_chat, attrs) => {
      await api_default4.emojis.initialize();
      const { original_text: text } = attrs;
      return {
        ...attrs,
        is_only_emojis: text ? isOnlyEmojis(text) : false
      };
    });
    async function parseMessage2(_stanza, attrs) {
      await api_default4.emojis.initialize();
      return {
        ...attrs,
        is_only_emojis: attrs.body ? isOnlyEmojis(attrs.body) : false
      };
    }
    __name(parseMessage2, "parseMessage");
    api_default4.listen.on("parseMUCMessage", parseMessage2);
    api_default4.listen.on("parseMessage", parseMessage2);
  }
});

// plugins/bookmarks/model.js
var import_skeletor12 = require("@converse/skeletor");
var { Strophe: Strophe23 } = public_default.env;
var Bookmark = class extends import_skeletor12.Model {
  static {
    __name(this, "Bookmark");
  }
  get idAttribute() {
    return "jid";
  }
  getDisplayName() {
    return this.get("name") && Strophe23.xmlunescape(this.get("name")) || this.get("jid");
  }
};
var model_default = Bookmark;

// plugins/bookmarks/collection.js
var import_lit2 = require("lit");
var import_strophe24 = require("strophe.js");
var import_skeletor23 = require("@converse/skeletor");
var import_openpromise15 = require("@converse/openpromise");
var import_log31 = __toESM(require("@converse/log"));

// plugins/bookmarks/parsers.js
var { Strophe: Strophe24, sizzle: sizzle9 } = public_default.env;
async function parseStanzaForBookmarks(stanza) {
  let ns;
  let sel;
  const bare_jid = converse_default.session.get("bare_jid");
  if (await api_default4.disco.supports(`${Strophe24.NS.BOOKMARKS2}#compat`, bare_jid)) {
    ns = Strophe24.NS.BOOKMARKS2;
    sel = `items[node="${ns}"] item conference`;
  } else {
    ns = Strophe24.NS.BOOKMARKS;
    sel = `items[node="${ns}"] item storage[xmlns="${ns}"] conference`;
  }
  return sizzle9(sel, stanza).map(
    /** @param {Element} el */
    (el) => {
      const jid = ns === Strophe24.NS.BOOKMARKS2 ? el.parentElement.getAttribute("id") : el.getAttribute("jid");
      return {
        jid,
        name: el.getAttribute("name") || jid,
        autojoin: ["1", "true"].includes(el.getAttribute("autojoin")),
        nick: el.querySelector("nick")?.textContent ?? "",
        password: el.querySelector("password")?.textContent ?? "",
        extensions: Array.from(el.querySelector("extensions")?.children ?? []).map((c) => c.outerHTML)
      };
    }
  );
}
__name(parseStanzaForBookmarks, "parseStanzaForBookmarks");

// plugins/muc/message.js
var import_strophe20 = require("strophe.js");
var MUCMessage = class extends message_default {
  static {
    __name(this, "MUCMessage");
  }
  /**
   * @typedef {import('./occupant').default} MUCOccupant
   */
  initialize() {
    super.initialize();
    this.on("change:type", () => this.setOccupant());
    this.setOccupant();
    api_default4.trigger("chatRoomMessageInitialized", this);
  }
  get occupants() {
    return this.get("type") === "chat" ? this.chatbox.collection : this.chatbox.occupants;
  }
  getDisplayName() {
    return this.occupant?.getDisplayName() || this.get("nick");
  }
  /**
   * Determines whether this messsage may be moderated,
   * based on configuration settings and server support.
   * @method _converse.ChatRoomMessages#mayBeModerated
   * @returns {Promise<boolean>}
   */
  async mayBeModerated() {
    if (typeof this.get("from_muc") === "undefined") {
      return;
    }
    return ["all", "moderator"].includes(api_default4.settings.get("allow_message_retraction")) && this.get(`stanza_id ${this.get("from_muc")}`) && await this.chatbox.canModerateMessages();
  }
  checkValidity() {
    const result = super.checkValidity();
    !result && this.chatbox.debouncedRejoin();
    return result;
  }
  onOccupantRemoved() {
    this.stopListening(this.occupant);
    delete this.occupant;
    this.listenTo(this.occupants, "add", this.onOccupantAdded);
  }
  /**
   * @param {MUCOccupant} [occupant]
   */
  onOccupantAdded(occupant) {
    if (this.get("occupant_id")) {
      if (occupant.get("occupant_id") !== this.get("occupant_id")) {
        return;
      }
    } else if (occupant.get("nick") !== import_strophe20.Strophe.getResourceFromJid(this.get("from"))) {
      return;
    }
    this.setOccupant(occupant);
  }
  getOccupant() {
    return this.occupant || this.setOccupant();
  }
  /**
   * @param {MUCOccupant} [occupant]
   * @return {MUCOccupant}
   */
  setOccupant(occupant) {
    if (!["groupchat", "chat"].includes(this.get("type")) || this.isEphemeral()) {
      return;
    }
    if (occupant) {
      this.occupant = occupant;
    } else if (this.get("type") === "chat" && this.get("sender") === "them") {
      this.occupant = this.chatbox;
    } else {
      if (this.occupant) return;
      const nick = import_strophe20.Strophe.getResourceFromJid(this.get("from"));
      const occupant_id = this.get("occupant_id");
      this.occupant = nick || occupant_id ? this.occupants.findOccupant({ nick, occupant_id }) : null;
      if (!this.occupant) {
        const jid = this.get("from_real_jid");
        if (!nick && !occupant_id && !jid) {
          return;
        }
        this.occupant = this.occupants.create({ nick, occupant_id, jid });
        if (api_default4.settings.get("muc_send_probes")) {
          const jid2 = `${this.chatbox.get("jid")}/${nick}`;
          api_default4.user.presence.send({ to: jid2, type: "probe" });
        }
      }
    }
    if (this.get("from_real_jid") !== this.occupant.get("jid")) {
      this.save("from_real_jid", this.occupant.get("jid"));
    }
    this.trigger("occupant:add");
    this.listenTo(this.occupant, "change", (changed) => this.trigger("occupant:change", changed));
    this.listenTo(this.occupant, "vcard:add", (changed) => this.trigger("occupant:change", changed));
    this.listenTo(this.occupant, "vcard:change", (changed) => this.trigger("occupant:change", changed));
    this.listenTo(this.occupant, "destroy", this.onOccupantRemoved);
    this.stopListening(this.occupants, "add", this.onOccupantAdded);
    return this.occupant;
  }
};
var message_default2 = MUCMessage;

// plugins/muc/messages.js
var import_skeletor13 = require("@converse/skeletor");
var MUCMessages = class extends import_skeletor13.Collection {
  static {
    __name(this, "MUCMessages");
  }
  constructor(attrs, options = {}) {
    super(attrs, Object.assign({ comparator: "time" }, options));
    this.model = message_default2;
    this.fetched = null;
  }
};
var messages_default = MUCMessages;

// plugins/muc/muc.js
var import_debounce4 = __toESM(require("lodash-es/debounce"));
var import_pick3 = __toESM(require("lodash-es/pick"));
var import_sizzle7 = __toESM(require("sizzle"));
var import_openpromise10 = require("@converse/openpromise");
var import_skeletor16 = require("@converse/skeletor");
var import_log24 = __toESM(require("@converse/log"));

// utils/parse-helpers.js
/**
 * @copyright 2022, the Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 * @description Pure functions to help functionally parse messages.
 * @todo Other parsing helpers can be made more abstract and placed here.
 */
var helpers = {};
var escapeRegexChars = /* @__PURE__ */ __name((string, char) => string.replace(RegExp("\\" + char, "ig"), "\\" + char), "escapeRegexChars");
helpers.escapeCharacters = (characters) => (string) => characters.split("").reduce(escapeRegexChars, string);
helpers.escapeRegexString = helpers.escapeCharacters("[\\^$.?*+(){}|");
helpers.findFirstMatchInArray = (array) => (text) => {
  for (let i2 = 0; i2 < array.length; i2++) {
    if (text.localeCompare(array[i2], void 0, { sensitivity: "base" }) === 0) {
      return array[i2];
    }
  }
  return null;
};
var reduceReferences = /* @__PURE__ */ __name(([text, refs], ref, index) => {
  let updated_text = text;
  let { begin, end } = ref;
  const { value } = ref;
  begin = begin - index;
  end = end - index - 1;
  updated_text = `${updated_text.slice(0, begin)}${value}${updated_text.slice(end + 1)}`;
  return [updated_text, [...refs, { ...ref, begin, end }]];
}, "reduceReferences");
helpers.reduceTextFromReferences = (text, refs) => refs.reduce(reduceReferences, [text, []]);
var parse_helpers_default = helpers;

// plugins/muc/constants.js
var constants_exports2 = {};
__export(constants_exports2, {
  ACTION_INFO_CODES: () => ACTION_INFO_CODES,
  ADMIN_COMMANDS: () => ADMIN_COMMANDS,
  AFFILIATIONS: () => AFFILIATIONS,
  AFFILIATION_CHANGES: () => AFFILIATION_CHANGES,
  AFFILIATION_CHANGES_LIST: () => AFFILIATION_CHANGES_LIST,
  DISCONNECT_CODES: () => DISCONNECT_CODES,
  INFO_CODES: () => INFO_CODES,
  MODERATOR_COMMANDS: () => MODERATOR_COMMANDS,
  MUC_NICK_CHANGED_CODE: () => MUC_NICK_CHANGED_CODE,
  MUC_ROLE_CHANGES: () => MUC_ROLE_CHANGES,
  MUC_ROLE_CHANGES_LIST: () => MUC_ROLE_CHANGES_LIST,
  MUC_ROLE_WEIGHTS: () => MUC_ROLE_WEIGHTS,
  MUC_TRAFFIC_STATES: () => MUC_TRAFFIC_STATES,
  MUC_TRAFFIC_STATES_LIST: () => MUC_TRAFFIC_STATES_LIST,
  NEW_NICK_CODES: () => NEW_NICK_CODES,
  OWNER_COMMANDS: () => OWNER_COMMANDS,
  ROLES: () => ROLES,
  ROOMSTATUS: () => ROOMSTATUS,
  ROOM_FEATURES: () => ROOM_FEATURES,
  STATUS_CODE_STANZAS: () => STATUS_CODE_STANZAS,
  VISITOR_COMMANDS: () => VISITOR_COMMANDS
});
var ACTION_INFO_CODES = ["301", "333", "307", "321", "322"];
var NEW_NICK_CODES = ["210", "303"];
var ADMIN_COMMANDS = ["admin", "ban", "deop", "destroy", "member", "op", "revoke"];
var AFFILIATIONS = ["owner", "admin", "member", "outcast", "none"];
var DISCONNECT_CODES = ["301", "333", "307", "321", "322", "332"];
var MODERATOR_COMMANDS = ["kick", "mute", "voice", "modtools"];
var OWNER_COMMANDS = ["owner"];
var ROLES = ["moderator", "participant", "visitor"];
var VISITOR_COMMANDS = ["nick"];
var STATUS_CODE_STANZAS = {
  "100": ["message", "presence"],
  "101": ["message"],
  "102": ["message"],
  "103": ["message"],
  "104": ["message"],
  "110": ["presence"],
  "170": ["message", "presence"],
  "171": ["message"],
  "172": ["message"],
  "173": ["message"],
  "174": ["message"],
  "201": ["presence"],
  "210": ["presence"],
  "301": ["presence"],
  "303": ["presence"],
  "307": ["presence"],
  "321": ["presence"],
  "322": ["presence"],
  "332": ["presence"],
  "333": ["presence"]
};
var MUC_ROLE_WEIGHTS = {
  "moderator": 1,
  "participant": 2,
  "visitor": 3,
  "none": 2
};
var AFFILIATION_CHANGES = {
  OWNER: "owner",
  ADMIN: "admin",
  MEMBER: "member",
  EXADMIN: "exadmin",
  EXOWNER: "exowner",
  EXOUTCAST: "exoutcast",
  EXMEMBER: "exmember"
};
var AFFILIATION_CHANGES_LIST = Object.values(AFFILIATION_CHANGES);
var MUC_TRAFFIC_STATES = { ENTERED: "entered", EXITED: "exited" };
var MUC_TRAFFIC_STATES_LIST = Object.values(MUC_TRAFFIC_STATES);
var MUC_ROLE_CHANGES = { OP: "op", DEOP: "deop", VOICE: "voice", MUTE: "mute" };
var MUC_ROLE_CHANGES_LIST = Object.values(MUC_ROLE_CHANGES);
var INFO_CODES = {
  "visibility_changes": ["100", "102", "103", "172", "173", "174"],
  "self": ["110"],
  "non_privacy_changes": ["104", "201"],
  "muc_logging_changes": ["170", "171"],
  "nickname_changes": ["210", "303"],
  "disconnected": ["301", "307", "321", "322", "332", "333"],
  "affiliation_changes": [...AFFILIATION_CHANGES_LIST],
  "join_leave_events": [...MUC_TRAFFIC_STATES_LIST],
  "role_changes": [...MUC_ROLE_CHANGES_LIST]
};
var ROOMSTATUS = {
  CONNECTED: 0,
  CONNECTING: 1,
  NICKNAME_REQUIRED: 2,
  PASSWORD_REQUIRED: 3,
  DISCONNECTED: 4,
  ENTERED: 5,
  DESTROYED: 6,
  BANNED: 7,
  CLOSING: 8
};
var ROOM_FEATURES = [
  "passwordprotected",
  "unsecured",
  "hidden",
  "publicroom",
  "membersonly",
  "open",
  "persistent",
  "temporary",
  "nonanonymous",
  "semianonymous",
  "moderated",
  "unmoderated",
  "mam_enabled",
  "vcard-temp"
];
var MUC_NICK_CHANGED_CODE = "303";

// plugins/muc/muc.js
var import_strophe21 = require("strophe.js");

// plugins/muc/affiliations/utils.js
var import_log21 = __toESM(require("@converse/log"));

// plugins/muc/parsers.js
var import_dayjs5 = __toESM(require("dayjs"));
var { Strophe: Strophe26, sizzle: sizzle10, u: u7 } = public_default.env;
var { NS: NS2 } = Strophe26;
function getMEPActivities(stanza) {
  const items_el = sizzle10(`items[node="${Strophe26.NS.CONFINFO}"]`, stanza).pop();
  if (!items_el) {
    return null;
  }
  const from = stanza.getAttribute("from");
  const msgid = stanza.getAttribute("id");
  const selector = `item conference-info[xmlns="${Strophe26.NS.CONFINFO}"] activity[xmlns="${Strophe26.NS.ACTIVITY}"]`;
  return sizzle10(selector, items_el).map(
    /** @param {Element} el */
    (el) => {
      const message = el.querySelector("text")?.textContent;
      if (message) {
        const references = getReferences(stanza);
        const reason = el.querySelector("reason")?.textContent;
        return { from, msgid, message, reason, references, "type": "mep" };
      }
      return {};
    }
  );
}
__name(getMEPActivities, "getMEPActivities");
function getJIDFromMUCUserData(stanza) {
  const item = sizzle10(`message > x[xmlns="${Strophe26.NS.MUC_USER}"] item`, stanza).pop();
  return item?.getAttribute("jid");
}
__name(getJIDFromMUCUserData, "getJIDFromMUCUserData");
function getDeprecatedModerationAttributes(stanza) {
  const fastening = sizzle10(`apply-to[xmlns="${Strophe26.NS.FASTEN}"]`, stanza).pop();
  if (fastening) {
    const applies_to_id = fastening.getAttribute("id");
    const moderated = sizzle10(`moderated[xmlns="${Strophe26.NS.MODERATE0}"]`, fastening).pop();
    if (moderated) {
      const retracted = sizzle10(`retract[xmlns="${Strophe26.NS.RETRACT0}"]`, moderated).pop();
      if (retracted) {
        return {
          editable: false,
          moderated: "retracted",
          moderated_by: moderated.getAttribute("by"),
          moderated_id: applies_to_id,
          moderation_reason: moderated.querySelector("reason")?.textContent
        };
      }
    }
  } else {
    const tombstone = sizzle10(`> moderated[xmlns="${Strophe26.NS.MODERATE0}"]`, stanza).pop();
    if (tombstone) {
      const retracted = sizzle10(`retracted[xmlns="${Strophe26.NS.RETRACT0}"]`, tombstone).pop();
      if (retracted) {
        return {
          editable: false,
          is_tombstone: true,
          moderated_by: tombstone.getAttribute("by"),
          retracted: tombstone.getAttribute("stamp"),
          moderation_reason: tombstone.querySelector("reason")?.textContent
        };
      }
    }
  }
  return {};
}
__name(getDeprecatedModerationAttributes, "getDeprecatedModerationAttributes");
function getModerationAttributes(stanza) {
  const retract = sizzle10(`> retract[xmlns="${Strophe26.NS.RETRACT}"]`, stanza).pop();
  if (retract) {
    const moderated = sizzle10(`moderated[xmlns="${Strophe26.NS.MODERATE}"]`, retract).pop();
    if (moderated) {
      return {
        editable: false,
        moderated: "retracted",
        moderated_by: moderated.getAttribute("by"),
        moderated_by_id: moderated.querySelector("occupant-id")?.getAttribute("id"),
        moderated_id: retract.getAttribute("id"),
        moderation_reason: retract.querySelector("reason")?.textContent
      };
    }
  } else {
    const tombstone = sizzle10(`retracted[xmlns="${Strophe26.NS.RETRACT}"]`, stanza).pop();
    if (tombstone) {
      return {
        editable: false,
        is_tombstone: true,
        moderated_by: tombstone.getAttribute("by"),
        moderated_by_id: tombstone.querySelector("occupant-id")?.getAttribute("id"),
        retracted: tombstone.getAttribute("stamp"),
        moderation_reason: tombstone.querySelector("reason")?.textContent
      };
    }
  }
  return getDeprecatedModerationAttributes(stanza);
}
__name(getModerationAttributes, "getModerationAttributes");
function getStatusCodes(stanza, type) {
  const codes = sizzle10(`${type} > x[xmlns="${Strophe26.NS.MUC_USER}"] status`, stanza).map(
    /** @param {Element} s */
    (s) => s.getAttribute("code")
  ).filter(
    /** @param {MUCStatusCode} c */
    (c) => STATUS_CODE_STANZAS[c]?.includes(type)
  );
  if (type === "presence" && codes.includes("333") && codes.includes("307")) {
    codes.splice(codes.indexOf("307"), 1);
  }
  return {
    codes,
    is_self: codes.includes("110")
  };
}
__name(getStatusCodes, "getStatusCodes");
function getOccupantID(stanza, chatbox) {
  if (chatbox.features.get(Strophe26.NS.OCCUPANTID)) {
    return sizzle10(`occupant-id[xmlns="${Strophe26.NS.OCCUPANTID}"]`, stanza).pop()?.getAttribute("id");
  }
}
__name(getOccupantID, "getOccupantID");
function getSender(attrs, chatbox) {
  let is_me;
  const own_occupant_id = chatbox.get("occupant_id");
  if (own_occupant_id) {
    is_me = attrs.occupant_id === own_occupant_id;
  } else if (attrs.from_real_jid) {
    const bare_jid = converse_default.session.get("bare_jid");
    is_me = Strophe26.getBareJidFromJid(attrs.from_real_jid) === bare_jid;
  } else {
    is_me = attrs.nick === chatbox.get("nick");
  }
  return is_me ? "me" : "them";
}
__name(getSender, "getSender");
async function parseMUCMessage(original_stanza, chatbox) {
  throwErrorIfInvalidForward(original_stanza);
  const forwarded_stanza = sizzle10(
    `result[xmlns="${NS2.MAM}"] > forwarded[xmlns="${NS2.FORWARD}"] > message`,
    original_stanza
  ).pop();
  const stanza = forwarded_stanza || original_stanza;
  if (sizzle10(`message > forwarded[xmlns="${Strophe26.NS.FORWARD}"]`, stanza).length) {
    return new StanzaParseError(
      stanza,
      `Invalid Stanza: Forged MAM groupchat message from ${stanza.getAttribute("from")}`
    );
  }
  let delay;
  let body;
  if (forwarded_stanza) {
    if (sizzle10(`message > forwarded[xmlns="${Strophe26.NS.FORWARD}"]`, forwarded_stanza).length) {
      return new StanzaParseError(
        original_stanza,
        `Invalid Stanza: Forged MAM groupchat message from ${original_stanza.getAttribute("from")}`
      );
    }
    delay = sizzle10(`delay[xmlns="${Strophe26.NS.DELAY}"]`, forwarded_stanza.parentElement).pop();
    body = forwarded_stanza.querySelector(":scope > body")?.textContent?.trim();
  } else {
    delay = sizzle10(`message > delay[xmlns="${Strophe26.NS.DELAY}"]`, original_stanza).pop();
    body = original_stanza.querySelector(":scope > body")?.textContent?.trim();
  }
  const from = stanza.getAttribute("from");
  const marker = getChatMarker(stanza);
  let attrs = (
    /** @type {MUCMessageAttributes} */
    Object.assign(
      {
        from,
        body,
        "activities": getMEPActivities(stanza),
        "chat_state": getChatState(stanza),
        "from_muc": Strophe26.getBareJidFromJid(from),
        "is_archived": isArchived(original_stanza),
        "is_carbon": isCarbon(original_stanza),
        "is_delayed": !!delay,
        "is_forwarded": !!sizzle10(`message > forwarded[xmlns="${Strophe26.NS.FORWARD}"]`, stanza).length,
        "is_headline": isHeadline(stanza),
        "is_markable": !!sizzle10(`message > markable[xmlns="${Strophe26.NS.MARKERS}"]`, stanza).length,
        "is_marker": !!marker,
        "is_unstyled": !!sizzle10(`message > unstyled[xmlns="${Strophe26.NS.STYLING}"]`, stanza).length,
        "marker_id": marker && marker.getAttribute("id"),
        "nick": Strophe26.unescapeNode(Strophe26.getResourceFromJid(from)),
        "occupant_id": getOccupantID(stanza, chatbox),
        "receipt_id": getReceiptId(stanza),
        "received": (/* @__PURE__ */ new Date()).toISOString(),
        "references": getReferences(stanza),
        "subject": stanza.querySelector(":scope > subject")?.textContent,
        "thread": stanza.querySelector(":scope > thread")?.textContent,
        "time": delay ? (0, import_dayjs5.default)(delay.getAttribute("stamp")).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
        "to": stanza.getAttribute("to"),
        "type": stanza.getAttribute("type")
      },
      getErrorAttributes(stanza),
      getOutOfBandAttributes(stanza),
      getSpoilerAttributes(stanza),
      getCorrectionAttributes(stanza, original_stanza),
      getStanzaIDs(stanza, original_stanza),
      getOpenGraphMetadata(stanza),
      getRetractionAttributes(stanza, original_stanza),
      getModerationAttributes(stanza),
      getEncryptionAttributes(stanza),
      getStatusCodes(stanza, "message")
    )
  );
  attrs.from_real_jid = attrs.is_archived && getJIDFromMUCUserData(stanza) || chatbox.occupants.findOccupant(attrs)?.get("jid");
  attrs = Object.assign(
    {
      "is_valid_receipt_request": isValidReceiptRequest(stanza, attrs),
      "message": attrs.body || attrs.error,
      // TODO: Should only be used for error and info messages
      "sender": getSender(attrs, chatbox)
    },
    attrs
  );
  if (attrs.is_archived && original_stanza.getAttribute("from") !== attrs.from_muc) {
    return new StanzaParseError(
      original_stanza,
      `Invalid Stanza: Forged MAM message from ${original_stanza.getAttribute("from")}`
    );
  } else if (attrs.is_archived && original_stanza.getAttribute("from") !== chatbox.get("jid")) {
    return new StanzaParseError(
      original_stanza,
      `Invalid Stanza: Forged MAM groupchat message from ${stanza.getAttribute("from")}`
    );
  } else if (attrs.is_carbon) {
    return new StanzaParseError(
      original_stanza,
      "Invalid Stanza: MUC messages SHOULD NOT be XEP-0280 carbon copied"
    );
  }
  attrs["id"] = attrs["origin_id"] || attrs[`stanza_id ${attrs.from_muc || attrs.from}`] || u7.getUniqueId();
  attrs = await api_default4.hook("parseMUCMessage", original_stanza, attrs);
  const metadata = await u7.getMediaURLsMetadata(attrs.is_encrypted ? attrs.plaintext : attrs.body);
  return Object.assign(attrs, metadata);
}
__name(parseMUCMessage, "parseMUCMessage");
function parseMemberListIQ(iq) {
  return sizzle10(`query[xmlns="${Strophe26.NS.MUC_ADMIN}"] item`, iq).map(
    /** @param {Element} item */
    (item) => {
      const data = {
        "affiliation": item.getAttribute("affiliation")
      };
      const jid = item.getAttribute("jid");
      if (u7.isValidJID(jid)) {
        data["jid"] = jid;
      } else {
        data["nick"] = jid;
      }
      const nick = item.getAttribute("nick");
      if (nick) {
        data["nick"] = nick;
      }
      const role = item.getAttribute("role");
      if (role) {
        data["role"] = nick;
      }
      return data;
    }
  );
}
__name(parseMemberListIQ, "parseMemberListIQ");
function parsePresenceUserItem(stanza, nick) {
  const item = sizzle10(`presence > x[xmlns="${Strophe26.NS.MUC_USER}"] item`, stanza).pop();
  if (item) {
    const actor = item.querySelector("actor");
    return {
      affiliation: (
        /** @type {MUCAffiliation} */
        item.getAttribute("affiliation")
      ),
      role: (
        /** @type {MUCRole} */
        item.getAttribute("role")
      ),
      jid: item.getAttribute("jid"),
      nick: item.getAttribute("nick") || nick,
      ...actor ? {
        actor: {
          nick: actor?.getAttribute("nick") ?? null,
          jid: actor?.getAttribute("jid") ?? null
        }
      } : {},
      reason: item.querySelector("reason")?.textContent ?? null
    };
  }
}
__name(parsePresenceUserItem, "parsePresenceUserItem");
async function parseMUCPresence(stanza, chatbox) {
  await chatbox.initialized;
  const from = stanza.getAttribute("from");
  const type = stanza.getAttribute("type");
  const nick = Strophe26.getResourceFromJid(from);
  const attrs = (
    /** @type {MUCPresenceAttributes} */
    {
      from,
      nick,
      type,
      muc_jid: Strophe26.getBareJidFromJid(from),
      occupant_id: getOccupantID(stanza, chatbox),
      status: stanza.querySelector(":scope > status")?.textContent ?? void 0,
      show: stanza.querySelector(":scope > show")?.textContent ?? void 0,
      image_hash: sizzle10(`presence > x[xmlns="${Strophe26.NS.VCARDUPDATE}"] photo`, stanza).pop()?.textContent,
      hats: sizzle10(`presence > hats[xmlns="${Strophe26.NS.MUC_HATS}"] hat`, stanza).map(
        /** @param {Element} h */
        (h) => ({
          title: h.getAttribute("title"),
          uri: h.getAttribute("uri")
        })
      ),
      ...getStatusCodes(stanza, "presence"),
      ...parsePresenceUserItem(stanza, nick)
    }
  );
  return (
    /** @type {import('./types').MUCPresenceAttributes}*/
    await api_default4.hook("parseMUCPresence", stanza, attrs)
  );
}
__name(parseMUCPresence, "parseMUCPresence");

// plugins/muc/affiliations/utils.js
/**
 * @copyright The Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 * @module:muc-affiliations-utils
 * @typedef {module:plugin-muc-parsers.MemberListItem} MemberListItem
 * @typedef {module:plugin-muc-affiliations-api.User} User
 * @typedef {import('@converse/skeletor').Model} Model
 * @typedef {import('../constants').AFFILIATIONS} AFFILIATIONS
 */
var { Strophe: Strophe27, $iq: $iq4, u: u8, stx: stx5 } = public_default.env;
async function getAffiliationList(affiliation, muc_jid) {
  const iq = stx5`
        <iq xmlns="jabber:client" to="${muc_jid}" type="get">
            <query xmlns="${Strophe27.NS.MUC_ADMIN}">
                <item affiliation="${affiliation}"/>
            </query>
        </iq>`;
  const result = await api_default4.sendIQ(iq, null, false);
  if (result === null) {
    const err_msg = `Error: timeout while fetching ${affiliation} list for MUC ${muc_jid}`;
    const err = new Error(err_msg);
    import_log21.default.warn(err_msg);
    return err;
  }
  if (u8.isErrorStanza(result)) {
    const err_msg = `Error: not allowed to fetch ${affiliation} list for MUC ${muc_jid}`;
    const err = new Error(err_msg);
    import_log21.default.warn(err_msg);
    import_log21.default.warn(result);
    return err;
  }
  return parseMemberListIQ(result).filter((p) => p).sort((a, b) => a.nick < b.nick ? -1 : a.nick > b.nick ? 1 : 0);
}
__name(getAffiliationList, "getAffiliationList");
function setAffiliations(muc_jid, users) {
  const affiliations = [...new Set(users.map((u30) => u30.affiliation))];
  return Promise.all(affiliations.map((a) => setAffiliation(a, muc_jid, users)));
}
__name(setAffiliations, "setAffiliations");
function setAffiliation(affiliation, muc_jids, members) {
  if (!Array.isArray(muc_jids)) {
    muc_jids = [muc_jids];
  }
  members = members.filter((m) => [void 0, affiliation].includes(m.affiliation));
  return Promise.all(
    muc_jids.reduce((acc, jid) => [...acc, ...members.map((m) => sendAffiliationIQ(affiliation, jid, m))], [])
  );
}
__name(setAffiliation, "setAffiliation");
function sendAffiliationIQ(affiliation, muc_jid, member) {
  affiliation = member.affiliation || affiliation;
  const iq = $iq4({ to: muc_jid, type: "set" }).c("query", { xmlns: Strophe27.NS.MUC_ADMIN }).c("item", {
    affiliation,
    ...affiliation === "outcast" ? {} : { nick: member.nick },
    jid: member.jid
  });
  if (member.reason !== void 0) {
    iq.c("reason", member.reason);
  }
  return api_default4.sendIQ(iq);
}
__name(sendAffiliationIQ, "sendAffiliationIQ");
function computeAffiliationsDelta(exclude_existing, remove_absentees, new_list, old_list) {
  const new_jids = new_list.map((o) => o.jid);
  const old_jids = old_list.map((o) => o.jid);
  let delta = new_jids.filter((jid) => !old_jids.includes(jid)).map((jid) => new_list[new_jids.indexOf(jid)]);
  if (!exclude_existing) {
    delta = delta.concat(
      new_list.filter((item) => {
        const idx = old_jids.indexOf(item.jid);
        return idx >= 0 ? item.affiliation !== old_list[idx].affiliation : false;
      })
    );
  }
  if (remove_absentees) {
    delta = delta.concat(old_jids.filter((jid) => !new_jids.includes(jid)).map((jid) => ({ "jid": jid, "affiliation": "none" })));
  }
  return delta;
}
__name(computeAffiliationsDelta, "computeAffiliationsDelta");

// shared/chatbox.js
var import_skeletor14 = require("@converse/skeletor");
var import_log22 = __toESM(require("@converse/log"));
var { u: u9 } = public_default.env;
var ChatBoxBase = class extends ModelWithMessages(import_skeletor14.Model) {
  static {
    __name(this, "ChatBoxBase");
  }
  async initialize() {
    await super.initialize();
    const jid = this.get("jid");
    if (!jid) {
      return;
    }
    this.set({ "box_id": `box-${jid}` });
  }
  validate(attrs) {
    if (!attrs.jid) {
      return "Ignored ChatBox without JID";
    }
    const room_jids = api_default4.settings.get("auto_join_rooms").map((s) => s instanceof Object ? s.jid : s);
    const auto_join = api_default4.settings.get("auto_join_private_chats").concat(room_jids);
    if (api_default4.settings.get("singleton") && !auto_join.includes(attrs.jid) && !api_default4.settings.get("auto_join_on_invite")) {
      const msg = `${attrs.jid} is not allowed because singleton is true and it's not being auto_joined`;
      import_log22.default.warn(msg);
      return msg;
    }
  }
  /**
   * @param {boolean} force
   */
  maybeShow(force) {
    if (isUniView()) {
      const filter = /* @__PURE__ */ __name((c) => !c.get("hidden") && c.get("jid") !== this.get("jid") && c.get("id") !== "controlbox", "filter");
      const other_chats = converse_default.state.chatboxes.filter(filter);
      if (force || other_chats.length === 0) {
        other_chats.forEach((c) => u9.safeSave(c, { hidden: true }));
        u9.safeSave(this, { hidden: false, closed: false });
        this.trigger("show");
      }
      return this;
    }
    u9.safeSave(this, { hidden: false, closed: false });
    this.trigger("show");
    return this;
  }
  async shouldDestroyOnClose() {
    return await api_default4.hook("shouldDestroyOnClose", this, true);
  }
  /**
   * @param {Object} [_ev]
   */
  async close(_ev) {
    if (await this.shouldDestroyOnClose()) {
      try {
        await new Promise((success, reject) => {
          return this.destroy({
            success,
            error: /* @__PURE__ */ __name((_m, e) => reject(e), "error")
          });
        });
      } catch (e) {
        import_log22.default.debug(e);
      }
    } else {
      u9.safeSave(this, { closed: true });
    }
    if (api_default4.settings.get("clear_messages_on_reconnection")) {
      await this.clearMessages();
    }
    api_default4.trigger("chatBoxClosed", this);
  }
  announceReconnection() {
    api_default4.trigger("chatReconnected", this);
  }
  async onReconnection() {
    if (api_default4.settings.get("clear_messages_on_reconnection")) {
      await this.clearMessages();
    }
    this.announceReconnection();
  }
};

// plugins/muc/utils.js
var import_log23 = __toESM(require("@converse/log"));
var { Strophe: Strophe28, sizzle: sizzle11, u: u10 } = public_default.env;
async function getDefaultMUCService() {
  let muc_service = api_default4.settings.get("muc_domain") || converse_default.session.get("default_muc_service");
  if (!muc_service) {
    const domain = converse_default.session.get("domain");
    const items = await api_default4.disco.entities.items(domain);
    for (const item of items) {
      if (await api_default4.disco.features.has(Strophe28.NS.MUC, item.get("jid"))) {
        muc_service = item.get("jid");
        converse_default.session.save({ default_muc_service: muc_service });
        break;
      }
    }
  }
  return muc_service;
}
__name(getDefaultMUCService, "getDefaultMUCService");
function isChatRoom(model) {
  return model?.get("type") === "chatroom";
}
__name(isChatRoom, "isChatRoom");
function shouldCreateGroupchatMessage(attrs) {
  return attrs.nick && (u10.shouldCreateMessage(attrs) || attrs.is_tombstone);
}
__name(shouldCreateGroupchatMessage, "shouldCreateGroupchatMessage");
function occupantsComparator(occupant1, occupant2) {
  const role1 = occupant1.get("role") || "none";
  const role2 = occupant2.get("role") || "none";
  if (MUC_ROLE_WEIGHTS[role1] === MUC_ROLE_WEIGHTS[role2]) {
    const nick1 = occupant1.getDisplayName().toLowerCase();
    const nick2 = occupant2.getDisplayName().toLowerCase();
    return nick1 < nick2 ? -1 : nick1 > nick2 ? 1 : 0;
  } else {
    return MUC_ROLE_WEIGHTS[role1] < MUC_ROLE_WEIGHTS[role2] ? -1 : 1;
  }
}
__name(occupantsComparator, "occupantsComparator");
function registerDirectInvitationHandler() {
  /*! TOFIND */
  return;
  api_default4.connection.get().addHandler(
    /** @param {Element} message */
    (message) => {
      converse_default.exports.onDirectMUCInvitation(message);
      return true;
    },
    "jabber:x:conference",
    "message"
  );
}
__name(registerDirectInvitationHandler, "registerDirectInvitationHandler");
function disconnectChatRooms() {
  return converse_default.state.chatboxes.filter((m) => m.get("type") === CHATROOMS_TYPE).forEach((m) => m.session.save({ "connection_status": public_default.ROOMSTATUS.DISCONNECTED }));
}
__name(disconnectChatRooms, "disconnectChatRooms");
async function onWindowStateChanged() {
  if (!document.hidden && api_default4.connection.connected()) {
    const rooms3 = await api_default4.rooms.get();
    rooms3.forEach((room) => room.rejoinIfNecessary());
  }
}
__name(onWindowStateChanged, "onWindowStateChanged");
async function routeToRoom(event) {
  if (!location.hash.startsWith("#converse/room?jid=")) {
    return;
  }
  event?.preventDefault();
  const jid = location.hash.split("=").pop();
  if (!u10.isValidMUCJID(jid)) {
    return import_log23.default.warn(`invalid jid "${jid}" provided in url fragment`);
  }
  await api_default4.waitUntil("roomsAutoJoined");
  if (api_default4.settings.get("allow_bookmarks")) {
    await api_default4.waitUntil("bookmarksInitialized");
  }
  api_default4.rooms.open(jid, {}, true);
}
__name(routeToRoom, "routeToRoom");
async function openChatRoom(jid, settings4) {
  settings4.type = CHATROOMS_TYPE;
  settings4.id = jid;
  const chatbox = await api_default4.rooms.get(jid, settings4, true);
  chatbox.maybeShow(true);
  return chatbox;
}
__name(openChatRoom, "openChatRoom");
async function onDirectMUCInvitation(message) {
  const x_el = sizzle11('x[xmlns="jabber:x:conference"]', message).pop(), from = Strophe28.getBareJidFromJid(message.getAttribute("from")), room_jid = x_el.getAttribute("jid"), reason = x_el.getAttribute("reason");
  let result;
  if (api_default4.settings.get("auto_join_on_invite")) {
    result = true;
  } else {
    const contact = converse_default.state.roster.get(from)?.getDisplayName() ?? from;
    result = await api_default4.hook("confirmDirectMUCInvitation", { contact, reason, jid: room_jid }, false);
  }
  if (result) {
    const chatroom = await openChatRoom(room_jid, { password: x_el.getAttribute("password") });
    if (chatroom.session.get("connection_status") === public_default.ROOMSTATUS.DISCONNECTED) {
      converse_default.state.chatboxes.get(room_jid).rejoin();
    }
  }
}
__name(onDirectMUCInvitation, "onDirectMUCInvitation");
function getDefaultMUCNickname() {
  const { profile } = converse_default.state;
  if (!profile) {
    import_log23.default.error("Called getDefaultMUCNickname before statusInitialized has been fired.");
    return "";
  }
  const nick = profile.getNickname();
  if (nick) {
    return nick;
  } else if (api_default4.settings.get("muc_nickname_from_jid")) {
    const bare_jid = converse_default.session.get("bare_jid");
    return Strophe28.unescapeNode(Strophe28.getNodeFromJid(bare_jid));
  }
}
__name(getDefaultMUCNickname, "getDefaultMUCNickname");
function isInfoVisible(code) {
  const info_messages = api_default4.settings.get("muc_show_info_messages");
  if (info_messages.includes(code)) {
    return true;
  }
  return false;
}
__name(isInfoVisible, "isInfoVisible");
async function autoJoinRooms() {
  await Promise.all(
    api_default4.settings.get("auto_join_rooms").map((muc) => {
      if (typeof muc === "string") {
        if (converse_default.state.chatboxes.where({ "jid": muc }).length) {
          return Promise.resolve();
        }
        return api_default4.rooms.open(muc);
      } else if (muc instanceof Object) {
        return api_default4.rooms.open(muc.jid, { ...muc });
      } else {
        import_log23.default.error('Invalid muc criteria specified for "auto_join_rooms"');
        return Promise.resolve();
      }
    })
  );
  api_default4.trigger("roomsAutoJoined");
}
__name(autoJoinRooms, "autoJoinRooms");
function onAddClientFeatures() {
  api_default4.disco.own.features.add(Strophe28.NS.MUC);
  if (api_default4.settings.get("allow_muc_invitations")) {
    api_default4.disco.own.features.add("jabber:x:conference");
  }
}
__name(onAddClientFeatures, "onAddClientFeatures");
function onBeforeTearDown() {
  converse_default.state.chatboxes.where({ "type": CHATROOMS_TYPE }).forEach((muc) => safeSave(muc.session, { "connection_status": public_default.ROOMSTATUS.DISCONNECTED }));
}
__name(onBeforeTearDown, "onBeforeTearDown");
function onStatusInitialized() {
  window.addEventListener(getUnloadEvent(), () => {
    const using_websocket = api_default4.connection.isType("websocket");
    if (using_websocket && (!api_default4.settings.get("enable_smacks") || !converse_default.session.get("smacks_stream_id"))) {
      disconnectChatRooms();
    }
  });
}
__name(onStatusInitialized, "onStatusInitialized");
function onBeforeResourceBinding() {
  api_default4.connection.get().addHandler(
    /** @param {Element} stanza */
    (stanza) => {
      const muc_jid = Strophe28.getBareJidFromJid(stanza.getAttribute("from"));
      if (!converse_default.state.chatboxes.get(muc_jid)) {
        api_default4.waitUntil("chatBoxesFetched").then(async () => {
          const muc = converse_default.state.chatboxes.get(muc_jid);
          if (muc) {
            await muc.initialized;
            muc.message_handler.run(stanza);
          }
        });
      }
      return true;
    },
    null,
    "message",
    "groupchat"
  );
}
__name(onBeforeResourceBinding, "onBeforeResourceBinding");

// plugins/muc/session.js
var import_skeletor15 = require("@converse/skeletor");
var MUCSession = class extends import_skeletor15.Model {
  static {
    __name(this, "MUCSession");
  }
  defaults() {
    return {
      "connection_status": ROOMSTATUS.DISCONNECTED
    };
  }
};
var session_default = MUCSession;

// plugins/muc/muc.js
var { u: u11, stx: stx6 } = public_default.env;
var DISCO_INFO_TIMEOUT_ON_JOIN = 3e4;
var MUC = class extends ModelWithVCard(ModelWithMessages(ColorAwareModel(ChatBoxBase))) {
  static {
    __name(this, "MUC");
  }
  /**
   * @typedef {import('../../shared/message.js').default} BaseMessage
   * @typedef {import('./message.js').default} MUCMessage
   * @typedef {import('./occupant.js').default} MUCOccupant
   * @typedef {import('./types').NonOutcastAffiliation} NonOutcastAffiliation
   * @typedef {import('./types').MemberListItem} MemberListItem
   * @typedef {import('../../shared/types').MessageAttributes} MessageAttributes
   * @typedef {import('./types').MUCMessageAttributes} MUCMessageAttributes
   * @typedef {import('./types').MUCPresenceAttributes} MUCPresenceAttributes
   * @typedef {module:shared.converse.UserMessage} UserMessage
   * @typedef {import('strophe.js').Builder} Builder
   * @typedef {import('../../shared/errors').StanzaParseError} StanzaParseError
   */
  defaults() {
    return {
      bookmarked: false,
      chat_state: void 0,
      closed: false,
      has_activity: false,
      // XEP-437
      hidden: isUniView() && !api_default4.settings.get("singleton"),
      hidden_occupants: !!api_default4.settings.get("hide_muc_participants"),
      message_type: "groupchat",
      name: "",
      // For group chats, we distinguish between generally unread
      // messages and those ones that specifically mention the
      // user.
      //
      // To keep things simple, we reuse `num_unread` from
      // ChatBox to indicate unread messages which
      // mention the user and `num_unread_general` to indicate
      // generally unread messages (which *includes* mentions!).
      num_unread_general: 0,
      num_unread: 0,
      roomconfig: {},
      time_opened: this.get("time_opened") || (/* @__PURE__ */ new Date()).getTime(),
      time_sent: (/* @__PURE__ */ new Date(0)).toISOString(),
      type: CHATROOMS_TYPE
    };
  }
  async initialize() {
    super.initialize();
    this.on("change:closed", () => {
      if (!this.get("closed")) {
        this.initialize();
      }
    });
    if (this.get("closed")) return;
    this.initialized = (0, import_openpromise10.getOpenPromise)();
    this.debouncedRejoin = (0, import_debounce4.default)(this.rejoin, 250);
    this.initOccupants();
    this.initDiscoModels();
    this.registerHandlers();
    this.on("change:chat_state", this.sendChatState, this);
    this.on("change:hidden", this.onHiddenChange, this);
    this.on("destroy", this.removeHandlers, this);
    await this.restoreSession();
    this.session.on("change:connection_status", this.onConnectionStatusChanged, this);
    this.listenTo(this.occupants, "add", this.onOccupantAdded);
    this.listenTo(this.occupants, "remove", this.onOccupantRemoved);
    this.listenTo(this.occupants, "change:presence", this.onOccupantPresenceChanged);
    this.listenTo(this.occupants, "change:affiliation", this.createAffiliationChangeMessage);
    this.listenTo(this.occupants, "change:role", this.createRoleChangeMessage);
    const restored = await this.restoreFromCache();
    if (!restored) {
      await this.join();
    }
    await api_default4.trigger("chatRoomInitialized", this, { synchronous: true });
    this.initialized.resolve();
  }
  isEntered() {
    return this.session?.get("connection_status") === ROOMSTATUS.ENTERED;
  }
  /**
   * Checks whether this MUC qualifies for subscribing to XEP-0437 Room Activity Indicators (RAI)
   * @returns {Boolean}
   */
  isRAICandidate() {
    return this.get("hidden") && api_default4.settings.get("muc_subscribe_to_rai") && this.getOwnAffiliation() !== "none";
  }
  /**
   * Checks whether we're still joined and if so, restores the MUC state from cache.
   * @returns {Promise<boolean>} Returns `true` if we're still joined, otherwise returns `false`.
   */
  async restoreFromCache() {
    if (this.isEntered()) {
      await this.fetchOccupants().catch(
        /** @param {Error} e */
        (e) => import_log24.default.error(e)
      );
      if (this.isRAICandidate()) {
        this.session.save("connection_status", ROOMSTATUS.DISCONNECTED);
        this.enableRAI();
        return true;
      } else if (await this.isJoined()) {
        await new Promise((r) => this.config.fetch({ "success": r, "error": r }));
        await new Promise((r) => this.features.fetch({ "success": r, "error": r }));
        await this.fetchMessages().catch(
          /** @param {Error} e */
          (e) => import_log24.default.error(e)
        );
        return true;
      }
    }
    this.session.save("connection_status", ROOMSTATUS.DISCONNECTED);
    this.clearOccupantsCache();
    return false;
  }
  /**
   * Join the MUC
   * @param {String} [nick] - The user's nickname
   * @param {String} [password] - Optional password, if required by the groupchat.
   *  Will fall back to the `password` value stored in the room
   *  model (if available).
   *  @returns {Promise<void>}
   */
  async join(nick, password) {
    if (this.isEntered()) {
      return;
    }
    this.session.save("connection_status", ROOMSTATUS.CONNECTING);
    const result = await this.refreshDiscoInfo({ timeout: DISCO_INFO_TIMEOUT_ON_JOIN });
    const is_new = result instanceof ItemNotFoundError;
    nick = await this.getAndPersistNickname(nick);
    if (!nick) {
      safeSave(this.session, { "connection_status": ROOMSTATUS.NICKNAME_REQUIRED });
      if (!is_new && api_default4.settings.get("muc_show_logs_before_join")) {
        await this.fetchMessages();
      }
      return;
    }
    /*! TOFIND */
    return;
    api_default4.send(await this.constructJoinPresence(password, is_new));
    if (is_new) await this.refreshDiscoInfo();
  }
  /**
   * Clear stale cache and re-join a MUC we've been in before.
   */
  rejoin() {
    this.session.save("connection_status", ROOMSTATUS.DISCONNECTED);
    this.registerHandlers();
    this.clearOccupantsCache();
    return this.join();
  }
  /**
   * @param {string} password
   * @param {boolean} is_new
   */
  async constructJoinPresence(password, is_new) {
    const exclude_maxstanzas = is_new || this.features.get("mam_enabled");
    const maxstanzas = exclude_maxstanzas ? 0 : api_default4.settings.get("muc_history_max_stanzas");
    password = password || this.get("password");
    const { profile } = converse_default.state;
    const show = profile.get("show");
    const status_message = profile.get("status_message");
    const stanza = stx6`
            <presence xmlns="jabber:client"
                      id="${getUniqueId()}"
                      from="${api_default4.connection.get().jid}"
                      to="${this.getRoomJIDAndNick()}">
                <x xmlns="${import_strophe21.Strophe.NS.MUC}">
                    ${maxstanzas ? stx6`<history maxstanzas="${maxstanzas}"/>` : ""}
                    ${password ? stx6`<password>${password}</password>` : ""}
                </x>
                ${PRES_SHOW_VALUES.includes(show) ? stx6`<show>${show}</show>` : ""}
                ${status_message ? stx6`<status>${status_message}</status>` : ""}
            </presence>`;
    return await api_default4.hook("constructedMUCPresence", this, stanza);
  }
  clearOccupantsCache() {
    if (this.occupants.length) {
      this.occupants.filter((o) => !o.isMember()).forEach((o) => o.destroy());
    } else {
      this.occupants.clearStore();
    }
  }
  /**
   * Given the passed in MUC message, send a XEP-0333 chat marker.
   * @async
   * @param {BaseMessage} msg
   * @param {('received'|'displayed'|'acknowledged')} [type='displayed']
   * @param {boolean} [force=false] - Whether a marker should be sent for the
   *  message, even if it didn't include a `markable` element.
   */
  sendMarkerForMessage(msg, type = "displayed", force = false) {
    if (!msg || !api_default4.settings.get("send_chat_markers").includes(type) || msg?.get("type") !== "groupchat") {
      return;
    }
    if (msg?.get("is_markable") || force) {
      const key = `stanza_id ${this.get("jid")}`;
      const id = msg.get(key);
      if (!id) {
        import_log24.default.error(`Can't send marker for message without stanza ID: ${key}`);
        return Promise.resolve();
      }
      const from_jid = import_strophe21.Strophe.getBareJidFromJid(msg.get("from"));
      sendMarker(from_jid, id, type, msg.get("type"));
    }
    return Promise.resolve();
  }
  /**
   * Finds the last eligible message and then sends a XEP-0333 chat marker for it.
   * @param { ('received'|'displayed'|'acknowledged') } [type='displayed']
   * @param {Boolean} force - Whether a marker should be sent for the
   *  message, even if it didn't include a `markable` element.
   */
  sendMarkerForLastMessage(type = "displayed", force = false) {
    const msgs = Array.from(this.messages.models);
    msgs.reverse();
    const msg = msgs.find((m) => m.get("sender") === "them" && (force || m.get("is_markable")));
    msg && this.sendMarkerForMessage(msg, type, force);
  }
  /**
   * Ensures that the user is subscribed to XEP-0437 Room Activity Indicators
   * if `muc_subscribe_to_rai` is set to `true`.
   * Only affiliated users can subscribe to RAI, but this method doesn't
   * check whether the current user is affiliated because it's intended to be
   * called after the MUC has been left and we don't have that information anymore.
   */
  enableRAI() {
    if (api_default4.settings.get("muc_subscribe_to_rai")) {
      const muc_domain = import_strophe21.Strophe.getDomainFromJid(this.get("jid"));
      api_default4.user.presence.send({ to: muc_domain }, (0, import_strophe21.$build)("rai", { "xmlns": import_strophe21.Strophe.NS.RAI }));
    }
  }
  /**
   * Handler that gets called when the 'hidden' flag is toggled.
   */
  async onHiddenChange() {
    const roomstatus = ROOMSTATUS;
    const conn_status = this.session.get("connection_status");
    if (this.get("hidden")) {
      if (conn_status === roomstatus.ENTERED) {
        this.setChatState(INACTIVE);
        if (this.isRAICandidate()) {
          this.sendMarkerForLastMessage("received", true);
          await this.leave();
          this.enableRAI();
        }
      }
    } else {
      await this.initialized;
      if (conn_status === roomstatus.DISCONNECTED) this.rejoin();
      this.clearUnreadMsgCounter();
    }
  }
  /**
   * @param {MUCOccupant} occupant
   */
  onOccupantAdded(occupant) {
    if (isInfoVisible(public_default.MUC_TRAFFIC_STATES.ENTERED) && this.session.get("connection_status") === ROOMSTATUS.ENTERED && occupant.get("presence") === "online") {
      this.updateNotifications(occupant.get("nick"), public_default.MUC_TRAFFIC_STATES.ENTERED);
    }
  }
  /**
   * @param {MUCOccupant} occupant
   */
  onOccupantRemoved(occupant) {
    if (isInfoVisible(public_default.MUC_TRAFFIC_STATES.EXITED) && this.isEntered() && occupant.get("presence") === "online") {
      this.updateNotifications(occupant.get("nick"), public_default.MUC_TRAFFIC_STATES.EXITED);
    }
  }
  /**
   * @param {MUCOccupant} occupant
   */
  onOccupantPresenceChanged(occupant) {
    if (occupant.get("states").includes("303")) {
      return;
    }
    if (occupant.get("presence") === "offline" && isInfoVisible(public_default.MUC_TRAFFIC_STATES.EXITED)) {
      this.updateNotifications(occupant.get("nick"), public_default.MUC_TRAFFIC_STATES.EXITED);
    } else if (occupant.get("presence") === "online" && isInfoVisible(public_default.MUC_TRAFFIC_STATES.ENTERED)) {
      this.updateNotifications(occupant.get("nick"), public_default.MUC_TRAFFIC_STATES.ENTERED);
    }
  }
  async onRoomEntered() {
    await this.occupants.fetchMembers();
    if (api_default4.settings.get("clear_messages_on_reconnection")) {
      await this.clearMessages();
    } else {
      await this.fetchMessages();
    }
    api_default4.trigger("enteredNewRoom", this);
    if (api_default4.settings.get("auto_register_muc_nickname") && await api_default4.disco.supports(import_strophe21.Strophe.NS.MUC_REGISTER, this.get("jid"))) {
      this.registerNickname();
    }
  }
  async onConnectionStatusChanged() {
    if (this.isEntered()) {
      if (this.isRAICandidate()) {
        try {
          await this.leave();
        } catch (e) {
          import_log24.default.error(e);
        }
        this.enableRAI();
      } else {
        await this.onRoomEntered();
      }
    }
  }
  async onReconnection() {
    await this.rejoin();
    this.announceReconnection();
  }
  getMessagesCollection() {
    return new converse_default.exports.MUCMessages();
  }
  restoreSession() {
    const bare_jid = converse_default.session.get("bare_jid");
    const id = `muc.session-${bare_jid}-${this.get("jid")}`;
    this.session = new session_default({ id });
    initStorage(this.session, id, "session");
    return new Promise((r) => this.session.fetch({ "success": r, "error": r }));
  }
  initDiscoModels() {
    const bare_jid = converse_default.session.get("bare_jid");
    let id = `converse.muc-features-${bare_jid}-${this.get("jid")}`;
    this.features = new import_skeletor16.Model(
      Object.assign(
        { id },
        public_default.ROOM_FEATURES.reduce((acc, feature) => {
          acc[feature] = false;
          return acc;
        }, {})
      )
    );
    this.features.browserStorage = createStore(id, "session");
    this.features.listenTo(converse_default, "beforeLogout", () => this.features.browserStorage.flush());
    id = `converse.muc-config-${bare_jid}-${this.get("jid")}`;
    this.config = new import_skeletor16.Model({ id });
    this.config.browserStorage = createStore(id, "session");
    this.config.listenTo(converse_default, "beforeLogout", () => this.config.browserStorage.flush());
  }
  initOccupants() {
    this.occupants = new converse_default.exports.MUCOccupants();
    const bare_jid = converse_default.session.get("bare_jid");
    const id = `converse.occupants-${bare_jid}${this.get("jid")}`;
    this.occupants.browserStorage = createStore(id, "session");
    this.occupants.chatroom = this;
    this.occupants.listenTo(converse_default, "beforeLogout", () => this.occupants.browserStorage.flush());
  }
  fetchOccupants() {
    this.occupants.fetched = new Promise((resolve) => {
      this.occupants.fetch({
        "add": true,
        "silent": true,
        "success": resolve,
        "error": resolve
      });
    });
    return this.occupants.fetched;
  }
  /**
   * If a user's affiliation has been changed, a <presence> stanza is sent
   * out, but if the user is not in a room, a <message> stanza MAY be sent
   * out. This handler handles such message stanzas. See "Example 176" in
   * XEP-0045.
   * @param {Element} stanza
   * @returns {void}
   */
  handleAffiliationChangedMessage(stanza) {
    if (stanza.querySelector("body")) {
      return;
    }
    const item = (0, import_sizzle7.default)(`x[xmlns="${import_strophe21.Strophe.NS.MUC_USER}"] item`, stanza).pop();
    if (item) {
      const from = stanza.getAttribute("from");
      const jid = item.getAttribute("jid");
      const data = {
        from,
        states: [],
        jid: import_strophe21.Strophe.getBareJidFromJid(jid),
        resource: import_strophe21.Strophe.getResourceFromJid(jid)
      };
      const affiliation = item.getAttribute("affiliation");
      if (affiliation) {
        data.affiliation = affiliation;
      }
      const role = item.getAttribute("role");
      if (role) {
        data.role = role;
      }
      const occupant = this.occupants.findOccupant({ jid: data.jid });
      if (occupant) {
        occupant.save(data);
      } else {
        this.occupants.create(data);
      }
    }
  }
  /**
   * @param {Element} stanza
   */
  async handleErrorMessageStanza(stanza) {
    const { __ } = converse_default;
    const attrs_or_error = await parseMUCMessage(stanza, this);
    if (u11.isErrorObject(attrs_or_error)) {
      const { stanza: stanza2, message: message2 } = (
        /** @type {StanzaParseError} */
        attrs_or_error
      );
      if (stanza2) import_log24.default.error(stanza2);
      return import_log24.default.error(message2);
    }
    const attrs = (
      /** @type {MessageAttributes} */
      attrs_or_error
    );
    if (!await this.shouldShowErrorMessage(attrs)) {
      return;
    }
    const nick = import_strophe21.Strophe.getResourceFromJid(attrs.from);
    const occupant = nick ? this.getOccupant(nick) : null;
    const model = occupant ? occupant : this;
    const message = model.getMessageReferencedByError(attrs);
    if (message) {
      const new_attrs = {
        error: attrs.error,
        error_condition: attrs.error_condition,
        error_text: attrs.error_text,
        error_type: attrs.error_type,
        editable: false
      };
      if (attrs.msgid === message.get("retraction_id")) {
        new_attrs.retracted = void 0;
        new_attrs.retraction_id = void 0;
        new_attrs.retracted_id = void 0;
        if (!attrs.error) {
          if (attrs.error_condition === "forbidden") {
            new_attrs.error = __("You're not allowed to retract your message.");
          } else if (attrs.error_condition === "not-acceptable") {
            new_attrs.error = __(
              "Your retraction was not delivered because you're not present in the groupchat."
            );
          } else {
            new_attrs.error = __("Sorry, an error occurred while trying to retract your message.");
          }
        }
      } else if (!attrs.error) {
        if (attrs.error_condition === "forbidden") {
          new_attrs.error = __("Your message was not delivered because you weren't allowed to send it.");
        } else if (attrs.error_condition === "not-acceptable") {
          new_attrs.error = __("Your message was not delivered because you're not present in the groupchat.");
        } else {
          new_attrs.error = __("Sorry, an error occurred while trying to send your message.");
        }
      }
      message.save(new_attrs);
    } else {
      model.createMessage(attrs);
    }
  }
  /**
   * Handles incoming message stanzas from the service that hosts this MUC
   * @param {Element} stanza
   */
  handleMessageFromMUCHost(stanza) {
    if (this.isEntered()) {
      return;
    }
    const rai = (0, import_sizzle7.default)(`rai[xmlns="${import_strophe21.Strophe.NS.RAI}"]`, stanza).pop();
    const active_mucs = Array.from(rai?.querySelectorAll("activity") || []).map((m) => m.textContent);
    if (active_mucs.includes(this.get("jid"))) {
      this.save({
        "has_activity": true,
        "num_unread_general": 0
        // Either/or between activity and unreads
      });
    }
  }
  /**
   * Handles XEP-0452 MUC Mention Notification messages
   * @param {Element} stanza
   */
  handleForwardedMentions(stanza) {
    if (this.isEntered()) {
      return;
    }
    const msgs = (0, import_sizzle7.default)(
      `mentions[xmlns="${import_strophe21.Strophe.NS.MENTIONS}"] forwarded[xmlns="${import_strophe21.Strophe.NS.FORWARD}"] message[type="groupchat"]`,
      stanza
    );
    const muc_jid = this.get("jid");
    const mentions = msgs.filter((m) => import_strophe21.Strophe.getBareJidFromJid(m.getAttribute("from")) === muc_jid);
    if (mentions.length) {
      this.save({
        "has_activity": true,
        "num_unread": this.get("num_unread") + mentions.length
      });
      mentions.forEach(
        /** @param {Element} stanza */
        async (stanza2) => {
          const attrs = await parseMUCMessage(stanza2, this);
          const data = { stanza: stanza2, attrs, "chatbox": this };
          api_default4.trigger("message", data);
        }
      );
    }
  }
  /**
   * Parses an incoming message stanza and queues it for processing.
   * @param {Builder|Element} stanza
   */
  async handleMessageStanza(stanza) {
    stanza = /** @type {Builder} */
    stanza.tree?.() ?? /** @type {Element} */
    stanza;
    const type = stanza.getAttribute("type");
    if (type === "error") {
      return this.handleErrorMessageStanza(stanza);
    }
    if (type === "groupchat") {
      if (isArchived(stanza)) {
        return import_log24.default.warn(`Received a MAM message with type "groupchat"`);
      }
    } else if (!type) {
      return this.handleForwardedMentions(stanza);
    }
    let attrs_or_error;
    try {
      attrs_or_error = await parseMUCMessage(stanza, this);
    } catch (e) {
      return import_log24.default.error(e);
    }
    if (u11.isErrorObject(attrs_or_error)) {
      const { stanza: stanza2, message } = (
        /** @type {StanzaParseError} */
        attrs_or_error
      );
      if (stanza2) import_log24.default.error(stanza2);
      return import_log24.default.error(message);
    }
    const attrs = (
      /** @type {MUCMessageAttributes} */
      attrs_or_error
    );
    if (attrs.type === "groupchat") {
      attrs.codes.forEach((code) => this.createInfoMessage(code));
      this.fetchFeaturesIfConfigurationChanged(attrs);
    }
    const data = (
      /** @type {import('./types').MUCMessageEventData} */
      {
        stanza,
        attrs,
        chatbox: this
      }
    );
    api_default4.trigger("message", data);
    return attrs && this.queueMessage(attrs);
  }
  /**
   * Register presence and message handlers relevant to this groupchat
   */
  registerHandlers() {
    const muc_jid = this.get("jid");
    const muc_domain = import_strophe21.Strophe.getDomainFromJid(muc_jid);
    this.removeHandlers();
    const connection2 = api_default4.connection.get();
    this.presence_handler = connection2.addHandler(
      /** @param {Element} stanza */
      (stanza) => {
        this.onPresence(stanza);
        return true;
      },
      null,
      "presence",
      null,
      null,
      muc_jid,
      { "ignoreNamespaceFragment": true, "matchBareFromJid": true }
    );
    this.domain_presence_handler = connection2.addHandler(
      /** @param {Element} stanza */
      (stanza) => {
        this.onPresenceFromMUCHost(stanza);
        return true;
      },
      null,
      "presence",
      null,
      null,
      muc_domain
    );
    this.message_handler = connection2.addHandler(
      /** @param {Element} stanza */
      (stanza) => {
        this.handleMessageStanza(stanza);
        return true;
      },
      null,
      "message",
      null,
      null,
      muc_jid,
      { "matchBareFromJid": true }
    );
    this.domain_message_handler = connection2.addHandler(
      /** @param {Element} stanza */
      (stanza) => {
        this.handleMessageFromMUCHost(stanza);
        return true;
      },
      null,
      "message",
      null,
      null,
      muc_domain
    );
    this.affiliation_message_handler = connection2.addHandler(
      /** @param {Element} stanza */
      (stanza) => {
        this.handleAffiliationChangedMessage(stanza);
        return true;
      },
      import_strophe21.Strophe.NS.MUC_USER,
      "message",
      null,
      null,
      muc_jid
    );
  }
  removeHandlers() {
    const connection2 = api_default4.connection.get();
    if (this.message_handler) {
      connection2?.deleteHandler(this.message_handler);
      delete this.message_handler;
    }
    if (this.domain_message_handler) {
      connection2?.deleteHandler(this.domain_message_handler);
      delete this.domain_message_handler;
    }
    if (this.presence_handler) {
      connection2?.deleteHandler(this.presence_handler);
      delete this.presence_handler;
    }
    if (this.domain_presence_handler) {
      connection2?.deleteHandler(this.domain_presence_handler);
      delete this.domain_presence_handler;
    }
    if (this.affiliation_message_handler) {
      connection2?.deleteHandler(this.affiliation_message_handler);
      delete this.affiliation_message_handler;
    }
    return this;
  }
  invitesAllowed() {
    return api_default4.settings.get("allow_muc_invitations") && (this.features.get("open") || this.getOwnAffiliation() === "owner");
  }
  getDisplayName() {
    const name = this.get("name");
    if (name) {
      return name.trim();
    } else if (api_default4.settings.get("locked_muc_domain") === "hidden") {
      return import_strophe21.Strophe.getNodeFromJid(this.get("jid"));
    } else {
      return this.get("jid");
    }
  }
  /**
   * Sends a message stanza to the XMPP server and expects a reflection
   * or error message within a specific timeout period.
   * @param {Builder|Element } message
   * @returns { Promise<Element>|Promise<TimeoutError> } Returns a promise
   *  which resolves with the reflected message stanza or with an error stanza or
   *  {@link TimeoutError}.
   */
  sendTimedMessage(message) {
    const el = message instanceof Element ? message : message.tree();
    let id = el.getAttribute("id");
    if (!id) {
      id = getUniqueId("sendIQ");
      el.setAttribute("id", id);
    }
    const promise = (0, import_openpromise10.getOpenPromise)();
    const timeout = api_default4.settings.get("stanza_timeout");
    const connection2 = api_default4.connection.get();
    const timeoutHandler = connection2.addTimedHandler(timeout, () => {
      connection2.deleteHandler(handler);
      const err = new TimeoutError("Timeout Error: No response from server");
      promise.resolve(err);
      return false;
    });
    const handler = connection2.addHandler(
      /** @param {Element} stanza */
      (stanza) => {
        timeoutHandler && connection2.deleteTimedHandler(timeoutHandler);
        promise.resolve(stanza);
      },
      null,
      "message",
      ["error", "groupchat"],
      id
    );
    api_default4.send(el);
    return promise;
  }
  /**
   * Retract one of your messages in this groupchat
   * @param {BaseMessage} message - The message which we're retracting.
   */
  async retractOwnMessage(message) {
    const __ = converse_default.__;
    const editable = message.get("editable");
    const retraction_id = getUniqueId();
    const id = message.get("id");
    const stanza = stx6`
            <message id="${retraction_id}"
                     to="${this.get("jid")}"
                     type="groupchat"
                     xmlns="jabber:client">
                <retract id="${id}" xmlns="${import_strophe21.Strophe.NS.RETRACT}"/>
                <body>/me retracted a message</body>
                <store xmlns="${import_strophe21.Strophe.NS.HINTS}"/>
                <fallback xmlns="${import_strophe21.Strophe.NS.FALLBACK}" for="${import_strophe21.Strophe.NS.RETRACT}" />
            </message>`;
    message.set({
      retracted: (/* @__PURE__ */ new Date()).toISOString(),
      retracted_id: id,
      retraction_id,
      editable: false
    });
    const result = await this.sendTimedMessage(stanza);
    if (u11.isErrorStanza(result)) {
      import_log24.default.error(result);
    } else if (result instanceof TimeoutError) {
      import_log24.default.error(result);
      message.save({
        editable,
        error_type: "timeout",
        error: __("A timeout happened while trying to retract your message."),
        retracted: void 0,
        retracted_id: void 0,
        retraction_id: void 0
      });
    }
  }
  /**
   * Retract someone else's message in this groupchat.
   * @param {MUCMessage} message - The message which we're retracting.
   * @param {string} [reason] - The reason for retracting the message.
   * @example
   *  const room = await api.rooms.get(jid);
   *  const message = room.messages.findWhere({'body': 'Get rich quick!'});
   *  room.retractOtherMessage(message, 'spam');
   */
  async retractOtherMessage(message, reason) {
    const editable = message.get("editable");
    const bare_jid = converse_default.session.get("bare_jid");
    message.save({
      moderated: "retracted",
      moderated_by: bare_jid,
      moderated_id: message.get("msgid"),
      moderation_reason: reason,
      editable: false
    });
    const result = await this.sendRetractionIQ(message, reason);
    if (result === null || u11.isErrorStanza(result)) {
      message.save({
        editable,
        moderated: void 0,
        moderated_by: void 0,
        moderated_id: void 0,
        moderation_reason: void 0
      });
    }
    return result;
  }
  /**
   * Sends an IQ stanza to the XMPP server to retract a message in this groupchat.
   * @param {MUCMessage} message - The message which we're retracting.
   * @param {string} [reason] - The reason for retracting the message.
   */
  sendRetractionIQ(message, reason) {
    const iq = stx6`
            <iq to="${this.get("jid")}" type="set" xmlns="jabber:client">
                <moderate id="${message.get(`stanza_id ${this.get("jid")}`)}" xmlns="${import_strophe21.Strophe.NS.MODERATE}">
                    <retract xmlns="${import_strophe21.Strophe.NS.RETRACT}"/>
                    ${reason ? stx6`<reason>${reason}</reason>` : ""}
                </moderate>
            </iq>`;
    return api_default4.sendIQ(iq, null, false);
  }
  /**
   * Sends an IQ stanza to the XMPP server to destroy this groupchat. Not
   * to be confused with the {@link MUC#destroy}
   * method, which simply removes the room from the local browser storage cache.
   * @param {string} [reason] - The reason for destroying the groupchat.
   * @param {string} [new_jid] - The JID of the new groupchat which replaces this one.
   */
  sendDestroyIQ(reason, new_jid) {
    const iq = stx6`
            <iq to="${this.get("jid")}" type="set" xmlns="jabber:client">
                <query xmlns="${import_strophe21.Strophe.NS.MUC_OWNER}">
                    <destroy ${new_jid ? import_strophe21.Stanza.unsafeXML(`jid="${import_strophe21.Strophe.xmlescape(new_jid)}"`) : ""}>
                        ${reason ? stx6`<reason>${reason}</reason>` : ""}
                    </destroy>
                </query>
            </iq>`;
    return api_default4.sendIQ(iq);
  }
  /**
   * Leave the groupchat by sending an unavailable presence stanza, and then
   * tear down the features and disco collections so that they'll be
   * recreated if/when we rejoin.
   * @param {string} [exit_msg] - Message to indicate your reason for leaving
   */
  async leave(exit_msg) {
    api_default4.user.presence.send({
      type: "unavailable",
      to: this.getRoomJIDAndNick(),
      status: exit_msg
    });
    safeSave(this.session, { connection_status: ROOMSTATUS.DISCONNECTED });
    if (this.features) {
      await new Promise(
        (resolve) => this.features.destroy({
          success: resolve,
          error: /* @__PURE__ */ __name((_, e) => {
            import_log24.default.error(e);
            resolve();
          }, "error")
        })
      );
    }
    const disco_entity = converse_default.state.disco_entities?.get(this.get("jid"));
    if (disco_entity) {
      await new Promise(
        (resolve) => disco_entity.destroy({
          success: resolve,
          error: /* @__PURE__ */ __name((_, e) => {
            import_log24.default.error(e);
            resolve();
          }, "error")
        })
      );
    }
  }
  /**
   * @typedef {Object} CloseEvent
   * @property {string} name
   * @param {CloseEvent} [ev]
   */
  async close(ev) {
    const { ENTERED, CLOSING } = ROOMSTATUS;
    const was_entered = this.session.get("connection_status") === ENTERED;
    safeSave(this.session, { connection_status: CLOSING });
    was_entered && this.sendMarkerForLastMessage("received", true);
    await this.leave();
    this.occupants.clearStore();
    const is_closed_by_user = ev?.name !== "closeAllChatBoxes";
    if (is_closed_by_user) {
      await this.unregisterNickname();
      if (api_default4.settings.get("muc_clear_messages_on_leave")) {
        this.clearMessages();
      }
      api_default4.trigger("leaveRoom", this);
    }
    await new Promise(
      (success) => this.session.destroy({
        success,
        error: /* @__PURE__ */ __name((_, e) => {
          import_log24.default.error(e);
          success();
        }, "error")
      })
    );
    return super.close();
  }
  canModerateMessages() {
    const self = this.getOwnOccupant();
    return self && self.isModerator() && api_default4.disco.supports(import_strophe21.Strophe.NS.MODERATE, this.get("jid"));
  }
  canPostMessages() {
    return this.isEntered() && !(this.features.get("moderated") && this.getOwnRole() === "visitor");
  }
  /**
   * @param {import('../../shared/message').default} message
   */
  isChatMessage(message) {
    return message.get("type") === this.get("message_type");
  }
  /**
   * Return an array of unique nicknames based on all occupants and messages in this MUC.
   * @returns {String[]}
   */
  getAllKnownNicknames() {
    return [
      .../* @__PURE__ */ new Set([...this.occupants.map((o) => o.get("nick")), ...this.messages.map((m) => m.get("nick"))])
    ].filter((n) => n);
  }
  getAllKnownNicknamesRegex() {
    const longNickString = this.getAllKnownNicknames().map((n) => parse_helpers_default.escapeRegexString(n)).join("|");
    return RegExp(`(?:\\p{P}|\\p{Z}|^)@(${longNickString})(?![\\w@-])`, "uig");
  }
  /**
   * @param {string} jid
   */
  getOccupantByJID(jid) {
    return this.occupants.findOccupant({ jid });
  }
  /**
   * @param {string} nick
   */
  getOccupantByNickname(nick) {
    return this.occupants.findOccupant({ nick });
  }
  /**
   * @param {string} nick
   */
  getReferenceURIFromNickname(nick) {
    const muc_jid = this.get("jid");
    const occupant = this.getOccupant(nick);
    const uri = this.features.get("nonanonymous") && occupant?.get("jid") || `${muc_jid}/${nick}`;
    return encodeURI(`xmpp:${uri}`);
  }
  /**
   * Given a text message, look for `@` mentions and turn them into
   * XEP-0372 references
   * @param { String } text
   */
  parseTextForReferences(text) {
    const mentions_regex = /(\p{P}|\p{Z}|^)([@][\w_-]+(?:\.\w+)*)/giu;
    if (!text || !mentions_regex.test(text)) {
      return [text, []];
    }
    const getMatchingNickname = parse_helpers_default.findFirstMatchInArray(this.getAllKnownNicknames());
    const matchToReference = /* @__PURE__ */ __name((match) => {
      let at_sign_index = match[0].indexOf("@");
      if (match[0][at_sign_index + 1] === "@") {
        at_sign_index += 1;
      }
      const begin = match.index + at_sign_index;
      const end = begin + match[0].length - at_sign_index;
      const value = getMatchingNickname(match[1]);
      const type = "mention";
      const uri = this.getReferenceURIFromNickname(value);
      return { begin, end, value, type, uri };
    }, "matchToReference");
    const regex = this.getAllKnownNicknamesRegex();
    const mentions = [...text.matchAll(regex)].filter((m) => !m[0].startsWith("/"));
    const references = mentions.map(matchToReference);
    const [updated_message, updated_references] = parse_helpers_default.reduceTextFromReferences(text, references);
    return [updated_message, updated_references];
  }
  /**
   * @param {MessageAttributes} [attrs] - A map of attributes to be saved on the message
   */
  async getOutgoingMessageAttributes(attrs) {
    const is_spoiler = this.get("composing_spoiler");
    let text = "", references;
    if (attrs?.body) {
      [text, references] = this.parseTextForReferences(attrs.body);
    }
    const origin_id = getUniqueId();
    const body = text ? u11.shortnamesToUnicode(text) : void 0;
    attrs = Object.assign(
      {},
      attrs,
      {
        body,
        is_spoiler,
        origin_id,
        references,
        id: origin_id,
        msgid: origin_id,
        from: `${this.get("jid")}/${this.get("nick")}`,
        fullname: this.get("nick"),
        message: body,
        nick: this.get("nick"),
        sender: "me",
        type: "groupchat",
        original_text: text
      },
      await u11.getMediaURLsMetadata(text)
    );
    attrs = await api_default4.hook("getOutgoingMessageAttributes", this, attrs);
    return attrs;
  }
  /**
   * Utility method to construct the JID for the current user as occupant of the groupchat.
   * @returns {string} - The groupchat JID with the user's nickname added at the end.
   * @example groupchat@conference.example.org/nickname
   */
  getRoomJIDAndNick() {
    const nick = this.get("nick");
    const jid = import_strophe21.Strophe.getBareJidFromJid(this.get("jid"));
    return jid + (nick !== null ? `/${nick}` : "");
  }
  /**
   * Sends a message with the current XEP-0085 chat state of the user
   * as taken from the `chat_state` attribute of the {@link MUC}.
   */
  sendChatState() {
    if (!api_default4.settings.get("send_chat_state_notifications") || !this.get("chat_state") || !this.isEntered() || this.features.get("moderated") && this.getOwnRole() === "visitor") {
      return;
    }
    const allowed = api_default4.settings.get("send_chat_state_notifications");
    if (Array.isArray(allowed) && !allowed.includes(this.get("chat_state"))) {
      return;
    }
    const chat_state = this.get("chat_state");
    if (chat_state === GONE) return;
    api_default4.send(stx6`
            <message to="${this.get("jid")}" type="groupchat" xmlns="jabber:client">
                ${chat_state === INACTIVE ? stx6`<inactive xmlns="${import_strophe21.Strophe.NS.CHATSTATES}"/>` : ""}
                ${chat_state === ACTIVE ? stx6`<active xmlns="${import_strophe21.Strophe.NS.CHATSTATES}"/>` : ""}
                ${chat_state === COMPOSING ? stx6`<composing xmlns="${import_strophe21.Strophe.NS.CHATSTATES}"/>` : ""}
                ${chat_state === PAUSED ? stx6`<paused xmlns="${import_strophe21.Strophe.NS.CHATSTATES}"/>` : ""}
                <no-store xmlns="${import_strophe21.Strophe.NS.HINTS}"/>
                <no-permanent-store xmlns="${import_strophe21.Strophe.NS.HINTS}"/>
            </message>`);
  }
  /**
   * Send a direct invitation as per XEP-0249
   * @param {String} recipient - JID of the person being invited
   * @param {String} [reason] - Reason for the invitation
   */
  directInvite(recipient, reason) {
    if (this.features.get("membersonly")) {
      this.updateMemberLists([{ jid: recipient, affiliation: "member", reason }]);
    }
    const invitation = stx6`
            <message xmlns="jabber:client" to="${recipient}" id="${getUniqueId()}">
                <x xmlns="jabber:x:conference"
                    jid="${this.get("jid")}"
                    ${this.get("password") ? import_strophe21.Stanza.unsafeXML(`password="${import_strophe21.Strophe.xmlescape(this.get("password"))}"`) : ""}
                    ${reason ? import_strophe21.Stanza.unsafeXML(`reason="${import_strophe21.Strophe.xmlescape(reason)}"`) : ""} />
            </message>`;
    api_default4.send(invitation);
    api_default4.trigger("roomInviteSent", {
      room: this,
      recipient,
      reason
    });
  }
  /**
   * Refresh the disco identity, features and fields for this {@link MUC}.
   * *features* are stored on the features {@link Model} attribute on this {@link MUC}.
   * *fields* are stored on the config {@link Model} attribute on this {@link MUC}.
   * @param {import('@converse/headless/plugins/disco/types').DiscoInfoOptions} [options]
   * @returns {Promise}
   */
  async refreshDiscoInfo(options) {
    const result = await api_default4.disco.refresh(this.get("jid"), options);
    if (result instanceof StanzaError) {
      return result;
    }
    return this.getDiscoInfo().catch((e) => import_log24.default.error(e));
  }
  /**
   * Fetch the *extended* MUC info from the server and cache it locally
   * https://xmpp.org/extensions/xep-0045.html#disco-roominfo
   * @returns {Promise}
   */
  async getDiscoInfo() {
    const identity = await api_default4.disco.getIdentity("conference", "text", this.get("jid"));
    if (identity?.get("name")) {
      this.save({ name: identity.get("name") });
    } else {
      import_log24.default.error(`No identity or name found for ${this.get("jid")}`);
    }
    await this.getDiscoInfoFields();
    await this.getDiscoInfoFeatures();
  }
  /**
   * Fetch the *extended* MUC info fields from the server and store them locally
   * in the `config` {@link Model} attribute.
   * See: https://xmpp.org/extensions/xep-0045.html#disco-roominfo
   * @returns {Promise}
   */
  async getDiscoInfoFields() {
    const fields = await api_default4.disco.getFields(this.get("jid"));
    const config = fields.reduce((config2, f) => {
      const name = f.get("var");
      if (name === "muc#roomconfig_roomname") {
        config2["roomname"] = f.get("value");
      }
      if (name?.startsWith("muc#roominfo_")) {
        config2[name.replace("muc#roominfo_", "")] = f.get("value");
      }
      return config2;
    }, {});
    this.config.save(config);
    if (config["roomname"]) this.save({ name: config["roomname"] });
  }
  /**
   * Use converse-disco to populate the features {@link Model} which
   * is stored as an attibute on this {@link MUC}.
   * The results may be cached. If you want to force fetching the features from the
   * server, call {@link MUC#refreshDiscoInfo} instead.
   * @returns {Promise}
   */
  async getDiscoInfoFeatures() {
    const features = await api_default4.disco.getFeatures(this.get("jid"));
    const attrs = public_default.ROOM_FEATURES.reduce(
      (acc, feature) => {
        acc[feature] = false;
        return acc;
      },
      { "fetched": (/* @__PURE__ */ new Date()).toISOString() }
    );
    features.each((feature) => {
      const fieldname = feature.get("var");
      if (!fieldname.startsWith("muc_")) {
        if (fieldname === import_strophe21.Strophe.NS.MAM) {
          attrs.mam_enabled = true;
        } else {
          attrs[fieldname] = true;
        }
        return;
      }
      attrs[fieldname.replace("muc_", "")] = true;
    });
    this.features.save(attrs);
  }
  /**
   * Given a <field> element, return a copy with a <value> child if
   * we can find a value for it in this rooms config.
   * @param {Element} field
   * @returns {Element}
   */
  addFieldValue(field) {
    const type = field.getAttribute("type");
    if (type === "fixed") {
      return field;
    }
    const fieldname = field.getAttribute("var").replace("muc#roomconfig_", "");
    const config = this.get("roomconfig");
    if (fieldname in config) {
      let values;
      switch (type) {
        case "boolean":
          values = [config[fieldname] ? 1 : 0];
          break;
        case "list-multi":
          values = config[fieldname];
          break;
        default:
          values = [config[fieldname]];
      }
      field.innerHTML = values.map((v) => (0, import_strophe21.$build)("value").t(v)).join("");
    }
    return field;
  }
  /**
   * Automatically configure the groupchat based on this model's
   * 'roomconfig' data.
   * @returns {Promise<Element>}
   * Returns a promise which resolves once a response IQ has
   * been received.
   */
  async autoConfigureChatRoom() {
    const stanza = await this.fetchRoomConfiguration();
    const fields = (0, import_sizzle7.default)("field", stanza);
    const configArray = fields.map((f) => this.addFieldValue(f));
    if (configArray.length) {
      return this.sendConfiguration(configArray);
    }
  }
  /**
   * Send an IQ stanza to fetch the groupchat configuration data.
   * Returns a promise which resolves once the response IQ
   * has been received.
   * @returns {Promise<Element>}
   */
  fetchRoomConfiguration() {
    return api_default4.sendIQ(stx6`
            <iq to="${this.get("jid")}" type="get" xmlns="jabber:client">
                <query xmlns="${import_strophe21.Strophe.NS.MUC_OWNER}"/>
            </iq>`);
  }
  /**
   * Sends an IQ stanza with the groupchat configuration.
   * @param {Element[]} config - The groupchat configuration
   * @returns {Promise<Element>} - A promise which resolves with
   *  the `result` stanza received from the XMPP server.
   */
  sendConfiguration(config = []) {
    const iq = stx6`
            <iq to="${this.get("jid")}" type="set" xmlns="jabber:client">
                <query xmlns="${import_strophe21.Strophe.NS.MUC_OWNER}">
                    <x xmlns="${import_strophe21.Strophe.NS.XFORM}" type="submit">
                        ${config.map((el) => import_strophe21.Strophe.Builder.fromString(el.outerHTML))}
                    </x>
                </query>
            </iq>`;
    return api_default4.sendIQ(iq);
  }
  onCommandError(err) {
    const { __ } = converse_default;
    import_log24.default.fatal(err);
    const message = __("Sorry, an error happened while running the command.") + " " + __("Check your browser's developer console for details.");
    this.createMessage({ message, "type": "error" });
  }
  getNickOrJIDFromCommandArgs(args) {
    const { __ } = converse_default;
    if (u11.isValidJID(args.trim())) {
      return args.trim();
    }
    if (!args.startsWith("@")) {
      args = "@" + args;
    }
    const result = this.parseTextForReferences(args);
    const references = result[1];
    if (!references.length) {
      const message = __("Error: couldn't find a groupchat participant based on your arguments");
      this.createMessage({ message, "type": "error" });
      return;
    }
    if (references.length > 1) {
      const message = __("Error: found multiple groupchat participant based on your arguments");
      this.createMessage({ message, "type": "error" });
      return;
    }
    const nick_or_jid = references.pop().value;
    const reason = args.split(nick_or_jid, 2)[1];
    if (reason && !reason.startsWith(" ")) {
      const message = __("Error: couldn't find a groupchat participant based on your arguments");
      this.createMessage({ message, "type": "error" });
      return;
    }
    return nick_or_jid;
  }
  validateRoleOrAffiliationChangeArgs(command, args) {
    const { __ } = converse_default;
    if (!args) {
      const message = __(
        `Error: the "%1$s" command takes two arguments, the user's nickname and optionally a reason.`,
        command
      );
      this.createMessage({ message, "type": "error" });
      return false;
    }
    return true;
  }
  getAllowedCommands() {
    let allowed_commands = ["clear", "help", "me", "nick", "register"];
    if (this.config.get("changesubject") || ["owner", "admin"].includes(this.getOwnAffiliation())) {
      allowed_commands = [...allowed_commands, ...["subject", "topic"]];
    }
    const bare_jid = converse_default.session.get("bare_jid");
    const occupant = this.occupants.findWhere({ "jid": bare_jid });
    if (this.verifyAffiliations(["owner"], occupant, false)) {
      allowed_commands = allowed_commands.concat(OWNER_COMMANDS).concat(ADMIN_COMMANDS);
    } else if (this.verifyAffiliations(["admin"], occupant, false)) {
      allowed_commands = allowed_commands.concat(ADMIN_COMMANDS);
    }
    if (this.verifyRoles(["moderator"], occupant, false)) {
      allowed_commands = allowed_commands.concat(MODERATOR_COMMANDS).concat(VISITOR_COMMANDS);
    } else if (!this.verifyRoles(["visitor", "participant", "moderator"], occupant, false)) {
      allowed_commands = allowed_commands.concat(VISITOR_COMMANDS);
    }
    allowed_commands.sort();
    if (Array.isArray(api_default4.settings.get("muc_disable_slash_commands"))) {
      return allowed_commands.filter((c) => !api_default4.settings.get("muc_disable_slash_commands").includes(c));
    } else {
      return allowed_commands;
    }
  }
  verifyAffiliations(affiliations, occupant, show_error = true) {
    const { __ } = converse_default;
    if (!Array.isArray(affiliations)) {
      throw new TypeError("affiliations must be an Array");
    }
    if (!affiliations.length) {
      return true;
    }
    const bare_jid = converse_default.session.get("bare_jid");
    occupant = occupant || this.occupants.findWhere({ "jid": bare_jid });
    if (occupant) {
      const a = occupant.get("affiliation");
      if (affiliations.includes(a)) {
        return true;
      }
    }
    if (show_error) {
      const message = __("Forbidden: you do not have the necessary affiliation in order to do that.");
      this.createMessage({ message, "type": "error" });
    }
    return false;
  }
  verifyRoles(roles, occupant, show_error = true) {
    const { __ } = converse_default;
    if (!Array.isArray(roles)) {
      throw new TypeError("roles must be an Array");
    }
    if (!roles.length) {
      return true;
    }
    const bare_jid = converse_default.session.get("bare_jid");
    occupant = occupant || this.occupants.findWhere({ "jid": bare_jid });
    if (occupant) {
      const role = occupant.get("role");
      if (roles.includes(role)) {
        return true;
      }
    }
    if (show_error) {
      const message = __("Forbidden: you do not have the necessary role in order to do that.");
      this.createMessage({ message, "type": "error", "is_ephemeral": 2e4 });
    }
    return false;
  }
  /**
   * Returns the `role` which the current user has in this MUC
   * @returns {('none'|'visitor'|'participant'|'moderator')}
   */
  getOwnRole() {
    return this.getOwnOccupant()?.get("role");
  }
  /**
   * Returns the `affiliation` which the current user has in this MUC
   * @returns {('none'|'outcast'|'member'|'admin'|'owner')}
   */
  getOwnAffiliation() {
    return this.getOwnOccupant()?.get("affiliation") || "none";
  }
  /**
   * Get the {@link MUCOccupant} instance which
   * represents the current user.
   * @returns {MUCOccupant}
   */
  getOwnOccupant() {
    return this.occupants.getOwnOccupant();
  }
  /**
   * Send a presence stanza to update the user's nickname in this MUC.
   * @param {String} nick
   */
  async setNickname(nick) {
    const jid = import_strophe21.Strophe.getBareJidFromJid(this.get("jid"));
    api_default4.send(
      stx6`<presence xmlns="jabber:client"
                    id="${getUniqueId()}"
                    from="${api_default4.connection.get().jid}"
                    to="${jid}/${nick}"></presence>`
    );
  }
  /**
   * Send an IQ stanza to modify an occupant's role
   * @param {MUCOccupant} occupant
   * @param {string} role
   * @param {string} reason
   * @param {function} onSuccess - callback for a succesful response
   * @param {function} onError - callback for an error response
   */
  setRole(occupant, role, reason, onSuccess, onError) {
    const iq = stx6`
            <iq to="${this.get("jid")}" type="set" xmlns="jabber:client">
                <query xmlns="${import_strophe21.Strophe.NS.MUC_ADMIN}">
                    <item nick="${occupant.get("nick")}" role="${role}">
                        ${reason !== null ? stx6`<reason>${reason}</reason>` : ""}
                    </item>
                </query>
            </iq>`;
    return api_default4.sendIQ(iq).then(onSuccess).catch(onError);
  }
  /**
   * @param {string} nickname_or_jid - The nickname or JID of the occupant to be returned
   * @returns {MUCOccupant}
   */
  getOccupant(nickname_or_jid) {
    return u11.isValidJID(nickname_or_jid) ? this.getOccupantByJID(nickname_or_jid) : this.getOccupantByNickname(nickname_or_jid);
  }
  /**
   * Return an array of occupant models that have the required role
   * @param {string} role
   * @returns {{jid: string, nick: string, role: string}[]}
   */
  getOccupantsWithRole(role) {
    return this.getOccupantsSortedBy("nick").filter((o) => o.get("role") === role).map((item) => {
      return {
        jid: (
          /** @type {string} */
          item.get("jid")
        ),
        nick: (
          /** @type {string} */
          item.get("nick")
        ),
        role: (
          /** @type {string} */
          item.get("role")
        )
      };
    });
  }
  /**
   * Return an array of occupant models that have the required affiliation
   * @param {string} affiliation
   * @returns {{jid: string, nick: string, affiliation: string}[]}
   */
  getOccupantsWithAffiliation(affiliation) {
    return this.getOccupantsSortedBy("nick").filter((o) => o.get("affiliation") === affiliation).map((item) => {
      return {
        jid: (
          /** @type {string} */
          item.get("jid")
        ),
        nick: (
          /** @type {string} */
          item.get("nick")
        ),
        affiliation: (
          /** @type {string} */
          item.get("affiliation")
        )
      };
    });
  }
  /**
   * Return an array of occupant models, sorted according to the passed-in attribute.
   * @param {string} attr - The attribute to sort the returned array by
   * @returns {MUCOccupant[]}
   */
  getOccupantsSortedBy(attr) {
    return Array.from(this.occupants.models).sort(
      (a, b) => a.get(attr) < b.get(attr) ? -1 : a.get(attr) > b.get(attr) ? 1 : 0
    );
  }
  /**
   * Fetch the lists of users with the given affiliations.
   * Then compute the delta between those users and
   * the passed in members, and if it exists, send the delta
   * to the XMPP server to update the member list.
   * @param {object} members - Map of member jids and affiliations.
   * @returns {Promise}
   *  A promise which is resolved once the list has been
   *  updated or once it's been established there's no need
   *  to update the list.
   */
  async updateMemberLists(members) {
    const muc_jid = this.get("jid");
    const all_affiliations = ["member", "admin", "owner"];
    const aff_lists = await Promise.all(all_affiliations.map((a) => getAffiliationList(a, muc_jid)));
    const old_members = aff_lists.reduce(
      /**
       * @param {MemberListItem[]} acc
       * @param {MemberListItem[]|Error} val
       * @returns {MemberListItem[]}
       */
      (acc, val) => {
        if (val instanceof Error) {
          import_log24.default.error(val);
          return acc;
        }
        return [...val, ...acc];
      },
      []
    );
    await setAffiliations(
      muc_jid,
      computeAffiliationsDelta(
        true,
        false,
        members,
        /** @type {MemberListItem[]} */
        old_members
      )
    );
    await this.occupants.fetchMembers();
  }
  /**
   * Triggers a hook which gives 3rd party plugins an opportunity to determine
   * the nickname to use.
   * @return {Promise<string>} A promise which resolves with the nickname
   */
  async getNicknameFromHook() {
    return await api_default4.hook("getNicknameForMUC", this, null);
  }
  /**
   * Given a nick name, save it to the model state, otherwise, look
   * for a server-side reserved nickname or default configured
   * nickname and if found, persist that to the model state.
   * @param {string} nick
   * @returns {Promise<string>} A promise which resolves with the nickname
   */
  async getAndPersistNickname(nick) {
    nick = nick || this.get("nick") || await this.getReservedNick() || await this.getNicknameFromHook() || converse_default.exports.getDefaultMUCNickname();
    if (nick) safeSave(this, { nick }, { silent: true });
    return nick;
  }
  /**
   * Use service-discovery to ask the XMPP server whether
   * this user has a reserved nickname for this groupchat.
   * If so, we'll use that, otherwise we render the nickname form.
   * @returns {Promise<string>} A promise which resolves with the reserved nick or null
   */
  async getReservedNick() {
    const stanza = stx6`
            <iq to="${this.get("jid")}" type="get" xmlns="jabber:client">
                <query xmlns="${import_strophe21.Strophe.NS.DISCO_INFO}" node="x-roomuser-item"/>
            </iq>`;
    const result = await api_default4.sendIQ(stanza, DISCO_INFO_TIMEOUT_ON_JOIN, false);
    if (u11.isErrorObject(result)) {
      throw result;
    }
    const identity_el = result?.querySelector('query[node="x-roomuser-item"] identity');
    return identity_el ? identity_el.getAttribute("name") : null;
  }
  /**
   * Send an IQ stanza to the MUC to register this user's nickname.
   * This sets the user's affiliation to 'member' (if they weren't affiliated
   * before) and reserves the nickname for this user, thereby preventing other
   * users from using it in this MUC.
   * See https://xmpp.org/extensions/xep-0045.html#register
   */
  async registerNickname() {
    const { __ } = converse_default;
    const nick = this.get("nick");
    const jid = this.get("jid");
    let iq, err_msg;
    try {
      iq = await api_default4.sendIQ(
        stx6`<iq to="${jid}" type="get" xmlns="jabber:client">
                    <query xmlns="${import_strophe21.Strophe.NS.MUC_REGISTER}"/>
                </iq>`
      );
    } catch (e) {
      if ((0, import_sizzle7.default)(`not-allowed[xmlns="${import_strophe21.Strophe.NS.STANZAS}"]`, e).length) {
        err_msg = __("You're not allowed to register yourself in this groupchat.");
      } else if ((0, import_sizzle7.default)(`registration-required[xmlns="${import_strophe21.Strophe.NS.STANZAS}"]`, e).length) {
        err_msg = __("You're not allowed to register in this groupchat because it's members-only.");
      }
      import_log24.default.error(e);
      return err_msg;
    }
    const required_fields = (0, import_sizzle7.default)("field required", iq).map((f) => f.parentElement);
    if (required_fields.length > 1 && required_fields[0].getAttribute("var") !== "muc#register_roomnick") {
      return import_log24.default.error(`Can't register the user register in the groupchat ${jid} due to the required fields`);
    }
    try {
      await api_default4.sendIQ(
        stx6`<iq to="${jid}" type="set" xmlns="jabber:client">
                    <query xmlns="${import_strophe21.Strophe.NS.MUC_REGISTER}">
                        <x xmlns="${import_strophe21.Strophe.NS.XFORM}" type="submit">
                            <field var="FORM_TYPE">
                                <value>http://jabber.org/protocol/muc#register</value>
                            </field>
                            <field var="muc#register_roomnick">
                                <value>${nick}</value>
                            </field>
                        </x>
                    </query>
                </iq>`
      );
    } catch (e) {
      const err = await parseErrorStanza(e);
      if (err?.name === "service-unavailable") {
        import_log24.default.error("Can't register your nickname in this groupchat, it doesn't support registration.");
      } else if (err?.name === "bad-request") {
        import_log24.default.error("Can't register your nickname in this groupchat, invalid data form supplied.");
      } else {
        import_log24.default.error(e);
      }
      throw err;
    }
  }
  /**
   * Check whether we should unregister the user from this MUC, and if so,
   * call {@link MUC#sendUnregistrationIQ}
   */
  async unregisterNickname() {
    if (api_default4.settings.get("auto_register_muc_nickname") === "unregister") {
      try {
        if (await api_default4.disco.supports(import_strophe21.Strophe.NS.MUC_REGISTER, this.get("jid"))) {
          await this.sendUnregistrationIQ();
        }
      } catch (e) {
        import_log24.default.error(e);
      }
    }
  }
  /**
   * Send an IQ stanza to the MUC to unregister this user's nickname.
   * If the user had a 'member' affiliation, it'll be removed and their
   * nickname will no longer be reserved and can instead be used (and
   * registered) by other users.
   */
  sendUnregistrationIQ() {
    const iq = stx6`
            <iq to="${this.get("jid")}" type="set" xmlns="jabber:client">
                <query xmlns="${import_strophe21.Strophe.NS.MUC_REGISTER}">
                    <remove/>
                </query>
            </iq>`;
    return api_default4.sendIQ(iq).catch((e) => import_log24.default.error(e));
  }
  /**
   * Given a presence stanza, update the occupant model based on its contents.
   * @param {MUCPresenceAttributes} attrs - The presence stanza
   */
  updateOccupantsOnPresence(attrs) {
    if (attrs.type === "error" || !attrs.jid && !attrs.nick && !attrs.occupant_id) {
      return true;
    }
    const occupant = this.occupants.findOccupant(attrs);
    if (attrs.type === "unavailable" && occupant && !attrs.codes.includes(public_default.MUC_NICK_CHANGED_CODE) && !["admin", "owner", "member"].includes(attrs["affiliation"])) {
      occupant.set({
        ...attrs,
        presence: "offline"
      });
      occupant.destroy();
      return;
    }
    const presence = attrs.type !== "unavailable" ? "online" : "offline";
    const jid = attrs.jid || "";
    const occupant_attrs = {
      ...attrs,
      presence,
      jid: import_strophe21.Strophe.getBareJidFromJid(jid) || occupant?.attributes?.jid,
      resource: import_strophe21.Strophe.getResourceFromJid(jid) || occupant?.attributes?.resource
    };
    if (attrs.is_self) {
      let modified = false;
      if (attrs.codes.includes(public_default.MUC_NICK_CHANGED_CODE)) {
        modified = true;
        this.set("nick", attrs.nick);
      }
      if (this.features.get(import_strophe21.Strophe.NS.OCCUPANTID) && this.get("occupant-id") !== attrs.occupant_id) {
        modified = true;
        this.set("occupant_id", attrs.occupant_id);
      }
      modified && this.save();
    }
    if (occupant) {
      occupant.save(occupant_attrs);
    } else {
      this.occupants.create(occupant_attrs);
    }
  }
  /**
   * @param {MUCMessageAttributes} attrs
   */
  fetchFeaturesIfConfigurationChanged(attrs) {
    const codes = ["104", "170", "171", "172", "173", "174"];
    if (attrs.codes.filter((code) => codes.includes(code)).length) {
      this.refreshDiscoInfo();
    }
  }
  /**
   * Given two JIDs, which can be either user JIDs or MUC occupant JIDs,
   * determine whether they belong to the same user.
   * @param {String} jid1
   * @param {String} jid2
   * @returns {Boolean}
   */
  isSameUser(jid1, jid2) {
    const bare_jid1 = import_strophe21.Strophe.getBareJidFromJid(jid1);
    const bare_jid2 = import_strophe21.Strophe.getBareJidFromJid(jid2);
    const resource1 = import_strophe21.Strophe.getResourceFromJid(jid1);
    const resource2 = import_strophe21.Strophe.getResourceFromJid(jid2);
    if (u11.isSameBareJID(jid1, jid2)) {
      if (bare_jid1 === this.get("jid")) {
        return resource1 === resource2;
      } else {
        return true;
      }
    } else {
      const occupant1 = bare_jid1 === this.get("jid") ? this.occupants.findOccupant({ "nick": resource1 }) : this.occupants.findOccupant({ "jid": bare_jid1 });
      const occupant2 = bare_jid2 === this.get("jid") ? this.occupants.findOccupant({ "nick": resource2 }) : this.occupants.findOccupant({ "jid": bare_jid2 });
      return occupant1 === occupant2;
    }
  }
  async isSubjectHidden() {
    const jids = await api_default4.user.settings.get("mucs_with_hidden_subject", []);
    return jids.includes(this.get("jid"));
  }
  async toggleSubjectHiddenState() {
    const muc_jid = this.get("jid");
    const jids = await api_default4.user.settings.get("mucs_with_hidden_subject", []);
    if (jids.includes(this.get("jid"))) {
      api_default4.user.settings.set(
        "mucs_with_hidden_subject",
        jids.filter((jid) => jid !== muc_jid)
      );
    } else {
      api_default4.user.settings.set("mucs_with_hidden_subject", [...jids, muc_jid]);
    }
  }
  /**
   * Handle a possible subject change and return `true` if so.
   * @param {object} attrs - Attributes representing a received
   *  message, as returned by {@link parseMUCMessage}
   */
  async handleSubjectChange(attrs) {
    const __ = converse_default.__;
    if (typeof attrs.subject === "string" && !attrs.thread && !attrs.message) {
      const subject = attrs.subject;
      const author = attrs.nick;
      safeSave(this, { "subject": { author, "text": attrs.subject || "" } });
      if (!attrs.is_delayed && author) {
        const message = subject ? __("Topic set by %1$s", author) : __("Topic cleared by %1$s", author);
        const prev_msg = this.messages.last();
        if (prev_msg?.get("nick") !== attrs.nick || prev_msg?.get("type") !== "info" || prev_msg?.get("message") !== message) {
          this.createMessage({ message, "nick": attrs.nick, "type": "info", "is_ephemeral": true });
        }
        if (await this.isSubjectHidden()) {
          this.toggleSubjectHiddenState();
        }
      }
      return true;
    }
    return false;
  }
  /**
   * Set the subject for this {@link MUC}
   * @param {String} value
   */
  setSubject(value = "") {
    api_default4.send(stx6`
            <message to="${this.get("jid")}" type="groupchat" xmlns="jabber:client">
                <subject>${value}</subject>
            </message>`);
  }
  /**
   * Is this a chat state notification that can be ignored,
   * because it's old or because it's from us.
   * @param {Object} attrs - The message attributes
   */
  ignorableCSN(attrs) {
    return attrs.chat_state && !attrs.body && (attrs.is_delayed || this.isOwnMessage(attrs));
  }
  /**
   * Determines whether the message is from ourselves by checking
   * the `from` attribute. Doesn't check the `type` attribute.
   * @param {Object|Element|MUCMessage} msg
   * @returns {boolean}
   */
  isOwnMessage(msg) {
    let from;
    if (msg instanceof Element) {
      from = msg.getAttribute("from");
    } else if (msg instanceof converse_default.exports.MUCMessage) {
      from = msg.get("from");
    } else {
      from = msg.from;
    }
    return import_strophe21.Strophe.getResourceFromJid(from) == this.get("nick");
  }
  /**
   * @param {MUCMessage} message
   * @param {MUCMessageAttributes} attrs
   * @return {object}
   */
  getUpdatedMessageAttributes(message, attrs) {
    const new_attrs = {
      ...super.getUpdatedMessageAttributes(message, attrs),
      ...(0, import_pick3.default)(attrs, ["from_muc", "occupant_id"])
    };
    if (this.isOwnMessage(attrs)) {
      const stanza_id_keys = Object.keys(attrs).filter((k) => k.startsWith("stanza_id"));
      Object.assign(new_attrs, { ...(0, import_pick3.default)(attrs, stanza_id_keys) }, { body: attrs.body });
      if (!message.get("received")) {
        new_attrs.received = (/* @__PURE__ */ new Date()).toISOString();
      }
    }
    return new_attrs;
  }
  /**
   * Send a MUC-0410 MUC Self-Ping stanza to room to determine
   * whether we're still joined.
   * @returns {Promise<boolean>}
   */
  async isJoined() {
    /*! TOFIND */
    return true;
    if (!this.isEntered()) {
      import_log24.default.info(`isJoined: not pinging MUC ${this.get("jid")} since we're not entered`);
      return false;
    }
    if (!api_default4.connection.connected()) {
      await new Promise((resolve) => api_default4.listen.once("reconnected", resolve));
    }
    return api_default4.ping(`${this.get("jid")}/${this.get("nick")}`);
  }
  /**
   * Sends a status update presence (i.e. based on the `<show>` element)
   * @param {import("../status/types").presence_attrs} attrs
   * @param {Element[]|Builder[]|Element|Builder} [child_nodes]
   *  Nodes(s) to be added as child nodes of the `presence` XML element.
   */
  async sendStatusPresence(attrs, child_nodes) {
    if (this.session.get("connection_status") === ROOMSTATUS.ENTERED) {
      const presence = await converse_default.state.profile.constructPresence(
        {
          ...attrs,
          to: `${this.get("jid")}/${this.get("nick")}`
        },
        /** @type {Element[]|Builder[]} */
        child_nodes?.map((c) => c?.tree() ?? c)
      );
      api_default4.send(presence);
    }
  }
  /**
   * Check whether we're still joined and re-join if not
   */
  async rejoinIfNecessary() {
    if (this.isRAICandidate()) {
      import_log24.default.debug(`rejoinIfNecessary: not rejoining hidden MUC "${this.get("jid")}" since we're using RAI`);
      return true;
    }
    if (!await this.isJoined()) {
      this.rejoin();
      return true;
    }
  }
  /**
   * @param {object} attrs
   * @returns {Promise<boolean>}
   */
  async shouldShowErrorMessage(attrs) {
    if (attrs.error_type === "Decryption") {
      if (attrs.error_message === "Message key not found. The counter was repeated or the key was not filled.") {
        return false;
      } else if (attrs.error_condition === "not-encrypted-for-this-device") {
        return false;
      }
    } else if (attrs.error_condition === "not-acceptable" && await this.rejoinIfNecessary()) {
      return false;
    }
    return super.shouldShowErrorMessage(attrs);
  }
  /**
   * Looks whether we already have a moderation message for this
   * incoming message. If so, it's considered "dangling" because
   * it probably hasn't been applied to anything yet, given that
   * the relevant message is only coming in now.
   * @param {object} attrs - Attributes representing a received
   *  message, as returned by {@link parseMUCMessage}
   * @returns {MUCMessage}
   */
  findDanglingModeration(attrs) {
    if (!this.messages.length) {
      return null;
    }
    if (this.messages.last().get("time") > attrs.time) {
      const messages = Array.from(this.messages.models);
      const stanza_id = attrs[`stanza_id ${this.get("jid")}`];
      if (!stanza_id) {
        return null;
      }
      messages.reverse();
      return messages.find(
        ({ attributes }) => attributes.moderated === "retracted" && attributes.moderated_id === stanza_id && attributes.moderated_by
      );
    }
  }
  /**
   * Handles message moderation based on the passed in attributes.
   * @param {object} attrs - Attributes representing a received
   *  message, as returned by {@link parseMUCMessage}
   * @returns {Promise<boolean>} Returns `true` or `false` depending on
   *  whether a message was moderated or not.
   */
  async handleModeration(attrs) {
    const MODERATION_ATTRIBUTES = [
      "editable",
      "moderated",
      "moderated_by",
      "moderated_by_id",
      "moderated_id",
      "moderation_reason"
    ];
    if (attrs.moderated === "retracted") {
      const query = {};
      const key = `stanza_id ${this.get("jid")}`;
      query[key] = attrs.moderated_id;
      const message = this.messages.findWhere(query);
      if (!message) {
        attrs["dangling_moderation"] = true;
        await this.createMessage(attrs);
        return true;
      }
      message.save((0, import_pick3.default)(attrs, MODERATION_ATTRIBUTES));
      return true;
    } else {
      const message = this.findDanglingModeration(attrs);
      if (message) {
        const moderation_attrs = (0, import_pick3.default)(message.attributes, MODERATION_ATTRIBUTES);
        const new_attrs = Object.assign({ dangling_moderation: false }, attrs, moderation_attrs);
        delete new_attrs["id"];
        message.save(new_attrs);
        return true;
      }
    }
    return false;
  }
  getNotificationsText() {
    const { __ } = converse_default;
    const actors_per_state = this.notifications.toJSON();
    const role_changes = api_default4.settings.get("muc_show_info_messages").filter((role_change) => public_default.MUC_ROLE_CHANGES_LIST.includes(role_change));
    const join_leave_events = api_default4.settings.get("muc_show_info_messages").filter((join_leave_event) => public_default.MUC_TRAFFIC_STATES_LIST.includes(join_leave_event));
    const states = [...public_default.CHAT_STATES, ...join_leave_events, ...role_changes];
    return states.reduce((result, state) => {
      const existing_actors = actors_per_state[state];
      if (!existing_actors?.length) {
        return result;
      }
      const actors = existing_actors.map((a) => this.getOccupant(a)?.getDisplayName() || a);
      if (actors.length === 1) {
        if (state === "composing") {
          return `${result}${__("%1$s is typing", actors[0])}
`;
        } else if (state === "paused") {
          return `${result}${__("%1$s has stopped typing", actors[0])}
`;
        } else if (state === GONE) {
          return `${result}${__("%1$s has gone away", actors[0])}
`;
        } else if (state === "entered") {
          return `${result}${__("%1$s has entered the groupchat", actors[0])}
`;
        } else if (state === "exited") {
          return `${result}${__("%1$s has left the groupchat", actors[0])}
`;
        } else if (state === "op") {
          return `${result}${__("%1$s is now a moderator", actors[0])}
`;
        } else if (state === "deop") {
          return `${result}${__("%1$s is no longer a moderator", actors[0])}
`;
        } else if (state === "voice") {
          return `${result}${__("%1$s has been given a voice", actors[0])}
`;
        } else if (state === "mute") {
          return `${result}${__("%1$s has been muted", actors[0])}
`;
        }
      } else if (actors.length > 1) {
        let actors_str;
        if (actors.length > 3) {
          actors_str = `${Array.from(actors).slice(0, 2).join(", ")} and others`;
        } else {
          const last_actor = actors.pop();
          actors_str = __("%1$s and %2$s", actors.join(", "), last_actor);
        }
        if (state === "composing") {
          return `${result}${__("%1$s are typing", actors_str)}
`;
        } else if (state === "paused") {
          return `${result}${__("%1$s have stopped typing", actors_str)}
`;
        } else if (state === GONE) {
          return `${result}${__("%1$s have gone away", actors_str)}
`;
        } else if (state === "entered") {
          return `${result}${__("%1$s have entered the groupchat", actors_str)}
`;
        } else if (state === "exited") {
          return `${result}${__("%1$s have left the groupchat", actors_str)}
`;
        } else if (state === "op") {
          return `${result}${__("%1$s are now moderators", actors[0])}
`;
        } else if (state === "deop") {
          return `${result}${__("%1$s are no longer moderators", actors[0])}
`;
        } else if (state === "voice") {
          return `${result}${__("%1$s have been given voices", actors[0])}
`;
        } else if (state === "mute") {
          return `${result}${__("%1$s have been muted", actors[0])}
`;
        }
      }
      return result;
    }, "");
  }
  /**
   * @param { String } actor - The nickname of the actor that caused the notification
   * @param {String|Array<String>} states - The state or states representing the type of notificcation
   */
  removeNotification(actor, states) {
    const actors_per_state = this.notifications.toJSON();
    states = Array.isArray(states) ? states : [states];
    states.forEach((state) => {
      const existing_actors = Array.from(actors_per_state[state] || []);
      if (existing_actors.includes(actor)) {
        const idx = existing_actors.indexOf(actor);
        existing_actors.splice(idx, 1);
        this.notifications.set(state, Array.from(existing_actors));
      }
    });
  }
  /**
   * Update the notifications model by adding the passed in nickname
   * to the array of nicknames that all match a particular state.
   *
   * Removes the nickname from any other states it might be associated with.
   *
   * The state can be a XEP-0085 Chat State or a XEP-0045 join/leave state.
   * @param {String} actor - The nickname of the actor that causes the notification
   * @param {String} state - The state representing the type of notificcation
   */
  updateNotifications(actor, state) {
    const actors_per_state = this.notifications.toJSON();
    const existing_actors = actors_per_state[state] || [];
    if (existing_actors.includes(actor)) {
      return;
    }
    const reducer = /* @__PURE__ */ __name((out, s) => {
      if (s === state) {
        out[s] = [...existing_actors, actor];
      } else {
        out[s] = (actors_per_state[s] || []).filter((a) => a !== actor);
      }
      return out;
    }, "reducer");
    const actors_per_chat_state = public_default.CHAT_STATES.reduce(reducer, {});
    const actors_per_traffic_state = public_default.MUC_TRAFFIC_STATES_LIST.reduce(reducer, {});
    const actors_per_role_change = public_default.MUC_ROLE_CHANGES_LIST.reduce(reducer, {});
    this.notifications.set(Object.assign(actors_per_chat_state, actors_per_traffic_state, actors_per_role_change));
    setTimeout(() => this.removeNotification(actor, state), 1e4);
  }
  /**
   * @param {MessageAttributes} attrs
   * @returns {boolean}
   */
  handleMUCPrivateMessage(attrs) {
    if (attrs.type === "chat" || attrs.type === null) {
      const occupant = this.occupants.findOccupant(attrs);
      if (occupant) {
        return occupant.queueMessage(attrs);
      }
    }
    return false;
  }
  /**
   * @param {MessageAttributes} attrs
   * @returns {boolean}
   */
  handleMetadataFastening(attrs) {
    if (attrs.ogp_for_id) {
      if (attrs.from !== this.get("jid")) {
        return false;
      }
      const message = this.messages.findWhere({ "origin_id": attrs.ogp_for_id });
      if (message) {
        const old_list = message.get("ogp_metadata") || [];
        if (old_list.filter((m) => m["og:url"] === attrs["og:url"]).length) {
          return false;
        }
        const list = [...old_list, (0, import_pick3.default)(attrs, METADATA_ATTRIBUTES)];
        message.save("ogp_metadata", list);
        return true;
      }
    }
    return false;
  }
  /**
   * Given {@link MessageAttributes} look for XEP-0316 Room Notifications and create info
   * messages for them.
   * @param {MUCMessageAttributes} attrs
   * @returns {boolean}
   */
  handleMEPNotification(attrs) {
    if (attrs.from !== this.get("jid") || !attrs.activities) {
      return false;
    }
    attrs.activities?.forEach((activity_attrs) => {
      const data = Object.assign(attrs, activity_attrs);
      this.createMessage(data);
      api_default4.trigger("message", { "attrs": data, "chatbox": this });
    });
    return !!attrs.activities.length;
  }
  /**
   * Returns an already cached message (if it exists) based on the
   * passed in attributes map.
   * @param {object} attrs - Attributes representing a received
   *  message, as returned by {@link parseMUCMessage}
   * @returns {MUCMessage|BaseMessage}
   */
  getDuplicateMessage(attrs) {
    if (attrs.activities?.length) {
      return this.messages.findWhere({ type: "mep", msgid: attrs.msgid });
    } else {
      return super.getDuplicateMessage(attrs);
    }
  }
  /**
   * Handler for all MUC messages sent to this groupchat. This method
   * shouldn't be called directly, instead {@link MUC#queueMessage}
   * should be called.
   * @param {MUCMessageAttributes|StanzaParseError} attrs_or_error - A promise which resolves to the message attributes.
   */
  async onMessage(attrs_or_error) {
    if (u11.isErrorObject(attrs_or_error)) {
      return import_log24.default.error(
        /** @type {Error} */
        attrs_or_error.message
      );
    }
    const attrs = (
      /** @type {MUCMessageAttributes} */
      attrs_or_error
    );
    if (attrs.type === "error" && !await this.shouldShowErrorMessage(attrs)) {
      return;
    }
    const message = this.getDuplicateMessage(attrs);
    if (message) {
      message.get("type") === "groupchat" && this.updateMessage(message, attrs);
      return;
    } else if (attrs.receipt_id || attrs.is_marker || this.ignorableCSN(attrs)) {
      return;
    }
    if (this.handleMUCPrivateMessage(attrs) || this.handleMetadataFastening(attrs) || this.handleMEPNotification(attrs) || await this.handleModeration(attrs) || await this.handleRetraction(attrs) || await this.handleSubjectChange(attrs)) {
      attrs.nick && this.removeNotification(attrs.nick, ["composing", "paused"]);
      return;
    }
    this.setEditable(attrs, attrs.time);
    if (attrs["chat_state"]) {
      this.updateNotifications(attrs.nick, attrs.chat_state);
    }
    if (shouldCreateGroupchatMessage(attrs)) {
      const msg = await this.handleCorrection(attrs) || await this.createMessage(attrs);
      this.removeNotification(attrs.nick, ["composing", "paused"]);
      this.handleUnreadMessage(msg);
    }
  }
  /**
   * @param {Element} pres
   */
  handleModifyError(pres) {
    const text = pres.querySelector("error text")?.textContent;
    if (text) {
      if (this.session.get("connection_status") === ROOMSTATUS.CONNECTING) {
        this.setDisconnectionState(text);
      } else {
        const attrs = {
          "type": "error",
          "message": text,
          "is_ephemeral": true
        };
        this.createMessage(attrs);
      }
    }
  }
  /**
   * Handle a presence stanza that disconnects the user from the MUC
   * @param {MUCPresenceAttributes} attrs - The stanza
   */
  handleDisconnection(attrs) {
    const { is_self, reason, actor } = attrs;
    const codes = attrs.codes.filter((c) => DISCONNECT_CODES.includes(c));
    const disconnected = is_self && codes.length > 0;
    if (!disconnected) {
      return;
    }
    const { STATUS_CODE_MESSAGES } = (
      /** @type {UserMessage} */
      converse_default.labels.muc
    );
    const message = STATUS_CODE_MESSAGES[codes[0]];
    const status = codes.includes("301") ? ROOMSTATUS.BANNED : ROOMSTATUS.DISCONNECTED;
    this.setDisconnectionState(message, reason, actor?.nick, status);
  }
  /**
   * @param {import('./types').MUCStatusCode} code
   * @param {MUCPresenceAttributes} attrs
   */
  getActionInfoMessage(code, attrs) {
    const { nick, actor } = attrs;
    const __ = converse_default.__;
    if (code === "301") {
      return actor?.nick ? __("%1$s has been banned by %2$s", nick, actor.nick) : __("%1$s has been banned", nick);
    } else if (code === "303") {
      return __("%1$s's nickname has changed", nick);
    } else if (code === "307") {
      return actor?.nick ? __("%1$s has been kicked out by %2$s", nick, actor.nick) : __("%1$s has been kicked out", nick);
    } else if (code === "321") {
      return __("%1$s has been removed because of an affiliation change", nick);
    } else if (code === "322") {
      return __("%1$s has been removed for not being a member", nick);
    }
  }
  /**
   * @param {MUCOccupant} occupant
   */
  createAffiliationChangeMessage(occupant) {
    const __ = converse_default.__;
    const previous_affiliation = occupant._previousAttributes.affiliation;
    if (!previous_affiliation) {
      return;
    }
    const current_affiliation = occupant.get("affiliation");
    if (previous_affiliation === "admin" && isInfoVisible(public_default.AFFILIATION_CHANGES.EXADMIN)) {
      this.createMessage({
        type: "info",
        message: __("%1$s is no longer an admin of this groupchat", occupant.get("nick"))
      });
    } else if (previous_affiliation === "owner" && isInfoVisible(public_default.AFFILIATION_CHANGES.EXOWNER)) {
      this.createMessage({
        type: "info",
        message: __("%1$s is no longer an owner of this groupchat", occupant.get("nick"))
      });
    } else if (previous_affiliation === "outcast" && isInfoVisible(public_default.AFFILIATION_CHANGES.EXOUTCAST)) {
      this.createMessage({
        type: "info",
        message: __("%1$s is no longer banned from this groupchat", occupant.get("nick"))
      });
    }
    if (current_affiliation === "none" && previous_affiliation === "member" && isInfoVisible(public_default.AFFILIATION_CHANGES.EXMEMBER)) {
      this.createMessage({
        type: "info",
        message: __("%1$s is no longer a member of this groupchat", occupant.get("nick"))
      });
    }
    if (current_affiliation === "member" && isInfoVisible(public_default.AFFILIATION_CHANGES.MEMBER)) {
      this.createMessage({
        type: "info",
        message: __("%1$s is now a member of this groupchat", occupant.get("nick"))
      });
    } else if (current_affiliation === "admin" && isInfoVisible(public_default.AFFILIATION_CHANGES.ADMIN) || current_affiliation == "owner" && isInfoVisible(public_default.AFFILIATION_CHANGES.OWNER)) {
      this.createMessage({
        type: "info",
        message: __("%1$s is now an %2$s of this groupchat", occupant.get("nick"), current_affiliation)
      });
    }
  }
  createRoleChangeMessage(occupant, changed) {
    if (changed === "none" || occupant.changed.affiliation) {
      return;
    }
    const previous_role = occupant._previousAttributes.role;
    if (previous_role === "moderator" && isInfoVisible(public_default.MUC_ROLE_CHANGES.DEOP)) {
      this.updateNotifications(occupant.get("nick"), public_default.MUC_ROLE_CHANGES.DEOP);
    } else if (previous_role === "visitor" && isInfoVisible(public_default.MUC_ROLE_CHANGES.VOICE)) {
      this.updateNotifications(occupant.get("nick"), public_default.MUC_ROLE_CHANGES.VOICE);
    }
    if (occupant.get("role") === "visitor" && isInfoVisible(public_default.MUC_ROLE_CHANGES.MUTE)) {
      this.updateNotifications(occupant.get("nick"), public_default.MUC_ROLE_CHANGES.MUTE);
    } else if (occupant.get("role") === "moderator") {
      if (!["owner", "admin"].includes(occupant.get("affiliation")) && isInfoVisible(public_default.MUC_ROLE_CHANGES.OP)) {
        this.updateNotifications(occupant.get("nick"), public_default.MUC_ROLE_CHANGES.OP);
      }
    }
  }
  /**
   * Create an info message based on a received MUC status code in a
   * <presence> stanza.
   * @param {import('./types').MUCStatusCode} code
   * @param {MUCPresenceAttributes} attrs - The original stanza
   */
  createInfoMessageFromPresence(code, attrs) {
    const __ = converse_default.__;
    const is_self = (
      /** @type {MUCPresenceAttributes} */
      attrs.is_self ?? false
    );
    if (!isInfoVisible || code === "110" || code === "100" && !is_self) {
      return;
    }
    const { STATUS_CODE_MESSAGES } = (
      /** @type {UserMessage} */
      converse_default.labels.muc
    );
    const message = STATUS_CODE_MESSAGES[code];
    const data = {
      type: "info",
      is_ephemeral: true,
      message,
      code
    };
    if (!is_self && ACTION_INFO_CODES.includes(code)) {
      data.message = this.getActionInfoMessage(code, attrs);
      data.reason = attrs.reason;
    } else if (is_self && NEW_NICK_CODES.includes(code)) {
      data.message = attrs.nick ? __(message, attrs.nick) : void 0;
    }
    if (data.message) {
      if (code === "201" && this.messages.findWhere(data)) {
        return;
      }
      this.createMessage(data);
    }
  }
  /**
   * Create an info message based on a received MUC status code in a <message> stanza.
   * @param {import('./types').MUCStatusCode} code
   */
  createInfoMessage(code) {
    if (!isInfoVisible(code) || code === "110") {
      return;
    }
    const { STATUS_CODE_MESSAGES } = (
      /** @type {UserMessage} */
      converse_default.labels.muc
    );
    const message = STATUS_CODE_MESSAGES[code];
    if (message) {
      this.createMessage({
        type: "info",
        is_ephemeral: true,
        message,
        code
      });
    }
  }
  /**
   * Set parameters regarding disconnection from this room. This helps to
   * communicate to the user why they were disconnected.
   * @param {string} message - The disconnection message, as received from (or
   *  implied by) the server.
   * @param {string} [reason] - The reason provided for the disconnection
   * @param {string} [actor] - The person (if any) responsible for this disconnection
   * @param {number} [status] - The status code (see `ROOMSTATUS`)
   */
  setDisconnectionState(message, reason, actor, status = ROOMSTATUS.DISCONNECTED) {
    this.session.save({
      "connection_status": status,
      "disconnection_actor": actor,
      "disconnection_message": message,
      "disconnection_reason": reason
    });
  }
  /**
   * @param {Element} presence
   */
  onNicknameClash(presence) {
    const __ = converse_default.__;
    if (api_default4.settings.get("muc_nickname_from_jid")) {
      const nick = presence.getAttribute("from").split("/")[1];
      if (nick === converse_default.exports.getDefaultMUCNickname()) {
        this.join(nick + "-2");
      } else {
        const del = nick.lastIndexOf("-");
        const num = nick.substring(del + 1, nick.length);
        this.join(nick.substring(0, del + 1) + String(Number(num) + 1));
      }
    } else {
      this.save({
        "nickname_validation_message": __(
          "The nickname you chose is reserved or currently in use, please choose a different one."
        )
      });
      this.session.save({ "connection_status": ROOMSTATUS.NICKNAME_REQUIRED });
    }
  }
  /**
   * Parses a <presence> stanza with type "error" and sets the proper
   * `connection_status` value for this {@link MUC} as
   * well as any additional output that can be shown to the user.
   * @param {Element} stanza - The presence stanza
   */
  onErrorPresence(stanza) {
    const __ = converse_default.__;
    const error = stanza.querySelector("error");
    const error_type = error.getAttribute("type");
    const reason = (0, import_sizzle7.default)(`text[xmlns="${import_strophe21.Strophe.NS.STANZAS}"]`, error).pop()?.textContent;
    if (error_type === "modify") {
      this.handleModifyError(stanza);
    } else if (error_type === "auth") {
      if ((0, import_sizzle7.default)(`not-authorized[xmlns="${import_strophe21.Strophe.NS.STANZAS}"]`, error).length) {
        this.save({ "password_validation_message": reason || __("Password incorrect") });
        this.session.save({ "connection_status": ROOMSTATUS.PASSWORD_REQUIRED });
      }
      if (error.querySelector("registration-required")) {
        const message = __("You are not on the member list of this groupchat.");
        this.setDisconnectionState(message, reason);
      } else if (error.querySelector("forbidden")) {
        const { STATUS_CODE_MESSAGES } = (
          /** @type {UserMessage} */
          converse_default.labels.muc
        );
        this.setDisconnectionState(STATUS_CODE_MESSAGES[301], reason, null, ROOMSTATUS.BANNED);
      }
    } else if (error_type === "cancel") {
      if (error.querySelector("not-allowed")) {
        const message = __("You are not allowed to create new groupchats.");
        this.setDisconnectionState(message, reason);
      } else if (error.querySelector("not-acceptable")) {
        const message = __("Your nickname doesn't conform to this groupchat's policies.");
        this.setDisconnectionState(message, reason);
      } else if ((0, import_sizzle7.default)(`gone[xmlns="${import_strophe21.Strophe.NS.STANZAS}"]`, error).length) {
        const moved_jid = (0, import_sizzle7.default)(`gone[xmlns="${import_strophe21.Strophe.NS.STANZAS}"]`, error).pop()?.textContent.replace(/^xmpp:/, "").replace(/\?join$/, "");
        this.save({ moved_jid, "destroyed_reason": reason });
        this.session.save({ "connection_status": ROOMSTATUS.DESTROYED });
      } else if (error.querySelector("conflict")) {
        this.onNicknameClash(stanza);
      } else if (error.querySelector("item-not-found")) {
        const message = __("This groupchat does not (yet) exist.");
        this.setDisconnectionState(message, reason);
      } else if (error.querySelector("service-unavailable")) {
        const message = __("This groupchat has reached its maximum number of participants.");
        this.setDisconnectionState(message, reason);
      } else if (error.querySelector("remote-server-not-found")) {
        const message = __("Remote server not found");
        this.setDisconnectionState(message, reason);
      } else if (error.querySelector("forbidden")) {
        const message = __("You're not allowed to enter this groupchat");
        this.setDisconnectionState(message, reason);
      } else {
        const message = __("An error happened while trying to enter this groupchat");
        this.setDisconnectionState(message, reason);
      }
    }
  }
  /**
   * Listens for incoming presence stanzas from the service that hosts this MUC
   * @param {Element} stanza - The presence stanza
   */
  onPresenceFromMUCHost(stanza) {
    if (stanza.getAttribute("type") === "error") {
      const error = stanza.querySelector("error");
      if (error?.getAttribute("type") === "wait" && error?.querySelector("resource-constraint")) {
        if (this.session.get("connection_status") === ROOMSTATUS.DISCONNECTED) {
          this.rejoin();
        }
      }
    }
  }
  /**
   * Handles incoming presence stanzas coming from the MUC
   * @param {Element} stanza
   */
  async onPresence(stanza) {
    if (stanza.getAttribute("type") === "error") {
      return this.onErrorPresence(stanza);
    }
    const attrs = await parseMUCPresence(stanza, this);
    attrs.codes.forEach(async (code) => {
      this.createInfoMessageFromPresence(code, attrs);
      if (attrs.is_self && NEW_NICK_CODES.includes(code)) {
        this.save("nick", attrs.nick);
        if (code === "303" && api_default4.settings.get("auto_register_muc_nickname") && await api_default4.disco.supports(import_strophe21.Strophe.NS.MUC_REGISTER, this.get("jid"))) {
          try {
            await this.registerNickname();
          } catch (e) {
            import_log24.default.error(e);
            import_log24.default.error("Error: could not register new nickname");
          }
        }
      }
    });
    if (attrs.is_self) {
      this.onOwnPresence(attrs);
      if (this.getOwnRole() !== "none" && this.session.get("connection_status") === ROOMSTATUS.CONNECTING) {
        this.session.save("connection_status", ROOMSTATUS.CONNECTED);
      }
    } else {
      this.updateOccupantsOnPresence(attrs);
    }
  }
  /**
   * Handles a received presence relating to the current user.
   *
   * For locked groupchats (which are by definition "new"), the
   * groupchat will either be auto-configured or created instantly
   * (with default config) or a configuration groupchat will be
   * rendered.
   *
   * If the groupchat is not locked, then the groupchat will be
   * auto-configured only if applicable and if the current
   * user is the groupchat's owner.
   * @param {MUCPresenceAttributes} attrs
   */
  async onOwnPresence(attrs) {
    await this.occupants.fetched;
    if (attrs["type"] === "unavailable") {
      this.handleDisconnection(attrs);
      return;
    }
    const old_status = this.session.get("connection_status");
    if (old_status !== ROOMSTATUS.ENTERED && old_status !== ROOMSTATUS.CLOSING) {
      this.session.save("connection_status", ROOMSTATUS.ENTERED, { "silent": true });
      this.updateOccupantsOnPresence(attrs);
      this.session.trigger("change:connection_status", this.session, old_status);
    } else {
      this.updateOccupantsOnPresence(attrs);
    }
    const locked_room = attrs.codes.includes("201");
    if (locked_room) {
      if (this.get("auto_configure")) {
        await this.autoConfigureChatRoom().then(() => this.refreshDiscoInfo());
      } else if (api_default4.settings.get("muc_instant_rooms")) {
        await this.sendConfiguration().then(() => this.refreshDiscoInfo());
      } else {
        api_default4.modal.show("converse-muc-config-modal", { model: this });
      }
    }
  }
  /**
   * Returns a boolean to indicate whether the current user
   * was mentioned in a message.
   * @param {BaseMessage} message - The text message
   */
  isUserMentioned(message) {
    const nick = this.get("nick");
    if (message.get("references").length) {
      const mentions = message.get("references").filter((ref) => ref.type === "mention").map((ref) => ref.value);
      return mentions.includes(nick);
    } else {
      return new RegExp(`\\b${nick}\\b`).test(message.get("body"));
    }
  }
  /**
   * @param {BaseMessage} message - The text message
   */
  incrementUnreadMsgsCounter(message) {
    const settings4 = {
      "num_unread_general": this.get("num_unread_general") + 1
    };
    if (this.get("num_unread_general") === 0) {
      settings4["first_unread_id"] = message.get("id");
    }
    if (this.isUserMentioned(message)) {
      settings4.num_unread = this.get("num_unread") + 1;
    }
    this.save(settings4);
  }
  async clearUnreadMsgCounter() {
    if (this.get("num_unread_general") > 0 || this.get("num_unread") > 0 || this.get("has_activity")) {
      await this.sendMarkerForMessage(this.messages.last());
    }
    safeSave(this, {
      "has_activity": false,
      "num_unread": 0,
      "num_unread_general": 0
    });
  }
};
var muc_default = MUC;

// plugins/muc/occupant.js
var import_skeletor17 = require("@converse/skeletor");
var import_log25 = __toESM(require("@converse/log"));
var { Strophe: Strophe30, stx: stx7 } = public_default.env;
var MUCOccupant = class extends ModelWithVCard(ModelWithMessages(ColorAwareModel(import_skeletor17.Model))) {
  static {
    __name(this, "MUCOccupant");
  }
  /**
   * @typedef {import('../../shared/types').MessageAttributes} MessageAttributes
   * @typedef {import('../../shared/errors').StanzaParseError} StanzaParseError
   */
  async initialize() {
    this.lazy_load_vcard = true;
    super.initialize();
    await this.fetchMessages();
    this.on("change:nick", () => this.setColor());
    this.on("change:jid", () => this.setColor());
    this.on("change:chat_state", () => sendChatState(this.get("jid"), this.get("chat_state")));
  }
  defaults() {
    return {
      hats: [],
      presence: "offline",
      show: void 0,
      states: [],
      hidden: true,
      num_unread: 0,
      message_type: "chat"
    };
  }
  save(key, val, options) {
    let attrs;
    if (key == null) {
      return super.save(key, val, options);
    } else if (typeof key === "object") {
      attrs = key;
      options = val;
    } else {
      (attrs = {})[key] = val;
    }
    if (attrs.occupant_id) {
      attrs.id = attrs.occupant_id;
    }
    return super.save(attrs, options);
  }
  getMessagesCacheKey() {
    const id = this.get("occupant_id") || this.get("jid") || this.get("nick");
    return `converse.muc-private-msgs-${id}-${converse_default.session.get("bare_jid")}`;
  }
  getMessagesCollection() {
    return new messages_default();
  }
  /**
   * Handler for all MUC private messages sent to this occupant.
   * This method houldn't be called directly, instead {@link MUC#queueMessage} should be called.
   * @param {MessageAttributes|StanzaParseError} attrs_or_error
   */
  async onMessage(attrs_or_error) {
    if (utils_default.isErrorObject(attrs_or_error)) {
      const { stanza, message: message2 } = (
        /** @type {StanzaParseError} */
        attrs_or_error
      );
      if (stanza) import_log25.default.error(stanza);
      return import_log25.default.error(message2);
    }
    const attrs = (
      /** @type {MessageAttributes} */
      attrs_or_error
    );
    if (attrs.type === "error" && !await this.shouldShowErrorMessage(attrs)) {
      return;
    }
    const message = this.getDuplicateMessage(attrs);
    if (message) {
      this.updateMessage(message, attrs);
      return;
    } else if (await this.handleRetraction(attrs)) {
      return;
    }
    this.setEditable(attrs, attrs.time);
    if (shouldCreateGroupchatMessage(attrs)) {
      const msg = await this.handleCorrection(attrs) || await this.createMessage(attrs);
      this.handleUnreadMessage(msg);
    }
  }
  /**
   * @returns {string}
   */
  getDisplayName() {
    return this.get("nick") || this.get("jid") || "";
  }
  /**
   * Return roles which may be assigned to this occupant
   * @returns {typeof ROLES} - An array of assignable roles
   */
  getAssignableRoles() {
    let disabled = api_default4.settings.get("modtools_disable_assign");
    if (!Array.isArray(disabled)) {
      disabled = disabled ? ROLES : [];
    }
    if (this.get("role") === "moderator") {
      return ROLES.filter((r) => !disabled.includes(r));
    } else {
      return [];
    }
  }
  /**
   * Return affiliations which may be assigned by this occupant
   * @returns {typeof AFFILIATIONS} An array of assignable affiliations
   */
  getAssignableAffiliations() {
    let disabled = api_default4.settings.get("modtools_disable_assign");
    if (!Array.isArray(disabled)) {
      disabled = disabled ? AFFILIATIONS : [];
    }
    if (this.get("affiliation") === "owner") {
      return AFFILIATIONS.filter((a) => !disabled.includes(a));
    } else if (this.get("affiliation") === "admin") {
      return AFFILIATIONS.filter((a) => !["owner", "admin", ...disabled].includes(a));
    } else {
      return [];
    }
  }
  isMember() {
    return ["admin", "owner", "member"].includes(this.get("affiliation"));
  }
  isModerator() {
    return ["admin", "owner"].includes(this.get("affiliation")) || this.get("role") === "moderator";
  }
  isSelf() {
    return this.get("states").includes("110");
  }
  /**
   * @param {MessageAttributes} [attrs]
   * @return {Promise<MessageAttributes>}
   */
  async getOutgoingMessageAttributes(attrs) {
    const origin_id = utils_default.getUniqueId();
    const text = attrs?.body;
    const body = text ? utils_default.shortnamesToUnicode(text) : void 0;
    const muc = this.collection.chatroom;
    const own_occupant = muc.getOwnOccupant();
    attrs = Object.assign(
      {},
      attrs,
      {
        body,
        from: own_occupant.get("from"),
        fullname: converse_default.state.profile.get("fullname"),
        id: origin_id,
        jid: this.get("jid"),
        message: body,
        msgid: origin_id,
        nick: own_occupant.get("nickname"),
        origin_id,
        sender: "me",
        time: (/* @__PURE__ */ new Date()).toISOString(),
        to: this.get("from") ?? `${muc.get("jid")}/${this.get("nick")}`,
        type: "chat"
      },
      await utils_default.getMediaURLsMetadata(text)
    );
    attrs = await api_default4.hook("getOutgoingMessageAttributes", this, attrs);
    return attrs;
  }
  /**
   * @param {import('../chat/message').default} message - The message object
   */
  async createMessageStanza(message) {
    const stanza = await super.createMessageStanza(message);
    stanza.cnode(stx7`<x xmlns="${Strophe30.NS.MUC}#user"/>`).root();
    return stanza;
  }
  /**
   * @param {import('../../shared/message').default} message
   */
  isChatMessage(message) {
    return message.get("type") === this.get("message_type");
  }
};
var occupant_default = MUCOccupant;

// plugins/muc/occupants.js
var import_skeletor18 = require("@converse/skeletor");
var import_strophe22 = require("strophe.js");
var { u: u12 } = public_default.env;
var MUCOccupants = class _MUCOccupants extends import_skeletor18.Collection {
  static {
    __name(this, "MUCOccupants");
  }
  constructor(attrs, options) {
    super(
      attrs,
      Object.assign({ comparator: occupantsComparator }, options)
    );
    this.chatroom = null;
  }
  get model() {
    return occupant_default;
  }
  initialize() {
    this.on("change:nick", () => this.sort());
    this.on("change:role", () => this.sort());
  }
  static getAutoFetchedAffiliationLists() {
    const affs = api_default4.settings.get("muc_fetch_members");
    return Array.isArray(affs) ? affs : affs ? ["member", "admin", "owner"] : [];
  }
  /**
   * @param {Model|Attributes} attrs
   * @param {Options} [options]
   */
  create(attrs, options) {
    if (attrs.id || attrs instanceof import_skeletor18.Model) {
      return super.create(attrs, options);
    }
    attrs.id = attrs.occupant_id || getUniqueId();
    return super.create(attrs, options);
  }
  async fetchMembers() {
    if (!["member", "admin", "owner"].includes(this.getOwnOccupant()?.get("affiliation"))) {
      return;
    }
    const affiliations = _MUCOccupants.getAutoFetchedAffiliationLists();
    if (affiliations.length === 0) {
      return;
    }
    const muc_jid = this.chatroom.get("jid");
    const aff_lists = await Promise.all(affiliations.map((a) => getAffiliationList(a, muc_jid)));
    const new_members = aff_lists.reduce(
      /**
       * @param {MemberListItem[]} acc
       * @param {MemberListItem[]|Error} val
       * @returns {MemberListItem[]}
       */
      (acc, val) => {
        if (val instanceof Error) {
          return acc;
        }
        return [...val, ...acc];
      },
      []
    );
    const known_affiliations = affiliations.filter(
      (a) => !u12.isErrorObject(aff_lists[affiliations.indexOf(a)])
    );
    const new_jids = (
      /** @type {MemberListItem[]} */
      new_members.map((m) => m.jid).filter((m) => m !== void 0)
    );
    const new_nicks = (
      /** @type {MemberListItem[]} */
      new_members.map(
        (m) => !m.jid && m.nick || void 0
      ).filter((m) => m !== void 0)
    );
    const removed_members = this.filter((m) => {
      return known_affiliations.includes(m.get("affiliation")) && !new_nicks.includes(m.get("nick")) && !new_jids.includes(m.get("jid"));
    });
    const bare_jid = converse_default.session.get("bare_jid");
    removed_members.forEach((occupant) => {
      if (occupant.get("jid") === bare_jid) {
        return;
      } else if (occupant.get("show") === "offline") {
        occupant.destroy();
      } else {
        occupant.save("affiliation", null);
      }
    });
    new_members.forEach((attrs) => {
      const occupant = this.findOccupant(attrs);
      occupant ? occupant.save(attrs) : this.create(attrs);
    });
    api_default4.trigger("membersFetched");
  }
  /**
   * Try to find an existing occupant based on the provided {@link OccupantData} object.
   * Fetching the user by `occupant_id` is the quickest, O(1),
   * since it's a dictionary lookup.
   * Fetching by jid or nick is O(n), since it requires traversing an array.
   * Lookup by occupant_id is done first, then jid, and then nick.
   *
   * @param {import('./types').OccupantData} data
   */
  findOccupant(data) {
    if (data.occupant_id) {
      return this.get(data.occupant_id);
    }
    const jid = data.jid && import_strophe22.Strophe.getBareJidFromJid(data.jid);
    return jid && this.findWhere({ jid }) || data.nick && this.findWhere({ "nick": data.nick });
  }
  /**
   * Get the {@link MUCOccupant} instance which
   * represents the current user.
   * @method _converse.MUCOccupants#getOwnOccupant
   * @returns {MUCOccupant}
   */
  getOwnOccupant() {
    return this.findOccupant({
      jid: converse_default.session.get("bare_jid"),
      occupant_id: this.chatroom.get("occupant_id")
    });
  }
};
var occupants_default = MUCOccupants;

// plugins/chat/model.js
var import_openpromise11 = require("@converse/openpromise");
var import_log26 = __toESM(require("@converse/log"));
var { Strophe: Strophe32, u: u13 } = public_default.env;
var ChatBox = class extends ModelWithVCard(ModelWithMessages(ModelWithContact(ColorAwareModel(ChatBoxBase)))) {
  static {
    __name(this, "ChatBox");
  }
  /**
   * @typedef {import('./message.js').default} Message
   * @typedef {import('../muc/muc.js').default} MUC
   * @typedef {import('../../shared/types').MessageAttributes} MessageAttributes
   * @typedef {import('../../shared/errors').StanzaParseError} StanzaParseError
   */
  defaults() {
    return {
      bookmarked: false,
      hidden: isUniView() && !api_default4.settings.get("singleton"),
      message_type: "chat",
      num_unread: 0,
      time_opened: this.get("time_opened") || (/* @__PURE__ */ new Date()).getTime(),
      time_sent: (/* @__PURE__ */ new Date(0)).toISOString(),
      type: PRIVATE_CHAT_TYPE
    };
  }
  constructor(attrs, options) {
    super(attrs, options);
    this.disable_mam = false;
  }
  async initialize() {
    super.initialize();
    this.initialized = (0, import_openpromise11.getOpenPromise)();
    const jid = this.get("jid");
    this.setPresence(jid);
    await this.setModelContact(jid);
    this.on("change:chat_state", () => sendChatState(this.get("jid"), this.get("chat_state")));
    this.on("change:hidden", () => this.get("hidden") && this.setChatState(INACTIVE));
    await this.fetchMessages();
    await api_default4.trigger("chatBoxInitialized", this, { synchronous: true });
    this.initialized.resolve();
  }
  /**
   * @param {string} jid
   */
  async setPresence(jid) {
    await api_default4.waitUntil("presencesInitialized");
    const { presences } = converse_default.state;
    this.presence = presences.get(jid) || presences.create({ jid });
    this.presence.on("change:show", (item) => this.onPresenceChanged(item));
  }
  /**
   * @param {MessageAttributes|StanzaParseError} attrs_or_error
   */
  async onMessage(attrs_or_error) {
    if (u13.isErrorObject(attrs_or_error)) {
      const { stanza, message: message2 } = (
        /** @type {StanzaParseError} */
        attrs_or_error
      );
      if (stanza) import_log26.default.error(stanza);
      return import_log26.default.error(message2);
    }
    const attrs = (
      /** @type {MessageAttributes} */
      attrs_or_error
    );
    const message = this.getDuplicateMessage(attrs);
    if (message) {
      this.updateMessage(message, attrs);
    } else if (!this.handleReceipt(attrs) && !this.handleChatMarker(attrs) && !await this.handleRetraction(attrs)) {
      this.setEditable(attrs, attrs.time);
      if (attrs["chat_state"] && attrs.sender === "them") {
        this.notifications.set("chat_state", attrs.chat_state);
      }
      if (u13.shouldCreateMessage(attrs)) {
        const msg = await this.handleCorrection(attrs) || await this.createMessage(attrs);
        this.notifications.set({ "chat_state": null });
        this.handleUnreadMessage(msg);
      }
    }
  }
  /**
   * @param {import('../roster/presence').default} item
   */
  onPresenceChanged(item) {
    const { __ } = converse_default;
    const show = item.get("show");
    const fullname = this.getDisplayName();
    let text;
    if (show === "offline") {
      text = __("%1$s has gone offline", fullname);
    } else if (show === "away") {
      text = __("%1$s has gone away", fullname);
    } else if (show === "dnd") {
      text = __("%1$s is busy", fullname);
    } else if (show === "online") {
      text = __("%1$s is online", fullname);
    }
    text && this.createMessage({ message: text, type: "info", is_ephemeral: true });
  }
  async close() {
    if (api_default4.connection.connected()) {
      this.setChatState(INACTIVE);
      sendChatState(this.get("jid"), this.get("chat_state"));
    }
    await super.close();
  }
  /**
   * @returns {string|null}
   */
  getDisplayName() {
    if (this.contact) {
      const display_name = this.contact.getDisplayName({ no_jid: true });
      if (display_name) return display_name;
    }
    if (this.vcard) {
      return this.vcard.getDisplayName();
    } else {
      return this.get("jid");
    }
  }
  /**
   * @param {string} jid1
   * @param {string} jid2
   */
  isSameUser(jid1, jid2) {
    return u13.isSameBareJID(jid1, jid2);
  }
  /**
   * @param {MessageAttributes} attrs
   */
  handleChatMarker(attrs) {
    const to_bare_jid = Strophe32.getBareJidFromJid(attrs.to);
    if (to_bare_jid !== converse_default.session.get("bare_jid")) {
      return false;
    }
    if (attrs.is_markable) {
      if (this.contact && !["none", "to", void 0].includes(this.contact.get("subscription")) && !attrs.is_archived && !attrs.is_carbon) {
        sendMarker(attrs.from, attrs.msgid, "received");
      }
      return false;
    } else if (attrs.marker_id) {
      const message = this.messages.findWhere({ "msgid": attrs.marker_id });
      const field_name = `marker_${attrs.marker}`;
      if (message && !message.get(field_name)) {
        message.save({ field_name: (/* @__PURE__ */ new Date()).toISOString() });
      }
      return true;
    }
  }
  /**
   * @param {MessageAttributes} [attrs]
   * @return {Promise<MessageAttributes>}
   */
  async getOutgoingMessageAttributes(attrs) {
    const is_spoiler = !!this.get("composing_spoiler");
    const origin_id = u13.getUniqueId();
    const text = attrs?.body;
    const body = text ? u13.shortnamesToUnicode(text) : void 0;
    attrs = Object.assign(
      {},
      attrs,
      {
        body,
        from: converse_default.session.get("jid"),
        fullname: converse_default.state.profile.get("fullname"),
        id: origin_id,
        is_spoiler,
        jid: this.get("jid"),
        message: body,
        msgid: origin_id,
        nick: this.get("nickname"),
        origin_id,
        sender: "me",
        time: (/* @__PURE__ */ new Date()).toISOString(),
        type: this.get("message_type")
      },
      await u13.getMediaURLsMetadata(text)
    );
    attrs = await api_default4.hook("getOutgoingMessageAttributes", this, attrs);
    return attrs;
  }
  canPostMessages() {
    return true;
  }
  /**
   * @param {import('../../shared/message').default} message
   */
  isChatMessage(message) {
    const type = message.get("type");
    return type === this.get("message_type") || type === "normal";
  }
};
var model_default2 = ChatBox;

// plugins/chat/message.js
var import_strophe23 = require("strophe.js");
var import_openpromise12 = require("@converse/openpromise");
var Message = class extends message_default {
  static {
    __name(this, "Message");
  }
  async initialize() {
    super.initialize();
    this.initialized = (0, import_openpromise12.getOpenPromise)();
    this.on("change:type", () => this.setContact());
    await this.setContact();
    await api_default4.trigger("messageInitialized", this, { synchronous: true });
    this.initialized.resolve();
  }
  setContact() {
    if (["chat", "normal"].includes(this.get("type"))) {
      return this.setModelContact(import_strophe23.Strophe.getBareJidFromJid(this.get("from")));
    }
  }
  getDisplayName() {
    if (this.contact) {
      return this.contact.getDisplayName();
    } else if (this.vcard) {
      return this.vcard.getDisplayName();
    } else {
      return this.get("from");
    }
  }
};
var message_default3 = Message;

// plugins/chat/messages.js
var import_skeletor19 = require("@converse/skeletor");
var Messages = class extends import_skeletor19.Collection {
  static {
    __name(this, "Messages");
  }
  constructor() {
    super();
    this.comparator = "time";
    this.model = message_default3;
    this.fetched = null;
    this.chatbox = null;
  }
};
var messages_default2 = Messages;

// plugins/chat/api.js
var import_log27 = __toESM(require("@converse/log"));
var api_default6 = {
  /**
   * The "chats" namespace (used for one-on-one chats)
   *
   * @namespace api.chats
   * @memberOf api
   */
  chats: {
    /**
     * @method api.chats.create
     * @param {string|string[]} jids An jid or array of jids
     * @param {object} [attrs] An object containing configuration attributes.
     * @returns {Promise<ChatBox|ChatBox[]>}
     */
    async create(jids, attrs) {
      if (typeof jids === "string") {
        if (attrs && !attrs?.fullname) {
          const contact = await api_default4.contacts.get(jids);
          attrs.fullname = contact?.attributes?.fullname;
        }
        const chatbox = api_default4.chats.get(jids, attrs, true);
        if (!chatbox) {
          import_log27.default.error("Could not open chatbox for JID: " + jids);
          return;
        }
        return chatbox;
      }
      if (Array.isArray(jids)) {
        return Promise.all(jids.map(async (jid) => {
          const contact = await api_default4.contacts.get(jids);
          attrs.fullname = contact?.attributes?.fullname;
          return api_default4.chats.get(jid, attrs, true).maybeShow();
        }));
      }
      import_log27.default.error("chats.create: You need to provide at least one JID");
      return null;
    },
    /**
     * Opens a new one-on-one chat.
     *
     * @method api.chats.open
     * @param {String|string[]} jids - e.g. 'buddy@example.com' or ['buddy1@example.com', 'buddy2@example.com']
     * @param {Object} [attrs] - Attributes to be set on the _converse.ChatBox model.
     * @param {Boolean} [attrs.minimized] - Should the chat be created in minimized state.
     * @param {Boolean} [force=false] - By default, a minimized
     *   chat won't be maximized (in `overlayed` view mode) and in
     *   `fullscreen` view mode a newly opened chat won't replace
     *   another chat already in the foreground.
     *   Set `force` to `true` if you want to force the chat to be
     *   maximized or shown.
     * @returns {Promise} Promise which resolves with the
     *   _converse.ChatBox representing the chat.
     *
     * @example
     * // To open a single chat, provide the JID of the contact you're chatting with in that chat:
     * converse.plugins.add('myplugin', {
     *     initialize: function() {
     *         const _converse = this._converse;
     *         // Note, buddy@example.org must be in your contacts roster!
     *         api.chats.open('buddy@example.com').then(chat => {
     *             // Now you can do something with the chat model
     *         });
     *     }
     * });
     *
     * @example
     * // To open an array of chats, provide an array of JIDs:
     * converse.plugins.add('myplugin', {
     *     initialize: function () {
     *         const _converse = this._converse;
     *         // Note, these users must first be in your contacts roster!
     *         api.chats.open(['buddy1@example.com', 'buddy2@example.com']).then(chats => {
     *             // Now you can do something with the chat models
     *         });
     *     }
     * });
     */
    async open(jids, attrs, force) {
      if (typeof jids === "string") {
        const chat = await api_default4.chats.get(jids, attrs, true);
        if (chat) {
          return chat.maybeShow(force);
        }
        return chat;
      } else if (Array.isArray(jids)) {
        return Promise.all(
          jids.map((j) => api_default4.chats.get(j, attrs, true).then((c) => c && c.maybeShow(force))).filter((c) => c)
        );
      }
      const err_msg = "chats.open: You need to provide at least one JID";
      import_log27.default.error(err_msg);
      throw new Error(err_msg);
    },
    /**
     * Retrieves a chat or all chats.
     *
     * @method api.chats.get
     * @param {String|string[]} jids - e.g. 'buddy@example.com' or ['buddy1@example.com', 'buddy2@example.com']
     * @param {Object} [attrs] - Attributes to be set on the _converse.ChatBox model.
     * @param {Boolean} [create=false] - Whether the chat should be created if it's not found.
     * @returns {Promise<ChatBox[]>}
     *
     * @example
     * // To return a single chat, provide the JID of the contact you're chatting with in that chat:
     * const model = await api.chats.get('buddy@example.com');
     *
     * @example
     * // To return an array of chats, provide an array of JIDs:
     * const models = await api.chats.get(['buddy1@example.com', 'buddy2@example.com']);
     *
     * @example
     * // To return all open chats, call the method without any parameters::
     * const models = await api.chats.get();
     *
     */
    async get(jids, attrs = {}, create = false) {
      await api_default4.waitUntil("chatBoxesFetched");
      async function _get(jid) {
        let model = await api_default4.chatboxes.get(jid);
        if (!model && create) {
          model = await api_default4.chatboxes.create(jid, attrs, converse_default.exports.ChatBox);
        } else {
          model = model && model.get("type") === PRIVATE_CHAT_TYPE ? model : null;
          if (model && Object.keys(attrs).length) {
            model.save(attrs);
          }
        }
        return model;
      }
      __name(_get, "_get");
      if (jids === void 0) {
        const chats = await api_default4.chatboxes.get();
        return chats.filter((c) => c.get("type") === PRIVATE_CHAT_TYPE);
      } else if (typeof jids === "string") {
        return _get(jids);
      }
      return Promise.all(jids.map((jid) => _get(jid)));
    }
  }
};

// plugins/chat/plugin.js
public_default.plugins.add("converse-chat", {
  dependencies: ["converse-chatboxes", "converse-disco"],
  initialize() {
    api_default4.settings.extend({
      "allow_message_corrections": "all",
      "allow_message_retraction": "all",
      "allow_message_styling": true,
      "auto_join_private_chats": [],
      "clear_messages_on_reconnection": false,
      "filter_by_resource": false,
      "prune_messages_above": void 0,
      "pruning_behavior": "unscrolled",
      "send_chat_markers": ["received", "displayed", "acknowledged"],
      "send_chat_state_notifications": true
    });
    const exports2 = { ChatBox: model_default2, Message: message_default3, Messages: messages_default2, handleMessageStanza };
    Object.assign(converse_default, exports2);
    Object.assign(converse_default.exports, exports2);
    Object.assign(api_default4, api_default6);
    api_default2.registry.add(PRIVATE_CHAT_TYPE, model_default2);
    routeToChat();
    addEventListener("hashchange", routeToChat);
    api_default4.listen.on("chatBoxesFetched", autoJoinChats);
    api_default4.listen.on("presencesInitialized", registerMessageHandlers);
    api_default4.listen.on("connected", () => enableCarbons());
    api_default4.listen.on("reconnected", () => enableCarbons());
  }
});

// plugins/disco/entity.js
var import_skeletor20 = require("@converse/skeletor");
var import_openpromise13 = require("@converse/openpromise");
var import_log28 = __toESM(require("@converse/log"));
var import_sizzle8 = __toESM(require("sizzle"));
var { Strophe: Strophe34, u: u14 } = public_default.env;
var DiscoEntity = class extends import_skeletor20.Model {
  static {
    __name(this, "DiscoEntity");
  }
  get idAttribute() {
    return "jid";
  }
  initialize(_, options) {
    super.initialize();
    this.waitUntilFeaturesDiscovered = (0, import_openpromise13.getOpenPromise)();
    this.waitUntilItemsFetched = (0, import_openpromise13.getOpenPromise)();
    this.dataforms = new import_skeletor20.Collection();
    let id = `converse.dataforms-${this.get("jid")}`;
    this.dataforms.browserStorage = createStore(id, "session");
    this.features = new import_skeletor20.Collection();
    id = `converse.features-${this.get("jid")}`;
    this.features.browserStorage = createStore(id, "session");
    this.listenTo(this.features, "add", this.onFeatureAdded);
    this.fields = new import_skeletor20.Collection();
    id = `converse.fields-${this.get("jid")}`;
    this.fields.browserStorage = createStore(id, "session");
    this.listenTo(this.fields, "add", this.onFieldAdded);
    this.items = new import_skeletor20.Collection();
    id = `converse.items-${this.get("jid")}`;
    this.items.browserStorage = createStore(id, "session");
    this.identities = new import_skeletor20.Collection();
    id = `converse.identities-${this.get("jid")}`;
    this.identities.browserStorage = createStore(id, "session");
    this.fetchFeatures(options);
  }
  /**
   * Returns a Promise which resolves with a map indicating
   * whether a given identity is provided by this entity.
   * @method _converse.DiscoEntity#getIdentity
   * @param {String} category - The identity category
   * @param {String} type - The identity type
   */
  async getIdentity(category, type) {
    await this.waitUntilItemsFetched;
    return this.identities.findWhere({ category, type });
  }
  /**
   * Returns a Promise which resolves with a map indicating
   * whether a given feature is supported.
   * @method _converse.DiscoEntity#getFeature
   * @param {String} feature - The feature that might be supported.
   */
  async getFeature(feature) {
    await this.waitUntilFeaturesDiscovered;
    if (this.features.findWhere({ var: feature })) {
      return this;
    }
  }
  onFeatureAdded(feature) {
    feature.entity = this;
    api_default4.trigger("serviceDiscovered", feature);
  }
  onFieldAdded(field) {
    field.entity = this;
    api_default4.trigger("discoExtensionFieldDiscovered", field);
  }
  /**
   * @param {import('./types').FetchEntityFeaturesOptions} options
   */
  async fetchFeatures(options) {
    if (options.ignore_cache) {
      await this.queryInfo(options);
    } else {
      const store_id = this.features.browserStorage.name;
      const result = await this.features.browserStorage.store.getItem(store_id);
      if (result && result.length === 0 || result === null) {
        await this.queryInfo();
      } else {
        await new Promise((resolve) => this.fetch({ success: resolve, error: resolve }));
        await new Promise(
          (resolve) => this.features.fetch({
            add: true,
            success: /* @__PURE__ */ __name(() => {
              this.waitUntilFeaturesDiscovered.resolve(this);
              this.trigger("featuresDiscovered");
              resolve();
            }, "success"),
            error: resolve
          })
        );
        await new Promise((resolve) => this.identities.fetch({ add: true, success: resolve, error: resolve }));
        const items = this.get("items");
        if (Array.isArray(items)) {
          await Promise.all(
            items.map(
              /** @param {string} jid */
              async (jid) => await api_default4.disco.entities.get(jid, true)
            )
          );
        } else {
          await this.queryForItems();
        }
        this.waitUntilItemsFetched.resolve();
      }
    }
  }
  /**
   * @param {import('./types').DiscoInfoOptions} [options]
   */
  async queryInfo(options) {
    let stanza;
    try {
      stanza = await api_default4.disco.info(this.get("jid"), null, options);
    } catch (iq) {
      /*! TOFIND */
      return;
      if (u14.isElement(iq)) {
        const e = await parseErrorStanza(iq);
        if (e.message !== "item-not-found") {
          import_log28.default.error(`Error querying disco#info for ${this.get("jid")}: ${e.message}`);
        }
        this.save({ error: e.message });
        this.waitUntilFeaturesDiscovered.resolve(e);
        this.waitUntilItemsFetched.resolve(e);
      } else {
        if (iq === null) {
          import_log28.default.error(`Timeout for disco#info query for ${this.get("jid")}`);
        } else {
          import_log28.default.error(`Error querying disco#info for ${this.get("jid")}: ${iq}`);
        }
        this.waitUntilFeaturesDiscovered.resolve(iq);
        this.waitUntilItemsFetched.resolve(iq);
      }
      return;
    }
    this.onInfo(stanza);
  }
  /**
   * @param {Element} stanza
   */
  onDiscoItems(stanza) {
    const item_els = (0, import_sizzle8.default)(`query[xmlns="${Strophe34.NS.DISCO_ITEMS}"] item`, stanza);
    const item_jids = [];
    item_els.forEach((item) => {
      if (item.getAttribute("node")) {
        return;
      }
      const jid = item.getAttribute("jid");
      let entity = converse_default.state.disco_entities.get(jid);
      if (entity) {
        const parent_jids = entity.get("parent_jids") || [];
        entity.set({ parent_jids: [...parent_jids, this.get("jid")] });
      } else {
        entity = api_default4.disco.entities.create({
          jid,
          parent_jids: [this.get("jid")],
          name: item.getAttribute("name")
        });
      }
      item_jids.push(entity.get("jid"));
    });
    this.save({ items: item_jids });
  }
  async queryForItems() {
    if (this.identities.where({ category: "server" }).length === 0) {
      return;
    }
    const stanza = await api_default4.disco.items(this.get("jid"));
    this.onDiscoItems(stanza);
  }
  /**
   * @param {Element} stanza
   */
  async onInfo(stanza) {
    Array.from(stanza.querySelectorAll("identity")).forEach((identity) => {
      this.identities.create({
        category: identity.getAttribute("category"),
        type: identity.getAttribute("type"),
        name: identity.getAttribute("name")
      });
    });
    (0, import_sizzle8.default)(`x[type="result"][xmlns="${Strophe34.NS.XFORM}"]`, stanza).forEach((form) => {
      const data = {};
      (0, import_sizzle8.default)("field", form).forEach((field) => {
        data[field.getAttribute("var")] = {
          "value": field.querySelector("value")?.textContent,
          "type": field.getAttribute("type")
        };
      });
      this.dataforms.create(data);
    });
    if (stanza.querySelector(`feature[var="${Strophe34.NS.DISCO_ITEMS}"]`)) {
      await this.queryForItems();
    }
    this.waitUntilItemsFetched.resolve();
    Array.from(stanza.querySelectorAll("feature")).forEach((feature) => {
      this.features.create({
        "var": feature.getAttribute("var"),
        "from": stanza.getAttribute("from")
      });
    });
    (0, import_sizzle8.default)('x[type="result"][xmlns="jabber:x:data"] field', stanza).forEach((field) => {
      this.fields.create({
        "var": field.getAttribute("var"),
        "value": field.querySelector("value")?.textContent,
        "from": stanza.getAttribute("from")
      });
    });
    this.waitUntilFeaturesDiscovered.resolve(this);
    this.trigger("featuresDiscovered");
  }
};
var entity_default = DiscoEntity;

// plugins/disco/entities.js
var import_log29 = __toESM(require("@converse/log"));
var import_skeletor21 = require("@converse/skeletor");
var DiscoEntities = class extends import_skeletor21.Collection {
  static {
    __name(this, "DiscoEntities");
  }
  constructor() {
    super();
    this.model = entity_default;
  }
  fetchEntities() {
    return new Promise((resolve, reject) => {
      this.fetch({
        add: true,
        success: resolve,
        error(_m, e) {
          import_log29.default.error(e);
          reject(new Error("Could not fetch disco entities"));
        }
      });
    });
  }
};
var entities_default = DiscoEntities;

// plugins/disco/api.js
var import_openpromise14 = require("@converse/openpromise");
var import_log30 = __toESM(require("@converse/log"));
var { Strophe: Strophe35, $iq: $iq5 } = public_default.env;
var api_default7 = {
  /**
   * @typedef {import('./entities').default} DiscoEntities
   * @typedef {import('./entity').default} DiscoEntity
   * @typedef {import('./index').DiscoState} DiscoState
   * @typedef {import('@converse/skeletor').Collection} Collection
   */
  /**
   * The XEP-0030 service discovery API
   *
   * This API lets you discover information about entities on the
   * XMPP network.
   *
   * @namespace api.disco
   * @memberOf api
   */
  disco: {
    /**
     * @namespace api.disco.stream
     * @memberOf api.disco
     */
    stream: {
      /**
       * @method api.disco.stream.getFeature
       * @param { String } name The feature name
       * @param { String } xmlns The XML namespace
       * @example _converse.api.disco.stream.getFeature('ver', 'urn:xmpp:features:rosterver')
       */
      async getFeature(name, xmlns) {
        await api_default4.waitUntil("streamFeaturesAdded");
        const stream_features = (
          /** @type {Collection} */
          converse_default.state.stream_features
        );
        if (!name || !xmlns) {
          throw new Error("name and xmlns need to be provided when calling disco.stream.getFeature");
        }
        if (stream_features === void 0 && !api_default4.connection.connected()) {
          const msg = `Tried to get feature ${name} ${xmlns} but stream_features has been torn down`;
          import_log30.default.warn(msg);
          return;
        }
        return stream_features.findWhere({ "name": name, "xmlns": xmlns });
      }
    },
    /**
     * @namespace api.disco.own
     * @memberOf api.disco
     */
    own: {
      /**
       * @namespace api.disco.own.identities
       * @memberOf api.disco.own
       */
      identities: {
        /**
         * Lets you add new identities for this client (i.e. instance of Converse)
         * @method api.disco.own.identities.add
         *
         * @param {String} category - server, client, gateway, directory, etc.
         * @param {String} type - phone, pc, web, etc.
         * @param {String} name - "Converse"
         * @param {String} lang - en, el, de, etc.
         *
         * @example _converse.api.disco.own.identities.clear();
         */
        add(category, type, name, lang) {
          const disco = (
            /** @type {DiscoState} */
            converse_default.state.disco
          );
          for (var i2 = 0; i2 < disco._identities.length; i2++) {
            if (disco._identities[i2].category == category && disco._identities[i2].type == type && disco._identities[i2].name == name && disco._identities[i2].lang == lang) {
              return false;
            }
          }
          disco._identities.push({ category, type, name, lang });
        },
        /**
         * Clears all previously registered identities.
         * @method api.disco.own.identities.clear
         * @example _converse.api.disco.own.identities.clear();
         */
        clear() {
          converse_default.state.disco._identities = [];
        },
        /**
         * Returns all of the identities registered for this client
         * (i.e. instance of Converse).
         * @method api.disco.identities.get
         * @example const identities = api.disco.own.identities.get();
         */
        get() {
          return (
            /** @type {DiscoState} */
            converse_default.state.disco._identities
          );
        }
      },
      /**
       * @namespace api.disco.own.features
       * @memberOf api.disco.own
       */
      features: {
        /**
         * Lets you register new disco features for this client (i.e. instance of Converse)
         * @method api.disco.own.features.add
         * @param { String } name - e.g. http://jabber.org/protocol/caps
         * @example _converse.api.disco.own.features.add("http://jabber.org/protocol/caps");
         */
        add(name) {
          const disco = (
            /** @type {DiscoState} */
            converse_default.state.disco
          );
          for (let i2 = 0; i2 < disco._features.length; i2++) {
            if (disco._features[i2] == name) {
              return false;
            }
          }
          disco._features.push(name);
        },
        /**
         * Clears all previously registered features.
         * @method api.disco.own.features.clear
         * @example _converse.api.disco.own.features.clear();
         */
        clear() {
          const disco = (
            /** @type {DiscoState} */
            converse_default.state.disco
          );
          disco._features = [];
        },
        /**
         * Returns all of the features registered for this client (i.e. instance of Converse).
         * @method api.disco.own.features.get
         * @example const features = api.disco.own.features.get();
         */
        get() {
          return (
            /** @type {DiscoState} */
            converse_default.state.disco._features
          );
        }
      }
    },
    /**
     * Query for information about an XMPP entity
     *
     * @method api.disco.info
     * @param {string} jid The Jabber ID of the entity to query
     * @param {string} [node] A specific node identifier associated with the JID
     * @param {import('./types').DiscoInfoOptions} [options]
     * @returns {promise} Promise which resolves once we have a result from the server.
     */
    info(jid, node, options) {
      const attrs = { xmlns: Strophe35.NS.DISCO_INFO };
      if (node) {
        attrs.node = node;
      }
      const info = $iq5({
        "from": api_default4.connection.get().jid,
        "to": jid,
        "type": "get"
      }).c("query", attrs);
      return api_default4.sendIQ(info, options?.timeout);
    },
    /**
     * Query for items associated with an XMPP entity
     *
     * @method api.disco.items
     * @param {string} jid The Jabber ID of the entity to query for items
     * @param {string} [node] A specific node identifier associated with the JID
     * @returns {promise} Promise which resolves once we have a result from the server.
     */
    items(jid, node) {
      const attrs = { xmlns: Strophe35.NS.DISCO_ITEMS };
      if (node) {
        attrs.node = node;
      }
      return api_default4.sendIQ(
        $iq5({
          "from": api_default4.connection.get().jid,
          "to": jid,
          "type": "get"
        }).c("query", attrs)
      );
    },
    /**
     * Namespace for methods associated with disco entities
     *
     * @namespace api.disco.entities
     * @memberOf api.disco
     */
    entities: {
      /**
       * Finds the first entity advertising a given feature.
       *
       * @method api.disco.entities.find
       * @param {string} feature The feature var to search for.
       * @param {string} [jid] The entity JID whose subtree to search. If omitted, own bare JID and domain are queried.
       * @returns {Promise<DiscoEntity[]>} An array of matching DiscoEntity instances.
       */
      async find(feature, jid) {
        await api_default4.waitUntil("discoInitialized");
        const disco_entities = (
          /** @type {DiscoEntities} */
          converse_default.state.disco_entities
        );
        if (!disco_entities) return [];
        const candidates = [];
        if (jid) {
          const entity = await api_default4.disco.entities.get(jid, true);
          if (entity) {
            const items = await api_default4.disco.entities.items(jid);
            candidates.push(entity, ...items);
          }
        } else {
          const bare_jid = converse_default.session.get("bare_jid");
          const bare_entity = await api_default4.disco.entities.get(bare_jid, true);
          if (bare_entity) candidates.push(bare_entity);
          const domain = Strophe35.getDomainFromJid(bare_jid);
          const domain_entity = await api_default4.disco.entities.get(domain, true);
          if (domain_entity) {
            const items = await api_default4.disco.entities.items(domain);
            candidates.push(domain_entity, ...items);
          }
        }
        const unique2 = Array.from(new Map(candidates.map((e) => [e.get("jid"), e])).values());
        const checks = unique2.map(async (entity) => {
          const has = await entity.getFeature(feature);
          return has ? entity : null;
        });
        const results = await Promise.all(checks);
        return results.filter((e) => e);
      },
      /**
       * Get the corresponding `DiscoEntity` instance.
       *
       * @method api.disco.entities.get
       * @param {string} jid The Jabber ID of the entity
       * @param {boolean} [create] Whether the entity should be created if it doesn't exist.
       * @return {Promise<DiscoEntity|DiscoEntities|undefined>}
       * @example _converse.api.disco.entities.get(jid);
       */
      async get(jid, create = false) {
        await api_default4.waitUntil("discoInitialized");
        const disco_entities = (
          /** @type {DiscoEntities} */
          converse_default.state.disco_entities
        );
        if (!jid) {
          return disco_entities;
        }
        if (disco_entities === void 0) {
          import_log30.default.warn(`Tried to look up entity ${jid} but disco_entities has been torn down`);
          return;
        }
        const entity = disco_entities.get(jid);
        if (entity || !create) {
          return entity;
        }
        return api_default4.disco.entities.create({ jid });
      },
      /**
       * Return the disco items advertised on this entity
       *
       * @method api.disco.entities.items
       * @param {string} jid - The Jabber ID of the entity for which we want to fetch items
       * @returns {Promise<DiscoEntity[]>}
       * @example api.disco.entities.items(jid);
       */
      async items(jid) {
        const entity = await api_default4.disco.entities.get(jid);
        if (entity) {
          await entity.waitUntilItemsFetched;
          const item_jids = entity.get("items") || [];
          return Promise.all(item_jids.map(
            /** @param {string} jid */
            (jid2) => api_default4.disco.entities.get(jid2)
          ));
        }
        return [];
      },
      /**
       * Create a new  disco entity. It's identity and features
       * will automatically be fetched from cache or from the
       * XMPP server.
       *
       * Fetching from cache can be disabled by passing in
       * `ignore_cache: true` in the options parameter.
       *
       * @method api.disco.entities.create
       * @param {object} data
       * @param {string} data.jid - The Jabber ID of the entity
       * @param {string} data.parent_jid - The Jabber ID of the parent entity
       * @param {string} data.name
       * @param {object} [options] - Additional options
       * @param {boolean} [options.ignore_cache]
       *     If true, fetch all features from the XMPP server instead of restoring them from cache
       * @example _converse.api.disco.entities.create({ jid }, {'ignore_cache': true});
       */
      create(data, options) {
        const disco_entities = (
          /** @type {DiscoEntities} */
          converse_default.state.disco_entities
        );
        return disco_entities.create(data, options);
      }
    },
    /**
     * @namespace api.disco.features
     * @memberOf api.disco
     */
    features: {
      /**
       * Return a given feature of a disco entity
       *
       * @method api.disco.features.get
       * @param {string} feature The feature that might be
       *     supported. In the XML stanza, this is the `var`
       *     attribute of the `<feature>` element. For
       *     example: `http://jabber.org/protocol/muc`
       * @param {string} jid The JID of the entity
       *     (and its associated items) which should be queried
       * @returns {Promise<import('@converse/skeletor').Model|import('@converse/skeletor').Model[]>}
       *     A promise which resolves with a list containing
       *     _converse.Entity instances representing the entity
       *     itself or those items associated with the entity if
       *     they support the given feature.
       * @example
       * api.disco.features.get(Strophe.NS.MAM, _converse.bare_jid);
       */
      async get(feature, jid) {
        if (!jid) throw new TypeError("api.disco.features.get: You need to provide an entity JID");
        const entity = await api_default4.disco.entities.get(jid, true);
        if (converse_default.state.disco_entities === void 0 && !api_default4.connection.connected()) {
          import_log30.default.warn(
            `Tried to get feature ${feature} for ${jid} but _converse.disco_entities has been torn down`
          );
          return [];
        }
        const items = await api_default4.disco.entities.items(jid);
        const promises = [entity.getFeature(feature), ...items.map((i2) => i2.getFeature(feature))];
        const result = await Promise.all(promises);
        return result.filter((f) => f instanceof Object);
      },
      /**
       * Returns true if an entity with the given JID, or if one of its
       * associated items, supports a given feature.
       *
       * @method api.disco.features.has
       * @param {string} feature The feature that might be
       *     supported. In the XML stanza, this is the `var`
       *     attribute of the `<feature>` element. For
       *     example: `http://jabber.org/protocol/muc`
       * @param {string} jid The JID of the entity
       *     (and its associated items) which should be queried
       * @returns {Promise<boolean>} A promise which resolves with a boolean
       * @example
       *      api.disco.features.has(Strophe.NS.MAM, _converse.bare_jid);
       */
      async has(feature, jid) {
        if (!jid) throw new TypeError("api.disco.feature.has: You need to provide an entity JID");
        const entity = await api_default4.disco.entities.get(jid, true);
        if (!entity) {
          import_log30.default.warn(`api.disco.has: could not get entity for ${jid}`);
          return false;
        }
        if (converse_default.state.disco_entities === void 0 && !api_default4.connection.connected()) {
          import_log30.default.warn(`Tried to check if ${jid} supports feature ${feature}`);
          return false;
        }
        if (await entity.getFeature(feature)) {
          return true;
        }
        const items = await api_default4.disco.entities.items(jid);
        const result = await Promise.all(items.map((i2) => i2.getFeature(feature)));
        return result.map((f) => f instanceof Object).includes(true);
      }
    },
    /**
     * Used to determine whether an entity supports a given feature.
     *
     * @method api.disco.supports
     * @param {string} feature The feature that might be
     *     supported. In the XML stanza, this is the `var`
     *     attribute of the `<feature>` element. For
     *     example: `http://jabber.org/protocol/muc`
     * @param {string} jid The JID of the entity
     *     (and its associated items) which should be queried
     * @returns {Promise<boolean>|boolean} A promise which resolves with `true` or `false`.
     * @example
     * if (await api.disco.supports(Strophe.NS.MAM, _converse.bare_jid)) {
     *     // The feature is supported
     * } else {
     *     // The feature is not supported
     * }
     */
    supports(feature, jid) {
      try {
        return api_default4.disco.features.has(feature, jid);
      } catch (e) {
        import_log30.default.error(e);
        return false;
      }
    },
    /**
     * Refresh the features, fields and identities associated with a
     * disco entity by refetching them from the server
     * @method api.disco.refresh
     * @param {string} jid The JID of the entity whose features are refreshed.
     * @param {import('./types').DiscoInfoOptions} [options]
     * @returns {Promise} A promise which resolves once the features have been refreshed
     * @example
     * await api.disco.refresh('room@conference.example.org');
     */
    async refresh(jid, options) {
      if (!jid) throw new TypeError("api.disco.refresh: You need to provide an entity JID");
      await api_default4.waitUntil("discoInitialized");
      let entity = await api_default4.disco.entities.get(jid);
      if (entity) {
        entity.features.reset();
        entity.fields.reset();
        entity.identities.reset();
        if (!entity.waitUntilFeaturesDiscovered.isPending) {
          entity.waitUntilFeaturesDiscovered = (0, import_openpromise14.getOpenPromise)();
        }
        if (!entity.waitUntilItemsFetched.isPending) {
          entity.waitUntilItemsFetched = (0, import_openpromise14.getOpenPromise)();
        }
        entity.queryInfo(options);
      } else {
        entity = await api_default4.disco.entities.create({ jid }, { ignore_cache: true, timeout: options.timeout });
      }
      return entity.waitUntilItemsFetched;
    },
    /**
     * Return all the features associated with a disco entity
     *
     * @method api.disco.getFeatures
     * @param { string } jid The JID of the entity whose features are returned.
     * @returns {promise} A promise which resolves with the returned features
     * @example
     * const features = await api.disco.getFeatures('room@conference.example.org');
     */
    async getFeatures(jid) {
      if (!jid) throw new TypeError("api.disco.getFeatures: You need to provide an entity JID");
      await api_default4.waitUntil("discoInitialized");
      let entity = await api_default4.disco.entities.get(jid, true);
      entity = await entity.waitUntilFeaturesDiscovered;
      return entity.features;
    },
    /**
     * Return all the service discovery extensions fields
     * associated with an entity.
     *
     * See [XEP-0129: Service Discovery Extensions](https://xmpp.org/extensions/xep-0128.html)
     *
     * @method api.disco.getFields
     * @param { string } jid The JID of the entity whose fields are returned.
     * @example
     * const fields = await api.disco.getFields('room@conference.example.org');
     */
    async getFields(jid) {
      if (!jid) throw new TypeError("api.disco.getFields: You need to provide an entity JID");
      await api_default4.waitUntil("discoInitialized");
      let entity = await api_default4.disco.entities.get(jid, true);
      entity = await entity.waitUntilFeaturesDiscovered;
      return entity.fields;
    },
    /**
     * Get the identity (with the given category and type) for a given disco entity.
     *
     * For example, when determining support for PEP (personal eventing protocol), you
     * want to know whether the user's own JID has an identity with
     * `category='pubsub'` and `type='pep'` as explained in this section of
     * XEP-0163: https://xmpp.org/extensions/xep-0163.html#support
     *
     * @method api.disco.getIdentity
     * @param {string} category -The identity category.
     *     In the XML stanza, this is the `category`
     *     attribute of the `<identity>` element.
     *     For example: 'pubsub'
     * @param {string} type - The identity type.
     *     In the XML stanza, this is the `type`
     *     attribute of the `<identity>` element.
     *     For example: 'pep'
     * @param {string} jid - The JID of the entity which might have the identity
     * @returns {promise} A promise which resolves with a map indicating
     *     whether an identity with a given type is provided by the entity.
     * @example
     * api.disco.getIdentity('pubsub', 'pep', _converse.bare_jid).then(
     *     function (identity) {
     *         if (identity) {
     *             // The entity DOES have this identity
     *         } else {
     *             // The entity DOES NOT have this identity
     *         }
     *     }
     * ).catch(e => log.error(e));
     */
    async getIdentity(category, type, jid) {
      const e = await api_default4.disco.entities.get(jid, true);
      if (e === void 0 && !api_default4.connection.connected()) {
        const msg = `Tried to look up category ${category} for ${jid} but _converse.disco_entities has been torn down`;
        import_log30.default.warn(msg);
        return;
      }
      return e.getIdentity(category, type);
    }
  }
};

// plugins/disco/utils.js
var import_skeletor22 = require("@converse/skeletor");
var { Strophe: Strophe36, $iq: $iq6 } = public_default.env;
function onDiscoInfoRequest(stanza) {
  const node = stanza.getElementsByTagName("query")[0].getAttribute("node");
  const attrs = { xmlns: Strophe36.NS.DISCO_INFO };
  if (node) {
    attrs.node = node;
  }
  const iqresult = $iq6({ "type": "result", "id": stanza.getAttribute("id") });
  const from = stanza.getAttribute("from");
  if (from !== null) {
    iqresult.attrs({ "to": from });
  }
  iqresult.c("query", attrs);
  converse_default.state.disco._identities.forEach((identity) => {
    const attrs2 = {
      "category": identity.category,
      "type": identity.type
    };
    if (identity.name) {
      attrs2.name = identity.name;
    }
    if (identity.lang) {
      attrs2["xml:lang"] = identity.lang;
    }
    iqresult.c("identity", attrs2).up();
  });
  converse_default.state.disco._features.forEach((f) => iqresult.c("feature", { "var": f }).up());
  api_default4.send(iqresult.tree());
  return true;
}
__name(onDiscoInfoRequest, "onDiscoInfoRequest");
function addClientFeatures() {
  api_default4.disco.own.identities.add("client", "web", "Converse");
  api_default4.disco.own.features.add(Strophe36.NS.CHATSTATES);
  api_default4.disco.own.features.add(Strophe36.NS.DISCO_INFO);
  api_default4.disco.own.features.add(Strophe36.NS.ROSTERX);
  api_default4.disco.own.features.add(Strophe36.NS.CARBONS);
  api_default4.trigger("addClientFeatures");
  return this;
}
__name(addClientFeatures, "addClientFeatures");
async function initializeDisco() {
  addClientFeatures();
  api_default4.connection.get().addHandler(
    (stanza) => onDiscoInfoRequest(stanza),
    Strophe36.NS.DISCO_INFO,
    "iq",
    "get",
    null,
    null
  );
  const disco_entities = new converse_default.exports.DiscoEntities();
  Object.assign(converse_default, { disco_entities });
  Object.assign(converse_default.state, { disco_entities });
  const bare_jid = converse_default.session.get("bare_jid");
  const id = `converse.disco-entities-${bare_jid}`;
  disco_entities.browserStorage = createStore(id, "session");
  const collection = await disco_entities.fetchEntities();
  const domain = converse_default.session.get("domain");
  if (collection.length === 0 || !collection.get(domain)) {
    api_default4.disco.entities.create({ "jid": domain }, { "ignore_cache": true });
  }
  api_default4.trigger("discoInitialized");
}
__name(initializeDisco, "initializeDisco");
function initStreamFeatures() {
  if (!converse_default.state.stream_features) {
    const bare_jid = converse_default.session.get("bare_jid");
    const id = `converse.stream-features-${bare_jid}`;
    api_default4.promises.add("streamFeaturesAdded");
    const stream_features = new import_skeletor22.Collection();
    stream_features.browserStorage = createStore(id, "session");
    Object.assign(converse_default, { stream_features });
    Object.assign(converse_default.state, { stream_features });
  }
}
__name(initStreamFeatures, "initStreamFeatures");
function notifyStreamFeaturesAdded() {
  api_default4.trigger("streamFeaturesAdded");
}
__name(notifyStreamFeaturesAdded, "notifyStreamFeaturesAdded");
function populateStreamFeatures() {
  initStreamFeatures();
  Array.from(api_default4.connection.get().features.childNodes).forEach((feature) => {
    converse_default.state.stream_features.create({
      "name": feature.nodeName,
      "xmlns": feature.getAttribute("xmlns")
    });
  });
  notifyStreamFeaturesAdded();
}
__name(populateStreamFeatures, "populateStreamFeatures");
function clearSession2() {
  const { disco_entities } = converse_default.state;
  disco_entities?.forEach((e) => e.features.clearStore());
  disco_entities?.forEach((e) => e.identities.clearStore());
  disco_entities?.forEach((e) => e.dataforms.clearStore());
  disco_entities?.forEach((e) => e.fields.clearStore());
  disco_entities?.clearStore();
  delete converse_default.state.disco_entities;
  Object.assign(converse_default, { disco_entities: void 0 });
}
__name(clearSession2, "clearSession");

// plugins/disco/index.js
/**
 * @copyright The Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 * @description Converse plugin which add support for XEP-0030: Service Discovery
 */
var { Strophe: Strophe37 } = public_default.env;
public_default.plugins.add("converse-disco", {
  initialize() {
    Object.assign(api_default4, api_default7);
    api_default4.promises.add("discoInitialized");
    api_default4.promises.add("streamFeaturesAdded");
    const exports2 = { DiscoEntity: entity_default, DiscoEntities: entities_default };
    Object.assign(converse_default, exports2);
    Object.assign(converse_default.exports, exports2);
    const disco = {
      _identities: [],
      _features: []
    };
    Object.assign(converse_default, { disco });
    Object.assign(converse_default.state, { disco });
    api_default4.listen.on("userSessionInitialized", async () => {
      initStreamFeatures();
      if (converse_default.state.connfeedback.get("connection_status") === Strophe37.Status.ATTACHED) {
        await new Promise((success, error) => converse_default.state.stream_features.fetch({ success, error }));
        notifyStreamFeaturesAdded();
      }
    });
    api_default4.listen.on("beforeResourceBinding", populateStreamFeatures);
    api_default4.listen.on("reconnected", initializeDisco);
    api_default4.listen.on("connected", initializeDisco);
    api_default4.listen.on("beforeTearDown", async () => {
      api_default4.promises.add("streamFeaturesAdded");
      api_default4.promises.add("discoInitialized");
      const { stream_features } = converse_default.state;
      if (stream_features) {
        await stream_features.clearStore();
        delete converse_default.state.stream_features;
        Object.assign(converse_default, { stream_features: void 0 });
      }
    });
    api_default4.listen.on("will-reconnect", clearSession2);
    api_default4.listen.on("clearSession", clearSession2);
  }
});

// plugins/muc/affiliations/api.js
var api_default8 = {
  /**
   * The "affiliations" namespace groups methods relevant to setting and
   * getting MUC affiliations.
   *
   * @namespace api.rooms.affiliations
   * @memberOf api.rooms
   */
  affiliations: {
    /**
     * Set the given affliation for the given JIDs in the specified MUCs
     * @typedef {Object} User
     * @property {string} User.jid - The JID of the user whose affiliation will change
     * @property {Array} User.affiliation - The new affiliation for this user
     * @property {string} [User.reason] - An optional reason for the affiliation change
     *
     * @param {String|Array<String>} muc_jids - The JIDs of the MUCs in
     *  which the affiliation should be set.
     * @param {User[]} users - An array of objects representing users
     *  for whom the affiliation is to be set.
     * @returns {Promise}
     *
     * @example
     *  api.rooms.affiliations.set(
     *      [
     *          'muc1@muc.example.org',
     *          'muc2@muc.example.org'
     *      ], [
     *          {
     *              'jid': 'user@example.org',
     *              'affiliation': 'member',
     *              'reason': "You're one of us now!"
     *          }
     *      ]
     *  )
     */
    set(muc_jids, users) {
      users = !Array.isArray(users) ? [users] : users;
      muc_jids = !Array.isArray(muc_jids) ? [muc_jids] : muc_jids;
      return setAffiliations(muc_jids, users);
    },
    /**
     * Returns an array of {@link MemberListItem} objects, representing occupants
     * that have the given affiliation.
     * @typedef {("admin"|"owner"|"member")} NonOutcastAffiliation
     * @param {NonOutcastAffiliation} affiliation
     * @param {string} jid - The JID of the MUC for which the affiliation list should be fetched
     * @returns {Promise<MemberListItem[]|Error>}
     */
    get(affiliation, jid) {
      return getAffiliationList(affiliation, jid);
    }
  }
};

// plugins/muc/plugin.js
/**
 * @copyright The Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 * @description Implements the core logic for XEP-0045 Multi-User Chat
 */
public_default.AFFILIATION_CHANGES = AFFILIATION_CHANGES;
public_default.AFFILIATION_CHANGES_LIST = AFFILIATION_CHANGES_LIST;
public_default.MUC_TRAFFIC_STATES = MUC_TRAFFIC_STATES;
public_default.MUC_TRAFFIC_STATES_LIST = MUC_TRAFFIC_STATES_LIST;
public_default.MUC_ROLE_CHANGES = MUC_ROLE_CHANGES;
public_default.MUC_ROLE_CHANGES_LIST = MUC_ROLE_CHANGES_LIST;
public_default.MUC = { INFO_CODES };
public_default.MUC_NICK_CHANGED_CODE = MUC_NICK_CHANGED_CODE;
public_default.ROOM_FEATURES = ROOM_FEATURES;
public_default.ROOMSTATUS = ROOMSTATUS;
var { Strophe: Strophe38 } = public_default.env;
Strophe38.addNamespace("MUC_ADMIN", Strophe38.NS.MUC + "#admin");
Strophe38.addNamespace("MUC_OWNER", Strophe38.NS.MUC + "#owner");
Strophe38.addNamespace("MUC_REGISTER", "jabber:iq:register");
Strophe38.addNamespace("MUC_ROOMCONF", Strophe38.NS.MUC + "#roomconfig");
Strophe38.addNamespace("MUC_USER", Strophe38.NS.MUC + "#user");
Strophe38.addNamespace("MUC_HATS", "urn:xmpp:hats:0");
Strophe38.addNamespace("CONFINFO", "urn:ietf:params:xml:ns:conference-info");
public_default.plugins.add("converse-muc", {
  dependencies: ["converse-chatboxes", "converse-chat", "converse-disco"],
  initialize() {
    const { __, ___ } = converse_default;
    api_default4.settings.extend({
      allow_muc_invitations: true,
      auto_join_on_invite: false,
      auto_join_rooms: [],
      auto_register_muc_nickname: true,
      colorize_username: false,
      hide_muc_participants: false,
      locked_muc_domain: false,
      modtools_disable_assign: false,
      muc_clear_messages_on_leave: true,
      muc_domain: void 0,
      muc_fetch_members: true,
      muc_history_max_stanzas: void 0,
      muc_instant_rooms: true,
      muc_nickname_from_jid: false,
      muc_send_probes: false,
      muc_show_info_messages: [
        ...public_default.MUC.INFO_CODES.visibility_changes,
        ...public_default.MUC.INFO_CODES.self,
        ...public_default.MUC.INFO_CODES.non_privacy_changes,
        ...public_default.MUC.INFO_CODES.muc_logging_changes,
        ...public_default.MUC.INFO_CODES.nickname_changes,
        ...public_default.MUC.INFO_CODES.disconnected,
        ...public_default.MUC.INFO_CODES.affiliation_changes,
        ...public_default.MUC.INFO_CODES.join_leave_events,
        ...public_default.MUC.INFO_CODES.role_changes
      ],
      muc_show_logs_before_join: false,
      muc_subscribe_to_rai: false
    });
    api_default4.promises.add(["roomsAutoJoined"]);
    if (api_default4.settings.get("locked_muc_domain") && typeof api_default4.settings.get("muc_domain") !== "string") {
      throw new Error(
        "Config Error: it makes no sense to set locked_muc_domain to true when muc_domain is not set"
      );
    }
    public_default.env.muc_utils = { computeAffiliationsDelta };
    Object.assign(api_default4, api_default3);
    Object.assign(api_default4.rooms, api_default8);
    const STATUS_CODE_MESSAGES = {
      "100": __("This groupchat is not anonymous"),
      "102": __("This groupchat now shows unavailable members"),
      "103": __("This groupchat does not show unavailable members"),
      "104": __("The groupchat configuration has changed"),
      "170": __("Groupchat logging is now enabled"),
      "171": __("Groupchat logging is now disabled"),
      "172": __("This groupchat is now no longer anonymous"),
      "173": __("This groupchat is now semi-anonymous"),
      "174": __("This groupchat is now fully-anonymous"),
      "201": __("A new groupchat has been created"),
      // XXX: Note the triple underscore function and not double underscore.
      "210": ___("Your nickname has been automatically set to %1$s"),
      "301": __("You have been banned from this groupchat"),
      // XXX: Note the triple underscore function and not double underscore.
      "303": ___("Your nickname has been changed to %1$s"),
      "307": __("You have been kicked from this groupchat"),
      "321": __("You have been removed from this groupchat because of an affiliation change"),
      "322": __("You have been removed from this groupchat because it has changed to members-only and you're not a member"),
      "332": __("You have been removed from this groupchat because the service hosting it is being shut down"),
      "333": __("You have exited this groupchat due to a technical problem")
    };
    const labels = { muc: { STATUS_CODE_MESSAGES } };
    Object.assign(converse_default.labels, labels);
    Object.assign(converse_default, labels);
    routeToRoom();
    addEventListener("hashchange", routeToRoom);
    const legacy_exports = {
      ChatRoom: muc_default,
      ChatRoomMessage: message_default2,
      ChatRoomMessages: messages_default,
      ChatRoomOccupant: occupant_default,
      ChatRoomOccupants: occupants_default
    };
    Object.assign(converse_default, legacy_exports);
    const exports2 = {
      MUC: muc_default,
      MUCMessage: message_default2,
      MUCMessages: messages_default,
      MUCOccupant: occupant_default,
      MUCOccupants: occupants_default,
      getDefaultMUCNickname,
      isInfoVisible,
      onDirectMUCInvitation
    };
    Object.assign(converse_default.exports, exports2);
    Object.assign(converse_default, exports2);
    api_default4.chatboxes.registry.add(CHATROOMS_TYPE, muc_default);
    if (api_default4.settings.get("allow_muc_invitations")) {
      api_default4.listen.on("connected", registerDirectInvitationHandler);
      api_default4.listen.on("reconnected", registerDirectInvitationHandler);
    }
    api_default4.listen.on("addClientFeatures", () => api_default4.disco.own.features.add(`${Strophe38.NS.CONFINFO}+notify`));
    api_default4.listen.on("addClientFeatures", onAddClientFeatures);
    api_default4.listen.on("beforeResourceBinding", onBeforeResourceBinding);
    api_default4.listen.on("beforeTearDown", onBeforeTearDown);
    api_default4.listen.on("chatBoxesFetched", autoJoinRooms);
    api_default4.listen.on("disconnected", disconnectChatRooms);
    api_default4.listen.on("statusInitialized", onStatusInitialized);
    document.addEventListener("visibilitychange", onWindowStateChanged);
  }
});

// plugins/muc/index.js
Object.assign(utils_default, { muc: { isChatRoom, setAffiliation, getDefaultMUCService } });

// plugins/bookmarks/collection.js
var { Strophe: Strophe39, stx: stx8 } = public_default.env;
var Bookmarks = class extends import_skeletor23.Collection {
  static {
    __name(this, "Bookmarks");
  }
  get idAttribute() {
    return "jid";
  }
  constructor() {
    super([], { comparator: /* @__PURE__ */ __name((b) => b.getDisplayName().toLowerCase(), "comparator") });
    this.model = model_default;
  }
  async initialize() {
    this.on(
      "add",
      (bm) => this.openBookmarkedRoom(bm).then((bm2) => this.markRoomAsBookmarked(bm2)).catch((e) => import_log31.default.fatal(e))
    );
    this.on("remove", this.leaveRoom, this);
    this.on("change:autojoin", this.onAutoJoinChanged, this);
    this.on(
      "remove",
      /** @param {Bookmark} bookmark */
      (_, bookmark) => this.sendBookmarkStanza(bookmark),
      this
    );
    const { session } = converse_default;
    const cache_key = `converse.room-bookmarks${session.get("bare_jid")}`;
    this.fetched_flag = cache_key + "fetched";
    initStorage(this, cache_key);
    await this.fetchBookmarks();
    api_default4.trigger("bookmarksInitialized", this);
  }
  static async checkBookmarksSupport() {
    const bare_jid = converse_default.session.get("bare_jid");
    if (!bare_jid) return false;
    const identity = await api_default4.disco.getIdentity("pubsub", "pep", bare_jid);
    if (api_default4.settings.get("allow_public_bookmarks")) {
      return !!identity;
    } else {
      return api_default4.disco.supports(Strophe39.NS.PUBSUB + "#publish-options", bare_jid);
    }
  }
  /**
   * @param {Bookmark} bookmark
   */
  async openBookmarkedRoom(bookmark) {
    if (api_default4.settings.get("muc_respect_autojoin") && bookmark.get("autojoin")) {
      const groupchat = await api_default4.rooms.create(bookmark.get("jid"), {
        nick: bookmark.get("nick"),
        password: bookmark.get("password")
      });
      groupchat.maybeShow();
    }
    return bookmark;
  }
  fetchBookmarks() {
    const deferred = (0, import_openpromise15.getOpenPromise)();
    if (window.sessionStorage.getItem(this.fetched_flag)) {
      this.fetch({
        success: /* @__PURE__ */ __name(() => deferred.resolve(), "success"),
        error: /* @__PURE__ */ __name(() => deferred.resolve(), "error")
      });
    } else {
      this.fetchBookmarksFromServer(deferred);
    }
    return deferred;
  }
  /**
   * @param {import('./types').BookmarkAttrs} attrs
   * @param {boolean} [create=true]
   * @param {object} [options]
   */
  setBookmark(attrs, create = true, options = {}) {
    if (!attrs.jid) return import_log31.default.warn("No JID provided for setBookmark");
    let send_stanza = false;
    let bookmark = this.get(attrs.jid);
    if (bookmark) {
      const has_changed = Object.keys(attrs).reduce((result, k) => {
        return result || (attrs[k] ?? "") !== (bookmark.attributes[k] ?? "");
      }, false);
      if (has_changed) {
        bookmark.save(attrs, options);
        send_stanza = true;
      }
    } else if (create) {
      bookmark = this.create(attrs, options);
      send_stanza = true;
    }
    if (send_stanza) {
      this.sendBookmarkStanza(bookmark).catch((iq) => this.onBookmarkError(iq));
    }
  }
  /**
   * @param {'urn:xmpp:bookmarks:1'|'storage:bookmarks'} node
   * @param {Bookmark} bookmark
   * @returns {Stanza|Stanza[]}
   */
  getPublishedItems(node, bookmark) {
    if (node === Strophe39.NS.BOOKMARKS2) {
      const extensions = bookmark.get("extensions") ?? [];
      return stx8`<item id="${bookmark.get("jid")}">
                        <conference xmlns="${Strophe39.NS.BOOKMARKS2}"
                                name="${bookmark.get("name") || import_lit2.nothing}"
                                autojoin="${bookmark.get("autojoin")}">
                            ${bookmark.get("nick") ? stx8`<nick>${bookmark.get("nick")}</nick>` : ""}
                            ${bookmark.get("password") ? stx8`<password>${bookmark.get("password")}</password>` : ""}
                        ${extensions.length ? stx8`<extensions>${extensions.map((e) => import_strophe24.Stanza.fromString(e))}</extensions>` : ""}
                        </conference>
                    </item>`;
    } else {
      return stx8`<item id="current">
                <storage xmlns="${Strophe39.NS.BOOKMARKS}">
                ${this.map(
        /** @param {MUC} model */
        (model) => stx8`<conference name="${model.get("name")}" autojoin="${model.get("autojoin")}"
                        jid="${model.get("jid")}">
                        ${model.get("nick") ? stx8`<nick>${model.get("nick")}</nick>` : ""}
                        ${model.get("password") ? stx8`<password>${model.get("password")}</password>` : ""}
                    </conference>`
      )}
                </storage>
            </item>`;
    }
  }
  /**
   * @param {Bookmark} bookmark
   * @returns {Promise<void|Element>}
   */
  async sendBookmarkStanza(bookmark) {
    const bare_jid = converse_default.session.get("bare_jid");
    const node = await api_default4.disco.supports(`${Strophe39.NS.BOOKMARKS2}#compat`, bare_jid) ? Strophe39.NS.BOOKMARKS2 : Strophe39.NS.BOOKMARKS;
    const supports_max = await api_default4.disco.supports(`${Strophe39.NS.PUBSUB}#config-node-max`, bare_jid);
    return api_default4.pubsub.publish(null, node, this.getPublishedItems(node, bookmark), {
      persist_items: true,
      max_items: supports_max ? "max" : 9999,
      send_last_published_item: "never",
      access_model: "whitelist"
    });
  }
  /**
   * @param {Element} iq
   */
  onBookmarkError(iq) {
    import_log31.default.error("Error while trying to add bookmark");
    import_log31.default.error(iq);
  }
  /**
   * @param {Promise} deferred
   */
  async fetchBookmarksFromServer(deferred) {
    const bare_jid = converse_default.session.get("bare_jid");
    const ns = await api_default4.disco.supports(`${Strophe39.NS.BOOKMARKS2}#compat`, bare_jid) ? Strophe39.NS.BOOKMARKS2 : Strophe39.NS.BOOKMARKS;
    const stanza = stx8`
            <iq type="get" from="${api_default4.connection.get().jid}" xmlns="jabber:client">
                <pubsub xmlns="${Strophe39.NS.PUBSUB}">
                    <items node="${ns}"/>
                </pubsub>
            </iq>`;
    api_default4.sendIQ(stanza).then(
      /** @param {Element} iq */
      (iq) => this.onBookmarksReceived(deferred, iq)
    ).catch(
      /** @param {Element} iq */
      (iq) => this.onBookmarksReceivedError(deferred, iq)
    );
  }
  /**
   * @param {Bookmark} bookmark
   */
  markRoomAsBookmarked(bookmark) {
    const { chatboxes } = converse_default.state;
    const groupchat = chatboxes.get(bookmark.get("jid"));
    groupchat?.save("bookmarked", true);
  }
  /**
   * @param {Bookmark} bookmark
   */
  onAutoJoinChanged(bookmark) {
    if (bookmark.get("autojoin")) {
      this.openBookmarkedRoom(bookmark);
    } else {
      this.leaveRoom(bookmark);
    }
  }
  /**
   * @param {Bookmark} bookmark
   */
  async leaveRoom(bookmark) {
    const groupchat = await api_default4.rooms.get(bookmark.get("jid"));
    groupchat?.close();
  }
  /**
   * @param {Element} stanza
   */
  async setBookmarksFromStanza(stanza) {
    const bookmarks2 = await parseStanzaForBookmarks(stanza);
    bookmarks2.forEach(
      /** @param {import('./types.js').BookmarkAttrs} attrs */
      (attrs) => {
        const bookmark = this.get(attrs.jid);
        bookmark ? bookmark.save(attrs) : this.create(attrs);
      }
    );
  }
  /**
   * @param {Object} deferred
   * @param {Element} iq
   */
  async onBookmarksReceived(deferred, iq) {
    await this.setBookmarksFromStanza(iq);
    window.sessionStorage.setItem(this.fetched_flag, "true");
    if (deferred !== void 0) {
      return deferred.resolve();
    }
  }
  /**
   * @param {Object} deferred
   * @param {Element} iq
   */
  async onBookmarksReceivedError(deferred, iq) {
    if (iq === null) {
      const { __ } = converse_default;
      import_log31.default.error("Error: timeout while fetching bookmarks");
      api_default4.alert("error", __("Timeout Error"), [
        __(
          "The server did not return your bookmarks within the allowed time. You can reload the page to request them again."
        )
      ]);
      deferred?.reject(new Error("Could not fetch bookmarks"));
    } else {
      const { errors } = public_default.env;
      const e = await parseErrorStanza(iq);
      if (e instanceof errors.ItemNotFoundError) {
        window.sessionStorage.setItem(this.fetched_flag, "true");
        deferred?.resolve();
      } else {
        import_log31.default.error("Error while fetching bookmarks");
        if (iq) import_log31.default.error(iq);
        deferred?.reject(new Error("Could not fetch bookmarks"));
      }
    }
  }
  async getUnopenedBookmarks() {
    await api_default4.waitUntil("bookmarksInitialized");
    await api_default4.waitUntil("chatBoxesFetched");
    const { chatboxes } = converse_default.state;
    return this.filter((b) => !chatboxes.get(b.get("jid")));
  }
};
var collection_default = Bookmarks;

// plugins/bookmarks/utils.js
var import_log32 = __toESM(require("@converse/log"));
async function initBookmarks() {
  if (!api_default4.settings.get("allow_bookmarks")) {
    return;
  }
  if (await collection_default.checkBookmarksSupport()) {
    converse_default.state.bookmarks = new converse_default.exports.Bookmarks();
    Object.assign(converse_default, { bookmarks: converse_default.state.bookmarks });
  }
}
__name(initBookmarks, "initBookmarks");
function getNicknameFromBookmark(jid) {
  if (!api_default4.settings.get("allow_bookmarks")) {
    return null;
  }
  return converse_default.state.bookmarks?.get(jid)?.get("nick");
}
__name(getNicknameFromBookmark, "getNicknameFromBookmark");
function handleBookmarksPush(message) {
  api_default4.waitUntil("bookmarksInitialized").then(() => converse_default.state.bookmarks.setBookmarksFromStanza(message)).catch(
    /** @param {Error} e */
    (e) => import_log32.default.fatal(e)
  );
  return true;
}
__name(handleBookmarksPush, "handleBookmarksPush");

// plugins/bookmarks/plugin.js
var import_log33 = __toESM(require("@converse/log"));

// plugins/bookmarks/api.js
var { waitUntil: waitUntil5 } = promise_default;
var bookmarks = {
  /**
   * Calling this function will result in an IQ stanza being sent out to set
   * the bookmark on the server.
   *
   * @method api.bookmarks.set
   * @param {import('./types').BookmarkAttrs} attrs - The room attributes
   * @param {boolean} [create=true] - Whether the bookmark should be created if it doesn't exist
   * @param {object} [options] - Skeletor set/add options
   * @returns {Promise<import('./model').default>}
   */
  async set(attrs, create = true, options = {}) {
    const bookmarks2 = await waitUntil5("bookmarksInitialized");
    return bookmarks2.setBookmark(attrs, create, options);
  },
  /**
   * @method api.bookmarks.get
   * @param {string} jid - The JID of the bookmark to return.
   * @returns {Promise<import('./model').default|undefined>}
   */
  async get(jid) {
    const bookmarks2 = await waitUntil5("bookmarksInitialized");
    return bookmarks2.get(jid);
  }
};
var bookmarks_api = { bookmarks };
var api_default9 = bookmarks_api;

// plugins/bookmarks/plugin.js
/**
 * @copyright 2025, the Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 */
var { Strophe: Strophe40 } = public_default.env;
Strophe40.addNamespace("BOOKMARKS", "storage:bookmarks");
Strophe40.addNamespace("BOOKMARKS2", "urn:xmpp:bookmarks:1");
public_default.plugins.add("converse-bookmarks", {
  dependencies: ["converse-chatboxes", "converse-muc"],
  initialize() {
    api_default4.settings.extend({
      allow_bookmarks: true,
      allow_public_bookmarks: false,
      muc_respect_autojoin: true
    });
    api_default4.promises.add("bookmarksInitialized");
    Object.assign(api_default4, api_default9);
    const exports2 = { Bookmark: model_default, Bookmarks: collection_default };
    Object.assign(converse_default, exports2);
    Object.assign(converse_default.exports, exports2);
    api_default4.listen.on(
      "getNicknameForMUC",
      /**
       * @param {import('../muc/muc').default} muc
       * @param {string|null} nick
       * @returns {string}
       */
      (muc, nick) => {
        return nick || getNicknameFromBookmark(muc.get("jid"));
      }
    );
    api_default4.listen.on(
      "parseMUCPresence",
      /**
       * @param {Element} _stanza
       * @param {import('../muc/types').MUCPresenceAttributes} attrs
       */
      (_stanza, attrs) => {
        if (attrs.is_self && attrs.codes.includes("303")) {
          api_default4.bookmarks.get(attrs.muc_jid).then(
            /** @param {Bookmark} bookmark */
            (bookmark) => {
              if (!bookmark) import_log33.default.warn("parseMUCPresence: no bookmark returned");
              const { nick, muc_jid: jid } = attrs;
              api_default4.bookmarks.set({
                jid,
                nick,
                autojoin: bookmark?.get("autojoin") ?? true,
                password: bookmark?.get("password") ?? "",
                name: bookmark?.get("name") ?? "",
                extensions: bookmark?.get("extensions") ?? []
              });
            }
          );
        }
        return attrs;
      }
    );
    api_default4.listen.on(
      "enteredNewRoom",
      /** @param {import('../muc/muc').default} muc */
      async ({ attributes }) => {
        const { jid, nick, password, name } = (
          /** @type {import("../muc/types").MUCAttributes} */
          attributes
        );
        await api_default4.bookmarks.set({
          jid,
          autojoin: true,
          nick,
          ...password ? { password } : {},
          ...name ? { name } : {}
        });
      }
    );
    api_default4.listen.on(
      "leaveRoom",
      /** @param {import('../muc/muc').default} muc */
      async ({ attributes }) => {
        const { jid } = (
          /** @type {import("../muc/types").MUCAttributes} */
          attributes
        );
        await api_default4.bookmarks.set(
          {
            jid,
            autojoin: false
          },
          false,
          // Don't trigger a Skeletor `change` event.
          // This MUC is being left explicitly by the user,
          // so we don't want to trigger the `onAutoJoinChanged`
          // listener in ./collection.js to again call `close()`
          // on the MUC.
          {
            silent: true
          }
        );
      }
    );
    api_default4.listen.on("addClientFeatures", () => {
      if (api_default4.settings.get("allow_bookmarks")) {
        api_default4.disco.own.features.add(Strophe40.NS.BOOKMARKS + "+notify");
      }
    });
    api_default4.listen.on("clearSession", () => {
      const { state } = converse_default;
      if (state.bookmarks) {
        state.bookmarks.clearStore({ "silent": true });
        window.sessionStorage.removeItem(state.bookmarks.fetched_flag);
        delete state.bookmarks;
      }
    });
    api_default4.listen.on("connected", async () => {
      const bare_jid = converse_default.session.get("bare_jid");
      const connection2 = api_default4.connection.get();
      connection2.addHandler(handleBookmarksPush, Strophe40.NS.BOOKMARKS, "message", "headline", null, bare_jid);
      connection2.addHandler(handleBookmarksPush, Strophe40.NS.BOOKMARKS2, "message", "headline", null, bare_jid);
      await Promise.all([api_default4.waitUntil("chatBoxesFetched")]);
      initBookmarks();
    });
  }
});

// plugins/blocklist/plugin.js
var import_log36 = __toESM(require("@converse/log"));

// plugins/blocklist/collection.js
var import_openpromise16 = require("@converse/openpromise");
var import_skeletor25 = require("@converse/skeletor");
var import_log34 = __toESM(require("@converse/log"));

// plugins/blocklist/model.js
var import_skeletor24 = require("@converse/skeletor");
var { Strophe: Strophe41 } = public_default.env;
var BlockedEntity = class extends import_skeletor24.Model {
  static {
    __name(this, "BlockedEntity");
  }
  get idAttribute() {
    return "jid";
  }
  getDisplayName() {
    return Strophe41.xmlunescape(this.get("name"));
  }
};
var model_default3 = BlockedEntity;

// plugins/blocklist/collection.js
var { stx: stx9, u: u15 } = public_default.env;
var Blocklist = class extends import_skeletor25.Collection {
  static {
    __name(this, "Blocklist");
  }
  get idAttribute() {
    return "jid";
  }
  constructor() {
    super();
    this.model = model_default3;
  }
  async initialize() {
    const { session } = converse_default;
    const cache_key = `converse.blocklist-${session.get("bare_jid")}`;
    this.fetched_flag = `${cache_key}-fetched`;
    initStorage(this, cache_key);
    this.on("add", this.rejectContactRequest);
    await this.fetchBlocklist();
    api_default4.trigger("blocklistInitialized", this);
  }
  /**
   * @param {BlockedEntity} item
   */
  async rejectContactRequest(item) {
    const roster = await api_default4.waitUntil("rosterContactsFetched");
    const contact = roster.get(item.get("jid"));
    if (contact?.get("requesting")) {
      const chat = await api_default4.chats.get(contact.get("jid"));
      chat?.close();
      contact.unauthorize().destroy();
    }
  }
  fetchBlocklist() {
    const deferred = (0, import_openpromise16.getOpenPromise)();
    if (window.sessionStorage.getItem(this.fetched_flag)) {
      this.fetch({
        success: /* @__PURE__ */ __name(() => deferred.resolve(), "success"),
        error: /* @__PURE__ */ __name(() => deferred.resolve(), "error")
      });
    } else {
      this.fetchBlocklistFromServer(deferred);
    }
    return deferred;
  }
  /**
   * @param {Object} deferred
   */
  async fetchBlocklistFromServer(deferred) {
    const stanza = stx9`<iq xmlns="jabber:client"
            type="get"
            id="${u15.getUniqueId()}"><blocklist xmlns="urn:xmpp:blocking"/></iq>`;
    try {
      this.onBlocklistReceived(deferred, await api_default4.sendIQ(stanza));
    } catch (e) {
      import_log34.default.error(e);
      deferred.resolve();
      return;
    }
  }
  /**
   * @param {Object} deferred
   * @param {Element} iq
   */
  async onBlocklistReceived(deferred, iq) {
    Array.from(iq.querySelectorAll("blocklist item")).forEach((item) => {
      const jid = item.getAttribute("jid");
      const blocked = this.get(jid);
      blocked ? blocked.save({ jid }) : this.create({ jid });
    });
    window.sessionStorage.setItem(this.fetched_flag, "true");
    if (deferred !== void 0) {
      return deferred.resolve();
    }
  }
};
var collection_default2 = Blocklist;

// plugins/blocklist/utils.js
var { Strophe: Strophe42, stx: stx10, u: u16 } = public_default.env;
async function sendUnblockStanza(jid) {
  const jids = Array.isArray(jid) ? jid : [jid];
  const stanza = stx10`
        <iq xmlns="jabber:client" type="set" id="${u16.getUniqueId()}">
            <unblock xmlns="${Strophe42.NS.BLOCKING}">
                ${jids.map((id) => stx10`<item jid="${id}"/>`)}
            </unblock>
        </iq>`;
  await send_default.sendIQ(stanza);
}
__name(sendUnblockStanza, "sendUnblockStanza");
async function sendBlockStanza(jid) {
  const jids = Array.isArray(jid) ? jid : [jid];
  const stanza = stx10`
        <iq xmlns="jabber:client" type="set" id="${u16.getUniqueId()}">
            <block xmlns="${Strophe42.NS.BLOCKING}">
                ${jids.map((id) => stx10`<item jid="${id}"/>`)}
            </block>
        </iq>`;
  await send_default.sendIQ(stanza);
}
__name(sendBlockStanza, "sendBlockStanza");

// plugins/blocklist/api.js
var { waitUntil: waitUntil6 } = promise_default;
var blocklist = {
  /**
   * Retrieves the current user's blocklist
   * @returns {Promise<import('./collection').default>}
   */
  async get() {
    return await waitUntil6("blocklistInitialized");
  },
  /**
   * Adds a new entity to the blocklist
   * @param {string|string[]} jid
   * @param {boolean} [send_stanza=true]
   * @returns {Promise<import('./collection').default>}
   */
  async add(jid, send_stanza = true) {
    const blocklist2 = await waitUntil6("blocklistInitialized");
    const jids = Array.isArray(jid) ? jid : [jid];
    if (send_stanza) await sendBlockStanza(jids);
    jids.forEach((jid2) => blocklist2.create({ jid: jid2 }));
    return blocklist2;
  },
  /**
   * Removes an entity from the blocklist
   * @param {string|string[]} jid
   * @param {boolean} [send_stanza=true]
   * @returns {Promise<import('./collection').default>}
   */
  async remove(jid, send_stanza = true) {
    const blocklist2 = await waitUntil6("blocklistInitialized");
    const jids = Array.isArray(jid) ? jid : [jid];
    if (send_stanza) await sendUnblockStanza(jids);
    jids.forEach((jid2) => blocklist2.get(jid2)?.destroy());
    blocklist2.remove(jids);
    return blocklist2;
  }
};
var blocklist_api = { blocklist };
var api_default10 = blocklist_api;

// plugins/roster/utils.js
var import_log35 = __toESM(require("@converse/log"));
var import_skeletor27 = require("@converse/skeletor");

// plugins/roster/filter.js
var import_skeletor26 = require("@converse/skeletor");
var RosterFilter = class extends import_skeletor26.Model {
  static {
    __name(this, "RosterFilter");
  }
  initialize() {
    super.initialize();
    this.set({
      text: "",
      type: "items",
      state: "online"
    });
  }
};

// plugins/roster/utils.js
var { $pres: $pres2 } = public_default.env;
function initRoster() {
  const roster = new converse_default.exports.RosterContacts();
  Object.assign(converse_default, { roster });
  Object.assign(converse_default.state, { roster });
  const bare_jid = converse_default.session.get("bare_jid");
  let id = `converse.contacts-${bare_jid}`;
  initStorage(roster, id);
  const roster_filter = new RosterFilter();
  Object.assign(converse_default, { roster_filter });
  Object.assign(converse_default.state, { roster_filter });
  roster_filter.id = `_converse.rosterfilter-${bare_jid}`;
  initStorage(roster_filter, roster_filter.id);
  roster_filter.fetch();
  id = `converse-roster-model-${bare_jid}`;
  roster.data = new import_skeletor27.Model();
  roster.data.id = id;
  initStorage(roster.data, id);
  roster.data.fetch();
  api_default4.trigger("rosterInitialized", roster);
}
__name(initRoster, "initRoster");
async function populateRoster(ignore_cache = false) {
  const connection2 = api_default4.connection.get();
  if (ignore_cache) {
    connection2.send_initial_presence = true;
  }
  const roster = (
    /** @type {RosterContacts} */
    converse_default.state.roster
  );
  try {
    await roster.fetchRosterContacts();
    api_default4.trigger("rosterContactsFetched", roster);
  } catch (reason) {
    import_log35.default.error(reason);
  } finally {
    if (connection2.send_initial_presence) {
      api_default4.user.presence.send();
      converse_default.state.profile.save({ presence: "online" });
    }
  }
}
__name(populateRoster, "populateRoster");
function updateUnreadCounter(chatbox) {
  const roster = (
    /** @type {RosterContacts} */
    converse_default.state.roster
  );
  const contact = roster?.get(chatbox.get("jid"));
  contact?.save({ num_unread: chatbox.get("num_unread") });
}
__name(updateUnreadCounter, "updateUnreadCounter");
var presence_ref2;
function registerPresenceHandler2() {
  unregisterPresenceHandler2();
  const connection2 = api_default4.connection.get();
  presence_ref2 = connection2.addHandler(
    /** @param {Element} presence */
    (presence) => {
      const roster = (
        /** @type {RosterContacts} */
        converse_default.state.roster
      );
      roster.presenceHandler(presence);
      return true;
    },
    null,
    "presence",
    null
  );
}
__name(registerPresenceHandler2, "registerPresenceHandler");
function unregisterPresenceHandler2() {
  if (presence_ref2) {
    const connection2 = api_default4.connection.get();
    connection2.deleteHandler(presence_ref2);
    presence_ref2 = null;
  }
}
__name(unregisterPresenceHandler2, "unregisterPresenceHandler");
async function clearPresences() {
  await converse_default.state.presences?.clearStore();
}
__name(clearPresences, "clearPresences");
async function onClearSession2() {
  await clearPresences();
  if (shouldClearCache(converse_default)) {
    const roster = (
      /** @type {RosterContacts} */
      converse_default.state.roster
    );
    if (roster) {
      roster.data?.destroy();
      await roster.clearStore();
      delete converse_default.state.roster;
      Object.assign(converse_default, { roster: void 0 });
    }
  }
}
__name(onClearSession2, "onClearSession");
function onPresencesInitialized(reconnecting) {
  if (reconnecting) {
    api_default4.trigger("rosterReadyAfterReconnection");
  } else {
    initRoster();
  }
  const roster = (
    /** @type {RosterContacts} */
    converse_default.state.roster
  );
  roster.onConnected();
  registerPresenceHandler2();
  populateRoster(!api_default4.connection.get().restored);
}
__name(onPresencesInitialized, "onPresencesInitialized");
async function onStatusInitialized2(reconnecting) {
  if (reconnecting) {
    !api_default4.connection.get().hasResumed() && await clearPresences();
  } else {
    const presences = new converse_default.exports.Presences();
    Object.assign(converse_default, { presences });
    Object.assign(converse_default.state, { presences });
    const bare_jid = converse_default.session.get("bare_jid");
    const id = `converse.presences-${bare_jid}`;
    initStorage(presences, id, "session");
    await new Promise((r) => presences.fetch({ success: r, error: r }));
  }
  api_default4.trigger("presencesInitialized", reconnecting);
}
__name(onStatusInitialized2, "onStatusInitialized");
function onChatBoxesInitialized() {
  const { chatboxes } = converse_default.state;
  chatboxes.on("change:num_unread", updateUnreadCounter);
  chatboxes.on("add", (chatbox) => {
    if (chatbox.get("type") === PRIVATE_CHAT_TYPE) {
      chatbox.setModelContact(chatbox.get("jid"));
    }
  });
}
__name(onChatBoxesInitialized, "onChatBoxesInitialized");
function onRosterContactsFetched() {
  const roster = (
    /** @type {RosterContacts} */
    converse_default.state.roster
  );
  roster.on("add", (contact) => {
    const chatbox = converse_default.state.chatboxes.findWhere({ "jid": contact.get("jid") });
    chatbox?.setModelContact(contact.get("jid"));
  });
}
__name(onRosterContactsFetched, "onRosterContactsFetched");
function rejectPresenceSubscription(jid, message) {
  const pres = $pres2({ to: jid, type: "unsubscribed" });
  if (message && message !== "") {
    pres.c("status").t(message);
  }
  api_default4.send(pres);
}
__name(rejectPresenceSubscription, "rejectPresenceSubscription");
function isUnsavedContact(contact) {
  const is_self = converse_default.session.get("bare_jid") === contact.get("jid");
  return !is_self && !contact.get("subscription");
}
__name(isUnsavedContact, "isUnsavedContact");

// plugins/blocklist/plugin.js
/**
 * @copyright The Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 * @description Adds support for XEP-0191 Blocking Command
 */
var { Strophe: Strophe43, sizzle: sizzle14 } = public_default.env;
Strophe43.addNamespace("BLOCKING", "urn:xmpp:blocking");
public_default.plugins.add("converse-blocklist", {
  /**
   * @typedef {import('../roster/contact').default} RosterContact
   * @typedef {import('../roster/contacts').default} RosterContacts
   */
  dependencies: ["converse-disco"],
  initialize() {
    const exports2 = { Blocklist: collection_default2, BlockedEntity: model_default3 };
    Object.assign(converse_default.exports, exports2);
    Object.assign(api_default4, api_default10);
    api_default4.promises.add(["blocklistInitialized"]);
    api_default4.listen.on(
      "cachedRoster",
      /** @param {RosterContacts} roster */
      async (roster) => {
        const domain = converse_default.session.get("domain");
        const blocking_supported = await api_default4.disco.supports(Strophe43.NS.BLOCKING, domain);
        if (blocking_supported) {
          const blocklist2 = await api_default4.blocklist.get();
          const requesting_contacts = roster.filter(
            /** @param {RosterContact} m */
            (m) => m.get("requesting")
          );
          requesting_contacts.forEach(
            /** @param {RosterContact} m */
            async (m) => {
              if (blocklist2.get(m.get("jid"))) {
                rejectPresenceSubscription(m.get("jid"));
                m.destroy();
              }
            }
          );
        }
      }
    );
    api_default4.listen.on(
      "getErrorAttributesForMessage",
      /**
       * @param {import('shared/types').MessageAttributes} attrs
       * @param {import('shared/types').MessageErrorAttributes} new_attrs
       */
      (attrs, new_attrs) => {
        if (attrs.errors.find((e) => e.name === "blocked" && e.xmlns === `${Strophe43.NS.BLOCKING}:errors`)) {
          const { __ } = converse_default;
          new_attrs.error = __("You are blocked from sending messages.");
        }
        return new_attrs;
      }
    );
    api_default4.listen.on("connected", () => {
      const connection2 = api_default4.connection.get();
      connection2.addHandler(
        /** @param {Element} stanza */
        (stanza) => {
          const bare_jid = converse_default.session.get("bare_jid");
          const from = stanza.getAttribute("from");
          if (Strophe43.getBareJidFromJid(from ?? bare_jid) != bare_jid) {
            import_log36.default.warn(`Received a blocklist push stanza from a suspicious JID ${from}`);
            return true;
          }
          const add_jids = sizzle14(`block[xmlns="${Strophe43.NS.BLOCKING}"] item`, stanza).map(
            /** @param {Element} item */
            (item) => item.getAttribute("jid")
          );
          if (add_jids.length) api_default4.blocklist.add(add_jids, false);
          const remove_jids = sizzle14(`unblock[xmlns="${Strophe43.NS.BLOCKING}"] item`, stanza).map(
            /** @param {Element} item */
            (item) => item.getAttribute("jid")
          );
          if (remove_jids.length) api_default4.blocklist.remove(remove_jids, false);
          return true;
        },
        Strophe43.NS.BLOCKING,
        "iq",
        "set"
      );
    });
    api_default4.listen.on("clearSession", () => {
      const { state } = converse_default;
      if (state.blocklist) {
        state.blocklist.clearStore({ "silent": true });
        window.sessionStorage.removeItem(state.blocklist.fetched_flag);
        delete state.blocklist;
      }
    });
    api_default4.listen.on("discoInitialized", async () => {
      const domain = converse_default.session.get("domain");
      if (await api_default4.disco.supports(Strophe43.NS.BLOCKING, domain)) {
        converse_default.state.blocklist = new converse_default.exports.Blocklist();
      }
    });
  }
});

// plugins/bosh/index.js
var import_strophe26 = require("strophe.js");

// plugins/bosh/api.js
var api_default11 = {
  /**
   * This API namespace lets you access the BOSH tokens
   * @namespace api.tokens
   * @memberOf api
   */
  tokens: {
    /**
     * @method api.tokens.get
     * @param {string} [id] The type of token to return ('rid' or 'sid').
     * @returns {string} A token, either the RID or SID token depending on what's asked for.
     * @example _converse.api.tokens.get('rid');
     */
    get(id) {
      const connection2 = api_default4.connection.get();
      if (!connection2) return null;
      if (id.toLowerCase() === "rid") {
        return connection2.rid || connection2._proto.rid;
      } else if (id.toLowerCase() === "sid") {
        return connection2.sid || connection2._proto.sid;
      }
    }
  }
};

// plugins/bosh/utils.js
var import_log37 = __toESM(require("@converse/log"));
var import_strophe25 = require("strophe.js");
var import_skeletor28 = require("@converse/skeletor");
var BOSH_SESSION_ID = "converse.bosh-session";
var bosh_session;
async function initBOSHSession() {
  const id = BOSH_SESSION_ID;
  if (!bosh_session) {
    bosh_session = new import_skeletor28.Model({ id });
    bosh_session.browserStorage = createStore(id, "session");
    await new Promise((resolve) => bosh_session.fetch({ "success": resolve, "error": resolve }));
  }
  let jid = converse_default.session.get("jid");
  if (jid) {
    if (bosh_session.get("jid") !== jid) {
      jid = await setUserJID(jid);
      bosh_session.clear({ "silent": true });
      bosh_session.save({ jid });
    }
  } else {
    const jid2 = bosh_session.get("jid");
    jid2 && await setUserJID(jid2);
  }
  return bosh_session;
}
__name(initBOSHSession, "initBOSHSession");
function startNewPreboundBOSHSession() {
  if (!api_default4.settings.get("prebind_url")) {
    throw new Error("startNewPreboundBOSHSession: If you use prebind then you MUST supply a prebind_url");
  }
  const connection2 = api_default4.connection.get();
  const xhr = new XMLHttpRequest();
  xhr.open("GET", api_default4.settings.get("prebind_url"), true);
  xhr.setRequestHeader("Accept", "application/json, text/javascript");
  xhr.onload = async function(event) {
    if (xhr.status >= 200 && xhr.status < 400) {
      const data = JSON.parse(xhr.responseText);
      const jid = await setUserJID(data.jid);
      connection2.attach(
        jid,
        data.sid,
        data.rid,
        connection2.onConnectStatusChanged,
        BOSH_WAIT
      );
    } else {
      xhr.onerror(event);
    }
  };
  xhr.onerror = function() {
    api_default4.connection.destroy();
    api_default4.trigger("noResumeableBOSHSession", converse_default);
  };
  xhr.send();
}
__name(startNewPreboundBOSHSession, "startNewPreboundBOSHSession");
async function attemptPrebind(_, payload) {
  if (payload.success) return payload;
  const { automatic } = payload;
  if (await restoreBOSHSession()) {
    return { ...payload, success: true };
  } else if (api_default4.settings.get("authentication") === PREBIND && (!automatic || api_default4.settings.get("auto_login"))) {
    startNewPreboundBOSHSession();
    return { ...payload, success: true };
  }
  return payload;
}
__name(attemptPrebind, "attemptPrebind");
function saveJIDToSession() {
  if (bosh_session !== void 0) {
    bosh_session.save({ "jid": converse_default.session.get("jid") });
  }
}
__name(saveJIDToSession, "saveJIDToSession");
function clearSession3() {
  if (bosh_session === void 0) {
    const id = BOSH_SESSION_ID;
    sessionStorage.removeItem(id);
    sessionStorage.removeItem(`${id}-${id}`);
  } else {
    bosh_session.destroy();
    bosh_session = void 0;
  }
}
__name(clearSession3, "clearSession");
async function restoreBOSHSession() {
  const jid = (await initBOSHSession()).get("jid");
  const connection2 = api_default4.connection.get();
  if (jid && connection2._proto instanceof import_strophe25.Strophe.Bosh) {
    try {
      connection2.restore(jid, connection2.onConnectStatusChanged);
      return true;
    } catch (e) {
      !isTestEnv() && import_log37.default.warn("Could not restore session for jid: " + jid + " Error message: " + e.message);
      return false;
    }
  }
  return false;
}
__name(restoreBOSHSession, "restoreBOSHSession");

// plugins/bosh/index.js
/**
 * @copyright The Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 * @description Converse.js plugin which add support for XEP-0206: XMPP Over BOSH
 */
public_default.plugins.add("converse-bosh", {
  enabled() {
    return !converse_default.api.settings.get("blacklisted_plugins").includes("converse-bosh");
  },
  initialize() {
    api_default4.settings.extend({
      bosh_service_url: void 0,
      prebind_url: null
    });
    Object.assign(api_default4, api_default11);
    api_default4.listen.on("clearSession", clearSession3);
    api_default4.listen.on("setUserJID", saveJIDToSession);
    api_default4.listen.on("login", attemptPrebind);
    api_default4.listen.on(
      "addClientFeatures",
      () => api_default4.disco.own.features.add(import_strophe26.Strophe.NS.BOSH)
    );
  }
});

// plugins/caps/utils.js
var { Strophe: Strophe46, stx: stx11 } = public_default.env;
function propertySort(array, property) {
  return array.sort((a, b) => {
    return a[property] > b[property] ? -1 : 1;
  });
}
__name(propertySort, "propertySort");
async function generateVerificationString() {
  const identities = converse_default.api.disco.own.identities.get();
  const features = converse_default.api.disco.own.features.get();
  if (identities.length > 1) {
    propertySort(identities, "category");
    propertySort(identities, "type");
    propertySort(identities, "lang");
  }
  let S = identities.reduce((result, id) => `${result}${id.category}/${id.type}/${id?.lang ?? ""}/${id.name}<`, "");
  features.sort();
  S = features.reduce((result, feature) => `${result}${feature}<`, S);
  const ab = await crypto.subtle.digest("SHA-1", stringToArrayBuffer(S));
  return arrayBufferToBase64(ab);
}
__name(generateVerificationString, "generateVerificationString");
async function addCapsNode(stanza) {
  const node = stx11`<c
        xmlns="${Strophe46.NS.CAPS}"
        hash="sha-1"
        node="https://conversejs.org"
        ver="${await generateVerificationString()}"></c>`;
  stanza.root().cnode(node).up();
  return stanza;
}
__name(addCapsNode, "addCapsNode");

// plugins/caps/index.js
/**
 * @copyright 2022, the Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 */
var { Strophe: Strophe47 } = public_default.env;
Strophe47.addNamespace("CAPS", "http://jabber.org/protocol/caps");
public_default.plugins.add("converse-caps", {
  dependencies: ["converse-status"],
  initialize() {
    api_default4.listen.on("constructedPresence", (_, p) => addCapsNode(p));
    api_default4.listen.on("constructedMUCPresence", (_, p) => addCapsNode(p));
  }
});

// plugins/chatboxes/chatboxes.js
var import_skeletor29 = require("@converse/skeletor");
var ChatBoxes = class extends import_skeletor29.Collection {
  static {
    __name(this, "ChatBoxes");
  }
  /**
   * @param {Model[]} models
   * @param {object} options
   */
  constructor(models, options) {
    super(models, Object.assign({ comparator: "time_opened" }, options));
  }
  /**
   * @param {Collection} collection
   */
  onChatBoxesFetched(collection) {
    collection.filter((c) => !c.isValid()).forEach((c) => c.destroy());
    api_default4.trigger("chatBoxesFetched");
  }
  /**
   * @param {boolean} reconnecting
   */
  onConnected(reconnecting) {
    if (reconnecting) return;
    const bare_jid = converse_default.session.get("bare_jid");
    initStorage(this, `converse.chatboxes-${bare_jid}`);
    this.fetch({
      add: true,
      success: /* @__PURE__ */ __name((c) => this.onChatBoxesFetched(c), "success")
    });
  }
  /**
   * @param {import('./types').CreateModelAttributes} attrs
   * @param {import('@converse/skeletor/src/types/model.js').ModelOptions} options
   */
  createModel(attrs, options) {
    if (!attrs.type) {
      throw new Error("You need to specify a type of chatbox to be created");
    }
    const ChatBox2 = api_default4.chatboxes.registry.get(attrs.type);
    return new ChatBox2(attrs, options);
  }
};
var chatboxes_default = ChatBoxes;

// plugins/chatboxes/index.js
/**
 * @copyright 2022, the Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 */
var { Strophe: Strophe48 } = public_default.env;
public_default.plugins.add("converse-chatboxes", {
  dependencies: ["converse-emoji", "converse-roster", "converse-vcard"],
  initialize() {
    api_default4.promises.add([
      "chatBoxesFetched",
      "chatBoxesInitialized",
      "privateChatsAutoJoined"
    ]);
    Object.assign(api_default4, { chatboxes: api_default2 });
    Object.assign(converse_default, { ChatBoxes: chatboxes_default });
    Object.assign(converse_default.exports, { ChatBoxes: chatboxes_default });
    api_default4.listen.on("addClientFeatures", () => {
      api_default4.disco.own.features.add(Strophe48.NS.MESSAGE_CORRECT);
      api_default4.disco.own.features.add(Strophe48.NS.HTTPUPLOAD);
      api_default4.disco.own.features.add(Strophe48.NS.OUTOFBAND);
    });
    let chatboxes;
    api_default4.listen.on("pluginsInitialized", () => {
      chatboxes = new converse_default.exports.ChatBoxes();
      Object.assign(converse_default, { chatboxes });
      Object.assign(converse_default.state, { chatboxes });
      api_default4.trigger("chatBoxesInitialized");
    });
    api_default4.listen.on("presencesInitialized", (reconnecting) => chatboxes.onConnected(reconnecting));
    api_default4.listen.on("reconnected", () => chatboxes.forEach((m) => m.onReconnection()));
    api_default4.listen.on("clearSession", onClearSession);
    api_default4.listen.on("chatBoxClosed", () => {
      if (isUniView()) {
        converse_default.state.chatboxes.find((c) => c.get("jid"))?.maybeShow();
      }
    });
  }
});

// plugins/adhoc/api.js
var import_log38 = __toESM(require("@converse/log"));

// plugins/adhoc/utils.js
var import_sizzle9 = __toESM(require("sizzle"));
var { Strophe: Strophe49, u: u17 } = public_default.env;
function parseForCommands(stanza) {
  const items = (0, import_sizzle9.default)(`query[xmlns="${Strophe49.NS.DISCO_ITEMS}"][node="${Strophe49.NS.ADHOC}"] item`, stanza);
  return items.map(u17.getAttributes);
}
__name(parseForCommands, "parseForCommands");
function parseCommandResult(iq) {
  const cmd_el = (0, import_sizzle9.default)(`command[xmlns="${Strophe49.NS.ADHOC}"]`, iq).pop();
  const note = cmd_el.querySelector("note");
  return {
    ...parseXForm(iq),
    sessionid: cmd_el.getAttribute("sessionid"),
    note: note ? {
      text: note.textContent,
      type: (
        /** @type {'info'|'warn'|'error'} */
        note.getAttribute("type")
      )
    } : null,
    actions: Array.from(cmd_el.querySelector("actions")?.children ?? []).map((a) => a.nodeName.toLowerCase())
  };
}
__name(parseCommandResult, "parseCommandResult");

// plugins/adhoc/api.js
var { Strophe: Strophe50, $iq: $iq7, u: u18, stx: stx12 } = public_default.env;
var api_default12 = {
  /**
   * @typedef {import('./types').AdHocCommandResult} AdHocCommandResult
   */
  /**
   * The XEP-0050 Ad-Hoc Commands API
   *
   * This API lets you discover ad-hoc commands available for an entity in the XMPP network.
   *
   * @namespace api.adhoc
   * @memberOf api
   */
  adhoc: {
    /**
     * @method api.adhoc.getCommands
     * @param {string} to_jid
     */
    async getCommands(to_jid) {
      try {
        return parseForCommands(await api_default4.disco.items(to_jid, Strophe50.NS.ADHOC));
      } catch (e) {
        if (e === null) {
          import_log38.default.error(`Error: timeout while fetching ad-hoc commands for ${to_jid}`);
        } else {
          import_log38.default.error(`Error while fetching ad-hoc commands for ${to_jid}`);
          import_log38.default.error(e);
        }
        return [];
      }
    },
    /**
     * @method api.adhoc.fetchCommandForm
     * @param {string} jid
     * @param {string} node
     * @returns {Promise<AdHocCommandResult>}
     */
    async fetchCommandForm(jid, node) {
      const stanza = $iq7({
        type: "set",
        to: jid
      }).c("command", {
        xmlns: Strophe50.NS.ADHOC,
        action: "execute",
        node
      });
      return parseCommandResult(await api_default4.sendIQ(stanza));
    },
    /**
     * @method api.adhoc.runCommand
     * @param {String} jid
     * @param {String} sessionid
     * @param {import('./types').AdHocCommandAction} action
     * @param {String} node
     * @param {Array<{ [k:string]: string }>} inputs
     */
    async runCommand(jid, sessionid, node, action, inputs) {
      const iq = stx12`<iq type="set" to="${jid}" xmlns="jabber:client">
                    <command sessionid="${sessionid}" node="${node}" action="${action}" xmlns="${Strophe50.NS.ADHOC}">
                        ${!["cancel", "prev"].includes(action) ? stx12`
                            <x xmlns="${Strophe50.NS.XFORM}" type="submit">
                                ${inputs.map(({ name, value }) => stx12`<field var="${name}"><value>${value}</value></field>`)}
                            </x>` : ""}
                    </command>
                </iq>`;
      const result = await api_default4.sendIQ(iq, null, false);
      if (result === null) {
        import_log38.default.warn(`A timeout occurred while trying to run an ad-hoc command`);
        const { __ } = converse_default;
        return {
          status: "error",
          note: __("A timeout occurred")
        };
      } else if (u18.isErrorStanza(result)) {
        import_log38.default.error("Error while trying to execute an ad-hoc command");
        import_log38.default.error(result);
      }
      const command = result.querySelector("command");
      const status = command?.getAttribute("status");
      return {
        status,
        ...status === "executing" ? parseCommandResult(result) : {},
        note: result.querySelector("note")?.textContent
      };
    }
  }
};

// plugins/adhoc/index.js
var { Strophe: Strophe51 } = public_default.env;
Strophe51.addNamespace("ADHOC", "http://jabber.org/protocol/commands");
public_default.plugins.add("converse-adhoc", {
  dependencies: ["converse-disco"],
  initialize() {
    Object.assign(this._converse.api, api_default12);
  }
});

// plugins/headlines/feed.js
var HeadlinesFeed = class extends ChatBoxBase {
  static {
    __name(this, "HeadlinesFeed");
  }
  defaults() {
    return {
      "bookmarked": false,
      "hidden": isUniView() && !api_default4.settings.get("singleton"),
      "message_type": "headline",
      "num_unread": 0,
      "time_opened": this.get("time_opened") || (/* @__PURE__ */ new Date()).getTime(),
      "time_sent": void 0,
      "type": HEADLINES_TYPE
    };
  }
  constructor(attrs, options) {
    super(attrs, options);
    this.disable_mam = true;
  }
  async initialize() {
    await super.initialize();
    await this.fetchMessages();
    api_default4.trigger("headlinesFeedInitialized", this);
  }
  canPostMessages() {
    return false;
  }
  /**
   * @param {import('../../shared/message').default} message
   */
  isChatMessage(message) {
    const type = message.get("type");
    return type === this.get("message_type") || type === "normal";
  }
};

// plugins/headlines/api.js
var api_default13 = {
  /**
   * The "headlines" namespace, which is used for headline-channels
   * which are read-only channels containing messages of type
   * "headline".
   *
   * @namespace api.headlines
   * @memberOf api
   */
  headlines: {
    /**
     * Retrieves a headline-channel or all headline-channels.
     *
     * @method api.headlines.get
     * @param {String|String[]} jids - e.g. 'buddy@example.com' or ['buddy1@example.com', 'buddy2@example.com']
     * @param { Object } [attrs] - Attributes to be set on the _converse.ChatBox model.
     * @param { Boolean } [create=false] - Whether the chat should be created if it's not found.
     * @returns { Promise<HeadlinesFeed[]|HeadlinesFeed> }
     */
    async get(jids, attrs = {}, create = false) {
      async function _get(jid) {
        let model = await api_default4.chatboxes.get(jid);
        if (!model && create) {
          const { HeadlinesFeed: HeadlinesFeed2 } = converse_default.exports;
          model = await api_default4.chatboxes.create(jid, attrs, HeadlinesFeed2);
        } else {
          model = model && model.get("type") === HEADLINES_TYPE ? model : null;
          if (model && Object.keys(attrs).length) {
            model.save(attrs);
          }
        }
        return model;
      }
      __name(_get, "_get");
      if (jids === void 0) {
        const chats = await api_default4.chatboxes.get();
        return chats.filter((c) => c.get("type") === HEADLINES_TYPE);
      } else if (typeof jids === "string") {
        return _get(jids);
      }
      return Promise.all(jids.map((jid) => _get(jid)));
    }
  }
};

// plugins/headlines/utils.js
async function onHeadlineMessage(stanza) {
  if (isHeadline(stanza) || isServerMessage(stanza)) {
    const from_jid = stanza.getAttribute("from");
    await api_default4.waitUntil("rosterInitialized");
    /*! TOFIND */
    if (from_jid.includes("@") && converse_default.state.roster && !converse_default.state.roster.get(from_jid) && !api_default4.settings.get("allow_non_roster_messaging")) {
      return;
    }
    if (stanza.querySelector("body") === null) {
      return;
    }
    const chatbox = await api_default4.chatboxes.create(from_jid, {
      "id": from_jid,
      "jid": from_jid,
      "type": HEADLINES_TYPE,
      "from": from_jid
    }, HeadlinesFeed);
    const attrs = await parseMessage(stanza);
    await chatbox.createMessage(attrs);
    api_default4.trigger("message", { chatbox, stanza, attrs });
  }
}
__name(onHeadlineMessage, "onHeadlineMessage");

// plugins/headlines/index.js
public_default.plugins.add("converse-headlines", {
  dependencies: ["converse-chat"],
  initialize() {
    const exports2 = { HeadlinesFeed };
    Object.assign(converse_default, exports2);
    Object.assign(converse_default.exports, exports2);
    function registerHeadlineHandler() {
      api_default4.connection.get()?.addHandler((m) => {
        onHeadlineMessage(m);
        return true;
      }, null, "message");
    }
    __name(registerHeadlineHandler, "registerHeadlineHandler");
    api_default4.listen.on("connected", registerHeadlineHandler);
    api_default4.listen.on("reconnected", registerHeadlineHandler);
    Object.assign(api_default4, api_default13);
    api_default4.chatboxes.registry.add(HEADLINES_TYPE, HeadlinesFeed);
  }
});

// plugins/omemo/device.js
var import_skeletor32 = require("@converse/skeletor");
var import_log42 = __toESM(require("@converse/log"));

// plugins/omemo/constants.js
var constants_exports3 = {};
__export(constants_exports3, {
  KEY_ALGO: () => KEY_ALGO,
  TAG_LENGTH: () => TAG_LENGTH,
  TRUSTED: () => TRUSTED,
  UNDECIDED: () => UNDECIDED,
  UNTRUSTED: () => UNTRUSTED
});
var UNDECIDED = 0;
var TRUSTED = 1;
var UNTRUSTED = -1;
var TAG_LENGTH = 128;
var KEY_ALGO = {
  "name": "AES-GCM",
  "length": 128
};

// plugins/omemo/parsers.js
var import_sizzle11 = __toESM(require("sizzle"));
var import_log41 = __toESM(require("@converse/log"));

// plugins/omemo/utils.js
var import_sizzle10 = __toESM(require("sizzle"));
var import_log40 = __toESM(require("@converse/log"));

// plugins/omemo/devicelists.js
var import_skeletor31 = require("@converse/skeletor");

// plugins/omemo/devicelist.js
var import_openpromise17 = require("@converse/openpromise");
var import_skeletor30 = require("@converse/skeletor");
var import_log39 = __toESM(require("@converse/log"));
var { Strophe: Strophe52, stx: stx13, sizzle: sizzle16, u: u19 } = public_default.env;
var DeviceList = class extends import_skeletor30.Model {
  static {
    __name(this, "DeviceList");
  }
  get idAttribute() {
    return "jid";
  }
  async initialize() {
    super.initialize();
    this.initialized = (0, import_openpromise17.getOpenPromise)();
    await this.initDevices();
    this.initialized.resolve();
  }
  initDevices() {
    this.devices = new converse_default.exports.Devices();
    const bare_jid = converse_default.session.get("bare_jid");
    const id = `converse.devicelist-${bare_jid}-${this.get("jid")}`;
    u19.initStorage(this.devices, id);
    return this.fetchDevices();
  }
  /**
   * @param {import('./devices').default} collection
   */
  async onDevicesFound(collection) {
    if (collection.length === 0) {
      let ids = [];
      try {
        ids = await this.fetchDevicesFromServer();
      } catch (e) {
        if (e === null) {
          import_log39.default.error(`Timeout error while fetching OMEMO devices for ${this.get("jid")}`);
          this.destroy();
        } else if (u19.isElement(e) && await parsers_exports.parseErrorStanza(e) instanceof ItemNotFoundError) {
          import_log39.default.debug(`No OMEMO devices found for ${this.get("jid")}`);
        } else {
          import_log39.default.error(`Could not fetch OMEMO devices for ${this.get("jid")}`);
          import_log39.default.error(e);
          this.destroy();
        }
      }
      const bare_jid = converse_default.session.get("bare_jid");
      if (this.get("jid") === bare_jid) {
        this.publishCurrentDevice(ids);
      }
    }
  }
  fetchDevices() {
    if (this._devices_promise === void 0) {
      this._devices_promise = new Promise((resolve) => {
        this.devices.fetch({
          success: /* @__PURE__ */ __name((c) => resolve(this.onDevicesFound(c)), "success"),
          error: /* @__PURE__ */ __name((_, e) => {
            import_log39.default.error(e);
            resolve();
          }, "error")
        });
      });
    }
    return this._devices_promise;
  }
  /**
   * @returns {Promise<string>}
   */
  async getOwnDeviceId() {
    const { omemo_store } = converse_default.state;
    let device_id = omemo_store.get("device_id");
    if (!this.devices.get(device_id)) {
      await omemo_store.generateBundle();
      device_id = omemo_store.get("device_id");
    }
    return device_id;
  }
  /**
   * @param {string[]} device_ids
   */
  async publishCurrentDevice(device_ids) {
    const bare_jid = converse_default.session.get("bare_jid");
    if (this.get("jid") !== bare_jid) {
      return;
    }
    await api_default4.omemo.session.restore();
    if (!converse_default.state.omemo_store) {
      import_log39.default.debug("publishCurrentDevice: omemo_store is not defined, likely a timing issue");
      return;
    }
    if (!device_ids.includes(await this.getOwnDeviceId())) {
      return this.publishDevices();
    }
  }
  /**
   * @returns {Promise<import('./device').default[]>}
   */
  async fetchDevicesFromServer() {
    const bare_jid = converse_default.session.get("bare_jid");
    const stanza = stx13`
            <iq type='get' from='${bare_jid}' to='${this.get("jid")}' xmlns="jabber:client">
                <pubsub xmlns='${Strophe52.NS.PUBSUB}'>
                    <items node='${Strophe52.NS.OMEMO_DEVICELIST}'/>
                </pubsub>
            </iq>`;
    const iq = await api_default4.sendIQ(stanza);
    const selector = `list[xmlns="${Strophe52.NS.OMEMO}"] device`;
    const device_ids = sizzle16(selector, iq).map((d) => d.getAttribute("id"));
    const jid = this.get("jid");
    return Promise.all(device_ids.map((id) => this.devices.create({ id, jid }, { promise: true })));
  }
  /**
   * Sends an IQ stanza to the current user's "devices" PEP node to
   * ensure that all devices are published for potential chat partners to see.
   * See: https://xmpp.org/extensions/attic/xep-0384-0.3.0.html#usecases-announcing
   */
  publishDevices() {
    const item = stx13`
            <item id='current'>
                <list xmlns='${Strophe52.NS.OMEMO}'>
                    ${this.devices.filter((d) => d.get("active")).map((d) => stx13`<device id='${d.get("id")}'/>`)}
                </list>
            </item>`;
    const options = { access_model: "open" };
    return api_default4.pubsub.publish(null, Strophe52.NS.OMEMO_DEVICELIST, item, options, false);
  }
  /**
   * @param {string[]} device_ids
   */
  async removeOwnDevices(device_ids) {
    const bare_jid = converse_default.session.get("bare_jid");
    if (this.get("jid") !== bare_jid) {
      throw new Error("Cannot remove devices from someone else's device list");
    }
    await Promise.all(
      device_ids.map((id) => this.devices.get(id)).map(
        (d) => new Promise(
          (resolve) => d.destroy({
            success: resolve,
            error: /* @__PURE__ */ __name((_, e) => {
              import_log39.default.error(e);
              resolve();
            }, "error")
          })
        )
      )
    );
    return this.publishDevices();
  }
};
var devicelist_default = DeviceList;

// plugins/omemo/devicelists.js
var DeviceLists = class extends import_skeletor31.Collection {
  static {
    __name(this, "DeviceLists");
  }
  constructor() {
    super();
    this.model = devicelist_default;
  }
};
var devicelists_default = DeviceLists;

// plugins/omemo/utils.js
var { u: u20, Strophe: Strophe53, stx: stx14 } = public_default.env;
var { arrayBufferToHex: arrayBufferToHex2, base64ToArrayBuffer: base64ToArrayBuffer2 } = u20;
async function updateDevicesFromStanza(stanza) {
  const items_el = (0, import_sizzle10.default)(`items[node="${Strophe53.NS.OMEMO_DEVICELIST}"]`, stanza).pop();
  if (!items_el) return;
  const device_selector = `item list[xmlns="${Strophe53.NS.OMEMO}"] device`;
  const device_ids = (0, import_sizzle10.default)(device_selector, items_el).map((d) => d.getAttribute("id"));
  const jid = stanza.getAttribute("from");
  const devicelist = await api_default4.omemo.devicelists.get(jid, true);
  const devices = devicelist.devices;
  const removed_ids = devices.pluck("id").filter(
    /** @param {string} id */
    (id) => !device_ids.includes(id)
  );
  const bare_jid = converse_default.session.get("bare_jid");
  removed_ids.forEach(
    /** @param {string} id */
    (id) => {
      if (jid === bare_jid && id === converse_default.state.omemo_store.get("device_id")) {
        return;
      }
      devices.get(id).save("active", false);
    }
  );
  device_ids.forEach(
    /** @param {string} device_id */
    (device_id) => {
      const device = devices.get(device_id);
      if (device) {
        device.save("active", true);
      } else {
        devices.create({ id: device_id, jid });
      }
    }
  );
  if (u20.isSameBareJID(bare_jid, jid)) {
    devicelist.publishCurrentDevice(device_ids);
  }
}
__name(updateDevicesFromStanza, "updateDevicesFromStanza");
async function updateBundleFromStanza(stanza) {
  const items_el = (0, import_sizzle10.default)(`items`, stanza).pop();
  if (!items_el || !items_el.getAttribute("node").startsWith(Strophe53.NS.OMEMO_BUNDLES)) {
    return;
  }
  const device_id = items_el.getAttribute("node").split(":")[1];
  const jid = stanza.getAttribute("from");
  const bundle_el = (0, import_sizzle10.default)(`item > bundle`, items_el).pop();
  const devicelist = await api_default4.omemo.devicelists.get(jid, true);
  const device = devicelist.devices.get(device_id) || devicelist.devices.create({ "id": device_id, jid });
  const bundle = u20.omemo.parseBundle(bundle_el);
  device.save({ bundle });
}
__name(updateBundleFromStanza, "updateBundleFromStanza");
async function handlePEPPush(message) {
  try {
    if ((0, import_sizzle10.default)(`event[xmlns="${Strophe53.NS.PUBSUB}#event"]`, message).length) {
      await api_default4.waitUntil("OMEMOInitialized");
      await updateDevicesFromStanza(message);
      await updateBundleFromStanza(message);
    }
  } catch (e) {
    import_log40.default.error(e);
  }
}
__name(handlePEPPush, "handlePEPPush");
function registerPEPPushHandler() {
  api_default4.connection.get().addHandler(
    /** @param {Element} message */
    (message) => {
      handlePEPPush(message);
      return true;
    },
    null,
    "message"
  );
}
__name(registerPEPPushHandler, "registerPEPPushHandler");
async function fetchDeviceLists() {
  const bare_jid = converse_default.session.get("bare_jid");
  converse_default.state.devicelists = new devicelists_default();
  const id = `converse.devicelists-${bare_jid}`;
  initStorage(converse_default.state.devicelists, id);
  await new Promise((resolve) => {
    converse_default.state.devicelists.fetch({
      success: resolve,
      /**
       * @param {unknown} _m
       * @param {unknown} e
       */
      error: /* @__PURE__ */ __name((_m, e) => {
        import_log40.default.error(e);
        resolve();
      }, "error")
    });
  });
  await api_default4.omemo.devicelists.get(bare_jid, true);
}
__name(fetchDeviceLists, "fetchDeviceLists");
async function initOMEMO(reconnecting) {
  if (reconnecting) {
    return;
  }
  if (!converse_default.state.config.get("trusted") || api_default4.settings.get("clear_cache_on_logout")) {
    import_log40.default.warn("Not initializing OMEMO, since this browser is not trusted or clear_cache_on_logout is set to true");
    return;
  }
  try {
    await fetchDeviceLists();
    await api_default4.omemo.session.restore();
    await converse_default.state.omemo_store.publishBundle();
  } catch (e) {
    import_log40.default.error("Could not initialize OMEMO support");
    import_log40.default.error(e);
    return;
  }
  api_default4.trigger("OMEMOInitialized");
}
__name(initOMEMO, "initOMEMO");
async function getDeviceList(jid, create = false) {
  const { devicelists } = converse_default.state;
  const list = devicelists.get(jid) || (create ? devicelists.create({ jid }) : null);
  await list?.initialized;
  return list;
}
__name(getDeviceList, "getDeviceList");
async function generateFingerprint(device) {
  if (device.get("bundle")?.fingerprint) {
    return;
  }
  const bundle = await device.getBundle();
  bundle["fingerprint"] = arrayBufferToHex2(base64ToArrayBuffer2(bundle["identity_key"]));
  device.save("bundle", bundle);
  device.trigger("change:bundle");
}
__name(generateFingerprint, "generateFingerprint");
function handleMessageSendError(e, chat) {
  const { __ } = converse_default;
  if (e instanceof errors_exports.IQError) {
    chat.save("omemo_supported", false);
    const err_msgs = [];
    if ((0, import_sizzle10.default)(`presence-subscription-required[xmlns="${Strophe53.NS.PUBSUB_ERROR}"]`, e.iq).length) {
      err_msgs.push(
        __(
          "Sorry, we're unable to send an encrypted message because %1$s requires you to be subscribed to their presence in order to see their OMEMO information",
          e.iq.getAttribute("from")
        )
      );
    } else if ((0, import_sizzle10.default)(`remote-server-not-found[xmlns="urn:ietf:params:xml:ns:xmpp-stanzas"]`, e.iq).length) {
      err_msgs.push(
        __(
          "Sorry, we're unable to send an encrypted message because the remote server for %1$s could not be found",
          e.iq.getAttribute("from")
        )
      );
    } else {
      err_msgs.push(__("Unable to send an encrypted message due to an unexpected error."));
      err_msgs.push(e.iq.outerHTML);
    }
    api_default4.alert("error", __("Error"), err_msgs);
  } else if (e instanceof errors_exports.UserFacingError) {
    api_default4.alert("error", __("Error"), [e.message]);
  }
  throw e;
}
__name(handleMessageSendError, "handleMessageSendError");
async function getDevicesForContact(jid) {
  await api_default4.waitUntil("OMEMOInitialized");
  const devicelist = await api_default4.omemo.devicelists.get(jid, true);
  await devicelist.fetchDevices();
  return devicelist.devices;
}
__name(getDevicesForContact, "getDevicesForContact");
function getSessionCipher(jid, id) {
  const { libsignal } = (
    /** @type import('./types').WindowWithLibsignal */
    window
  );
  const address = new libsignal.SignalProtocolAddress(jid, id);
  return new libsignal.SessionCipher(converse_default.state.omemo_store, address);
}
__name(getSessionCipher, "getSessionCipher");
function encryptKey(key_and_tag, device) {
  return getSessionCipher(device.get("jid"), device.get("id")).encrypt(key_and_tag).then(
    /** @param {ArrayBuffer} payload */
    (payload) => ({ payload, device })
  );
}
__name(encryptKey, "encryptKey");
async function buildSession(device) {
  const { libsignal } = (
    /** @type import('./types').WindowWithLibsignal */
    window
  );
  const address = new libsignal.SignalProtocolAddress(device.get("jid"), device.get("id"));
  const sessionBuilder = new libsignal.SessionBuilder(converse_default.state.omemo_store, address);
  const prekey = device.getRandomPreKey();
  const bundle = await device.getBundle();
  return sessionBuilder.processPreKey({
    registrationId: parseInt(device.get("id"), 10),
    identityKey: base64ToArrayBuffer2(bundle.identity_key),
    signedPreKey: {
      keyId: bundle.signed_prekey.id,
      // <Number>
      publicKey: base64ToArrayBuffer2(bundle.signed_prekey.public_key),
      signature: base64ToArrayBuffer2(bundle.signed_prekey.signature)
    },
    preKey: {
      keyId: prekey.id,
      // <Number>
      publicKey: base64ToArrayBuffer2(prekey.key)
    }
  });
}
__name(buildSession, "buildSession");
async function getSession(device) {
  if (!device.get("bundle")) {
    import_log40.default.error(`Could not build an OMEMO session for device ${device.get("id")} because we don't have its bundle`);
    return null;
  }
  const { libsignal } = (
    /** @type import('./types').WindowWithLibsignal */
    window
  );
  const address = new libsignal.SignalProtocolAddress(device.get("jid"), device.get("id"));
  const session = await converse_default.state.omemo_store.loadSession(address.toString());
  if (session) {
    return session;
  } else {
    try {
      return await buildSession(device);
    } catch (e) {
      import_log40.default.error(`Could not build an OMEMO session for device ${device.get("id")}`);
      import_log40.default.error(e);
      return null;
    }
  }
}
__name(getSession, "getSession");
async function getBundlesAndBuildSessions(chatbox) {
  const { __ } = converse_default;
  const no_devices_err = __("Sorry, no devices found to which we can send an OMEMO encrypted message.");
  let devices;
  if (chatbox instanceof muc_default) {
    const collections = await Promise.all(
      chatbox.occupants.map(
        /** @param {import('../../plugins/muc/occupant').default} o */
        (o) => getDevicesForContact(o.get("jid"))
      )
    );
    devices = collections.reduce((a, b) => a.concat(b.models), []);
  } else if (chatbox.get("type") === constants_exports.PRIVATE_CHAT_TYPE) {
    const their_devices = await getDevicesForContact(chatbox.get("jid"));
    if (their_devices.length === 0) {
      throw new errors_exports.UserFacingError(no_devices_err);
    }
    const bare_jid = converse_default.session.get("bare_jid");
    const own_list = await api_default4.omemo.devicelists.get(bare_jid);
    const own_devices = own_list.devices;
    devices = [...own_devices.models, ...their_devices.models];
  }
  const id = converse_default.state.omemo_store.get("device_id");
  devices = devices.filter(
    /** @param {Device} d */
    (d) => d.get("id") !== id
  );
  await Promise.all(devices.map(
    /** @param {Device} d */
    (d) => d.getBundle()
  ));
  const sessions = await Promise.all(
    devices.map(
      /** @param {Device} [d] */
      (d) => {
        return d && getSession(d) || null;
      }
    )
  );
  if (sessions.includes(null)) {
    devices = devices.filter(
      /** @param {Device} d */
      (d) => sessions[devices.indexOf(d)]
    );
    if (devices.length === 0) {
      throw new errors_exports.UserFacingError(no_devices_err);
    }
  }
  return devices;
}
__name(getBundlesAndBuildSessions, "getBundlesAndBuildSessions");
async function encryptMessage(plaintext) {
  const iv = crypto.getRandomValues(new window.Uint8Array(12));
  const key = await crypto.subtle.generateKey(KEY_ALGO, true, ["encrypt", "decrypt"]);
  const algo = (
    /** @type {AesGcmParams} */
    {
      iv,
      name: "AES-GCM",
      tagLength: TAG_LENGTH
    }
  );
  const encrypted = await crypto.subtle.encrypt(algo, key, u20.stringToArrayBuffer(plaintext));
  const length = encrypted.byteLength - (128 + 7 >> 3);
  const ciphertext = encrypted.slice(0, length);
  const tag = encrypted.slice(length);
  const exported_key = await crypto.subtle.exportKey("raw", key);
  return {
    tag,
    key: exported_key,
    key_and_tag: u20.appendArrayBuffer(exported_key, tag),
    payload: u20.arrayBufferToBase64(ciphertext),
    iv: u20.arrayBufferToBase64(iv)
  };
}
__name(encryptMessage, "encryptMessage");
async function decryptMessage(obj) {
  const key_obj = await crypto.subtle.importKey("raw", obj.key, KEY_ALGO, true, ["encrypt", "decrypt"]);
  const cipher = u20.appendArrayBuffer(u20.base64ToArrayBuffer(obj.payload), obj.tag);
  const algo = (
    /** @type {AesGcmParams} */
    {
      name: "AES-GCM",
      iv: u20.base64ToArrayBuffer(obj.iv),
      tagLength: TAG_LENGTH
    }
  );
  return u20.arrayBufferToString(await crypto.subtle.decrypt(algo, key_obj, cipher));
}
__name(decryptMessage, "decryptMessage");
async function createOMEMOMessageStanza(chat, data) {
  let { stanza } = data;
  const { message } = data;
  if (!message.get("is_encrypted")) {
    return data;
  }
  if (!message.get("body")) {
    throw new Error("No message body to encrypt!");
  }
  const devices = await getBundlesAndBuildSessions(chat);
  const { key_and_tag, iv, payload } = await encryptMessage(message.get("plaintext"));
  const dicts = await Promise.all(
    devices.filter((device) => device.get("trusted") != UNTRUSTED && device.get("active")).map((device) => encryptKey(key_and_tag, device))
  );
  stanza.cnode(
    stx14`
            <encrypted xmlns="${Strophe53.NS.OMEMO}">
                <header sid="${converse_default.state.omemo_store.get("device_id")}">
                    ${dicts.map(({ payload: payload2, device }) => {
      const prekey = 3 == parseInt(payload2.type, 10);
      if (prekey) {
        return stx14`<key rid="${device.get("id")}" prekey="true">${btoa(payload2.body)}</key>`;
      }
      return stx14`<key rid="${device.get("id")}">${btoa(payload2.body)}</key>`;
    })}
                    <iv>${iv}</iv>
                </header>
                <payload>${payload}</payload>
            </encrypted>`
  ).root();
  stanza.cnode(stx14`<store xmlns="${Strophe53.NS.HINTS}"/>`).root();
  stanza.cnode(stx14`<encryption xmlns="${Strophe53.NS.EME}" namespace="${Strophe53.NS.OMEMO}"/>`).root();
  return { message, stanza };
}
__name(createOMEMOMessageStanza, "createOMEMOMessageStanza");
function getOutgoingMessageAttributes(chat, attrs) {
  const { __ } = converse_default;
  if (chat.get("omemo_active") && attrs.body) {
    return {
      ...attrs,
      is_encrypted: true,
      plaintext: attrs.body,
      body: __(
        "This is an OMEMO encrypted message which your client doesn\u2019t seem to support. Find more information on https://conversations.im/omemo"
      )
    };
  }
  return attrs;
}
__name(getOutgoingMessageAttributes, "getOutgoingMessageAttributes");
async function contactHasOMEMOSupport(jid) {
  const devices = await u20.omemo.getDevicesForContact(jid);
  return devices.length > 0;
}
__name(contactHasOMEMOSupport, "contactHasOMEMOSupport");
async function checkOMEMOSupported(chatbox) {
  let supported;
  if (chatbox.get("type") === constants_exports.CHATROOMS_TYPE) {
    await api_default4.waitUntil("OMEMOInitialized");
    const { features } = (
      /** @type {MUC} */
      chatbox
    );
    supported = features.get("nonanonymous") && features.get("membersonly");
  } else if (chatbox.get("type") === constants_exports.PRIVATE_CHAT_TYPE) {
    supported = await contactHasOMEMOSupport(chatbox.get("jid"));
  }
  chatbox.set("omemo_supported", !!supported);
  if (supported && api_default4.settings.get("omemo_default")) {
    chatbox.set("omemo_active", true);
  }
}
__name(checkOMEMOSupported, "checkOMEMOSupported");
async function onOccupantAdded(chatroom, occupant) {
  if (occupant.isSelf() || !chatroom.features.get("nonanonymous") || !chatroom.features.get("membersonly")) {
    return;
  }
  const { __ } = converse_default;
  if (chatroom.get("omemo_active")) {
    const supported = await contactHasOMEMOSupport(occupant.get("jid"));
    if (!supported) {
      chatroom.createMessage({
        "message": __(
          "%1$s doesn't appear to have a client that supports OMEMO. Encrypted chat will no longer be possible in this grouchat.",
          occupant.get("nick")
        ),
        "type": "error"
      });
      chatroom.save({ "omemo_active": false, "omemo_supported": false });
    }
  }
}
__name(onOccupantAdded, "onOccupantAdded");
function onChatInitialized(chatbox) {
  checkOMEMOSupported(chatbox);
  if (chatbox.get("type") === constants_exports.CHATROOMS_TYPE) {
    chatbox.occupants.on(
      "add",
      /** @param {import('../../plugins/muc/occupant').default} o */
      (o) => onOccupantAdded(
        /** @type {MUC} */
        chatbox,
        o
      )
    );
    chatbox.features.on("change", () => checkOMEMOSupported(chatbox));
  }
}
__name(onChatInitialized, "onChatInitialized");
function setEncryptedFileURL(message, attrs) {
  if (message.file.xep454_ivkey) {
    const url = attrs.oob_url.replace(/^https?:/, "aesgcm:") + "#" + message.file.xep454_ivkey;
    return {
      ...attrs,
      ...{
        oob_url: null,
        // Since only the body gets encrypted, we don't set the oob_url
        message: url,
        body: url
      }
    };
  }
  return attrs;
}
__name(setEncryptedFileURL, "setEncryptedFileURL");
async function encryptFile(file) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, await file.arrayBuffer());
  const exported_key = await window.crypto.subtle.exportKey("raw", key);
  const encrypted_file = new File([encrypted], file.name, { type: file.type, lastModified: file.lastModified });
  Object.assign(encrypted_file, { xep454_ivkey: arrayBufferToHex2(iv) + arrayBufferToHex2(exported_key) });
  return encrypted_file;
}
__name(encryptFile, "encryptFile");
Object.assign(u20, {
  omemo: {
    ...u20.omemo,
    decryptMessage,
    encryptMessage,
    generateFingerprint,
    getDevicesForContact
  }
});

// plugins/omemo/parsers.js
var { Strophe: Strophe54 } = public_default.env;
function getDecryptionErrorAttributes(e) {
  const { __ } = converse_default;
  return {
    "error_text": __("Sorry, could not decrypt a received OMEMO message due to an error.") + ` ${e.name} ${e.message}`,
    "error_condition": e.name,
    "error_message": e.message,
    "error_type": "Decryption",
    "is_ephemeral": true,
    "is_error": true,
    "type": "error"
  };
}
__name(getDecryptionErrorAttributes, "getDecryptionErrorAttributes");
function getJIDForDecryption(attrs) {
  const { __ } = converse_default;
  let from_jid;
  if (attrs.sender === "me") {
    from_jid = converse_default.session.get("bare_jid");
  } else if (attrs.contact_jid) {
    from_jid = attrs.contact_jid;
  } else if ("from_real_jid" in attrs) {
    from_jid = attrs.from_real_jid;
  } else {
    from_jid = attrs.from;
  }
  if (!from_jid) {
    Object.assign(attrs, {
      error_text: __(
        "Sorry, could not decrypt a received OMEMO message because we don't have the XMPP address for that user."
      ),
      error_type: "Decryption",
      is_ephemeral: true,
      is_error: true,
      type: "error"
    });
    throw new Error("Could not find JID to decrypt OMEMO message for");
  }
  return from_jid;
}
__name(getJIDForDecryption, "getJIDForDecryption");
async function handleDecryptedWhisperMessage(attrs, key_and_tag) {
  const from_jid = getJIDForDecryption(attrs);
  const devicelist = await api_default4.omemo.devicelists.get(from_jid, true);
  const encrypted = attrs.encrypted;
  let device = devicelist.devices.get(encrypted.device_id);
  if (!device) {
    device = await devicelist.devices.create({ "id": encrypted.device_id, "jid": from_jid }, { "promise": true });
  }
  if (encrypted.payload) {
    const key = key_and_tag.slice(0, 16);
    const tag = key_and_tag.slice(16);
    const result = await decryptMessage({
      ...encrypted,
      payload: encrypted.payload,
      ...{ key, tag }
    });
    device.save("active", true);
    return result;
  }
}
__name(handleDecryptedWhisperMessage, "handleDecryptedWhisperMessage");
async function decryptWhisperMessage(attrs) {
  const from_jid = getJIDForDecryption(attrs);
  const session_cipher = getSessionCipher(from_jid, parseInt(attrs.encrypted.device_id, 10));
  const key = utils_default.base64ToArrayBuffer(attrs.encrypted.key);
  try {
    const key_and_tag = await session_cipher.decryptWhisperMessage(key, "binary");
    const plaintext = await handleDecryptedWhisperMessage(attrs, key_and_tag);
    return Object.assign(attrs, { plaintext });
  } catch (e) {
    import_log41.default.error(`${e.name} ${e.message}`);
    return Object.assign(attrs, getDecryptionErrorAttributes(e));
  }
}
__name(decryptWhisperMessage, "decryptWhisperMessage");
async function decryptPrekeyWhisperMessage(attrs) {
  const from_jid = getJIDForDecryption(attrs);
  const session_cipher = getSessionCipher(from_jid, parseInt(attrs.encrypted.device_id, 10));
  const key = utils_default.base64ToArrayBuffer(attrs.encrypted.key);
  let key_and_tag;
  try {
    key_and_tag = await session_cipher.decryptPreKeyWhisperMessage(key, "binary");
  } catch (e) {
    import_log41.default.error(`${e.name} ${e.message}`);
    return Object.assign(attrs, getDecryptionErrorAttributes(e));
  }
  try {
    const plaintext = await handleDecryptedWhisperMessage(attrs, key_and_tag);
    const { omemo_store } = converse_default.state;
    await omemo_store.generateMissingPreKeys();
    await omemo_store.publishBundle();
    if (plaintext) {
      return Object.assign(attrs, { "plaintext": plaintext });
    } else {
      return Object.assign(attrs, { "is_only_key": true });
    }
  } catch (e) {
    import_log41.default.error(`${e.name} ${e.message}`);
    return Object.assign(attrs, getDecryptionErrorAttributes(e));
  }
}
__name(decryptPrekeyWhisperMessage, "decryptPrekeyWhisperMessage");
async function parseEncryptedMessage(stanza, attrs) {
  if (api_default4.settings.get("clear_cache_on_logout") || !attrs.is_encrypted || attrs.encryption_namespace !== Strophe54.NS.OMEMO) {
    return attrs;
  }
  const encrypted_el = (0, import_sizzle11.default)(`encrypted[xmlns="${Strophe54.NS.OMEMO}"]`, stanza).pop();
  const header = encrypted_el.querySelector("header");
  attrs.encrypted = { "device_id": header.getAttribute("sid") };
  const device_id = await api_default4.omemo?.getDeviceID();
  const key = device_id && (0, import_sizzle11.default)(`key[rid="${device_id}"]`, encrypted_el).pop();
  if (key) {
    Object.assign(attrs.encrypted, {
      iv: header.querySelector("iv").textContent,
      key: key.textContent,
      payload: encrypted_el.querySelector("payload")?.textContent || null,
      prekey: ["true", "1"].includes(key.getAttribute("prekey"))
    });
  } else {
    return Object.assign(attrs, {
      error_condition: "not-encrypted-for-this-device",
      error_type: "Decryption",
      is_ephemeral: true,
      is_error: true,
      type: "error"
    });
  }
  if (attrs.encrypted.prekey === true) {
    return decryptPrekeyWhisperMessage(attrs);
  } else {
    return decryptWhisperMessage(attrs);
  }
}
__name(parseEncryptedMessage, "parseEncryptedMessage");
function parseBundle(bundle_el) {
  const signed_prekey_public_el = bundle_el.querySelector("signedPreKeyPublic");
  const signed_prekey_signature_el = bundle_el.querySelector("signedPreKeySignature");
  const prekeys = (0, import_sizzle11.default)(`prekeys > preKeyPublic`, bundle_el).map(
    /** @param {Element} el */
    (el) => ({
      id: parseInt(el.getAttribute("preKeyId"), 10),
      key: el.textContent
    })
  );
  return {
    identity_key: bundle_el.querySelector("identityKey").textContent.trim(),
    signed_prekey: {
      id: parseInt(signed_prekey_public_el.getAttribute("signedPreKeyId"), 10),
      public_key: signed_prekey_public_el.textContent,
      signature: signed_prekey_signature_el.textContent
    },
    prekeys
  };
}
__name(parseBundle, "parseBundle");
Object.assign(utils_default, {
  omemo: {
    ...utils_default.omemo,
    parseBundle
  }
});

// plugins/omemo/device.js
var { Strophe: Strophe55, sizzle: sizzle19, stx: stx15, u: u21 } = public_default.env;
var Device = class extends import_skeletor32.Model {
  static {
    __name(this, "Device");
  }
  defaults() {
    return {
      trusted: UNDECIDED,
      active: true
    };
  }
  /**
   * @returns {import('./types').PreKey}
   */
  getRandomPreKey() {
    const bundle = this.get("bundle");
    return bundle.prekeys[u21.getRandomInt(bundle.prekeys.length)];
  }
  /**
   * Fetch the device's OMEMO bundle from the server.
   * A bundle is a collection of publicly accessible data that can
   * be used to build a session with a device, namely its public IdentityKey,
   * a signed PreKey with corresponding signature, and a list of (single use) PreKeys.
   * @returns {Promise<import('./types').Bundle>}
   */
  async fetchBundleFromServer() {
    const bare_jid = converse_default.session.get("bare_jid");
    const stanza = stx15`
            <iq type="get" from="${bare_jid}" to="${this.get("jid")}" xmlns="jabber:client">
                <pubsub xmlns="${Strophe55.NS.PUBSUB}">
                    <items node="${Strophe55.NS.OMEMO_BUNDLES}:${this.get("id")}"/>
                </pubsub>
            </iq>`;
    let iq;
    try {
      iq = await api_default4.sendIQ(stanza);
    } catch (iq2) {
      import_log42.default.error(`Could not fetch bundle for device ${this.get("id")} from ${this.get("jid")}`);
      import_log42.default.error(iq2);
      return null;
    }
    if (iq.querySelector("error")) {
      throw new IQError("Could not fetch bundle", iq);
    }
    const publish_el = sizzle19(`items[node="${Strophe55.NS.OMEMO_BUNDLES}:${this.get("id")}"]`, iq).pop();
    const bundle_el = sizzle19(`bundle[xmlns="${Strophe55.NS.OMEMO}"]`, publish_el).pop();
    const bundle = parseBundle(bundle_el);
    this.save("bundle", bundle);
    return bundle;
  }
  /**
   * Fetch and save the bundle information associated with
   * this device, if the information is not cached already.
   * @returns {Promise<import('./types').Bundle>}
   */
  getBundle() {
    if (this.get("bundle")) {
      return Promise.resolve(this.get("bundle"));
    } else {
      return this.fetchBundleFromServer();
    }
  }
};
var device_default = Device;

// plugins/omemo/devices.js
var import_skeletor33 = require("@converse/skeletor");
var Devices = class extends import_skeletor33.Collection {
  static {
    __name(this, "Devices");
  }
  constructor() {
    super();
    this.model = device_default;
  }
};
var devices_default = Devices;

// plugins/omemo/store.js
var import_skeletor34 = require("@converse/skeletor");
var import_log43 = __toESM(require("@converse/log"));
var { Strophe: Strophe56, stx: stx16, u: u22 } = public_default.env;
var OMEMOStore = class extends import_skeletor34.Model {
  static {
    __name(this, "OMEMOStore");
  }
  /**
   * @typedef {Window & globalThis & {libsignal: any} } WindowWithLibsignal
   */
  get Direction() {
    return {
      SENDING: 1,
      RECEIVING: 2
    };
  }
  /**
   * @returns {Promise<import('./types').KeyPair>}
   */
  getIdentityKeyPair() {
    const keypair = this.get("identity_keypair");
    return Promise.resolve({
      "privKey": u22.base64ToArrayBuffer(keypair.privKey),
      "pubKey": u22.base64ToArrayBuffer(keypair.pubKey)
    });
  }
  getLocalRegistrationId() {
    return Promise.resolve(parseInt(this.get("device_id"), 10));
  }
  /**
   * @param {string} identifier
   * @param {ArrayBuffer} identity_key
   * @param {unknown} _direction
   */
  isTrustedIdentity(identifier, identity_key, _direction) {
    if (identifier === null || identifier === void 0) {
      throw new Error("Can't check identity key for invalid key");
    }
    if (!(identity_key instanceof ArrayBuffer)) {
      throw new Error("Expected identity_key to be an ArrayBuffer");
    }
    const trusted = this.get("identity_key" + identifier);
    if (trusted === void 0) {
      return Promise.resolve(true);
    }
    return Promise.resolve(u22.arrayBufferToBase64(identity_key) === trusted);
  }
  /**
   * @param {string} identifier
   */
  loadIdentityKey(identifier) {
    if (identifier === null || identifier === void 0) {
      throw new Error("Can't load identity_key for invalid identifier");
    }
    return Promise.resolve(u22.base64ToArrayBuffer(this.get("identity_key" + identifier)));
  }
  /**
   * @param {string} identifier
   * @param {string} identity_key
   */
  saveIdentity(identifier, identity_key) {
    if (identifier === null || identifier === void 0) {
      throw new Error("Can't save identity_key for invalid identifier");
    }
    const { libsignal } = (
      /** @type WindowWithLibsignal */
      window
    );
    const address = new libsignal.SignalProtocolAddress.fromString(identifier);
    const existing = this.get("identity_key" + address.getName());
    const b64_idkey = u22.arrayBufferToBase64(identity_key);
    this.save("identity_key" + address.getName(), b64_idkey);
    if (existing && b64_idkey !== existing) {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }
  getPreKeys() {
    return this.get("prekeys") || {};
  }
  /**
   * @param {string} key_id
   */
  loadPreKey(key_id) {
    const res = this.getPreKeys()[key_id];
    if (res) {
      return Promise.resolve({
        "privKey": u22.base64ToArrayBuffer(res.privKey),
        "pubKey": u22.base64ToArrayBuffer(res.pubKey)
      });
    }
    return Promise.resolve();
  }
  /**
   * @param {string} key_id
   * @param {import('./types').KeyPair} key_pair
   */
  storePreKey(key_id, key_pair) {
    const prekey = {};
    prekey[key_id] = {
      "pubKey": u22.arrayBufferToBase64(key_pair.pubKey),
      "privKey": u22.arrayBufferToBase64(key_pair.privKey)
    };
    this.save("prekeys", Object.assign(this.getPreKeys(), prekey));
    return Promise.resolve();
  }
  /**
   * @param {string} key_id
   */
  removePreKey(key_id) {
    const prekeys = { ...this.getPreKeys() };
    delete prekeys[key_id];
    this.save("prekeys", prekeys);
    return Promise.resolve();
  }
  /**
   * @param {string} _key_id
   * @returns {Promise<import('./types').KeyPair|void>}
   */
  loadSignedPreKey(_key_id) {
    const res = this.get("signed_prekey");
    if (res) {
      return Promise.resolve({
        "privKey": u22.base64ToArrayBuffer(res.privKey),
        "pubKey": u22.base64ToArrayBuffer(res.pubKey)
      });
    }
    return Promise.resolve();
  }
  /**
   * @param {import('./types').SignedPreKey} spk
   */
  storeSignedPreKey(spk) {
    if (typeof spk !== "object") {
      throw new Error("storeSignedPreKey: expected an object");
    }
    this.save("signed_prekey", {
      "id": spk.keyId,
      "privKey": u22.arrayBufferToBase64(spk.keyPair.privKey),
      "pubKey": u22.arrayBufferToBase64(spk.keyPair.pubKey),
      // XXX: The InMemorySignalProtocolStore does not pass
      // in or store the signature, but we need it when we
      // publish our bundle and this method isn't called from
      // within libsignal code, so we modify it to also store
      // the signature.
      "signature": u22.arrayBufferToBase64(spk.signature)
    });
    return Promise.resolve();
  }
  /**
   * @param {string} key_id
   */
  removeSignedPreKey(key_id) {
    if (this.get("signed_prekey")["id"] === key_id) {
      this.unset("signed_prekey");
      this.save();
    }
    return Promise.resolve();
  }
  /**
   * @param {string} identifier
   */
  loadSession(identifier) {
    return Promise.resolve(this.get("session" + identifier));
  }
  /**
   * @param {string} identifier
   * @param {object} record
   */
  storeSession(identifier, record) {
    return Promise.resolve(this.save("session" + identifier, record));
  }
  /**
   * @param {string} identifier
   */
  removeSession(identifier) {
    return Promise.resolve(this.unset("session" + identifier));
  }
  /**
   * @param {string} [identifier='']
   */
  removeAllSessions(identifier = "") {
    const keys = Object.keys(this.attributes).filter(
      (key) => key.startsWith("session" + identifier) ? key : false
    );
    const attrs = {};
    keys.forEach((key) => {
      attrs[key] = void 0;
    });
    this.save(attrs);
    return Promise.resolve();
  }
  publishBundle() {
    const signed_prekey = this.get("signed_prekey");
    const node = `${Strophe56.NS.OMEMO_BUNDLES}:${this.get("device_id")}`;
    const item = stx16`
            <item>
                <bundle xmlns="${Strophe56.NS.OMEMO}">
                    <signedPreKeyPublic signedPreKeyId="${signed_prekey.id}">${signed_prekey.pubKey}</signedPreKeyPublic>
                    <signedPreKeySignature>${signed_prekey.signature}</signedPreKeySignature>
                    <identityKey>${this.get("identity_keypair").pubKey}</identityKey>
                    <prekeys>${Object.values(this.get("prekeys")).map(
      (prekey, id) => stx16`<preKeyPublic preKeyId="${id}">${prekey.pubKey}</preKeyPublic>`
    )}
                    </prekeys>
                </bundle>
            </item>`;
    const options = { access_model: "open" };
    return api_default4.pubsub.publish(null, node, item, options, false);
  }
  async generateMissingPreKeys() {
    const { libsignal } = (
      /** @type WindowWithLibsignal */
      window
    );
    const { KeyHelper } = libsignal;
    const prekeyIds = Object.keys(this.getPreKeys());
    const missing_keys = Array.from({ length: converse_default.NUM_PREKEYS }, (_, id) => id.toString()).filter(
      (id) => !prekeyIds.includes(id)
    );
    if (missing_keys.length < 1) {
      import_log43.default.debug("No missing prekeys to generate for our own device");
      return Promise.resolve();
    }
    const keys = await Promise.all(missing_keys.map((id) => KeyHelper.generatePreKey(parseInt(id, 10))));
    keys.forEach((k) => this.storePreKey(k.keyId, k.keyPair));
    const prekeys = this.getPreKeys();
    const marshalled_keys = Object.keys(prekeys).map((id) => ({
      id,
      key: prekeys[id].pubKey
    }));
    const bare_jid = converse_default.session.get("bare_jid");
    const devicelist = await getDeviceList(bare_jid);
    const device = devicelist.devices.get(this.get("device_id"));
    const bundle = await device.getBundle();
    device.save("bundle", Object.assign(bundle, { "prekeys": marshalled_keys }));
  }
  /**
   * Generates, stores and then returns pre-keys.
   *
   * Pre-keys are one half of a X3DH key exchange and are published as part
   * of the device bundle.
   *
   * For a new contact or device to establish an encrypted session, it needs
   * to use a pre-key, which it chooses randomly from the list of available
   * ones.
   */
  async generatePreKeys() {
    const amount = converse_default.NUM_PREKEYS;
    const { libsignal } = (
      /** @type WindowWithLibsignal */
      window
    );
    const { KeyHelper } = libsignal;
    const keys = await Promise.all([...Array(amount).keys()].map((id) => KeyHelper.generatePreKey(id)));
    keys.forEach((k) => this.storePreKey(k.keyId, k.keyPair));
    return keys.map((k) => ({
      id: k.keyId,
      key: u22.arrayBufferToBase64(k.keyPair.pubKey)
    }));
  }
  /**
   * Generate the cryptographic data used by the X3DH key agreement protocol
   * in order to build a session with other devices.
   *
   * By generating a bundle, and publishing it via PubSub, we allow other
   * clients to download it and start asynchronous encrypted sessions with us,
   * even if we're offline at that time.
   */
  async generateBundle() {
    const { libsignal } = (
      /** @type WindowWithLibsignal */
      window
    );
    const identity_keypair = await libsignal.KeyHelper.generateIdentityKeyPair();
    const identity_key = u22.arrayBufferToBase64(identity_keypair.pubKey);
    const device_id = await generateDeviceID();
    this.save({
      device_id,
      identity_key,
      identity_keypair: {
        privKey: u22.arrayBufferToBase64(identity_keypair.privKey),
        pubKey: identity_key
      }
    });
    const signed_prekey = await libsignal.KeyHelper.generateSignedPreKey(identity_keypair, 0);
    this.storeSignedPreKey(signed_prekey);
    const prekeys = await this.generatePreKeys();
    const bundle = { identity_key, device_id, prekeys };
    bundle["signed_prekey"] = {
      id: signed_prekey.keyId,
      public_key: u22.arrayBufferToBase64(signed_prekey.keyPair.pubKey),
      signature: u22.arrayBufferToBase64(signed_prekey.signature)
    };
    const bare_jid = converse_default.session.get("bare_jid");
    const devicelist = await api_default4.omemo.devicelists.get(bare_jid);
    const device = await devicelist.devices.create({ id: bundle.device_id, "jid": bare_jid }, { promise: true });
    device.save("bundle", bundle);
  }
  fetchSession() {
    if (this._setup_promise === void 0) {
      this._setup_promise = new Promise((resolve, reject) => {
        this.fetch({
          success: /* @__PURE__ */ __name(() => {
            if (!this.get("device_id")) {
              this.generateBundle().then(resolve).catch(reject);
            } else {
              resolve();
            }
          }, "success"),
          /**
           * @param {unknown} _model
           * @param {unknown} resp
           */
          error: /* @__PURE__ */ __name((_model, resp) => {
            import_log43.default.warn(`Could restore OMEMO session, we'll generate a new one: ${resp}`);
            this.generateBundle().then(resolve).catch(reject);
          }, "error")
        });
      });
    }
    return this._setup_promise;
  }
};
async function generateDeviceID() {
  const { libsignal } = (
    /** @type WindowWithLibsignal */
    window
  );
  const bare_jid = converse_default.session.get("bare_jid");
  const devicelist = await getDeviceList(bare_jid, true);
  const existing_ids = devicelist.devices.pluck("id");
  let device_id = libsignal.KeyHelper.generateRegistrationId();
  let i2 = 0;
  while (existing_ids.includes(device_id)) {
    device_id = libsignal.KeyHelper.generateRegistrationId();
    i2++;
    if (i2 === 10) {
      throw new Error("Unable to generate a unique device ID");
    }
  }
  return device_id.toString();
}
__name(generateDeviceID, "generateDeviceID");
var store_default = OMEMOStore;

// plugins/omemo/api.js
var api_default14 = {
  /**
   * The "omemo" namespace groups methods relevant to OMEMO
   * encryption.
   *
   * @namespace _converse.api.omemo
   * @memberOf _converse.api
   */
  omemo: {
    /**
     * Returns the device ID of the current device.
     */
    async getDeviceID() {
      await api_default4.waitUntil("OMEMOInitialized");
      return converse_default.state.omemo_store.get("device_id");
    },
    session: {
      async restore() {
        const { state } = converse_default;
        if (state.omemo_store === void 0) {
          const { state: state2 } = converse_default;
          const bare_jid = converse_default.session.get("bare_jid");
          const id = `converse.omemosession-${bare_jid}`;
          state2.omemo_store = new store_default({ id });
          initStorage(state2.omemo_store, id);
        }
        await state.omemo_store.fetchSession();
      }
    },
    /**
     * The "devicelists" namespace groups methods related to OMEMO device lists
     *
     * @namespace _converse.api.omemo.devicelists
     * @memberOf _converse.api.omemo
     */
    devicelists: {
      /**
       * Returns the {@link DeviceList} for a particular JID.
       * The device list will be created if it doesn't exist already.
       * @method _converse.api.omemo.devicelists.get
       * @param {String} jid - The Jabber ID for which the device list will be returned.
       * @param {boolean} create=false - Set to `true` if the device list
       *      should be created if it cannot be found.
       */
      async get(jid, create = false) {
        return await getDeviceList(jid, create);
      }
    },
    /**
     * The "bundle" namespace groups methods relevant to the user's OMEMO bundle.
     * @namespace _converse.api.omemo.bundle
     * @memberOf _converse.api.omemo
     */
    bundle: {
      /**
       * Lets you generate a new OMEMO device bundle
       *
       * @method _converse.api.omemo.bundle.generate
       * @returns {promise} Promise which resolves once we have a result from the server.
       */
      async generate() {
        await api_default4.waitUntil("OMEMOInitialized");
        const bare_jid = converse_default.session.get("bare_jid");
        const devicelist = await api_default4.omemo.devicelists.get(bare_jid);
        const { omemo_store } = converse_default.state;
        const device_id = omemo_store.get("device_id");
        if (device_id) {
          const device2 = devicelist.devices.get(device_id);
          omemo_store.unset(device_id);
          if (device2) {
            await new Promise((done) => device2.destroy({ "success": done, "error": done }));
          }
          devicelist.devices.trigger("remove");
        }
        await omemo_store.generateBundle();
        await omemo_store.removeAllSessions();
        await omemo_store.publishBundle();
        await devicelist.publishDevices();
        const device = devicelist.devices.get(omemo_store.get("device_id"));
        return generateFingerprint(device);
      }
    }
  }
};

// plugins/omemo/plugin.js
var { u: u23, Strophe: Strophe57 } = public_default.env;
public_default.plugins.add("converse-omemo", {
  dependencies: ["converse-pubsub", "converse-profile"],
  /**
   * @param {import('../../shared/_converse.js').ConversePrivateGlobal} _converse
   */
  enabled(_converse2) {
    return (
      /** @type WindowWithLibsignal */
      window.libsignal && _converse2.state.config.get("trusted") && !_converse2.api.settings.get("clear_cache_on_logout") && !_converse2.api.settings.get("blacklisted_plugins").includes("converse-omemo")
    );
  },
  initialize() {
    api_default4.settings.extend({ omemo_default: false });
    api_default4.promises.add(["OMEMOInitialized"]);
    const exports2 = {
      Device: device_default,
      Devices: devices_default,
      DeviceList: devicelist_default,
      DeviceLists: devicelists_default,
      OMEMOStore: store_default
    };
    Object.assign(converse_default.api, api_default14);
    Object.assign(converse_default, exports2);
    Object.assign(converse_default.exports, exports2);
    api_default4.listen.on(
      "createMessageStanza",
      /**
       * @param {import('../../shared/chatbox.js').default} chat
       * @param {import('../../shared/types').MessageAndStanza} data
       */
      async (chat, data) => {
        try {
          data = await createOMEMOMessageStanza(chat, data);
        } catch (e) {
          handleMessageSendError(e, chat);
        }
        return data;
      }
    );
    api_default4.listen.on("connected", registerPEPPushHandler);
    api_default4.listen.on("chatRoomInitialized", onChatInitialized);
    api_default4.listen.on("chatBoxInitialized", onChatInitialized);
    api_default4.listen.on("getOutgoingMessageAttributes", getOutgoingMessageAttributes);
    api_default4.listen.on("statusInitialized", initOMEMO);
    api_default4.listen.on("addClientFeatures", () => api_default4.disco.own.features.add(`${Strophe57.NS.OMEMO_DEVICELIST}+notify`));
    api_default4.listen.on("parseMessage", parseEncryptedMessage);
    api_default4.listen.on("parseMUCMessage", parseEncryptedMessage);
    api_default4.listen.on("afterFileUploaded", setEncryptedFileURL);
    api_default4.listen.on(
      "beforeFileUpload",
      /**
       * @param {import('../../shared/chatbox.js').default} chat
       * @param {File} file
       */
      (chat, file) => chat.get("omemo_active") ? encryptFile(file) : file
    );
    api_default4.listen.on("clearSession", () => {
      delete converse_default.state.omemo_store;
      if (u23.shouldClearCache(converse_default) && converse_default.state.devicelists) {
        converse_default.state.devicelists.clearStore();
        delete converse_default.state.devicelists;
      }
    });
  }
});

// plugins/omemo/index.js
var { Strophe: Strophe58 } = public_default.env;
Strophe58.addNamespace("OMEMO_DEVICELIST", Strophe58.NS.OMEMO + ".devicelist");
Strophe58.addNamespace("OMEMO_VERIFICATION", Strophe58.NS.OMEMO + ".verification");
Strophe58.addNamespace("OMEMO_WHITELISTED", Strophe58.NS.OMEMO + ".whitelisted");
Strophe58.addNamespace("OMEMO_BUNDLES", Strophe58.NS.OMEMO + ".bundles");

// plugins/mam/placeholder.js
var import_skeletor35 = require("@converse/skeletor");
var MAMPlaceholderMessage = class extends import_skeletor35.Model {
  static {
    __name(this, "MAMPlaceholderMessage");
  }
  defaults() {
    return {
      msgid: getUniqueId(),
      is_ephemeral: false
    };
  }
  async fetchMissingMessages() {
    this.set("fetching", true);
    const options = {
      rsm: {
        before: this.get("before") ?? ""
        // We always query backwards (newest first)
      },
      mam: {
        start: this.get("start")
      }
    };
    await utils_default.mam.fetchArchivedMessages(this.collection.chatbox, options);
    this.destroy();
  }
};

// plugins/mam/utils.js
var import_sizzle12 = __toESM(require("sizzle"));
var import_strophe27 = require("strophe.js");
var import_log44 = __toESM(require("@converse/log"));
var { NS: NS3 } = import_strophe27.Strophe;
var u24 = public_default.env.utils;
async function onMAMError(e, iq) {
  if (u24.isElement(e)) {
    const err = await parseErrorStanza(e);
    if (err?.name === "feature-not-implemented") {
      import_log44.default.warn(`Message Archive Management (XEP-0313) not supported by ${iq.getAttribute("to")}`);
      return;
    }
  }
  import_log44.default.error(`Error while trying to set archiving preferences for ${iq.getAttribute("to")}.`);
  import_log44.default.error(iq);
}
__name(onMAMError, "onMAMError");
function onMAMPreferences(iq, feature) {
  const preference = (0, import_sizzle12.default)(`prefs[xmlns="${NS3.MAM}"]`, iq).pop();
  const default_pref = preference.getAttribute("default");
  if (default_pref !== api_default4.settings.get("message_archiving")) {
    const stanza = (0, import_strophe27.$iq)({ "type": "set" }).c("prefs", {
      "xmlns": NS3.MAM,
      "default": api_default4.settings.get("message_archiving")
    });
    Array.from(preference.children).forEach((child) => stanza.cnode(child).up());
    api_default4.sendIQ(stanza).then(() => feature.save({ "preferences": { "default": api_default4.settings.get("message_archiving") } })).catch(
      /** @param {Error|Element} e */
      (e) => converse_default.exports.onMAMError(e, stanza.tree())
    );
  } else {
    feature.save({ "preferences": { "default": api_default4.settings.get("message_archiving") } });
  }
}
__name(onMAMPreferences, "onMAMPreferences");
function getMAMPrefsFromFeature(feature) {
  const prefs = feature.get("preferences") || {};
  if (feature.get("var") !== NS3.MAM || api_default4.settings.get("message_archiving") === void 0) {
    return;
  }
  if (prefs["default"] !== api_default4.settings.get("message_archiving")) {
    const stanza = (0, import_strophe27.$iq)({ "type": "get" }).c("prefs", { "xmlns": NS3.MAM });
    api_default4.sendIQ(stanza).then(
      /** @param {Element} iq */
      (iq) => converse_default.exports.onMAMPreferences(iq, feature)
    ).catch(
      /** @param {Error|Element} e */
      (e) => converse_default.exports.onMAMError(e, stanza.tree())
    );
  }
}
__name(getMAMPrefsFromFeature, "getMAMPrefsFromFeature");
function preMUCJoinMAMFetch(muc) {
  if (!api_default4.settings.get("muc_show_logs_before_join") || !muc.features.get("mam_enabled") || muc.get("prejoin_mam_fetched")) {
    return;
  }
  fetchNewestMessages(muc);
  muc.save({ prejoin_mam_fetched: true });
}
__name(preMUCJoinMAMFetch, "preMUCJoinMAMFetch");
async function createMessageFromError(model, error) {
  if (error instanceof TimeoutError) {
    const msg = await model.createMessage({
      type: "error",
      message: error.message,
      retry_event_id: error.retry_event_id,
      is_ephemeral: 2e4
    });
    msg.error = error;
  }
}
__name(createMessageFromError, "createMessageFromError");
async function handleMAMResult(model, result, query, options, should_page = false) {
  const is_muc = model.get("type") === CHATROOMS_TYPE;
  const doParseMessage = (
    /** @param {Element} s*/
    /* @__PURE__ */ __name((s) => is_muc ? parseMUCMessage(
      s,
      /** @type {MUC} */
      model
    ) : parseMessage(s), "doParseMessage")
  );
  const messages = await Promise.all(result.messages.map(doParseMessage));
  result.messages = messages;
  const data = { query, "chatbox": model, messages };
  await api_default4.trigger("MAMResult", data, { "synchronous": true });
  messages.forEach((m) => model.queueMessage(m));
  if (result.error) {
    const event_id = result.error.retry_event_id = u24.getUniqueId();
    api_default4.listen.once(event_id, () => fetchArchivedMessages(model, options, should_page));
    createMessageFromError(model, result.error);
  }
}
__name(handleMAMResult, "handleMAMResult");
async function fetchArchivedMessages(model, options = {}, should_page = false) {
  if (model.disable_mam) return;
  const is_muc = model.get("type") === CHATROOMS_TYPE;
  const bare_jid = converse_default.session.get("bare_jid");
  const mam_jid = is_muc ? model.get("jid") : bare_jid;
  const supported = await api_default4.disco.supports(NS3.MAM, mam_jid);
  if (!supported) return;
  const max = api_default4.settings.get("archived_messages_page_size");
  const query = (
    /** @type {import('./types').ArchiveQueryOptions} */
    {
      is_groupchat: is_muc,
      rsm: {
        max,
        ...options.rsm
      },
      mam: {
        with: model.get("jid"),
        ...options.mam
      }
    }
  );
  const result = await api_default4.archive.query(query);
  await handleMAMResult(model, result, query, options, should_page);
  if (result.rsm && !result.complete) {
    if (should_page) {
      if (should_page === "forwards") {
        options = result.rsm.next(max, options.rsm.before).query;
      } else if (should_page === "backwards") {
        options = result.rsm.previous(max, options.rsm.after).query;
      }
      return fetchArchivedMessages(model, options, should_page);
    } else {
      createGapPlaceholder(model, options, result);
    }
  }
}
__name(fetchArchivedMessages, "fetchArchivedMessages");
async function createGapPlaceholder(model, options, result) {
  const msgs = await Promise.all(result.messages);
  const is_muc = model.get("type") === CHATROOMS_TYPE;
  const mam_jid = is_muc ? model.get("jid") : converse_default.session.get("bare_jid");
  const { rsm } = result;
  const key = `stanza_id ${mam_jid}`;
  const adjacent_message = msgs.find((m) => m[key] === rsm.result.first);
  const adjacent_message_date = new Date(adjacent_message["time"]);
  const msg_data = {
    before: rsm.result.first,
    start: options.mam?.start,
    template_hook: "getMessageTemplate",
    time: new Date(adjacent_message_date.getTime() - 1).toISOString()
  };
  if (model.messages.findWhere(msg_data)) {
    import_log44.default.debug("Gap placeholder already exists, not recreating.");
    return;
  }
  model.messages.add(new MAMPlaceholderMessage(msg_data));
}
__name(createGapPlaceholder, "createGapPlaceholder");
function createScrollupPlaceholder(model) {
  if (model.messages.length) {
    const is_muc = model.get("type") === CHATROOMS_TYPE;
    const mam_jid = is_muc ? model.get("jid") : converse_default.session.get("bare_jid");
    const key = `stanza_id ${mam_jid}`;
    const oldest_message = model.getOldestMessage();
    if (!oldest_message) return;
    const msg_data = {
      before: oldest_message.get(key),
      template_hook: "getMessageTemplate",
      time: new Date(new Date(oldest_message.get("time")).getTime() - 1).toISOString()
    };
    if (model.messages.findWhere(msg_data)) {
      import_log44.default.debug("Gap placeholder already exists, not recreating.");
      return;
    }
    model.messages.add(new MAMPlaceholderMessage(msg_data));
  }
}
__name(createScrollupPlaceholder, "createScrollupPlaceholder");
function fetchNewestMessages(model) {
  if (model.disable_mam) return;
  const most_recent_msg = model.getMostRecentMessage();
  const should_page = api_default4.settings.get("mam_request_all_pages") ? "backwards" : false;
  if (most_recent_msg) {
    return fetchArchivedMessages(model, { mam: { start: most_recent_msg.get("time") }, rsm: { before: "" } }, should_page);
  } else {
    return fetchArchivedMessages(model, { rsm: { before: "" } }, should_page);
  }
}
__name(fetchNewestMessages, "fetchNewestMessages");

// plugins/mam/plugin.js
var import_strophe29 = require("strophe.js");

// plugins/mam/api.js
var import_dayjs6 = __toESM(require("dayjs"));
var import_log45 = __toESM(require("@converse/log"));
var import_sizzle13 = __toESM(require("sizzle"));

// shared/rsm.js
/**
 * @copyright The Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 * @description XEP-0059 Result Set Management
 *   Some code taken from the Strophe RSM plugin, licensed under the MIT License
 *   Copyright 2006-2017 Strophe (https://github.com/strophe/strophejs)
 */
var { Strophe: Strophe60, $build: $build3 } = public_default.env;
Strophe60.addNamespace("RSM", "http://jabber.org/protocol/rsm");
var RSM_QUERY_PARAMETERS = ["after", "before", "index", "max"];
var toNumber = /* @__PURE__ */ __name((v) => Number(v), "toNumber");
var toString = /* @__PURE__ */ __name((v) => v.toString(), "toString");
var RSM_TYPES = {
  after: toString,
  before: toString,
  count: toNumber,
  first: toString,
  index: toNumber,
  last: toString,
  max: toNumber
};
var RSM_ATTRIBUTES = Object.keys(RSM_TYPES);
var RSM = class _RSM {
  static {
    __name(this, "RSM");
  }
  static getQueryParameters(options = {}) {
    return RSM_QUERY_PARAMETERS.reduce((result, key) => {
      if (options[key] !== void 0) {
        result[key] = options[key];
      }
      return result;
    }, {});
  }
  static parseXMLResult(set) {
    const result = {};
    for (var i2 = 0; i2 < RSM_ATTRIBUTES.length; i2++) {
      const attr = RSM_ATTRIBUTES[i2];
      const elem = set.getElementsByTagName(attr)[0];
      if (!isUndefined(elem) && elem !== null) {
        result[attr] = RSM_TYPES[attr](Strophe60.getText(elem));
        if (attr == "first") {
          result.index = RSM_TYPES["index"](elem.getAttribute("index"));
        }
      }
    }
    return result;
  }
  /**
   * Creates a new RSM instance
   * @param { Object } options - Configuration options
   */
  constructor(options = {}) {
    this.query = _RSM.getQueryParameters(options);
    this.result = options.xml ? _RSM.parseXMLResult(options.xml) : {};
  }
  /**
   * Returns a `<set>` XML element that confirms to XEP-0059 Result Set Management.
   * The element is constructed based on the RSMQueryOptions
   * that are set on this RSM instance.
   * @returns {Element}
   */
  toXML() {
    const xml = $build3("set", { xmlns: Strophe60.NS.RSM });
    const reducer = /* @__PURE__ */ __name((xml2, a) => !isUndefined(this.query[a]) ? xml2.c(a).t((this.query[a] || "").toString()).up() : xml2, "reducer");
    return RSM_QUERY_PARAMETERS.reduce(reducer, xml).tree();
  }
  /**
   * Returns a string representation of the result-set XML
   * @returns {string}
   */
  toString() {
    return Strophe60.serialize(this.toXML());
  }
  /**
   * @param {string} max
   * @param {string} before
   */
  next(max, before) {
    const options = Object.assign({}, this.query, { after: this.result.last, before, max });
    return new _RSM(options);
  }
  /**
   * @param {string} max
   * @param {string} after
   */
  previous(max, after) {
    const options = Object.assign({}, this.query, { after, before: this.result.first, max });
    return new _RSM(options);
  }
};

// plugins/mam/api.js
var import_strophe28 = require("strophe.js");
var { NS: NS4 } = import_strophe28.Strophe;
var { stx: stx17, u: u25 } = public_default.env;
var api_default15 = {
  /**
   * The [XEP-0313](https://xmpp.org/extensions/xep-0313.html) Message Archive Management API
   *
   * Enables you to query an XMPP server for archived messages.
   *
   * See also the [message-archiving](/docs/html/configuration.html#message-archiving)
   * option in the configuration settings section, which you'll
   * usually want to use in conjunction with this API.
   *
   * @namespace _converse.api.archive
   * @memberOf _converse.api
   */
  archive: {
    /**
     * Query for archived messages.
     *
     * The options parameter can also be an instance of
     * RSM to enable easy querying between results pages.
     *
     * @method _converse.api.archive.query
     * @param {import('./types').ArchiveQueryOptions} [options={}] - Optional query parameters
     * @throws {Error} An error is thrown if the XMPP server responds with an error.
     * @returns {Promise<import('./types').MAMQueryResult>}
     *
     * @example
     * // Requesting all archived messages
     * // ================================
     * //
     * // The simplest query that can be made is to simply not pass in any parameters.
     * // Such a query will return all archived messages for the current user.
     *
     * let result;
     * try {
     *     result = await api.archive.query();
     * } catch (e) {
     *     // The query was not successful, perhaps inform the user?
     *     // The IQ stanza returned by the XMPP server is passed in, so that you
     *     // may inspect it and determine what the problem was.
     * }
     * // Do something with the messages, like showing them in your webpage.
     * result.messages.forEach(m => this.showMessage(m));
     *
     * @example
     * // Requesting all archived messages for a particular contact or room
     * // =================================================================
     * //
     * // To query for messages sent between the current user and another user or room,
     * // the query options need to contain the the JID (Jabber ID) of the user or
     * // room under the  `with` key.
     *
     * // For a particular user
     * let result;
     * try {
     *    result = await api.archive.query({ mam: { with: 'john@doe.net' }});
     * } catch (e) {
     *     // The query was not successful
     * }
     *
     * // For a particular room
     * let result;
     * try {
     *    result = await api.archive.query({ mam: { with: 'discuss@conference.doglovers.net' }}, is_groupchat: true });
     * } catch (e) {
     *     // The query was not successful
     * }
     *
     * @example
     * // Requesting all archived messages before or after a certain date
     * // ===============================================================
     * //
     * // The MAM `start` and `end` parameters are used to query for messages
     * // within a certain timeframe. The passed in date values may either be ISO8601
     * // formatted date strings, or JavaScript Date objects.
     *
     *  const options = {
     *      mam: {
     *          'with': 'john@doe.net',
     *          'start': '2010-06-07T00:00:00Z',
     *          'end': '2010-07-07T13:23:54Z'
     *      },
     *  };
     * let result;
     * try {
     *    result = await api.archive.query(options);
     * } catch (e) {
     *     // The query was not successful
     * }
     *
     * @example
     * // Limiting the amount of messages returned
     * // ========================================
     * //
     * // The amount of returned messages may be limited with the `max` parameter.
     * // By default, the messages are returned from oldest to newest.
     *
     * // Return maximum 10 archived messages
     * let result;
     * try {
     *     result = await api.archive.query({ mam: { with: 'john@doe.net', max:10 }});
     * } catch (e) {
     *     // The query was not successful
     * }
     *
     * @example
     * // Paging forwards through a set of archived messages
     * // ==================================================
     * //
     * // When limiting the amount of messages returned per query, you might want to
     * // repeatedly make a further query to fetch the next batch of messages.
     * //
     * // To simplify this usecase for you, the callback method receives not only an array
     * // with the returned archived messages, but also a special RSM (*Result Set Management*)
     * // object which contains the query parameters you passed in, as well
     * // as two utility methods `next`, and `previous`.
     * //
     * // When you call one of these utility methods on the returned RSM object, and then
     * // pass the result into a new query, you'll receive the next or previous batch of
     * // archived messages. Please note, when calling these methods, pass in an integer
     * // to limit your results.
     *
     * const options = { mam: { with: 'john@doe.net' }, rsm: { max:10 }};
     * let result;
     * try {
     *     result = await api.archive.query(options);
     * } catch (e) {
     *     // The query was not successful
     * }
     * // Do something with the messages, like showing them in your webpage.
     * result.messages.forEach(m => this.showMessage(m));
     *
     * while (!result.complete) {
     *     try {
     *         result = await api.archive.query({
     *             mam: { ...options.mam },
     *             rsm: {
     *                 ...options.rsm,
     *                 ...rsm.next(10).query
     *                 }
     *             });
     *     } catch (e) {
     *         // The query was not successful
     *     }
     *     // Do something with the messages, like showing them in your webpage.
     *     result.messages.forEach(m => this.showMessage(m));
     * }
     *
     * @example
     * // Paging backwards through a set of archived messages
     * // ===================================================
     * //
     * // To page backwards through the archive, you need to know the UID of the message
     * // which you'd like to page backwards from and then pass that as value for the
     * // `before` parameter. If you simply want to page backwards from the most recent
     * // message, pass in the `before` parameter with an empty string value `''`.
     *
     * let result;
     * const options = { rsm: { before: '', max:5 }};
     * try {
     *     result = await api.archive.query(options);
     * } catch (e) {
     *     // The query was not successful
     * }
     * // Do something with the messages, like showing them in your webpage.
     * result.messages.forEach(m => this.showMessage(m));
     *
     * // Now we query again, to get the previous batch.
     * try {
     *     try {
     *         result = await api.archive.query({
     *             mam: { ...options.mam },
     *             rsm: {
     *                 ...options.rsm,
     *                 ...rsm.previous(5).query
     *                 }
     *             });
     * } catch (e) {
     *     // The query was not successful
     * }
     * // Do something with the messages, like showing them in your webpage.
     * result.messages.forEach(m => this.showMessage(m));
     *
     */
    async query(options = {}) {
      if (!api_default4.connection.connected()) {
        throw new Error("Can't call `api.archive.query` before having established an XMPP session");
      }
      let toJID;
      if (options && options.is_groupchat) {
        if (!options.mam?.with) {
          throw new Error(
            'You need to specify a "with" value containing the groupchat JID, when querying groupchat messages.'
          );
        }
        toJID = options.mam.with;
      }
      const withJID = !options.is_groupchat && options.mam?.with || null;
      const bare_jid = converse_default.session.get("bare_jid");
      const jid = toJID || bare_jid;
      const supported = await api_default4.disco.supports(NS4.MAM, jid);
      if (!supported) {
        import_log45.default.warn(`Did not fetch MAM archive for ${jid} because it doesn't support ${NS4.MAM}`);
        return { messages: [] };
      }
      const { start: startDate, end: endDate } = ["start", "end"].reduce((acc, t) => {
        if (options.mam?.[t]) {
          const date = (0, import_dayjs6.default)(options.mam[t]);
          if (date.isValid()) {
            acc[t] = date.toISOString();
          } else {
            throw new TypeError(`archive.query: invalid date provided for: ${t}`);
          }
        }
        return acc;
      }, { start: null, end: null });
      const connection2 = api_default4.connection.get();
      const rsm = options.rsm ? new RSM(options.rsm) : {};
      const queryid = u25.getUniqueId();
      const stanza = stx17`
                <iq id="${u25.getUniqueId()}"
                        ${toJID ? import_strophe28.Stanza.unsafeXML(`to="${import_strophe28.Strophe.xmlescape(toJID)}"`) : ""}
                        type="set"
                        xmlns="jabber:client">
                    <query queryid="${queryid}" xmlns="${NS4.MAM}">
                        ${withJID || startDate || endDate ? stx17`
                            <x type="submit" xmlns="${NS4.XFORM}">
                                <field type="hidden" var="FORM_TYPE"><value>${NS4.MAM}</value></field>
                                ${withJID ? stx17`<field var="with"><value>${withJID}</value></field>` : ""}
                                ${startDate ? stx17`<field var="start"><value>${startDate}</value></field>` : ""}
                                ${endDate ? stx17`<field var="end"><value>${endDate}</value></field>` : ""}
                            </x>` : ""}
                        ${Object.keys(rsm.query ?? {}).length ? import_strophe28.Stanza.fromString(rsm.toString()) : ""}
                    </query>
                </iq>`;
      const messages = [];
      const message_handler = connection2.addHandler(
        /** @param {Element} stanza */
        (stanza2) => {
          const result = (0, import_sizzle13.default)(`message > result[xmlns="${NS4.MAM}"]`, stanza2).pop();
          if (result === void 0 || result.getAttribute("queryid") !== queryid) {
            return true;
          }
          const from = stanza2.getAttribute("from") || bare_jid;
          if (options.is_groupchat) {
            if (from !== options.mam?.with) {
              import_log45.default.warn(`Ignoring alleged groupchat MAM message from ${stanza2.getAttribute("from")}`);
              return true;
            }
          } else if (from !== bare_jid) {
            import_log45.default.warn(`Ignoring alleged MAM message from ${stanza2.getAttribute("from")}`);
            return true;
          }
          messages.push(stanza2);
          return true;
        },
        NS4.MAM
      );
      let error;
      const timeout = api_default4.settings.get("message_archiving_timeout");
      const iq_result = await api_default4.sendIQ(stanza, timeout, false);
      if (iq_result === null) {
        const { __ } = converse_default;
        const err_msg = __("Timeout while trying to fetch archived messages.");
        import_log45.default.error(err_msg);
        error = new TimeoutError(err_msg);
        return { messages, error };
      } else if (u25.isErrorStanza(iq_result)) {
        const { __ } = converse_default;
        const err_msg = __("An error occurred while querying for archived messages.");
        import_log45.default.error(err_msg);
        import_log45.default.error(iq_result);
        error = new Error(err_msg);
        return { messages, error };
      }
      connection2.deleteHandler(message_handler);
      let rsm_result;
      const fin = iq_result && (0, import_sizzle13.default)(`fin[xmlns="${NS4.MAM}"]`, iq_result).pop();
      const complete = fin?.getAttribute("complete") === "true";
      const set = (0, import_sizzle13.default)(`set[xmlns="${NS4.RSM}"]`, fin).pop();
      if (set) {
        rsm_result = new RSM({ ...options.rsm, xml: set });
      }
      return { messages, rsm: rsm_result, complete };
    }
  }
};

// plugins/mam/plugin.js
/**
 * @description XEP-0313 Message Archive Management
 * @copyright 2022, the Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 */
var { NS: NS5 } = import_strophe29.Strophe;
public_default.plugins.add("converse-mam", {
  dependencies: ["converse-disco", "converse-muc"],
  initialize() {
    api_default4.settings.extend({
      archived_messages_page_size: "50",
      mam_request_all_pages: false,
      message_archiving: void 0,
      // Supported values are 'always', 'never', 'roster'
      // https://xmpp.org/extensions/xep-0313.html#prefs
      message_archiving_timeout: 6e4
      // Time (in milliseconds) to wait before aborting MAM request
    });
    Object.assign(api_default4, api_default15);
    const exports2 = { onMAMError, onMAMPreferences, handleMAMResult, MAMPlaceholderMessage };
    Object.assign(converse_default, exports2);
    Object.assign(converse_default.exports, exports2);
    api_default4.listen.on("addClientFeatures", () => api_default4.disco.own.features.add(NS5.MAM));
    api_default4.listen.on("serviceDiscovered", getMAMPrefsFromFeature);
    api_default4.listen.on("chatRoomViewInitialized", ({ model }) => {
      if (api_default4.settings.get("muc_show_logs_before_join")) {
        preMUCJoinMAMFetch(model);
        model.features.on("change:mam_enabled", () => preMUCJoinMAMFetch(model));
      }
    });
    api_default4.listen.on(
      "enteredNewRoom",
      /** @param {import('../muc/muc').default} muc */
      (muc) => muc.features.get("mam_enabled") && fetchNewestMessages(muc)
    );
    api_default4.listen.on("chatReconnected", (chat) => {
      if (![CHATROOMS_TYPE, PRIVATE_CHAT_TYPE].includes(chat.get("type"))) {
        return;
      }
      fetchNewestMessages(chat);
    });
    api_default4.listen.on("afterMessagesFetched", (chat) => {
      if (chat.get("type") === PRIVATE_CHAT_TYPE) {
        fetchNewestMessages(chat);
      }
      createScrollupPlaceholder(chat);
    });
  }
});

// plugins/mam/index.js
Object.assign(utils_default, { mam: { fetchArchivedMessages } });

// plugins/ping/api.js
var import_log46 = __toESM(require("@converse/log"));

// plugins/ping/utils.js
var { Strophe: Strophe63, $iq: $iq9 } = public_default.env;

// plugins/ping/api.js
var { Strophe: Strophe64, $iq: $iq10, u: u26 } = public_default.env;

// plugins/ping/index.js
/**
 * @description
 * Converse.js plugin which add support for application-level pings
 * as specified in XEP-0199 XMPP Ping.
 * @copyright 2022, the Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 */
var { Strophe: Strophe65 } = public_default.env;
Strophe65.addNamespace("PING", "urn:xmpp:ping");
/*! TOFIND */

// plugins/pubsub/api.js
var import_log47 = __toESM(require("@converse/log"));

// plugins/pubsub/parsers.js
function parseStanzaForPubSubConfig(iq) {
  return parseXForm(iq).fields.reduce((acc, f) => {
    if (f.var.startsWith("pubsub#")) {
      const key = f.var.replace(/^pubsub#/, "");
      const value = f.type === "boolean" ? f.checked : f.value ?? null;
      acc[key] = value;
    }
    return acc;
  }, {});
}
__name(parseStanzaForPubSubConfig, "parseStanzaForPubSubConfig");

// plugins/pubsub/api.js
/**
 * @copyright The Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 */
var { Strophe: Strophe66, stx: stx18 } = public_default.env;
var api_default17 = {
  /**
   * @typedef {import('strophe.js').Builder} Builder
   * @typedef {import('strophe.js').Stanza} Stanza
   * @typedef {import('./types').PubSubConfigOptions} PubSubConfigOptions
   *
   * The "pubsub" namespace groups methods relevant to PubSub
   * @namespace _converse.api.pubsub
   * @memberOf _converse.api
   */
  pubsub: {
    config: {
      /**
       * Fetches the configuration for a PubSub node
       * @method _converse.api.pubsub.config.get
       * @param {string} jid - The JID of the pubsub service where the node resides
       * @param {string} node - The node to configure
       * @returns {Promise<import('./types').PubSubConfigOptions>}
       */
      async get(jid, node) {
        if (!node) throw new Error("api.pubsub.config.get: Node value required");
        const bare_jid = converse_default.session.get("bare_jid");
        const full_jid = converse_default.session.get("jid");
        const entity_jid = jid || bare_jid;
        const stanza = stx18`
                    <iq xmlns="jabber:client"
                        from="${full_jid}"
                        type="get"
                        to="${entity_jid}">
                    <pubsub xmlns="${Strophe66.NS.PUBSUB}#owner"><configure node="${node}"/></pubsub>
                    </iq>`;
        let response;
        try {
          response = await api_default4.sendIQ(stanza);
        } catch (error) {
          throw await parseErrorStanza(error);
        }
        return parseStanzaForPubSubConfig(response);
      },
      /**
       * Configures a PubSub node
       * @method _converse.api.pubsub.config.set
       * @param {string} jid The JID of the pubsub service where the node resides
       * @param {string} node The node to configure
       * @param {PubSubConfigOptions} config The configuration options
       * @returns {Promise<import('./types').PubSubConfigOptions>}
       */
      async set(jid, node, config) {
        if (!node) throw new Error("api.pubsub.config.set: Node value required");
        const bare_jid = converse_default.session.get("bare_jid");
        const entity_jid = jid || bare_jid;
        const new_config = {
          ...await api_default4.pubsub.config.get(entity_jid, node),
          ...config
        };
        const stanza = stx18`
                    <iq xmlns="jabber:client"
                        from="${bare_jid}"
                        type="set"
                        to="${entity_jid}">
                    <pubsub xmlns="${Strophe66.NS.PUBSUB}#owner">
                        <configure node="${node}">
                            <x xmlns="${Strophe66.NS.XFORM}" type="submit">
                                <field var="FORM_TYPE" type="hidden">
                                    <value>${Strophe66.NS.PUBSUB}#nodeconfig</value>
                                </field>
                                ${Object.entries(new_config).map(([k, v]) => stx18`<field var="pubsub#${k}"><value>${v}</value></field>`)}
                            </x>
                        </configure>
                    </pubsub>
                    </iq>`;
        try {
          await api_default4.sendIQ(stanza);
        } catch (error) {
          throw await parseErrorStanza(error);
        }
        return new_config;
      }
    },
    /**
     * Publishes an item to a PubSub node
     * @method _converse.api.pubsub.publish
     * @param {string} jid The JID of the pubsub service where the node resides.
     * @param {string} node The node being published to
     * @param {Builder|Stanza|(Builder|Stanza)[]} item The XML element(s) being published
     * @param {PubSubConfigOptions} options The publisher options
     *      (see https://xmpp.org/extensions/xep-0060.html#publisher-publish-options)
     * @param {boolean} strict_options Indicates whether the publisher
     *      options are a strict requirement or not. If they're NOT
     *      strict, then Converse will publish to the node even if
     *      the publish options precondition cannot be met.
     * @returns {Promise<void|Element>}
     */
    async publish(jid, node, item, options, strict_options = true) {
      if (!node) throw new Error("api.pubsub.publish: node value required");
      if (!item) throw new Error("api.pubsub.publish: item value required");
      const bare_jid = converse_default.session.get("bare_jid");
      const entity_jid = jid || bare_jid;
      const stanza = stx18`
                <iq xmlns="jabber:client"
                    from="${bare_jid}"
                    type="set"
                    to="${entity_jid}">
                <pubsub xmlns="${Strophe66.NS.PUBSUB}">
                    <publish node="${node}">${item}</publish>
                    ${options ? stx18`<publish-options>
                    <x xmlns="${Strophe66.NS.XFORM}" type="submit">
                        <field var="FORM_TYPE" type="hidden">
                            <value>${Strophe66.NS.PUBSUB}#publish-options</value>
                        </field>
                        ${Object.entries(options).map(([k, v]) => stx18`<field var="pubsub#${k}"><value>${v}</value></field>`)}
                    </x></publish-options>` : ""}
                </pubsub>
                </iq>`;
      if (entity_jid === bare_jid) {
        const supports_pep = await api_default4.disco.getIdentity("pubsub", "pep", bare_jid) || await api_default4.disco.getIdentity("pubsub", "pep", Strophe66.getDomainFromJid(bare_jid));
        if (!supports_pep) {
          import_log47.default.warn(`api.pubsub.publish: Not publishing via PEP because it's not supported!`);
          import_log47.default.warn(stanza);
          return;
        }
      }
      const supports_publish_options = await api_default4.disco.supports(Strophe66.NS.PUBSUB + "#publish-options", entity_jid) || entity_jid === bare_jid && // XEP-0223 says we need to check the server for support
      // (although Prosody returns it on the bare jid)
      await api_default4.disco.supports(
        Strophe66.NS.PUBSUB + "#publish-options",
        Strophe66.getDomainFromJid(entity_jid)
      );
      if (!supports_publish_options && strict_options) {
        import_log47.default.warn(`api.pubsub.publish: #publish-options not supported, refusing to publish item.`);
        import_log47.default.warn(stanza);
        return;
      }
      try {
        await api_default4.sendIQ(stanza);
      } catch (iq) {
        const e = await parseErrorStanza(iq);
        if (e.name === "conflict" && /** @type {import('shared/errors').StanzaError} */
        e.extra[Strophe66.NS.PUBSUB_ERROR] === "precondition-not-met") {
          await api_default4.pubsub.config.set(entity_jid, node, options);
          try {
            await api_default4.sendIQ(stanza);
          } catch (e2) {
            import_log47.default.error(e2);
            if (!strict_options) {
              const el = stanza.tree();
              el.querySelector("publish-options").outerHTML = "";
              import_log47.default.warn(`api.pubsub.publish: #publish-options precondition-not-met, publishing anyway.`);
              await api_default4.sendIQ(el);
            }
          }
        } else {
          throw iq;
        }
      }
    }
  }
};

// plugins/pubsub/index.js
/**
 * @module converse-pubsub
 * @copyright The Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 */
var { Strophe: Strophe67, sizzle: sizzle22 } = public_default.env;
Strophe67.addNamespace("PUBSUB_ERROR", Strophe67.NS.PUBSUB + "#errors");
public_default.plugins.add("converse-pubsub", {
  dependencies: ["converse-disco"],
  initialize() {
    const { api: api3 } = converse_default;
    Object.assign(converse_default.api, api_default17);
    api3.listen.on(
      "parseErrorStanza",
      /**
       * @param {Element} stanza
       * @param {import('shared/types.js').ErrorExtra} extra
       */
      (stanza, extra) => {
        const pubsub_err = sizzle22(`error [xmlns="${Strophe67.NS.PUBSUB_ERROR}"]`, stanza).pop();
        if (pubsub_err) {
          return {
            ...extra,
            [Strophe67.NS.PUBSUB_ERROR]: pubsub_err.nodeName
          };
        }
        return extra;
      }
    );
  }
});

// plugins/roster/contact.js
var import_openpromise18 = require("@converse/openpromise");
var import_skeletor36 = require("@converse/skeletor");

// plugins/status/api.js
var api_default18 = {
  /**
   * Set and get the user's chat status, also called their *availability*.
   * @namespace _converse.api.user.status
   * @memberOf _converse.api.user
   */
  status: {
    /**
     * Return the current user's availability status.
     * @async
     * @method _converse.api.user.status.get
     * @example _converse.api.user.status.get();
     */
    async get() {
      await api_default4.waitUntil("statusInitialized");
      const show = converse_default.state.profile.get("show");
      if (show) {
        return show;
      }
      const status = converse_default.state.profile.get("status");
      if (!status) {
        return "online";
      }
      return status;
    },
    /**
     * The user's status can be set to one of the following values:
     *
     * @async
     * @method _converse.api.user.status.set
     * @param { string } value The user's chat status (e.g. 'away', 'dnd', 'offline', 'online', 'unavailable' or 'xa')
     * @param { string } [message] A custom status message
     *
     * @example _converse.api.user.status.set('dnd');
     * @example _converse.api.user.status.set('dnd', 'In a meeting');
     */
    async set(value, message) {
      if (!Object.keys(STATUS_WEIGHTS).includes(value)) {
        throw new Error(
          "Invalid availability value. See https://xmpp.org/rfcs/rfc3921.html#rfc.section.2.2.2.1"
        );
      }
      let show = PRES_SHOW_VALUES.includes(value) ? value : void 0;
      if (value === "away") {
        show = "dnd";
      }
      const type = PRES_TYPE_VALUES.includes(value) ? value : void 0;
      const data = { show, type };
      if (typeof message === "string") {
        data.status_message = message;
      }
      await api_default4.waitUntil("statusInitialized");
      converse_default.state.profile.save(data);
    },
    /**
     * Set and retrieve the user's custom status message.
     *
     * @namespace _converse.api.user.status.message
     * @memberOf _converse.api.user.status
     */
    message: {
      /**
       * @async
       * @method _converse.api.user.status.message.get
       * @returns { Promise<string> } The status message
       * @example const message = _converse.api.user.status.message.get()
       */
      async get() {
        await api_default4.waitUntil("statusInitialized");
        return converse_default.state.profile.get("status_message");
      },
      /**
       * @async
       * @method _converse.api.user.status.message.set
       * @param { string } status The status message
       * @example _converse.api.user.status.message.set('In a meeting');
       */
      async set(status) {
        await api_default4.waitUntil("statusInitialized");
        converse_default.state.profile.save({ status_message: status });
      }
    }
  }
};

// plugins/roster/contact.js
var { Strophe: Strophe68, $pres: $pres3, stx: stx19 } = public_default.env;
var RosterContact = class extends ModelWithVCard(ColorAwareModel(import_skeletor36.Model)) {
  static {
    __name(this, "RosterContact");
  }
  get idAttribute() {
    return "jid";
  }
  defaults() {
    return {
      groups: [],
      num_unread: 0
    };
  }
  async initialize(attrs) {
    this.lazy_load_vcard = true;
    super.initialize();
    this.initialized = (0, import_openpromise18.getOpenPromise)();
    await this.setPresence();
    const { jid } = attrs;
    this.set({
      ...attrs,
      ...{
        jid: Strophe68.getBareJidFromJid(jid).toLowerCase(),
        user_id: Strophe68.getNodeFromJid(jid)
      }
    });
    this.listenTo(this.presence, "change:show", () => api_default4.trigger("contactPresenceChanged", this));
    this.listenTo(this.presence, "change:show", () => this.trigger("presence:change"));
    this.listenTo(this.presence, "change:presence", () => api_default4.trigger("contactPresenceChanged", this));
    this.listenTo(this.presence, "change:presence", () => this.trigger("presence:change"));
    await api_default4.trigger("rosterContactInitialized", this, { synchronous: true });
    this.initialized.resolve();
  }
  async setPresence() {
    const jid = this.get("jid");
    await api_default4.waitUntil("presencesInitialized");
    const { presences } = converse_default.state;
    this.presence = presences.get(jid) || presences.create({ jid });
  }
  getStatus() {
    return this.presence?.getStatus() || "offline";
  }
  async openChat() {
    return await api_default4.chats.open(this.get("jid"), {}, true);
  }
  /**
   * @param {import('./types').ContactDisplayNameOptions} [options]
   * @returns {string}
   */
  getDisplayName(options) {
    return this.get("nickname") || this.vcard?.getDisplayName() || (options?.no_jid ? null : this.get("jid"));
  }
  /**
   * Send a presence subscription request to this roster contact
   * @param {string} message - An optional message to explain the
   *      reason for the subscription request.
   */
  subscribe(message) {
    api_default4.user.presence.send({
      type: "subscribe",
      to: this.get("jid"),
      status: message
    });
    this.save("ask", "subscribe");
    return this;
  }
  /**
   * Upon receiving the presence stanza of type "subscribed",
   * the user SHOULD acknowledge receipt of that subscription
   * state notification by sending a presence stanza of type
   * "subscribe" to the contact
   */
  ackSubscribe() {
    api_default4.send($pres3({
      "type": "subscribe",
      "to": this.get("jid")
    }));
  }
  /**
   * Upon receiving the presence stanza of type "unsubscribed",
   * the user SHOULD acknowledge receipt of that subscription state
   * notification by sending a presence stanza of type "unsubscribe"
   * this step lets the user's server know that it MUST no longer
   * send notification of the subscription state change to the user.
   */
  ackUnsubscribe() {
    api_default4.send($pres3({ "type": "unsubscribe", "to": this.get("jid") }));
    this.sendRosterRemoveStanza();
    this.destroy();
  }
  /**
   * Unauthorize this contact's presence subscription
   * @param {string} [message] - Optional message to send to the person being unauthorized
   */
  unauthorize(message) {
    rejectPresenceSubscription(this.get("jid"), message);
    this.save({ requesting: false });
    return this;
  }
  /**
   * Authorize presence subscription
   * @param {string} message - Optional message to send to the person being authorized
   */
  authorize(message) {
    api_default4.send(stx19`
            <presence
                to="${this.get("jid")}"
                type="subscribed"
                xmlns="jabber:client">
                    ${message && message !== "" ? stx19`<status>${message}</status>` : ""}
            </presence>`);
    this.save({
      requesting: false,
      subscription: "from"
    });
    return this;
  }
  /**
   * Remove this contact from the roster
   * @async
   * @param {boolean} [unauthorize] - Whether to also unauthorize the
   * @returns {Promise<Error|Element>}
   */
  remove(unauthorize) {
    const subscription = this.get("subscription");
    if (subscription === "none" && this.get("ask") !== "subscribe") {
      this.destroy();
      return;
    }
    if (this.get("ask") === "subscribe" || subscription === "to") {
      api_default4.send($pres3({ type: "unsubscribe", to: this.get("jid") }));
    }
    if (unauthorize && ["from", "both"].includes(subscription)) {
      this.unauthorize();
    }
    const promise = this.sendRosterRemoveStanza();
    if (this.collection) this.destroy();
    return promise;
  }
  /**
   * @param {import('./types').RosterContactUpdateAttrs} attrs
   * @returns {Promise}
   */
  async update(attrs) {
    this.save(attrs);
    return await api_default4.sendIQ(
      stx19`<iq xmlns="jabber:client" type="set">
                <query xmlns="${Strophe68.NS.ROSTER}">
                    <item jid="${this.get("jid")}" name="${this.get("nickname")}">
                        ${this.get("groups")?.map(
        /** @param {string} group */
        (group) => stx19`<group>${group}</group>`
      )}
                    </item>
                </query>
            </iq>`
    );
  }
  /**
   * Instruct the XMPP server to remove this contact from our roster
   * @returns {Promise}
   */
  async sendRosterRemoveStanza() {
    const iq = stx19`<iq type="set" xmlns="jabber:client">
            <query xmlns="${Strophe68.NS.ROSTER}">
                <item jid="${this.get("jid")}" subscription="remove"/>
            </query>
        </iq>`;
    return await api_default4.sendIQ(iq);
  }
  isUnsaved() {
    return this.get("subscription") === void 0;
  }
};
var contact_default = RosterContact;

// plugins/roster/contacts.js
var import_skeletor37 = require("@converse/skeletor");
var import_log48 = __toESM(require("@converse/log"));
var { Strophe: Strophe69, sizzle: sizzle23, stx: stx20, u: u27, Stanza: Stanza7 } = public_default.env;
var RosterContacts = class extends import_skeletor37.Collection {
  static {
    __name(this, "RosterContacts");
  }
  constructor() {
    super();
    this.model = contact_default;
    this.data = null;
  }
  initialize() {
    const bare_jid = converse_default.session.get("bare_jid");
    const id = `roster.state-${bare_jid}-${this.get("jid")}`;
    this.state = new import_skeletor37.Model({ id, "collapsed_groups": [] });
    initStorage(this.state, id);
    this.state.fetch();
    api_default4.listen.on(
      "chatBoxClosed",
      /** @param {import('../../shared/chatbox').default} model */
      (model) => this.removeUnsavedContact(model)
    );
  }
  /**
   * @param {import('../../shared/chatbox').default} model
   */
  removeUnsavedContact(model) {
    const contact = this.get(model.get("jid"));
    if (contact && contact.get("subscription") === void 0) {
      contact.destroy();
    }
  }
  onConnected() {
    this.registerRosterHandler();
    this.registerRosterXHandler();
  }
  /**
   * Register a handler for roster IQ "set" stanzas, which update
   * roster contacts.
   */
  registerRosterHandler() {
    api_default4.connection.get().addHandler(
      /** @param {Element} iq */
      (iq) => {
        converse_default.state.roster.onRosterPush(iq);
        return true;
      },
      Strophe69.NS.ROSTER,
      "iq",
      "set"
    );
  }
  /**
   * Register a handler for RosterX message stanzas, which are
   * used to suggest roster contacts to a user.
   */
  registerRosterXHandler() {
    let t = 0;
    const connection2 = api_default4.connection.get();
    connection2.addHandler(
      /** @param {Element} msg */
      (msg) => {
        setTimeout(() => {
          const { roster } = converse_default.state;
          api_default4.connection.get().flush();
          roster.subscribeToSuggestedItems(msg);
        }, t);
        t += msg.querySelectorAll("item").length * 250;
        return true;
      },
      Strophe69.NS.ROSTERX,
      "message",
      null
    );
  }
  /**
   * Fetches the roster contacts, first by trying the browser cache,
   * and if that's empty, then by querying the XMPP server.
   * @returns {promise} Promise which resolves once the contacts have been fetched.
   */
  async fetchRosterContacts() {
    const result = await new Promise((resolve, reject) => {
      this.fetch({
        add: true,
        silent: true,
        success: resolve,
        error: /* @__PURE__ */ __name((_, e) => reject(e), "error")
      });
    });
    if (u27.isErrorObject(result)) {
      import_log48.default.error(result);
      converse_default.session.save("roster_cached", false);
      this.data.save("version", void 0);
    }
    if (converse_default.session.get("roster_cached")) {
      api_default4.trigger("cachedRoster", result);
    } else {
      api_default4.connection.get().send_initial_presence = true;
      return converse_default.state.roster.fetchFromServer();
    }
  }
  /**
   * @param {Element} msg
   */
  subscribeToSuggestedItems(msg) {
    Array.from(msg.querySelectorAll("item")).forEach((item) => {
      if (item.getAttribute("action") === "add") {
        this.addContact({
          jid: item.getAttribute("jid"),
          name: item.getAttribute("name"),
          subscription: "to"
        });
      }
    });
    return true;
  }
  /**
   * @param {string} jid
   */
  isSelf(jid) {
    return u27.isSameBareJID(jid, api_default4.connection.get().jid);
  }
  /**
   * Send an IQ stanza to the XMPP server to add a new roster contact.
   * @param {import('./types').RosterContactAttributes} attributes
   */
  sendContactAddIQ(attributes) {
    const { jid, groups } = attributes;
    const name = attributes.name ? attributes.name : null;
    const iq = stx20`
            <iq type="set" xmlns="jabber:client">
                <query xmlns="${Strophe69.NS.ROSTER}">
                    <item jid="${jid}" ${name ? Stanza7.unsafeXML(`name="${Strophe69.xmlescape(name)}"`) : ""}>
                        ${groups?.map(
      /** @param {string} g */
      (g) => stx20`<group>${g}</group>`
    )}
                    </item>
                </query>
            </iq>`;
    return api_default4.sendIQ(iq);
  }
  /**
   * Adds a {@link RosterContact} instance to {@link RosterContacts} and
   * optionally (if subscribe=true) subscribe to the contact's presence
   * updates which also adds the contact to the roster on the XMPP server.
   * @param {import('./types').RosterContactAttributes} attributes
   * @param {boolean} [persist=true] - Whether the contact should be persisted to the user's roster.
   * @param {boolean} [subscribe=true] - Whether we should subscribe to the contacts presence updates.
   * @param {string} [message=''] - An optional message to include with the presence subscription
   * @returns {Promise<RosterContact>}
   */
  async addContact(attributes, persist = true, subscribe = true, message = "") {
    const { jid, name } = attributes ?? {};
    if (!jid || !u27.isValidJID(jid)) throw new Error("Invalid JID provided to addContact");
    await api_default4.waitUntil("rosterContactsFetched");
    if (persist) {
      try {
        await this.sendContactAddIQ(attributes);
      } catch (e) {
        import_log48.default.error(e);
        const { __ } = converse_default;
        alert(__("Sorry, an error occurred while trying to add %1$s as a contact.", name || jid));
        throw e;
      }
    }
    const contact = await this.create(
      {
        ...{
          ask: void 0,
          nickname: name,
          groups: [],
          requesting: false,
          subscription: persist ? "none" : void 0
        },
        ...attributes
      },
      { sort: false }
    );
    if (subscribe) contact.subscribe(message);
    return contact;
  }
  /**
   * @param {string} bare_jid
   * @param {Element} presence
   * @param {string} [auth_msg=''] - Optional message to be included in the
   *   authorization of the contacts subscription request.
   * @param {string} [sub_msg=''] - Optional message to be included in our
   *   reciprocal subscription request.
   */
  async subscribeBack(bare_jid, presence, auth_msg = "", sub_msg = "") {
    const contact = this.get(bare_jid);
    const { RosterContact: RosterContact2 } = converse_default.exports;
    if (contact instanceof RosterContact2) {
      contact.authorize().subscribe();
    } else {
      const nickname = sizzle23(`nick[xmlns="${Strophe69.NS.NICK}"]`, presence).pop()?.textContent || void 0;
      const contact2 = await this.addContact({
        jid: bare_jid,
        name: nickname,
        groups: [],
        subscription: "from"
      });
      if (contact2 instanceof RosterContact2) {
        contact2.authorize(auth_msg).subscribe(sub_msg);
      }
    }
  }
  /**
   * Handle roster updates from the XMPP server.
   * See: https://xmpp.org/rfcs/rfc6121.html#roster-syntax-actions-push
   * @param {Element} iq - The IQ stanza received from the XMPP server.
   */
  onRosterPush(iq) {
    const id = iq.getAttribute("id");
    const from = iq.getAttribute("from");
    const bare_jid = converse_default.session.get("bare_jid");
    if (from && from !== bare_jid) {
      import_log48.default.warn(`Ignoring roster illegitimate roster push message from ${iq.getAttribute("from")}`);
      return;
    }
    api_default4.send(stx20`<iq type="result" id="${id}" from="${api_default4.connection.get().jid}" xmlns="jabber:client" />`);
    const query = sizzle23(`query[xmlns="${Strophe69.NS.ROSTER}"]`, iq).pop();
    this.data.save("version", query.getAttribute("ver"));
    const items = sizzle23(`item`, query);
    if (items.length > 1) {
      import_log48.default.error(iq);
      throw new Error('Roster push query may not contain more than one "item" element.');
    }
    if (items.length === 0) {
      import_log48.default.warn(iq);
      import_log48.default.warn('Received a roster push stanza without an "item" element.');
      return;
    }
    this.updateContact(items.pop());
    api_default4.trigger("rosterPush", iq);
    return;
  }
  shouldUseRosterVersioning() {
    return api_default4.settings.get("enable_roster_versioning") && this.data.get("version") && api_default4.disco.stream.getFeature("ver", "urn:xmpp:features:rosterver");
  }
  /**
   * Fetches the roster from the XMPP server and updates the local state
   * @emits _converse#roster
   * @returns {Promise}
   */
  async fetchFromServer() {
    const stanza = stx20`
            <iq type="get" id="${u27.getUniqueId("roster")}" xmlns="jabber:client">
                <query xmlns="${Strophe69.NS.ROSTER}"
                    ${this.shouldUseRosterVersioning() ? Stanza7.unsafeXML(`ver="${this.data.get("version")}"`) : ""}>
                </query>
            </iq>`;
    const iq = await api_default4.sendIQ(stanza, null, false);
    if (iq.getAttribute("type") === "result") {
      const query = sizzle23(`query[xmlns="${Strophe69.NS.ROSTER}"]`, iq).pop();
      if (query) {
        const items = sizzle23(`item`, query);
        if (!this.data.get("version") && this.models.length) {
          const jids = items.map(
            /** @param {Element} item */
            (item) => item.getAttribute("jid")
          );
          this.forEach((m) => !m.get("requesting") && !jids.includes(m.get("jid")) && m.destroy());
        }
        items.forEach((item) => this.updateContact(item));
        this.data.save("version", query.getAttribute("ver"));
      }
    } else if (!u27.isServiceUnavailableError(iq)) {
      import_log48.default.error(iq);
      import_log48.default.error("Error while trying to fetch roster from the server");
      return;
    }
    converse_default.session.save("roster_cached", true);
    api_default4.trigger("roster", iq);
  }
  /**
   * Update or create RosterContact models based on the given `item` XML
   * node received in the resulting IQ stanza from the server.
   * @param {Element} item
   */
  updateContact(item) {
    const jid = item.getAttribute("jid");
    const contact = this.get(jid);
    const subscription = item.getAttribute("subscription");
    if (subscription === "remove") {
      return contact?.destroy();
    }
    const ask = item.getAttribute("ask");
    const nickname = item.getAttribute("name");
    const groups = [...new Set(sizzle23("group", item).map((e) => e.textContent))];
    if (contact) {
      contact.save({ subscription, ask, nickname, groups, "requesting": null });
    } else {
      this.create({ nickname, ask, groups, jid, subscription }, { sort: false });
    }
  }
  /**
   * @param {Element} presence
   */
  createRequestingContact(presence) {
    const jid = Strophe69.getBareJidFromJid(presence.getAttribute("from"));
    const nickname = sizzle23(`nick[xmlns="${Strophe69.NS.NICK}"]`, presence).pop()?.textContent || null;
    const user_data = {
      jid,
      subscription: "none",
      ask: null,
      requesting: true,
      nickname
    };
    api_default4.trigger("contactRequest", this.create(user_data));
  }
  /**
   * @param {Element} presence
   */
  handleIncomingSubscription(presence) {
    /*! TOFIND */
    return;
    const jid = presence.getAttribute("from"), bare_jid = Strophe69.getBareJidFromJid(jid), contact = this.get(bare_jid);
    if (!api_default4.settings.get("allow_contact_requests")) {
      const { __ } = converse_default;
      rejectPresenceSubscription(jid, __("This client does not allow presence subscriptions"));
    }
    if (api_default4.settings.get("auto_subscribe")) {
      if (!contact || contact.get("subscription") !== "to") {
        this.subscribeBack(bare_jid, presence);
      } else {
        contact.authorize();
      }
    } else {
      if (contact) {
        if (contact.get("subscription") !== "none") {
          contact.authorize();
        } else if (contact.get("ask") === "subscribe") {
          contact.authorize();
        }
      } else {
        this.createRequestingContact(presence);
      }
    }
  }
  /**
   * @param {Element} stanza
   */
  handleOwnPresence(stanza) {
    const jid = stanza.getAttribute("from");
    const resource = Strophe69.getResourceFromJid(jid);
    const presence_type = stanza.getAttribute("type");
    const { profile } = converse_default.state;
    if (api_default4.connection.get().jid !== jid && presence_type !== "unavailable" && (api_default4.settings.get("synchronize_availability") === true || api_default4.settings.get("synchronize_availability") === resource)) {
      const show = stanza.querySelector("show")?.textContent;
      profile.save({ show, presence: "online" }, { silent: true });
      const status_message = stanza.querySelector("status")?.textContent;
      if (status_message) profile.save({ status_message });
    }
    if (converse_default.session.get("jid") === jid && presence_type === "unavailable") {
      api_default4.user.presence.send();
    }
  }
  /**
   * @param {Element} presence
   */
  presenceHandler(presence) {
    const presence_type = presence.getAttribute("type");
    if (presence_type === "error") return true;
    const jid = presence.getAttribute("from");
    const bare_jid = Strophe69.getBareJidFromJid(jid);
    if (this.isSelf(bare_jid)) {
      return this.handleOwnPresence(presence);
    } else if (sizzle23(`query[xmlns="${Strophe69.NS.MUC}"]`, presence).length) {
      return;
    }
    const contact = this.get(bare_jid);
    if (contact) {
      const status = presence.querySelector("status")?.textContent;
      if (contact.get("status") !== status) contact.save({ status });
    }
    if (presence_type === "subscribed" && contact) {
      contact.ackSubscribe();
    } else if (presence_type === "unsubscribed" && contact) {
      contact.ackUnsubscribe();
    } else if (presence_type === "unsubscribe") {
      return;
    } else if (presence_type === "subscribe") {
      this.handleIncomingSubscription(presence);
    } else if (presence_type === "unavailable" && contact) {
      const resource = Strophe69.getResourceFromJid(jid);
      contact.presence.removeResource(resource);
    } else if (contact) {
      contact.presence.addResource(presence);
    }
  }
};
var contacts_default = RosterContacts;

// plugins/roster/resources.js
var import_skeletor39 = require("@converse/skeletor");

// plugins/roster/resource.js
var import_skeletor38 = require("@converse/skeletor");
var Resource = class extends import_skeletor38.Model {
  static {
    __name(this, "Resource");
  }
  get idAttribute() {
    return "name";
  }
};
var resource_default = Resource;

// plugins/roster/resources.js
var Resources = class extends import_skeletor39.Collection {
  static {
    __name(this, "Resources");
  }
  constructor() {
    super();
    this.model = resource_default;
  }
};
var resources_default = Resources;

// plugins/roster/presence.js
var import_skeletor40 = require("@converse/skeletor");

// plugins/roster/parsers.js
var { Strophe: Strophe70, sizzle: sizzle24, dayjs: dayjs7 } = public_default.env;
function parsePresence(stanza) {
  const jid = stanza.getAttribute("from");
  const type = (
    /** @type {import('./types').PresenceTypes} */
    stanza.getAttribute("type")
  );
  const resource = Strophe70.getResourceFromJid(jid);
  const delay = sizzle24(`delay[xmlns="${Strophe70.NS.DELAY}"]`, stanza).pop();
  const priority = stanza.querySelector("priority")?.textContent;
  const show = (
    /** @type {import('./types').PresenceShowValues|undefined} */
    stanza.querySelector("show")?.textContent
  );
  const timestamp = delay ? dayjs7(delay.getAttribute("stamp")).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
  return {
    resource,
    show,
    timestamp,
    type,
    priority: Number.isNaN(parseInt(priority, 10)) ? 0 : parseInt(priority, 10)
  };
}
__name(parsePresence, "parsePresence");

// plugins/roster/presence.js
var Presence = class extends import_skeletor40.Model {
  static {
    __name(this, "Presence");
  }
  get idAttribute() {
    return "jid";
  }
  defaults() {
    return {
      presence: "offline",
      show: null
    };
  }
  initialize() {
    super.initialize();
    this.resources = new resources_default();
    const id = `converse.identities-${this.get("jid")}`;
    initStorage(this.resources, id, "session");
    this.listenTo(this.resources, "update", this.onResourcesChanged);
    this.listenTo(this.resources, "change", this.onResourcesChanged);
  }
  onResourcesChanged() {
    const hpr = this.getHighestPriorityResource();
    const { presence, show } = hpr?.attributes ?? {};
    this.save({ presence, show });
  }
  getStatus() {
    const presence = this.get("presence");
    if (presence === "offline") {
      return "offline";
    }
    return this.get("show") || presence || "offline";
  }
  /**
   * Return the resource with the highest priority.
   * If multiple resources have the same priority, take the latest one.
   */
  getHighestPriorityResource() {
    return this.resources.sortBy((r) => `${r.get("priority")}-${r.get("timestamp")}`).reverse()[0];
  }
  /**
   * Adds a new resource and it's associated attributes as taken
   * from the passed in presence stanza.
   * Also updates the presence if the resource has higher priority (and is newer).
   * @param {Element} presence: The presence stanza
   */
  addResource(presence) {
    const attrs = parsePresence(presence);
    const settings4 = {
      name: attrs.resource,
      presence: attrs.type === "unavailable" ? "offline" : "online",
      priority: attrs.priority,
      show: attrs.show,
      timestamp: attrs.timestamp
    };
    const resource = this.resources.get(settings4.name);
    if (resource) {
      resource.save(settings4);
    } else {
      this.resources.create(settings4);
    }
  }
  /**
   * Remove the passed in resource from the resources map.
   * Also redetermines the presence given that there's one less
   * resource.
   * @param {string} name: The resource name
   */
  removeResource(name) {
    const resource = this.resources.get(name);
    resource?.destroy();
  }
};
var presence_default2 = Presence;

// plugins/roster/presences.js
var import_skeletor41 = require("@converse/skeletor");
var Presences = class extends import_skeletor41.Collection {
  static {
    __name(this, "Presences");
  }
  constructor() {
    super();
    this.model = presence_default2;
  }
};
var presences_default = Presences;

// plugins/status/profile.js
var import_skeletor42 = require("@converse/skeletor");

// plugins/status/utils.js
var { Strophe: Strophe71, $build: $build4 } = public_default.env;
function onStatusInitialized3(reconnecting) {
  api_default4.trigger("statusInitialized", reconnecting);
}
__name(onStatusInitialized3, "onStatusInitialized");
function initStatus(reconnecting) {
  reconnecting = converse_default.state.profile === void 0 ? false : reconnecting;
  if (reconnecting) {
    onStatusInitialized3(reconnecting);
  } else {
    const id = `converse.xmppstatus-${converse_default.session.get("bare_jid")}`;
    converse_default.state.profile = new converse_default.exports.Profile({ id });
    converse_default.state.xmppstatus = converse_default.state.profile;
    Object.assign(converse_default, { xmppstatus: converse_default.state.profile });
    initStorage(converse_default.state.profile, id, "session");
    converse_default.state.profile.fetch({
      success: /* @__PURE__ */ __name(() => onStatusInitialized3(reconnecting), "success"),
      error: /* @__PURE__ */ __name(() => onStatusInitialized3(reconnecting), "error"),
      silent: true
    });
  }
}
__name(initStatus, "initStatus");
var idle_seconds = 0;
var idle = false;
var auto_changed_status = false;
var inactive = false;
function isIdle() {
  return idle;
}
__name(isIdle, "isIdle");
function getIdleSeconds() {
  return idle_seconds;
}
__name(getIdleSeconds, "getIdleSeconds");
function onUserActivity() {
  if (idle_seconds > 0) {
    idle_seconds = 0;
  }
  if (!api_default4.connection.get()?.authenticated) {
    return;
  }
  if (inactive) sendCSI(ACTIVE);
  if (idle) {
    idle = false;
    api_default4.user.presence.send();
  }
  if (auto_changed_status === true) {
    auto_changed_status = false;
    converse_default.state.profile.set("show", void 0);
  }
}
__name(onUserActivity, "onUserActivity");
function onEverySecond() {
  if (!api_default4.connection.get()?.authenticated) {
    return;
  }
  const { profile } = converse_default.state;
  const show = profile.get("show");
  idle_seconds++;
  if (api_default4.settings.get("csi_waiting_time") > 0 && idle_seconds > api_default4.settings.get("csi_waiting_time") && !inactive) {
    sendCSI(INACTIVE);
  }
  if (api_default4.settings.get("idle_presence_timeout") > 0 && idle_seconds > api_default4.settings.get("idle_presence_timeout") && !idle) {
    idle = true;
    api_default4.user.presence.send();
  }
  if (api_default4.settings.get("auto_away") > 0 && idle_seconds > api_default4.settings.get("auto_away") && show !== "away" && show !== "xa" && show !== "dnd") {
    auto_changed_status = true;
    profile.set("show", "away");
  } else if (api_default4.settings.get("auto_xa") > 0 && idle_seconds > api_default4.settings.get("auto_xa") && show !== "xa" && show !== "dnd") {
    auto_changed_status = true;
    profile.set("show", "xa");
  }
}
__name(onEverySecond, "onEverySecond");
function sendCSI(stat) {
  api_default4.send($build4(stat, { xmlns: Strophe71.NS.CSI }));
  inactive = stat === INACTIVE ? true : false;
}
__name(sendCSI, "sendCSI");
var everySecondTrigger;
function registerIntervalHandler() {
  if (api_default4.settings.get("auto_away") < 1 && api_default4.settings.get("auto_xa") < 1 && api_default4.settings.get("csi_waiting_time") < 1 && api_default4.settings.get("idle_presence_timeout") < 1) {
    return;
  }
  idle_seconds = 0;
  auto_changed_status = false;
  const { onUserActivity: onUserActivity2, onEverySecond: onEverySecond2 } = converse_default.exports;
  window.addEventListener("click", onUserActivity2);
  window.addEventListener("focus", onUserActivity2);
  window.addEventListener("keypress", onUserActivity2);
  window.addEventListener("mousemove", onUserActivity2);
  window.addEventListener(getUnloadEvent(), onUserActivity2, { "once": true, "passive": true });
  everySecondTrigger = setInterval(onEverySecond2, 1e3);
}
__name(registerIntervalHandler, "registerIntervalHandler");
function tearDown2() {
  const { onUserActivity: onUserActivity2 } = converse_default.exports;
  window.removeEventListener("click", onUserActivity2);
  window.removeEventListener("focus", onUserActivity2);
  window.removeEventListener("keypress", onUserActivity2);
  window.removeEventListener("mousemove", onUserActivity2);
  window.removeEventListener(getUnloadEvent(), onUserActivity2);
  if (everySecondTrigger) {
    clearInterval(everySecondTrigger);
    everySecondTrigger = null;
  }
}
__name(tearDown2, "tearDown");

// plugins/status/profile.js
var { Stanza: Stanza8, Strophe: Strophe72, stx: stx21 } = public_default.env;
var Profile = class extends ModelWithVCard(ColorAwareModel(import_skeletor42.Model)) {
  static {
    __name(this, "Profile");
  }
  defaults() {
    return {
      presence: "online",
      status: null,
      show: null,
      groups: []
    };
  }
  /**
   * @return {import('./types').connection_status}
   */
  getStatus() {
    const presence = this.get("presence");
    if (presence === "offline" || presence === "unavailable") {
      return "offline";
    }
    return this.get("show") || presence || "offline";
  }
  /**
   * @param {string} attr
   */
  get(attr) {
    if (attr === "jid") {
      return converse_default.session.get("bare_jid");
    } else if (attr === "nickname") {
      return api_default4.settings.get("nickname");
    }
    return super.get(attr);
  }
  /**
   * @param {string|Object} key
   * @param {string|Object} [val]
   * @param {Object} [options]
   */
  set(key, val, options) {
    if (key === "jid" || key === "nickname") {
      throw new Error("Readonly property");
    }
    return super.set(key, val, options);
  }
  initialize() {
    super.initialize();
    this.on("change", (item) => {
      if (item.changed?.status || item.changed?.status_message || item.changed?.show) {
        api_default4.user.presence.send({
          show: this.get("show"),
          status: this.get("status_message")
        });
      }
    });
  }
  /**
   * @param {import('../roster/types.js').ContactDisplayNameOptions} [options]
   */
  getDisplayName(options) {
    const { __ } = converse_default;
    const name = this.vcard?.get("fullname") || this.getNickname() || this.get("jid");
    return options?.context === "roster" ? `${name} (${__("me")})` : name;
  }
  getNickname() {
    return this.vcard?.get("nickname") || api_default4.settings.get("nickname");
  }
  /**
   * Constructs a presence stanza
   * @param {import('./types').presence_attrs} [attrs={}]
   * @returns {Promise<Stanza>}
   */
  async constructPresence(attrs = {}) {
    const { type, to } = attrs;
    const { profile } = converse_default.state;
    const status = typeof attrs.status === "string" ? attrs.status : this.get("status_message");
    const show = attrs.show || this.get("status");
    const include_nick = type === "subscribe";
    const nick = include_nick ? profile.getNickname() : null;
    const priority = api_default4.settings.get("priority");
    let idle_since;
    if (isIdle()) {
      idle_since = /* @__PURE__ */ new Date();
      idle_since.setSeconds(idle_since.getSeconds() - getIdleSeconds());
    }
    const presence = stx21`
            <presence ${to ? Stanza8.unsafeXML(`to="${Strophe72.xmlescape(to)}"`) : ""}
                    ${type ? Stanza8.unsafeXML(`type="${Strophe72.xmlescape(type)}"`) : ""}
                    xmlns="jabber:client">
                ${nick ? stx21`<nick xmlns="${Strophe72.NS.NICK}">${nick}</nick>` : ""}
                ${show ? stx21`<show>${show}</show>` : ""}
                ${status ? stx21`<status>${status}</status>` : ""}
                <priority>${Number.isNaN(Number(priority)) ? 0 : priority}</priority>
                ${idle_since ? stx21`<idle xmlns="${Strophe72.NS.IDLE}" since="${idle_since.toISOString()}"></idle>` : ""}
            </presence>`;
    return await api_default4.hook("constructedPresence", null, presence);
  }
};

// plugins/status/plugin.js
var { Strophe: Strophe73 } = public_default.env;
Strophe73.addNamespace("IDLE", "urn:xmpp:idle:1");
public_default.plugins.add("converse-status", {
  initialize() {
    api_default4.settings.extend({
      auto_away: 0,
      // Seconds after which user status is set to 'away'
      auto_xa: 0,
      // Seconds after which user status is set to 'xa'
      csi_waiting_time: 0,
      // Support for XEP-0352. Seconds before client is considered idle and CSI is sent out.
      idle_presence_timeout: 300,
      // Seconds after which an idle presence is sent
      priority: 0
    });
    api_default4.promises.add(["statusInitialized"]);
    const exports2 = {
      XMPPStatus: Profile,
      // Deprecated
      Profile,
      onUserActivity,
      onEverySecond,
      sendCSI,
      registerIntervalHandler
    };
    Object.assign(converse_default, exports2);
    Object.assign(converse_default.exports, exports2);
    Object.assign(converse_default.api.user, api_default18);
    if (api_default4.settings.get("idle_presence_timeout") > 0) {
      api_default4.listen.on("addClientFeatures", () => api_default4.disco.own.features.add(Strophe73.NS.IDLE));
    }
    api_default4.listen.on("presencesInitialized", (reconnecting) => !reconnecting && registerIntervalHandler());
    api_default4.listen.on("beforeTearDown", tearDown2);
    api_default4.listen.on("clearSession", () => {
      if (shouldClearCache(converse_default) && converse_default.state.profile) {
        converse_default.state.profile.destroy();
        delete converse_default.state.profile;
        Object.assign(converse_default, { profile: void 0 });
        api_default4.promises.add(["statusInitialized"]);
      }
    });
    api_default4.listen.on("connected", () => initStatus(false));
    api_default4.listen.on("reconnected", () => initStatus(true));
  }
});

// plugins/roster/api.js
var { Strophe: Strophe74 } = public_default.env;
var api_default19 = {
  /**
   * @namespace _converse.api.contacts
   * @memberOf _converse.api
   *
   * @typedef {import('./contact').default} RosterContact
   */
  contacts: {
    /**
     * This method is used to retrieve roster contacts.
     *
     * @method _converse.api.contacts.get
     * @param {(string[]|string)} jids The JID or JIDs of the contacts to be returned.
     * @returns {promise} Promise which resolves with the
     *  {@link RosterContact} (or an array of them) representing the contact.
     *
     * @example
     * // Fetch a single contact
     * _converse.api.listen.on('rosterContactsFetched', function () {
     *     const contact = await _converse.api.contacts.get('buddy@example.com')
     *     // ...
     * });
     *
     * @example
     * // To get multiple contacts, pass in an array of JIDs:
     * _converse.api.listen.on('rosterContactsFetched', function () {
     *     const contacts = await _converse.api.contacts.get(
     *         ['buddy1@example.com', 'buddy2@example.com']
     *     )
     *     // ...
     * });
     *
     * @example
     * // To return all contacts, simply call ``get`` without any parameters:
     * _converse.api.listen.on('rosterContactsFetched', function () {
     *     const contacts = await _converse.api.contacts.get();
     *     // ...
     * });
     */
    async get(jids) {
      await api_default4.waitUntil("rosterContactsFetched");
      const { roster } = converse_default.state;
      const _getter = (
        /** @param {string} jid */
        /* @__PURE__ */ __name((jid) => roster.get(Strophe74.getBareJidFromJid(jid)), "_getter")
      );
      if (jids === void 0) {
        jids = roster.pluck("jid");
      } else if (typeof jids === "string") {
        return _getter(jids);
      }
      return (
        /** @type {string[]} */
        jids.map(_getter)
      );
    },
    /**
     * Remove a contact from the roster
     * @param {string} jid
     * @param {boolean} [unsubscribe] - Whether we should unsubscribe
     * from the contact's presence updates.
     */
    async remove(jid, unsubscribe) {
      await api_default4.waitUntil("rosterContactsFetched");
      const contact = await api_default4.contacts.get(jid);
      contact.remove(unsubscribe);
    },
    /**
     * Add a contact.
     * @param {import('./types').RosterContactAttributes} attributes
     * @param {boolean} [persist=true] - Whether the contact should be persisted to the user's roster.
     * @param {boolean} [subscribe=true] - Whether we should subscribe to the contacts presence updates.
     * @param {string} [message=''] - An optional message to include with the presence subscription
     * @param {boolean} subscribe - Whether a presense subscription should
     *      be sent out to the contact being added.
     * @returns {Promise<RosterContact>}
     * @example
     *      api.contacts.add({ jid: 'buddy@example.com', groups: ['Buddies'] })
     */
    async add(attributes, persist = true, subscribe = true, message = "") {
      if (!isValidJID(attributes?.jid)) throw new Error("api.contacts.add: Valid JID required");
      const { roster } = converse_default.state;
      return roster.addContact(attributes, persist, subscribe, message);
    }
  }
};

// plugins/roster/plugin.js
/**
 * @copyright The Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 */
public_default.plugins.add("converse-roster", {
  dependencies: ["converse-status"],
  initialize() {
    api_default4.settings.extend({
      allow_contact_requests: true,
      auto_subscribe: false,
      enable_roster_versioning: true,
      show_self_in_roster: true,
      synchronize_availability: true
    });
    api_default4.promises.add([
      "cachedRoster",
      "roster",
      "rosterContactsFetched",
      "rosterInitialized",
      "presencesInitialized"
    ]);
    Object.assign(converse_default.api, api_default19);
    Object.assign(utils_default, { roster: { isUnsavedContact } });
    const { __ } = converse_default;
    const labels = {
      HEADER_UNSAVED_CONTACTS: __("Unsaved contacts"),
      HEADER_CURRENT_CONTACTS: __("My contacts"),
      HEADER_PENDING_CONTACTS: __("Pending contacts"),
      HEADER_REQUESTING_CONTACTS: __("Contact requests"),
      HEADER_UNGROUPED: __("Ungrouped"),
      HEADER_UNREAD: __("New messages")
    };
    Object.assign(converse_default, labels);
    Object.assign(converse_default.labels, labels);
    const exports2 = { Presence: presence_default2, Presences: presences_default, RosterContact: contact_default, RosterContacts: contacts_default };
    Object.assign(converse_default, exports2);
    Object.assign(converse_default.exports, exports2);
    api_default4.listen.on("beforeTearDown", () => unregisterPresenceHandler2());
    api_default4.listen.on("chatBoxesInitialized", onChatBoxesInitialized);
    api_default4.listen.on("clearSession", onClearSession2);
    api_default4.listen.on("presencesInitialized", onPresencesInitialized);
    api_default4.listen.on("statusInitialized", onStatusInitialized2);
    api_default4.listen.on("streamResumptionFailed", () => converse_default.session.set("roster_cached", false));
    api_default4.waitUntil("rosterContactsFetched").then(onRosterContactsFetched);
  }
});

// plugins/smacks/utils.js
var import_log49 = __toESM(require("@converse/log"));
var import_openpromise19 = require("@converse/openpromise");
var { Strophe: Strophe75, u: u28, stx: stx22 } = public_default.env;
function isStreamManagementSupported() {
  if (api_default4.connection.isType("bosh") && !isTestEnv()) {
    return false;
  }
  return api_default4.disco.stream.getFeature("sm", Strophe75.NS.SM);
}
__name(isStreamManagementSupported, "isStreamManagementSupported");
function handleAck(el) {
  if (!converse_default.session.get("smacks_enabled")) {
    return true;
  }
  const handled = parseInt(el.getAttribute("h"), 10);
  const last_known_handled = converse_default.session.get("num_stanzas_handled_by_server");
  const delta = handled - last_known_handled;
  if (delta < 0) {
    const err_msg = `New reported stanza count lower than previous. New: ${handled} - Previous: ${last_known_handled}`;
    import_log49.default.error(err_msg);
  }
  const unacked_stanzas = converse_default.session.get("unacked_stanzas");
  if (delta > unacked_stanzas.length) {
    const err_msg = `Higher reported acknowledge count than unacknowledged stanzas. Reported Acknowledged Count: ${delta} -Unacknowledged Stanza Count: ${unacked_stanzas.length} -New: ${handled} - Previous: ${last_known_handled}`;
    import_log49.default.error(err_msg);
  }
  converse_default.session.save({
    "num_stanzas_handled_by_server": handled,
    "num_stanzas_since_last_ack": 0,
    "unacked_stanzas": unacked_stanzas.slice(delta)
  });
  return true;
}
__name(handleAck, "handleAck");
function sendAck() {
  if (converse_default.session.get("smacks_enabled")) {
    const h = converse_default.session.get("num_stanzas_handled");
    const stanza = stx22`<a xmlns="${Strophe75.NS.SM}" h="${h}"/>`;
    api_default4.send(stanza);
  }
  return true;
}
__name(sendAck, "sendAck");
function stanzaHandler(el) {
  if (converse_default.session.get("smacks_enabled")) {
    if (u28.isTagEqual(el, "iq") || u28.isTagEqual(el, "presence") || u28.isTagEqual(el, "message")) {
      const h = converse_default.session.get("num_stanzas_handled");
      converse_default.session.save("num_stanzas_handled", h + 1);
    }
  }
  return true;
}
__name(stanzaHandler, "stanzaHandler");
function initSessionData() {
  const { session } = converse_default;
  session.save({
    smacks_enabled: converse_default.session.get("smacks_enabled") || false,
    num_stanzas_handled: converse_default.session.get("num_stanzas_handled") || 0,
    num_stanzas_handled_by_server: converse_default.session.get("num_stanzas_handled_by_server") || 0,
    num_stanzas_since_last_ack: converse_default.session.get("num_stanzas_since_last_ack") || 0,
    unacked_stanzas: converse_default.session.get("unacked_stanzas") || []
  });
}
__name(initSessionData, "initSessionData");
function resetSessionData() {
  const { session } = converse_default;
  u28.safeSave(session, {
    smacks_enabled: false,
    num_stanzas_handled: 0,
    num_stanzas_handled_by_server: 0,
    num_stanzas_since_last_ack: 0,
    unacked_stanzas: []
  });
}
__name(resetSessionData, "resetSessionData");
function saveSessionData(el) {
  const data = { "smacks_enabled": true };
  if (["1", "true"].includes(el.getAttribute("resume"))) {
    data["smacks_stream_id"] = el.getAttribute("id");
  }
  converse_default.session.save(data);
  return true;
}
__name(saveSessionData, "saveSessionData");
function onFailedStanza(el) {
  resetSessionData();
  api_default4.trigger("streamResumptionFailed");
  if (el.querySelector("item-not-found")) {
    import_log49.default.warn("Could not resume previous SMACKS session, session id not found. A new session will be established.");
  } else {
    import_log49.default.error("Failed to enable stream management");
    import_log49.default.error(el.outerHTML);
    const connection2 = api_default4.connection.get();
    connection2._changeConnectStatus(Strophe75.Status.DISCONNECTED, null);
  }
  return true;
}
__name(onFailedStanza, "onFailedStanza");
function resendUnackedStanzas() {
  const stanzas = converse_default.session.get("unacked_stanzas");
  converse_default.session.save("unacked_stanzas", []);
  stanzas.forEach((s) => api_default4.send(u28.toStanza(s)));
}
__name(resendUnackedStanzas, "resendUnackedStanzas");
function onResumedStanza(el) {
  saveSessionData(el);
  handleAck(el);
  resendUnackedStanzas();
  const connection2 = api_default4.connection.get();
  connection2.do_bind = false;
  connection2.authenticated = true;
  connection2.restored = true;
  connection2._changeConnectStatus(Strophe75.Status.CONNECTED, null);
}
__name(onResumedStanza, "onResumedStanza");
async function sendResumeStanza() {
  const promise = (0, import_openpromise19.getOpenPromise)();
  const connection2 = api_default4.connection.get();
  connection2._addSysHandler((el) => promise.resolve(onResumedStanza(el)), Strophe75.NS.SM, "resumed");
  connection2._addSysHandler((el) => promise.resolve(onFailedStanza(el)), Strophe75.NS.SM, "failed");
  const previous_id = converse_default.session.get("smacks_stream_id");
  const h = converse_default.session.get("num_stanzas_handled");
  const stanza = stx22`<resume xmlns="${Strophe75.NS.SM}" h="${h}" previd="${previous_id}"/>`;
  api_default4.send(stanza);
  connection2.flush();
  await promise;
}
__name(sendResumeStanza, "sendResumeStanza");
async function sendEnableStanza() {
  if (!api_default4.settings.get("enable_smacks") || converse_default.session.get("smacks_enabled")) {
    return;
  }
  if (await isStreamManagementSupported()) {
    const promise = (0, import_openpromise19.getOpenPromise)();
    const connection2 = api_default4.connection.get();
    connection2._addSysHandler((el) => promise.resolve(saveSessionData(el)), Strophe75.NS.SM, "enabled");
    connection2._addSysHandler((el) => promise.resolve(onFailedStanza(el)), Strophe75.NS.SM, "failed");
    const resume = api_default4.connection.isType("websocket") || isTestEnv();
    const stanza = stx22`<enable xmlns="${Strophe75.NS.SM}" resume="${resume}"/>`;
    api_default4.send(stanza);
    connection2.flush();
    await promise;
  }
}
__name(sendEnableStanza, "sendEnableStanza");
var smacks_handlers = [];
async function enableStreamManagement() {
  if (!api_default4.settings.get("enable_smacks")) {
    return;
  }
  if (!await isStreamManagementSupported()) {
    return;
  }
  const conn = api_default4.connection.get();
  while (smacks_handlers.length) {
    conn.deleteHandler(smacks_handlers.pop());
  }
  smacks_handlers.push(conn.addHandler(stanzaHandler));
  smacks_handlers.push(conn.addHandler(sendAck, Strophe75.NS.SM, "r"));
  smacks_handlers.push(conn.addHandler(handleAck, Strophe75.NS.SM, "a"));
  const { session } = converse_default;
  if (session?.get("smacks_stream_id")) {
    await sendResumeStanza();
  } else {
    resetSessionData();
  }
}
__name(enableStreamManagement, "enableStreamManagement");
function onStanzaSent(stanza) {
  if (!converse_default.session) {
    import_log49.default.warn("No _converse.session!");
    return;
  }
  if (!converse_default.session.get("smacks_enabled")) {
    return;
  }
  if (u28.isTagEqual(stanza, "iq") || u28.isTagEqual(stanza, "presence") || u28.isTagEqual(stanza, "message")) {
    const stanza_string = Strophe75.serialize(stanza);
    converse_default.session.save(
      "unacked_stanzas",
      (converse_default.session.get("unacked_stanzas") || []).concat([stanza_string])
    );
    const max_unacked = api_default4.settings.get("smacks_max_unacked_stanzas");
    if (max_unacked > 0) {
      const num = converse_default.session.get("num_stanzas_since_last_ack") + 1;
      if (num % max_unacked === 0) {
        api_default4.send(stx22`<r xmlns="${Strophe75.NS.SM}"/>`);
      }
      converse_default.session.save({ "num_stanzas_since_last_ack": num });
    }
  }
}
__name(onStanzaSent, "onStanzaSent");

// plugins/smacks/index.js
/**
 * @copyright The Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 * @description Converse.js plugin which adds support for XEP-0198: Stream Management
 */
var { Strophe: Strophe76 } = public_default.env;
Strophe76.addNamespace("SM", "urn:xmpp:sm:3");
public_default.plugins.add("converse-smacks", {
  initialize() {
    api_default4.settings.extend({
      "enable_smacks": true,
      "smacks_max_unacked_stanzas": 5
    });
    api_default4.listen.on("afterResourceBinding", sendEnableStanza);
    api_default4.listen.on("beforeResourceBinding", enableStreamManagement);
    api_default4.listen.on("send", onStanzaSent);
    api_default4.listen.on("userSessionInitialized", initSessionData);
  }
});

// plugins/vcard/vcard.js
var import_skeletor43 = require("@converse/skeletor");
var VCard = class extends import_skeletor43.Model {
  static {
    __name(this, "VCard");
  }
  /**
   * @param {import("../../shared/types").ModelAttributes} attrs
   * @param {import("./types").VCardModelOptions} options
   */
  constructor(attrs, options) {
    super(attrs, options);
    this._vcard = null;
  }
  /**
   * @param {import("../../shared/types").ModelAttributes} [_attrs]
   * @param {import("./types").VCardModelOptions} [options]
   */
  initialize(_attrs, options) {
    this.lazy_load = api_default4.settings.get("lazy_load_vcards") && !!options?.lazy_load;
    if (this.lazy_load) {
      this.once("visibilityChanged", () => api_default4.vcard.update(this));
    } else {
      api_default4.vcard.update(this);
    }
  }
  get idAttribute() {
    return "jid";
  }
  getDisplayName() {
    return this.get("nickname") || this.get("fullname") || this.get("jid");
  }
};
var vcard_default = VCard;

// plugins/vcard/vcards.js
var import_skeletor44 = require("@converse/skeletor");
var import_openpromise20 = require("@converse/openpromise");
var VCards = class extends import_skeletor44.Collection {
  static {
    __name(this, "VCards");
  }
  constructor() {
    super();
    this.model = vcard_default;
  }
  async initialize() {
    const { session } = converse_default;
    const bare_jid = session.get("bare_jid");
    const cache_key = `${bare_jid}-converse.vcards`;
    initStorage(this, cache_key);
    await this.fetchVCards();
    api_default4.trigger("VCardsInitialized");
  }
  fetchVCards() {
    const deferred = (0, import_openpromise20.getOpenPromise)();
    this.fetch(
      {
        success: /* @__PURE__ */ __name(() => deferred.resolve(), "success"),
        error: /* @__PURE__ */ __name(() => deferred.resolve(), "error")
      }
    );
    return deferred;
  }
};
var vcards_default = VCards;

// plugins/vcard/api.js
var import_log50 = __toESM(require("@converse/log"));
var { Strophe: Strophe77, dayjs: dayjs8, u: u29, stx: stx23 } = public_default.env;
var api_default20 = {
  /**
   * The XEP-0054 VCard API
   *
   * This API lets you access and update user VCards
   *
   * @namespace _converse.api.vcard
   * @memberOf _converse.api
   */
  vcard: {
    /**
     * Enables setting new values for a VCard.
     *
     * Sends out an IQ stanza to set the user's VCard and if
     * successful, it updates the {@link _converse.VCard}
     * for the passed in JID.
     *
     * @method _converse.api.vcard.set
     * @param {string} jid The JID for which the VCard should be set
     * @param {import("./types").VCardData} data A map of VCard keys and values
     * @example
     * let jid = _converse.bare_jid;
     * _converse.api.vcard.set( jid, {
     *     'fn': 'John Doe',
     *     'nickname': 'jdoe'
     * }).then(() => {
     *     // Succes
     * }).catch((e) => {
     *     // Failure, e is your error object
     * }).
     */
    async set(jid, data) {
      if (!jid) throw Error("No jid provided for the VCard data");
      api_default4.waitUntil("VCardsInitialized");
      let vcard = converse_default.state.vcards.get(jid);
      const old_vcard_attrs = vcard?.attributes ?? null;
      if (vcard && old_vcard_attrs.image !== data.image) {
        const buffer = u29.base64ToArrayBuffer(data.image);
        const hash_ab = await crypto.subtle.digest("SHA-1", buffer);
        vcard.save({
          image: data.image,
          image_type: data.image_type,
          image_hash: u29.arrayBufferToHex(hash_ab)
        });
      }
      let result;
      const vcard_el = stx23`
                <vCard xmlns="vcard-temp">
                    <FN>${data.fn ?? ""}</FN>
                    <NICKNAME>${data.nickname ?? ""}</NICKNAME>
                    <URL>${data.url ?? ""}</URL>
                    <ROLE>${data.role ?? ""}</ROLE>
                    <EMAIL><INTERNET/><PREF/><USERID>${data.email ?? ""}</USERID></EMAIL>
                    <PHOTO>
                        <TYPE>${data.image_type ?? ""}</TYPE>
                        <BINVAL>${data.image ?? ""}</BINVAL>
                    </PHOTO>
                </vCard>`;
      try {
        result = await api_default4.sendIQ(createStanza("set", jid, vcard_el));
      } catch (e) {
        if (old_vcard_attrs) vcard.save(old_vcard_attrs);
        throw e;
      }
      vcard = await api_default4.vcard.update(jid, true);
      if (u29.isOwnJID(jid)) {
        const node = stx23`<x xmlns="${Strophe77.NS.VCARD_UPDATE}">
                    <photo>${vcard.get("image_hash") ?? ""}</photo>
                </x>`;
        api_default4.user.presence.send({}, node);
      }
      return result;
    },
    /**
     * @method _converse.api.vcard.get
     * @param {Model|string} model Either a `Model` instance, or a string JID.
     *     If a `Model` instance is passed in, then it must have either a `jid`
     *     attribute or a `muc_jid` attribute.
     * @param {boolean} [force] A boolean indicating whether the vcard should be
     *     fetched from the server even if it's been fetched before.
     * @returns {Promise<import("./types").VCardResult|null>} A Promise which resolves
     *     with the VCard data for a particular JID or for a `Model` instance which
     *     represents an entity with a JID (such as a roster contact, chat or chatroom occupant).
     *
     * @example
     * const { api } = _converse;
     * api.waitUntil('rosterContactsFetched').then(() => {
     *     api.vcard.get('someone@example.org').then(
     *         (vcard) => {
     *             // Do something with the vcard...
     *         }
     *     );
     * });
     */
    async get(model, force) {
      /*! TOFIND */
      return;
      api_default4.waitUntil("VCardsInitialized");
      if (typeof model === "string") return fetchVCard(model);
      const error_date = model.get("vcard_error");
      if (error_date) {
        const { random, round } = Math;
        const subtract_flag = round(random());
        const recent_date = dayjs8().subtract(21, "days").subtract(round(random() * 24) * subtract_flag, "hours").add(round(random() * 24) * (!subtract_flag ? 1 : 0), "hours");
        const tried_recently = dayjs8(error_date).isAfter(recent_date);
        if (!force && tried_recently) return null;
      }
      const vcard_updated = model.get("vcard_updated");
      if (vcard_updated) {
        const { random, round } = Math;
        const subtract_flag = round(random());
        const recent_date = dayjs8().subtract(7, "days").subtract(round(random() * 24) * subtract_flag, "hours").add(round(random() * 24) * (!subtract_flag ? 1 : 0), "hours");
        const updated_recently = dayjs8(vcard_updated).isAfter(recent_date);
        if (!force && updated_recently) return null;
      }
      const jid = model.get("jid");
      if (!jid) {
        import_log50.default.error("No JID to get vcard for");
        return null;
      }
      return fetchVCard(jid);
    },
    /**
     * Fetches the VCard associated with a particular `Model` instance
     * (by using its `jid` or `muc_jid` attribute) and then updates the model with the
     * returned VCard data.
     *
     * @method _converse.api.vcard.update
     * @param {Model} model A `Model` instance
     * @param {boolean} [force] A boolean indicating whether the vcard should be
     *     fetched again even if it's been fetched before.
     * @returns {promise} A promise which resolves once the update has completed.
     * @example
     * const { api } = _converse;
     * api.waitUntil('rosterContactsFetched').then(async () => {
     *     const chatbox = await api.chats.get('someone@example.org');
     *     api.vcard.update(chatbox);
     * });
     */
    async update(model, force) {
      /*! TOFIND */
      return;
      api_default4.waitUntil("VCardsInitialized");
      const data = await this.get(model, force);
      if (data === null) {
        import_log50.default.debug("api.vcard.update: null data returned, not updating the vcard");
        return;
      }
      model = typeof model === "string" ? converse_default.state.vcards.get(model) : model;
      if (!model) {
        import_log50.default.error(`Could not find a VCard model for ${model}`);
        return;
      }
      if (Object.keys(data).length) {
        delete data["stanza"];
        u29.safeSave(model, data);
      }
      return model;
    }
  }
};

// plugins/vcard/plugin.js
/**
 * @copyright The Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 */
var { Strophe: Strophe78 } = public_default.env;
public_default.plugins.add("converse-vcard", {
  dependencies: ["converse-status", "converse-roster"],
  enabled() {
    return !api_default4.settings.get("blacklisted_plugins")?.includes("converse-vcard");
  },
  initialize() {
    api_default4.settings.extend({
      lazy_load_vcards: true
    });
    api_default4.promises.add("VCardsInitialized");
    Object.assign(converse_default.api, api_default20);
    const exports2 = { VCard: vcard_default, VCards: vcards_default };
    Object.assign(converse_default, exports2);
    Object.assign(converse_default.exports, exports2);
    api_default4.listen.on(
      "chatRoomInitialized",
      /** @param {import('../muc/muc').default} m */
      (m) => {
        m.listenTo(m.occupants, "change:image_hash", (o) => onOccupantAvatarChanged(o));
      }
    );
    api_default4.listen.on("addClientFeatures", () => {
      api_default4.disco.own.features.add(Strophe78.NS.VCARD);
      api_default4.disco.own.features.add(Strophe78.NS.VCARD_UPDATE);
    });
    api_default4.listen.on("clearSession", () => clearVCardsSession());
    api_default4.listen.on("visibilityChanged", ({ el }) => {
      const { model } = el;
      if (model?.vcard) model.vcard.trigger("visibilityChanged");
    });
    api_default4.listen.on("connected", () => {
      const vcards = new converse_default.exports.VCards();
      converse_default.state.vcards = vcards;
      Object.assign(converse_default, { vcards });
    });
    api_default4.listen.on("presencesInitialized", () => registerPresenceHandler());
    api_default4.listen.on("beforeTearDown", () => unregisterPresenceHandler());
    api_default4.listen.on("constructedPresence", (_, p) => updatePresence(p));
  }
});

// index.js
import_dayjs7.default.extend(import_advancedFormat.default);
import_dayjs7.default.extend(import_localizedFormat.default);
var constants = Object.assign({}, constants_exports, constants_exports2, constants_exports3);
Object.assign(converse_default.constants, constants);
/*! TOFIND */
function converseInit(converseIndex) {
  const instanceName = `converse${converseIndex}`;
  window[instanceName] = window[instanceName] || {};
  Object.assign(window[instanceName], public_default);
  return window[instanceName];
}
__name(converseInit, "converseInit");
window["converse"] = public_default;
var index_default = public_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseMessage,
  Bookmark,
  Bookmarks,
  Builder,
  ChatBox,
  Collection,
  Device,
  DeviceList,
  DeviceLists,
  Devices,
  EmojiPicker,
  EventEmitter,
  MAMPlaceholderMessage,
  MUC,
  MUCMessage,
  MUCMessages,
  MUCOccupant,
  MUCOccupants,
  Message,
  Messages,
  Model,
  ModelWithMessages,
  Presence,
  Presences,
  Profile,
  RosterContact,
  RosterContacts,
  RosterFilter,
  Stanza,
  VCard,
  VCards,
  _converse,
  api,
  constants,
  converse,
  converseInit,
  errors,
  i18n,
  log,
  parsers,
  u
});
//# sourceMappingURL=converse-headless.js.map

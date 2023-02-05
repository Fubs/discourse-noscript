// ==UserScript==
// @name        discourse noscript
// @description disable js on discourse sites (to fix scrolling and ctrl+f)
// @author      - Max Behling
// @grant       none
// @version     1.0
// @match       https://*/*
// @run-at      document-start
// ==/UserScript==

if (document.querySelectorAll('meta[name="discourse_theme_id"]').length > 0 && window.location.href.match("_escaped_fragment_") > -1) {
  window.location.href = window.location.href + "?_escaped_fragment_";
}

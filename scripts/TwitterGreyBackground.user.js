// ==UserScript==
// @name          TwitterGreyBackground
// @namespace     http://www.slintes.net/greasemonkey/
// @description   grey background for twitter
// @description   use this add-on on firefox: https://addons.mozilla.org/firefox/addon/748
// @description   works natively on chrome, but I recommend this extension: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
// @author        Marc Sluiter
// @copyright     2015 Marc Sluiter
// @license       Apache License, Version 2.0, see https://github.com/slintes/userscripts/blob/master/LICENSE
// @include       https://twitter.com/*
// @version 0.0.1
// @grant         GM_addStyle
// ==/UserScript==

var color = "#333";

GM_addStyle("body { background-color:" + color + ";}");

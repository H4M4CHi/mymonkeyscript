// ==UserScript==
// @name         DAMのJSリンク改善
// @namespace    http://your.homepage/
// @version      1.0
// @description  DAMのJavascriptによるリンクを通常のリンクに変更するスクリプト
// @author       Hamada Yuma
// @match        http://www.clubdam.com/*
// @grant        none

// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$("li[onclick^='location']").each(function(idx, e) {
	li = $(e);
	url = li.attr("onclick").split("'")[1];
	li.wrap("<a href='" + url + "'></a>");
    li.attr("onclick", "");
});

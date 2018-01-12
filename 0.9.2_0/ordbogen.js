// Copyright (c) 2013 lobner of lobner.dk
// Use of this source code is governed by a GPL license


chrome.contextMenus.create({
    title:"Ordbogen.com: '%s'",
    contexts: ["selection"], 
    "onclick": getClickHandler()
});

/**
 * Returns a handler which will open a new window when activated.
 */
function getClickHandler() {
  return function(info, tab) {

    // The srcUrl property is only available for image elements.
    var url = 'https://www.ordbogen.com/opslag.php?dict=auto&word=' + info.selectionText;

    // Create a new window to the info page.
    chrome.tabs.create({ url: url, index: tab.index+1 });
  };
};

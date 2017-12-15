'use strict';

window.addEventListener('load', () => {
  console.log("index.js loaded");

  let h1 = document.createElement('h1');
  let msg = document.createTextNode('這是 <h1> 的文字訊息');

  h1.appendChild(msg);

  document.body.appendChild(h1);
});

// index.js

const electron = require('electron');

var loglines = [];

electron.ipcRenderer.on('log', (event, msg) => {
	var d = new Date();
	loglines.unshift(d.toISOString()+' <span>['+msg[0]+']</span> '+msg[1]);

	if (loglines.length > 100) loglines.pop();

	document.getElementById('log').innerHTML=loglines.join('<br/>');
});


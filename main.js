const {app, BrowserWindow} = require("electron");

function createWindow(){
    const window = new BrowserWindow({
        width: 214,
        height: 228,
        resizable: false, // gw mo coba ganti jd true
        maximizable: false,
        fullscreenable: false,
        frame: false,
        transparent: false,
        webPreferences:{
            contextIsolation: true
        }
    });

    window.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
});

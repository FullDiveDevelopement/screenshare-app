const { app, BrowserWindow, desktopCapturer, ipcMain } = require('electron');


const createWindow = async () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        darkTheme: true,
        thickFrame: true,
        resizable: true,
        roundedCorners: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        },
    });

    // win.webContents.openDevTools();

    await win.loadURL('https://screen.nko.sh');
};

app.whenReady()
    .then(async () => {
        ipcMain.on('get-sources', async (event) => {
            const sources = await desktopCapturer.getSources({ types: ['window', 'screen'] });
            event.sender.send('sources', JSON.stringify(sources));
        });

        await createWindow();
    });

const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const NodeID3 = require('node-id3')
const jsmediatags = require('jsmediatags');

const isDev = !app.isPackaged
let win;
function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            enableRemoteModule: false,
            contextIsolation: true,
            allowRunningInsecureContent: false,
            preload: path.join(app.getAppPath(), './preload.js')
        }
    })

    win.loadFile('index.html')

    ipcMain.handle('setFullscreen', (event, flag) => {
        if (win) {
            win.setFullScreen(flag)
        }
    })

    ipcMain.on('notify', (_, message) => {
        new Notification({ title: 'Notification', body: message }).show()
    })

    /*
    This function grabs all files being uploaded from main dropzone 
    Expecting: metadata
    */
    ipcMain.handle("fetch-audio-files", (event, args) => {
        const getFiles = args.map((file) => {
            return new Promise((resolve, reject) => {
                new jsmediatags.Reader(file.path)
                    .setTagsToRead(['title', 'artist', 'album', 'size', 'year', 'comment', 'genre', 'picture'])
                    .read({
                        onSuccess: function (tag) {
                            const tags = tag.tags;
                            tags['path'] = file.path
                            tags['id'] = file.id
                            tags['size'] = file.size
                            tags['type'] = file.type
                            resolve(tags)
                        },
                        onError: function (error) {
                            console.log(':(', error.type, error.info);
                        }
                    });
            })
        })
        return Promise.all(getFiles)
    });

    ipcMain.handle("update-audio-files", (event, args) => {
        console.log(args)
    })
}

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron ')
    })
}

app.whenReady().then(createWindow)
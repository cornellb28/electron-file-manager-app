const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('app', {
    setFullscreenApi: {
        setScreenSize(flag) {
            return ipcRenderer.invoke('setFullscreen', flag)
        }
    },
    notificationApi: {
        sendNotification(message) {
            ipcRenderer.send('notify', message)
        }
    },
    filesApi: {
        sendFiles(files) {
            return ipcRenderer.invoke("fetch-audio-files", files)
        },

        updateFiles(data) {
            return ipcRenderer.invoke("update-audio-files", data)
        }
    }
})

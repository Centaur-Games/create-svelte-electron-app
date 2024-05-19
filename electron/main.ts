import { app, BrowserWindow } from 'electron'
import serve from "electron-serve"

const loadURL = serve({directory:"build", file:"app"})

app.whenReady().then(() => {
  const win = new BrowserWindow({
    title: 'Main window',
  })

  // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    loadURL(win)
  }
})

import express, { Application } from 'express'

import router from './routes'

const app: Application = express()
const port = 3333

app.use("/api", router)

app.listen(port, () => {
  console.log(`TypeScript with Express *:${port}`)
})
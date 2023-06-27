import express from "express"
const router = express.Router()

import healthz from './healthz'

router.use('/healthz', healthz)

export default router
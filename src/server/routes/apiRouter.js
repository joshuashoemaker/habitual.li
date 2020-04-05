import express from 'express'
import habitRouter from './habbitRouter'

const router = express.Router()

router.use('/habit', habitRouter)

export default router
const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');
/**
 * @swagger
 * /api/send-email:
 *   post:
 *     summary: Send an email
 *     description: Send an email using the specified SMTP configuration and email details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               smtpHost:
 *                 type: string
 *               smtpPort:
 *                 type: integer
 *               smtpUser:
 *                 type: string
 *               smtpPass:
 *                 type: string
 *               to:
 *                 type: string
 *               subject:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Email sent successfully
 *       500:
 *         description: Error sending email
 */
router.post('/send-email', emailController.sendEmail);

module.exports = router;

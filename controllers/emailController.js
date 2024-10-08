const nodemailer = require('nodemailer');

const emailController = {
    sendEmail: (req, res) => {
        const { smtpHost, smtpPort, smtpUser, smtpPass, to, from, subject, text } = req.body;

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: (smtpPort === 465),
            auth: {
                user: smtpUser,
                pass: smtpPass
            },
            tls: {
                ciphers: 'TLSv1.2'
            }
        });

        const mailOptions = {
            from,
            to,
            subject,
            html : text
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send(error.toString());
            }
            res.status(200).json({
                message: 'Email sent: ' + info.response
            });
        });
    }
};

module.exports = emailController;

const nodemailer = require('nodemailer');

const emailController = {
    sendEmail: (req, res) => {
        const { smtpHost, smtpPort, smtpUser, smtpPass, to, subject, text } = req.body;

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: (smtpPort === 465),
            auth: {
                user: smtpUser,
                pass: smtpPass
            }
        });

        const mailOptions = {
            from: smtpUser,
            to,
            subject,
            html : text
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send(error.toString());
            }
            res.status(200).send('Email sent: ' + info.response);
        });
    }
};

module.exports = emailController;

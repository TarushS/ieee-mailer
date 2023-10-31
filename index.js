const fs = require('fs');
const nodemailer = require('nodemailer');

const recipients = fs.readFileSync('recipient-list.txt', 'utf8').split('\n').map(email => email.trim());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'tarush@ieee.org',
    pass: ''
  }
});

const customhtml = fs.readFileSync('mail.html', 'utf8');

const mailOptions = {
  from: 'IEEE-DTU <tarush@ieee.org>',
  subject: 'TECHWEEK 23',
  html: customhtml
};

recipients.forEach(recipient => {
  mailOptions.to = recipient;

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(`Failed to send email to ${recipient}: ${error.message}`);
    } else {
      console.log(`Email sent to ${recipient}: ${info.response}`);
    }
  });
});

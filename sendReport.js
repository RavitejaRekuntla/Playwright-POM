const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

async function sendReport() {
  let transporter = nodemailer.createTransport({
    service: 'gmail', // or your email provider
    auth: {
      user: 'ravitejarekuntla9@gmail.com',
      pass: 'slzw_zwjt_vrkf_rokm',
    },
  });
  

  let reportPath = path.join(__dirname, 'playwright-report', 'index.html'); // example path to html report
  let reportContent = fs.readFileSync(reportPath, { encoding: 'utf-8' });

  let mailOptions = {
    from: 'ravitejarekuntla9@gmail.com',
    to: 'raviteja.rekuntla@b2btesters.com',
    subject: 'Playwright Test Report',
    html: reportContent,
    // alternatively, send as attachment:
    // attachments: [{ filename: 'report.html', path: reportPath }],
  };

  let info = await transporter.sendMail(mailOptions);
  console.log('Report sent: %s', info.messageId);
}

sendReport().catch(console.error);

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'abc@outlook.com',
    pass: 'xyz'
  }
});

var mailOptions = {
  from: 'abc@outlook.com',
  to: 'ABC@gmail.com',
  subject: 'Sending Email using Node.js',
  //text: 'That was easy!'
  html: '<h1>Hi this is my first mail using node.js</h1><br><h3>How was it?</h3>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

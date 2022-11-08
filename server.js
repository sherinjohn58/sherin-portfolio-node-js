const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
// var emailjs = require('emailjs-com');

const port = process.env.PORT || 3000;
app.use('/assets',express.static('src/assets'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.locals.msg = '';
    next();
  });

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'src/index.html'))
})
app.get('/index.html', function(req,res){
  res.sendFile(path.join(__dirname,'src/index.html'))
})
// app.post('/send', (req, res) => {
//     let output = `
//       <h1>New Email!</h1>
//        <ul>
//          <li>Name: ${req.body.name}</li>
//          <li>Email: ${req.body.email}</li>
//          <li>Subject: ${req.body.subject}</li>
//          <li>Message: ${req.body.message}</li>
//        </ul>
//     `;
  

//     var templateParams = {
//       Name: 'sherin'
//       // ,
//       // Email: `${req.body.email}`,
//       // Subject: `${req.body.subject}`,
//       // Message: `${req.body.message}`
//   };
   
//   emailjs.send('', '', templateParams)
//       .then(function(response) {
//          console.log('SUCCESS!', response.status, response.text);
//       }, function(error) {
//          console.log('FAILED...', error);
//       });
    

//     //   // create reusable transporter object using the default SMTP transport
//     // let transporter = nodemailer.createTransport({
//     //   service: 'gmail',
//     //   host: 'smtp.gmail.com',
//     //   port: 587,
//     //   secure: true,
//     //   auth: {
//     //       user: '',
//     //       pass: ''
//     //   },
//     //   tls:{
//     //     rejectUnauthorized:false
//     //   }
//     // });
  
//     // // setup email data with unicode symbols
//     // let mailOptions = {
//     //     from: '"Nodemailer Contact" ', // sender address
//     //     to: '', // list of receivers
//     //     subject: 'Node Contact Request', // Subject line
//     //     text: 'Hello world?', // plain text body
//     //     html: output // html body
//     // };
  
//     // // send mail with defined transport object
//     // transporter.sendMail(mailOptions, (error, info) => {
//     //     if (error) {
//     //         return console.log(error);
//     //     }
//     //     console.log('Message sent: %s', info.messageId);
//     //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
//     //     res.render('contact', {msg:'Email has been sent'});
//     // });
//   });

app.listen(port);
console.log("Server Connected");
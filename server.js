const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Store driver's location in memory
let driverLocation = { latitude: null, longitude: null };

// ================================
// Route to Send Email Notification
// ================================

app.post('/send-email', (req, res) => {
  const { name, pickupLocation, phoneNumber, date, time } = req.body;

  if (!name || !pickupLocation) {
    return res.status(400).send('Navn og afhentningssted er påkrævet');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'your-email@here',
    subject: 'Ny Bestilling',
    text: `Der er lavet en ny bestilling.\n\nNavn: ${name}\nAfhentningssted: ${pickupLocation}\nTelefonnummer: ${phoneNumber}\nAfhentningsdato: ${date}\nAfhentningstidspunkt: ${time}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Fejl ved afsendelse af e-mail:', error);
      res.status(500).send('Fejl ved afsendelse af e-mail');
    } else {
      console.log('E-mail sendt:', info.response);
      res.status(200).send('E-mail sendt succesfuldt');
    }
  });
});

// =======================================
// Route for Driver to Update Their Location
// =======================================

app.post('/update-location', (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).send('Latitude and longitude are required');
  }

  driverLocation = { latitude, longitude };
  console.log('Driver location updated:', driverLocation);  // Make sure it's logging correctly
  res.status(200).send('Location updated successfully');
});

app.get('/get-driver-location', (req, res) => {
  if (!driverLocation.latitude || !driverLocation.longitude) {
    return res.status(404).send('Driver location not available');
  }
  res.json(driverLocation);  // Send the latest location as a JSON response
});


// =======================================
// Start the Server
// =======================================

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

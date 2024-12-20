# book-pickup
Small project i did for fun... 


# Booking System 

Dette projekt er et simpelt bookingsystem til flextrafik, hvor brugere kan udfylde en formular og sende en e-mail med deres bookingdetaljer.

## Funktionalitet

- Brugere udfylder en formular med oplysninger som navn, afhentningssted, telefonnummer, dato og tidspunkt.
- Formularen sender data til en Node.js-server via en HTTP POST-request.
- Serveren bruger **Nodemailer** til at sende en e-mail med bookingdetaljerne til en modtager.

## Teknologier

- **Frontend**: HTML, CSS, JavaScript.
- **Backend**: Node.js, Express, Nodemailer.
- **Afhængigheder**: body-parser, nodemailer, dotenv.

## Installation

1. **npm install**
2. **dnf -y install nginx**
3. **Klon projektet**:
   ```bash
   git clone <repository-url>
   cd <projekt-mappe>

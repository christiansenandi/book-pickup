# pickup-booking written in HTML and JavaScript
Small project i did for fun... was more to prove i could get it done

# Free to use...

- Skrevet af Andi Nør Christiansen.

# Booking System 

Dette projekt er et simpelt bookingsystem til at booke en chauffør, hvor brugere kan udfylde en formular og sende en e-mail med deres bookingdetaljer.

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
4. **placer html filer i /usr/shared/nginx/html/ hvis du bruger nginx og genstart servicen**
5. **Start serveren (evt i tmux, screen etc.. den kører i prompt)**
  ```bash
   node server.js
  ```
## BUGS

1. opdateringen af chauffør lokation til tracking siden er ikke fantastisk pålidelig... hvis overhovedet...

# Filmvisarna

This project is a fork of the original repository, which can be found [here](https://github.com/BobbyMoreau/Filmvisarna).

## Group Collaboration

This project represents a collaborative effort undertaken by a group of students, including myself and six other members of our class. Embracing agile methodologies, we worked collectively to address the requirements presented by Filmvisarna AB for their cinema website.

## Project Overview

Filmvisarna AB is a small cinema chain aiming to compete locally with SF, a larger cinema chain. The company has secured rights to showcase a variety of film titles and currently operates several cinema halls in Småstad.

The primary goal of this project is to build the initial version of their website, allowing visitors to:

- Obtain information about movies, including dates and showtimes.
- Watch trailers for the movies.
- Book cinema tickets online, with details such as total price, seat locations (row and seat number), and booking number.

Filmvisarna AB also desires a booking system featuring a graphical representation of cinema halls and seats, enabling users to reserve adjacent seats for their group during a specific movie showing. Initially, the system should highlight the best-remaining seats, but users should have the flexibility to modify their selection.

## Project Features

The following features are outlined based on the product owner's user stories:

1. **Movie Information:**
   - View details about movies, including dates and times.
   - Watch trailers for each film.

2. **Online Booking:**
   - Reserve cinema tickets online.
   - Select the number of visitors and view the total price.
   - Receive a unique, hard-to-guess booking number.
   - See selected seat numbers, film details, and date/time in the booking confirmation.

3. **Booking System:**
   - Choose adjacent seats for a specific movie showing.
   - Dynamically mark the best remaining seats.
   - Change seat selection during the booking process.

4. **Price Variation:**
   - Implement different ticket prices for normal, senior, and child tickets.

5. **Filtering and Sorting:**
   - Filter movie showings by date.
   - Filter movies based on age restrictions.

6. **User Account Management:**
   - Register a new account.
   - Log in to access user-specific features.
   - View booking history.

7. **Security Measures:**
   - Ensure secure storage of user passwords in the database.
   - Implement safeguards against XSS and database injection attacks.
   - Generate hard-to-guess booking numbers.

### Agile Approach

We followed an agile methodology throughout the project, emphasizing the following practices:

- Planning tasks for one sprint at a time.
- Regular meetings with the product owner to ensure alignment with project goals.
- Utilization of poker planning for task estimation.
- Maintenance and updating of a SCRUM board for effective tracking.
- Commencing each sprint with a standing SCRUM meeting.
- Employing pair programming to enhance knowledge distribution and solve complex issues.
- Conducting retrospective meetings after each sprint.

### Group Size

Our team consisted of seven members, each contributing to different aspects of the project, including frontend and backend development, user interface design, and database management.

## Evaluation Criteria

### For Acceptance:

- Successful implementation of core functionalities based on user stories.
- Adherence to agile methodologies and practices outlined in the "Agile Moments" section.
- Continuous integration of code into the Git repository.
- Delivery of a functional web application with consistent and well-functioning interfaces.

### For High Distinction:

- Functionality closely aligns with the product owner's vision.
- Intuitive and easily understandable user interface.
- Exceptional performance and usability of the application.
- Consistent and well-thought-out design of the user interface.

## Technical Choices

### Backend:

- Node.js
- REST API
- MySQL 

### Frontend:

- React.js
- Bootstrap

## Project Timeline

### Sprint 1: 2 weeks / 10 working days
- Sprint Start: 09/22/2023 
- Sprint Presentation: 10/06/2023

### Sprint 2: 3 weeks / 15 working days
- Sprint Start: 10/06/2023
- Sprint Presentation: 10/27/2023



---

To run the project:

1. Start the project and go to the frontend folder
   
    ```bash
    cd frontend
    ```
2. Install npm                                 

    ```bash
    npm install
    ```
3. Run the project

     ```bash
    npm run dev
    ```                          

# Clarus Hospital Appointment App

It is a React-based web application for managing doctor appointments. Users can view doctors, book appointments, and mark consultations as complete. It is designed to streamline the appointment booking process with an intuitive and interactive interface.

---

## Features

* **Doctor List:** View all available doctors, each categorized by their department.
* **Appointment Booking:** Book an appointment by clicking on a doctor's image and filling out the form.
* **Appointment Management:**

  * Mark appointments as "Consulted" by clicking on them.
  * Delete appointments using a delete button.
* **Dynamic Feedback:** If there are no appointments, a placeholder image is displayed.
* **Interactive UI:** Hover effects and visual feedback to enhance user experience.

---
## Preview

![doctor_appointment](https://github.com/user-attachments/assets/2e4e2ade-4677-4b08-848d-ba4aeadc375b)

---

## Technologies Used

* **React:** Frontend framework for building components.
* **React Bootstrap:** For responsive layout and styling.
* **CSS:** Additional styling for custom elements.
* **React Icons:** For interactive icons like delete buttons.

---

## Components Overview

### **App.jsx**

* Root component of the app.
* Renders the `Home` component.

### **Home.jsx**

* Main page of the application.
* Manages the list of appointments and conditionally displays the doctor list or appointments.

### **Doctors.jsx**

* Displays a grid of doctors using the `DoctorCard` component.

### **DoctorCard.jsx**

* Displays individual doctor information.
* Opens a modal (`AddModal`) for booking an appointment when the doctor's image is clicked.

### **AddModal.jsx**

* A modal form for adding new appointments.
* Takes patient name and appointment date/time as inputs.

### **AppointmentList.jsx**

* Displays a list of appointments.
* Allows marking appointments as consulted or deleting them.

---

## Styling and Interactions

* **CSS Customizations:**

  * Hover effects for doctor images.
  * Gradients and shadows for the appointment containers.
  * Custom styles for consulted appointments, including a "CONSULTED" badge.
* **Dynamic Classes:**
  * Appointments marked as "consulted" are styled differently using a conditional class.

---

## Folder Structure

```plaintext
src/
├── components/
│   ├── Doctors.jsx         # Renders the list of doctors
│   ├── DoctorCard.jsx      # Displays individual doctor cards
│   ├── AddModal.jsx        # Form for adding appointments
│   └── AppointmentList.jsx # Renders the list of appointments
├── helpers/
│   └── Data.js             # Contains sample data for doctors and appointments
├── pages/
│   └── Home.jsx            # Main home page component
├── App.jsx                 # Root app component
├── App.css                 # Global styles
└── index.js                # Entry point of the application
```

---


## Future Enhancements

* **Doctor Search:** Add functionality to search for doctors by name or department.
* **Filter Appointments:** Filter appointments based on date, doctor, or status.
* **Backend Integration:** Store and retrieve appointment data from a database.

---

## Acknowledgments

* **React Bootstrap:** For styling and responsive layout components.


# Student Enrollment Form

## Overview

The Student Enrollment Form is a micro-project developed using Bootstrap 5 and JSONPowerDB (JPDB). The application allows users to store, retrieve, and update student records in the STUDENT-TABLE relation of the SCHOOL-DB database.

The project follows a primary-key-based workflow where the Roll Number uniquely identifies each student record. Based on whether the Roll Number exists in the database, the form automatically switches between Save and Update modes.

---

## Tech Stack

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* JSONPowerDB (JPDB)

---

## Database Details

**Database Name:** SCHOOL-DB

**Relation Name:** STUDENT-TABLE

### Fields

* Roll-No (Primary Key)
* Full-Name
* Class
* Birth-Date
* Address
* Enrollment-Date

---

## Features

* Primary key validation using Roll-No
* Automatic record retrieval for existing entries
* Save functionality for new records
* Update functionality for existing records
* Form reset functionality
* Input validation to prevent empty fields
* Automatic enabling and disabling of fields and buttons
* Direct integration with JSONPowerDB

---

## Workflow

### New Record

1. Enter a Roll-No.
2. If the Roll-No does not exist, remaining fields become active.
3. Fill in the details and click **Save**.
4. The record is stored in the database and the form resets.

### Existing Record

1. Enter an existing Roll-No.
2. The record is fetched automatically.
3. Modify the required fields and click **Update**.
4. The updated information is saved and the form resets.

---

## Project Structure

```text
Student-Enrollment-Form/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Version

**v1.0.0**

Student Enrollment Form with CRUD operations using JSONPowerDB and automated form state management.

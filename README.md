# Student Enrollment Form

## Overview

The Student Enrollment Form is a frontend-based micro-project developed using JSONPowerDB (JPDB). The application enables users to create, retrieve, and update student records stored in the STUDENT-TABLE relation of the SCHOOL-DB database.

The project follows a primary-key-driven workflow where the Roll Number acts as the unique identifier for each student record. Depending on whether the entered Roll Number already exists in the database, the system automatically switches between record creation and record update modes.

---

## Technology Stack

* HTML5
* CSS3
* JavaScript (ES6)
* Bootstrap 5
* JSONPowerDB (JPDB)

---

## Database Details

### Database Name

SCHOOL-DB

### Relation Name

STUDENT-TABLE

### Fields

| Field Name      | Description         |
| --------------- | ------------------- |
| Roll-No         | Primary Key         |
| Full-Name       | Student Name        |
| Class           | Student Class       |
| Birth-Date      | Date of Birth       |
| Address         | Residential Address |
| Enrollment-Date | Date of Enrollment  |

---

## User Interface Layout

```text
┌──────────────────────────────────────────────┐
│            Student Enrollment Form           │
├──────────────────────────────────────────────┤
│ Roll No           [______________]           │
│ Full Name         [______________]           │
│ Class             [______________]           │
│ Birth Date        [______________]           │
│ Address           [______________]           │
│ Enrollment Date   [______________]           │
├──────────────────────────────────────────────┤
│      [ Save ] [ Update ] [ Reset ]           │
└──────────────────────────────────────────────┘
```

---

## Application Workflow

### Initial State

When the application loads:

* Only Roll-No field is enabled.
* Cursor automatically focuses on Roll-No.
* All other fields remain disabled.
* Save button is disabled.
* Update button is disabled.
* Reset button is disabled.
* Form remains empty.

---

### New Record Flow

When a Roll-No is entered and does not exist in the database:

1. System checks the database.
2. Remaining fields become enabled.
3. Cursor moves to Full-Name.
4. Save button becomes active.
5. Reset button becomes active.
6. Update button remains disabled.

After entering all details:

1. User clicks Save.
2. Record is inserted into STUDENT-TABLE.
3. Success message is displayed.
4. Form resets to its initial state.

---

### Existing Record Flow

When a Roll-No already exists in the database:

1. Record is fetched automatically.
2. All fields are populated.
3. Roll-No field becomes disabled.
4. Update button becomes active.
5. Reset button becomes active.
6. Save button remains disabled.
7. Cursor moves to Full-Name.

After modifying the record:

1. User clicks Update.
2. Existing record is updated.
3. Success message is displayed.
4. Form resets to its initial state.

---

## Validation Rules

The application performs validation before Save and Update operations.

Validation checks include:

* No field can remain empty.
* Leading and trailing spaces are removed before validation.
* Invalid submissions are blocked.
* Focus automatically shifts to the first invalid field.

---

## Reset Functionality

When Reset is clicked:

* All fields are cleared.
* Roll-No field becomes enabled.
* Remaining fields become disabled.
* Save button becomes disabled.
* Update button becomes disabled.
* Reset button becomes disabled.
* Cursor returns to Roll-No.

---

## Functional Modules

The project is structured around the following JavaScript functions:

### resetForm()

Resets the form to its default state and clears all data.

### validateData()

Validates user input before database operations.

### getStudent()

Checks whether a Roll-No exists and fetches corresponding data.

### saveStudent()

Stores a new student record in the database.

### updateStudent()

Updates an existing student record.

### enableDataFields()

Enables all fields except the primary key when appropriate.

### disableDataFields()

Disables all data entry fields except Roll-No.

---

## JSONPowerDB Integration

The project uses JSONPowerDB APIs for:

* Primary key lookup
* Record retrieval
* Record insertion
* Record update

Database operations are executed directly from the frontend through JPDB REST APIs, eliminating the need for a separate backend server.

---

## Advantages of JSONPowerDB

* Fast and lightweight NoSQL database.
* Simple REST API integration.
* Serverless architecture.
* JSON-based data storage.
* High-performance indexing.
* Minimal deployment overhead.
* Easy CRUD operations.

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

## Execution Example

### Creating a New Record

1. Enter a new Roll-No.
2. Complete all student details.
3. Click Save.
4. Record is stored successfully.
5. Form resets automatically.

### Updating an Existing Record

1. Enter an existing Roll-No.
2. Existing data is loaded automatically.
3. Modify required fields.
4. Click Update.
5. Changes are saved successfully.
6. Form resets automatically.

---

## Version

Current Release: v1.0.0

### Features Included

* Student Enrollment Form
* Primary Key Validation
* Automatic Record Retrieval
* Save Functionality
* Update Functionality
* Reset Functionality
* Field Validation
* JSONPowerDB Integration
* Automated Form State Management
* Cursor Focus Control

---

## Author

Developed as a Micro Project for demonstrating CRUD operations using JSONPowerDB and modern frontend web technologies.

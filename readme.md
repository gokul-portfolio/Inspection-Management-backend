Audit & Inspection Management Platform
Project Overview
The Audit & Inspection Management Platform is a web-based application designed to simplify inspection processes, checklist management, and corrective action tracking within organizations.
The system enables users to create inspection templates, manage dynamic questions, conduct inspections, and track corrective actions through a centralized dashboard.

Demo Credentials
The following credentials can be used to access the application for demonstration and evaluation purposes.
Email:
gokul@gmail.com
Password:
123456
Key Features
Module 1 – Checklist & Form Builder
The Checklist & Form Builder module allows administrators to:
Create inspection templates
Add dynamic inspection questions
Support multiple question types
Manage templates efficiently
View and edit templates
Store templates in the database
Supported Question Types
Text
Yes / No
Number
Dropdown

Module 2 – Corrective Action Management
The Corrective Action module allows users to:
Create corrective action items
Assign priorities
Set due dates
Update workflow status
Track action progress
Monitor completion percentage
View actions through dashboard
Supported Statuses
Open
In Progress
Completed

Authentication & Authorization
The application implements secure authentication using JWT (JSON Web Token).
Authentication Features
User Registration
User Login
JWT Authentication
Password Encryption using bcrypt
Protected Routes
Session Management
Role-Based Authorization

Login Flow
User enters email and password.
Backend validates credentials.
Password is verified using bcrypt.
JWT token is generated.
Token is returned to the frontend.
Frontend stores the token.
Protected APIs require a valid token.
Unauthorized users are denied access.

Technology Stack
Frontend
React.js
React Router DOM
Bootstrap 5
Axios
React Icons
Apex Charts
Backend
Node.js
Express.js
Database
PostgreSQL / MySQL
Authentication
JWT Authentication
bcrypt Password Hashing

System Architecture
Frontend Layer (React.js)
↓
REST API Layer (Node.js + Express.js)
↓
Database Layer (PostgreSQL / MySQL)
The frontend communicates with backend REST APIs, while business logic is handled through controllers and service layers.

Database Design
Users Table
Column
Type
id
Integer
name
Varchar
email
Varchar
password
Varchar
role
Varchar
created_at
Timestamp


Templates Table
Column
Type
id
Integer
name
Varchar
description
Text
created_at
Timestamp


Questions Table
Column
Type
id
Integer
template_id
Integer
question
Text
question_type
Varchar
created_at
Timestamp

Relationship
One Template → Many Questions

Corrective Actions Table
Column
Type
id
Integer
title
Varchar
description
Text
priority
Varchar
status
Varchar
due_date
Date
assigned_to
Varchar
created_at
Timestamp


API Endpoints
Authentication APIs
POST /api/auth/register
POST /api/auth/login
GET /api/auth/me
POST /api/auth/logout

Template APIs
POST /api/templates
GET /api/templates
GET /api/templates/:id
PUT /api/templates/:id
DELETE /api/templates/:id

Question APIs
POST /api/questions
GET /api/questions
PUT /api/questions/:id
DELETE /api/questions/:id

Corrective Action APIs
POST /api/corrective-actions
GET /api/corrective-actions
GET /api/corrective-actions/:id
PUT /api/corrective-actions/:id
DELETE /api/corrective-actions/:id

Dashboard
The dashboard provides real-time insights including:
Total Templates
Total Questions
Total Corrective Actions
Open Actions
Completed Actions
Completion Percentage
Analytics Charts

Security Measures
Password Hashing
Passwords are encrypted using bcrypt before storing in the database.
JWT Authentication
Every authenticated user receives a JWT token.
Example:
Authorization: Bearer <JWT_TOKEN>
Route Protection
Protected routes require valid JWT authentication.
Error Handling
The application handles:
Invalid Credentials
Expired Tokens
Unauthorized Access
Missing Tokens
API Validation Errors

Installation Guide
Clone Repository
git clone

Backend Setup
cd server
npm install
npm run dev

Frontend Setup
cd client
npm install
npm run dev

Environment Configuration
Create a .env file inside the backend project directory and add the following configuration:
PORT=5000
DATABASE_URL="postgresql://postgres:123456@localhost:5432/audit_management"
JWT_SECRET="your_jwt_secret_key"
Configuration Details
PORT
Application server port number.
DATABASE_URL
PostgreSQL database connection string.
Database Name: audit_management
Username: postgres
Port: 5432
JWT_SECRET
Secret key used for JWT token generation and validation.


Scalability Considerations
The application follows enterprise-level architecture practices.
Implemented strategies:
Modular Folder Structure
RESTful API Design
Service Layer Architecture
Database Normalization
Reusable React Components
Environment-Based Configuration
Input Validation
Centralized Error Handling

Future Enhancements
Email Notifications
Audit Scheduling
File Upload Support
Role-Based Access Control Enhancements
PDF Report Export
Advanced Dashboard Analytics
Real-Time Notifications
Activity Logs
Multi-Tenant Support

Conclusion
The Audit & Inspection Management Platform provides a scalable, maintainable, and production-oriented solution for managing inspections, checklists, and corrective actions.
The application follows modern software engineering practices including modular architecture, secure authentication, RESTful APIs, and responsive user interface design, making it suitable for enterprise-level deployment and future enhancements.



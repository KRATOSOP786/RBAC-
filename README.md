#Role-Based Access Control (RBAC) Model for E-commerce Portal#
This repository contains a Role-Based Access Control (RBAC) system that manages user roles and permissions in an e-commerce platform. The model is designed to ensure that users have the appropriate level of access based on their role, providing secure and efficient management of the portal’s resources.

#Features
Role-Based Access: Differentiates users based on roles like Admin, Seller, Buyer, and Premium.
Dynamic Permissions: Permissions and UI elements change based on user role (e.g., Buyer's view-only access, Admin's full access).
API Endpoints: Secure APIs for registration, login, profile management, and access control.
Role-Specific Navigation: Frontend UI dynamically adjusts navbar components and colors based on user role.
#Technologies Used
Backend: Node.js, Express.js
Database: MongoDB (for storing user roles and data)
Frontend: React.js (for dynamic navbar and user interface)
Authentication: JWT (JSON Web Tokens) for secure session management
Authorization: Role-based access control system

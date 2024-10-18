Ticket Management Application

Description
A simple Ticket Management Application built with Angular for the frontend and ASP.NET Core for the backend, allowing users to manage tickets with CRUD operations.

Prerequisites
- Node.js (LTS version)
- Angular CLI (install globally using: npm install -g @angular/cli)
- .NET SDK (version 8.0 or higher)
- SQL Server

Setup Instructions

1. Clone the Repository

2. Backend Setup
   a. Navigate to the backend directory:
      cd TicketManagementBackend

   b. Restore NuGet packages:
      dotnet restore

   c. Configure the database connection in appsettings.json(Sql Server).

   d. Run migrations to create the database:
      dotnet ef database update

   e. Start the backend(im using HTTP):
      dotnet run

3. Frontend Setup
   a. Navigate to the frontend directory:
      cd ../TicketManagementFrontend

   b. Install npm dependencies:
      npm install

   c. Start the Angular application:
      ng serve

   d. Access the application in your browser at http://localhost:4200.

Usage
- Use the Add Ticket button to create new tickets.
- View, edit, and delete existing tickets in the table.
- Pagination / Sorting is also included.



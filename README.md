# assessment
beer assessment

To run this application, the backend and front end need to both run locally.

The backend service requires that the following be installed:
  1. .NET 6 SDK( https://dotnet.microsoft.com/download/dotnet/6.0)
  2. Swashbuckle.AspNetCore (dotnet add package Swashbuckle.AspNetCore in terminal).

The frontend service requires that the following be installed:
  1. npm v8.11.0 or later
  2. node v16.16 or later
  3. react-scripts (npm install react-scripts)

The backend is configured to run on https://localhost:7104

The frontend is configured to run on https://localhost:3000. This addresss is allowed with CORS. If the frontend is running on another port, update the line 'builder.WithOrigins("http://localhost:3000") from '3000' to the correct port number in the backend/assessment/Properties/launchSettings.json file

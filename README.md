# Job Scheduler Application

A real-time job scheduler application that enables users to submit jobs, view their statuses, and manage them in a live-updating interface. Built with a Spring Boot backend and a React frontend.

## Getting Started

### Prerequisites

Ensure the following are installed:
- **Java 17** or later
- **Node.js** (14.x or later) and **npm**
  
---

### Run the Backend

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/sghosh116611/Apica.git
   cd Backend/JobSchedular/

2. **Build the Project**  
   ```bash
   mvn clean install

3. **Run the Project**  
   ```bash
   mvn spring-boot:run

4. **Verify the backend**  
   The backend should be running at http://localhost:8081.

### Run the Frontend

Navigate to the Frontend Directory

1. **Navigate to the Frontend Directory**  
   ```bash
   cd Frontend/job-scheduler/

2. **Install Dependencies**  
   ```bash
   npm install

3. **Run the Frontend**  
   ```bash
   npm start

4. **Verify the frontend**  
   The frontend should be running at http://localhost:3000.


# Design Choices

### Backend:

Used Spring Boot for REST API and WebSocket support to handle real-time updates.
Job Scheduler Service separates business logic from the WebSocket implementation.
Priority Queue for implementing the Shortest Job First (SJF) algorithm.

### Frontend:

1. Designed using React for component-based structure and reusability.
2. Styled with Material-UI for a clean and responsive interface.
3. Real-time updates handled using WebSocket listeners to maintain a dynamic user experience.

#### Real-time Updates:

Leveraged WebSocket for broadcasting job status changes (e.g., PENDING, ACTIVE, TERMINATED).
Implemented a thread in the backend to simulate job execution, updating statuses automatically.

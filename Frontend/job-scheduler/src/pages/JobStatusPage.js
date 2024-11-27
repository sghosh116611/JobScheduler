import React, { useState, useEffect } from "react";
import JobList from "../components/JobList";
import api from "../api/axiosConfig";

const JobStatusPage = () => {
  const [jobs, setJobs] = useState([]);

  const statusOrder = {
    PENDING: 1,
    ACTIVE: 2,
    TERMINATED: 3,
  };

  const sortJobs = (jobs) => {
    return jobs.sort((a, b) => {
      if (statusOrder[a.status] !== statusOrder[b.status]) {
        return statusOrder[a.status] - statusOrder[b.status];
      }
      return a.name.localeCompare(b.name);
    });
  };

  useEffect(() => {
    // Fetching initial jobs
    api.get("/jobs")
      .then((response) => {
        const sortedJobs = sortJobs(response.data); // Sort the jobs after fetching
        setJobs(sortedJobs);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });

    // Establishing WebSocket connection
    const socket = new WebSocket("ws://localhost:8081/ws");

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("Received message:", message);

      // Update job status
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job.name === message.name ? { ...job, status: message.status } : job
        )
      );
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => socket.close();
  }, []);

  return <JobList jobs={jobs} />;
};

export default JobStatusPage;

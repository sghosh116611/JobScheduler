import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Box } from "@mui/material";

const JobList = ({ jobs }) => (
  <Box sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
    <Typography variant="h5" gutterBottom>
      Job Status
    </Typography>
    {jobs.length === 0 ? (
      <Typography>No jobs available</Typography>
    ) : (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Duration (seconds)</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job, index) => (
            <TableRow key={index}>
              <TableCell>{job.name}</TableCell>
              <TableCell>{job.duration}</TableCell>
              <TableCell>{job.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )}
  </Box>
);

export default JobList;

import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import api from "../api/axiosConfig";

const JobForm = () => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [errors, setErrors] = useState({ name: "", duration: "" });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", duration: "" };

    if (!name.trim()) {
      newErrors.name = "Job name is required.";
      valid = false;
    }

    if (!duration || duration <= 0) {
      newErrors.duration = "Duration must be a positive number.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmitJob = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true); // Start the loader
    try {
      await api.post("/jobs", { name, duration });
      setName("");
      setDuration("");
      setErrors({ name: "", duration: "" });
      setSnackbar({
        open: true,
        message: "Job submitted successfully!",
        severity: "success",
      });
    } catch (error) {
      console.error("Error submitting job:", error);
      setSnackbar({
        open: true,
        message: "Failed to submit the job.",
        severity: "error",
      });
    } finally {
      setLoading(false); // Stop the loader
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmitJob}
      sx={{ maxWidth: 400, margin: "auto", mt: 4 }}
    >
      <Typography variant="h5" gutterBottom>
        Submit a Job
      </Typography>
      <TextField
        fullWidth
        label="Job Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        required
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        fullWidth
        label="Duration (in seconds)"
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        margin="normal"
        required
        error={!!errors.duration}
        helperText={errors.duration}
      />
      <Box sx={{ position: "relative", mt: 2 }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          Submit Job
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default JobForm;

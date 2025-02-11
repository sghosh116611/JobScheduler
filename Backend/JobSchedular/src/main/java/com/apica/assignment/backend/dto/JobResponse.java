package com.apica.assignment.backend.dto;

import com.apica.assignment.backend.constant.JobStatus;
import com.apica.assignment.backend.model.Job;

public class JobResponse {
	private String name; // Job Name
	private long duration; // Duration in seconds
	private JobStatus status; // PENDING, ACTIVE, TERMINATED

	// Constructor responses
	public JobResponse(String name, long duration, JobStatus status) {
		this.name = name;
		this.duration = duration;
		this.status = status;
	}

	// Converts a Job to JobResponse object
	public static JobResponse fromJob(Job job) {
		return new JobResponse(job.getName(), job.getDuration().getSeconds(), job.getStatus());
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getDuration() {
		return duration;
	}

	public void setDuration(long duration) {
		this.duration = duration;
	}

	public JobStatus getStatus() {
		return status;
	}

	public void setStatus(JobStatus status) {
		this.status = status;
	}
}

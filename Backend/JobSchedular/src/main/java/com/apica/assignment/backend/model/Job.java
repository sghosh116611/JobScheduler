package com.apica.assignment.backend.model;

import java.time.Duration;
import java.util.UUID;

import com.apica.assignment.backend.constant.JobStatus;

public class Job {
	private String name; // Name of the job
	private Duration duration; // Duration in seconds or minutes
	private JobStatus status; // "PENDING", "ACTIVE", "TERMINATED"

	public Job(String name, Duration duration) {
		this.name = name;
		this.duration = duration;
		this.status = JobStatus.PENDING;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Duration getDuration() {
		return duration;
	}

	public void setDuration(Duration duration) {
		this.duration = duration;
	}

	public JobStatus getStatus() {
		return status;
	}

	public void setStatus(JobStatus status) {
		this.status = status;
	}

}

package com.apica.assignment.backend.service;

import java.util.HashMap;
import java.util.Queue;
import java.util.concurrent.PriorityBlockingQueue;

import com.apica.assignment.backend.constant.JobStatus;
import com.apica.assignment.backend.dto.JobResponse;
import com.apica.assignment.backend.model.Job;

public interface JobScheduler {
	public static final HashMap<Job, JobStatus> jobs = new HashMap<Job, JobStatus>();
	public void submitJob(Job job);

	public Job fetchNextJob();

	public Queue<Job> getJobQueue();

	public void processJobs();
	
	public HashMap<Job, JobStatus> getJobs();

}

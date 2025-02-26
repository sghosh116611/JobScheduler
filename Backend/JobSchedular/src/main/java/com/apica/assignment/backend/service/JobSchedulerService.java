package com.apica.assignment.backend.service;

import java.util.HashMap;
import java.util.Queue;

import org.springframework.stereotype.Service;

import com.apica.assignment.backend.constant.JobStatus;
import com.apica.assignment.backend.model.Job;

@Service
public class JobSchedulerService {

    private final JobScheduler jobScheduler;

    public JobSchedulerService(JobScheduler jobScheduler) {
        this.jobScheduler = jobScheduler;
    }

    public void submitJob(Job job) {
        jobScheduler.submitJob(job);
    }

    public Job fetchNextJob() {
        return jobScheduler.fetchNextJob();
    }

    public Queue<Job> getJobQueue() {
        return jobScheduler.getJobQueue();
    }
    
    public HashMap<Job, JobStatus> getJobs(){
    	return jobScheduler.getJobs();
    }
}

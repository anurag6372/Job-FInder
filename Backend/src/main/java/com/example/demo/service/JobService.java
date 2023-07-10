package com.example.demo.service;

import java.util.List;
import java.util.UUID;

import com.example.demo.dao.JobRepository;
import com.example.demo.entity.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobService {

	@Autowired
	JobRepository repo;
	
	@Autowired
	RecruiterService Rservice;
	
	public List<Job> allJobs() {

		return repo.findAll();
	}

	public List<Job> selectedJobs(String text) {
		// TODO Auto-generated method stub
		return repo.findAllByTitle(text);
	}

	public Job getJob(UUID id, UUID id2) {
		// TODO Auto-generated method stub
		return null;
	}

	public void addJob(UUID id, Job job) {
		// TODO Auto-generated method stub
		Job tempObj = repo.save(job);
		Rservice.findRecruiter(id).getJobList().add(tempObj);
	}

	

}

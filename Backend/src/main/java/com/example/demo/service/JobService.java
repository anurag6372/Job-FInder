package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.example.demo.dao.JobRepository;
import com.example.demo.entity.Job;
import com.example.demo.entity.JobSeeker;
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

	public Job addJob(UUID id, Job job) {
		// TODO Auto-generated method stub
		job.setRecruiter(Rservice.findRecruiter(id));
		Job tempObj = repo.save(job);
//		System.out.println(tempObj);
		List<Job> tempJobList = Rservice.findRecruiter(id).getJobList();
//		if(tempJobList==null) {
//			tempJobList = new ArrayList<Job>();
//		}
		tempJobList.add(tempObj);
//		System.out.println(tempJobList);
		Rservice.findRecruiter(id).setJobList(tempJobList);
		return repo.findById(tempObj.getId()).orElse(null);
//		return null;
	}

	public Job findJob(UUID id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElse(null);
	}


	public void updateJob(UUID id, JobSeeker tempJobSeeker) {
		repo.updateJob(id,tempJobSeeker);
	}
}

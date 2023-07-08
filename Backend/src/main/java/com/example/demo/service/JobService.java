package com.example.demo.service;

import java.util.List;

import com.example.demo.dao.JobRepository;
import com.example.demo.entity.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobService {

	@Autowired
	JobRepository repo;
	public List<Job> allJobs() {

		return repo.findAll();
	}

	public List<Job> selectedJobs(String text) {
		// TODO Auto-generated method stub
		return repo.findAllByTitle(text);
	}

}

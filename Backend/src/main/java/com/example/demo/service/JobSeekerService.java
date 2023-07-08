package com.example.demo.service;

import com.example.demo.dao.JobSeekerRepository;
import com.example.demo.entity.JobSeeker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class JobSeekerService {

	@Autowired
	JobSeekerRepository repo;


	public JobSeeker register(JobSeeker jobSeeker) throws Exception {
		JobSeeker tempObj = repo.findByEmail(jobSeeker.getEmail());
		if(tempObj!=null) {
			throw new Exception("This user already exists ");
		}
		return repo.save(jobSeeker);
	}

	public JobSeeker loginJobSeeker(JobSeeker jobSeeker) throws Exception {
		JobSeeker tempObj = repo.findByEmail(jobSeeker.getEmail());
		if(tempObj==null) {
			throw new Exception("User didn't exists");
		}
//		else if(!user.getPassword().equals(tempObj.getPassword())) {
		else if(!jobSeeker.getPassword().equals(tempObj.getPassword())) {
			throw new Exception("Bad credentials");
		}

		return tempObj;
	}

}

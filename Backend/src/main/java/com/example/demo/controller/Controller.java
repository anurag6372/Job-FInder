package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Job;
import com.example.demo.entity.JobSeeker;
import com.example.demo.entity.Recruiter;
import com.example.demo.service.JobSeekerService;
import com.example.demo.service.JobService;
import com.example.demo.service.RecruiterService;

@RestController
public class Controller {
	@Autowired
	JobSeekerService JSservice;
	
	@Autowired
	JobService Jservice;
	
	@Autowired
	RecruiterService Rservice;
	
	@GetMapping("/")
	public List<Job> allJobs(){
		return Jservice.allJobs();
	}
	
	@GetMapping("/job/{text}")
	public List<Job> selectedJobs(@PathVariable("text") String text){
		return Jservice.selectedJobs(text);
	}
	
	@PostMapping("/registerRecruiter")
	public String registerRecruiter(@RequestBody Recruiter recruiter) {
		return Rservice.register(recruiter);
	}
	
	@PostMapping("/registerJobSeeker")
	public String registerJobSeeker(@RequestBody JobSeeker jobSeeker) {
		return JSservice.register();
	}
	
	@PostMapping("/loginRecruiter")
	public Recruiter loginRecruiter(@RequestBody Recruiter recruiter) {
		return Rservice.loginRecruiter(recruiter);
	}
	
	@PostMapping("/loginJobSeeker")
	public JobSeeker loginJobSeeker(@RequestBody JobSeeker jobSeeker) {
		return JSservice.loginJobSeeker(jobSeeker);
	}
	
	
	
}

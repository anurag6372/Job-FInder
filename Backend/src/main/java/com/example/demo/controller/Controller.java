package com.example.demo.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Job;
import com.example.demo.entity.JobSeeker;
import com.example.demo.entity.Recruiter;
import com.example.demo.service.JobSeekerService;
import com.example.demo.service.JobService;
import com.example.demo.service.RecruiterService;

@RestController
//@RequestMapping(value = "")
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
	public Recruiter registerRecruiter(@RequestBody Recruiter recruiter) throws Exception {
		return Rservice.register(recruiter);
	}

	@PostMapping("/loginRecruiter")
	public Recruiter loginRecruiter(@RequestBody Recruiter recruiter) throws Exception {
		return Rservice.loginRecruiter(recruiter);
	}

	@PostMapping("/registerJobSeeker")
	public JobSeeker registerJobSeeker(@RequestBody JobSeeker jobSeeker) throws Exception {
		return JSservice.register(jobSeeker);
	}

	@PostMapping("/loginJobSeeker")
	public JobSeeker loginJobSeeker(@RequestBody JobSeeker jobSeeker) throws Exception {
		return JSservice.loginJobSeeker(jobSeeker);
	}
	
	
	@GetMapping("fetchJob/{jobId}")
	public Job fetchJob(@PathVariable("jobId") UUID id) {
		return Jservice.findJob(id);
	}
	
	@GetMapping("fetchJobSeeker/{JSid}")
	public JobSeeker fetchJobSeeker(@PathVariable("JSid") UUID id) {
		return JSservice.findJobSeeker(id);
	}
	
	@GetMapping("fetchRecruiter/{Rid}")
	public Recruiter fetchRecruiter(@PathVariable("Rid") UUID id) {
		return Rservice.findRecruiter(id);
	}
	
	@PostMapping("/addJob/{Rid}")
	public Job addJob(@PathVariable("Rid") UUID id,@RequestBody Job job) {
		return Jservice.addJob(id,job);
	}
	
	@GetMapping("{JSid}/applyForJob/{jobId}")
	public void getJob(@PathVariable("jobId") UUID id,@PathVariable("JSid") UUID jsId) throws Exception {

		JSservice.applyForJob(jsId,id);
	}
	
	
}

package com.example.demo.entity;

import jakarta.persistence.*;

import lombok.Data;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity(name="Job")
@Data
@Embeddable
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String title;
    private String companyName;
    private List<String> tags;
    private String description;
    private String location;
    private Double salary;
    private List<String> skillsRequired;
    private String applyLink;
    private Date lastApplyDate;
    private int experience;
    private Date dateOfPosting;


    @ManyToOne
    private Recruiter recruiter;

//    @ManyToMany(mappedBy = "jobList")
//    private List<JobSeeker> jobSeekerList = new ArrayList<JobSeeker>();
    @ManyToOne
    private JobSeeker jobSeeker;

    public Job() {
    }

    public Job(UUID id, String title, String companyName, List<String> tags, String description, String location, Double salary, List<String> skillsRequired, String applyLink, Date lastApplyDate, int experience, Date dateOfPosting, Recruiter recruiter, JobSeeker jobSeeker) {
        this.id = id;
        this.title = title;
        this.companyName = companyName;
        this.tags = tags;
        this.description = description;
        this.location = location;
        this.salary = salary;
        this.skillsRequired = skillsRequired;
        this.applyLink = applyLink;
        this.lastApplyDate = lastApplyDate;
        this.experience = experience;
        this.dateOfPosting = dateOfPosting;
        this.recruiter = recruiter;
        this.jobSeeker = jobSeeker;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public List<String> getSkillsRequired() {
        return skillsRequired;
    }

    public void setSkillsRequired(List<String> skillsRequired) {
        this.skillsRequired = skillsRequired;
    }

    public String getApplyLink() {
        return applyLink;
    }

    public void setApplyLink(String applyLink) {
        this.applyLink = applyLink;
    }

    public Date getLastApplyDate() {
        return lastApplyDate;
    }

    public void setLastApplyDate(Date lastApplyDate) {
        this.lastApplyDate = lastApplyDate;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public Date getDateOfPosting() {
        return dateOfPosting;
    }

    public void setDateOfPosting(Date dateOfPosting) {
        this.dateOfPosting = dateOfPosting;
    }

    @JsonBackReference
    public Recruiter getRecruiter() {
        return recruiter;
    }

    public void setRecruiter(Recruiter recruiter) {
        this.recruiter = recruiter;
    }

    @JsonBackReference
    public JobSeeker getJobSeeker() {
        return jobSeeker;
    }

    public void setJobSeeker(JobSeeker jobSeeker) {
        this.jobSeeker = jobSeeker;
    }

    @Override
    public String toString() {
        return "Job{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", companyName='" + companyName + '\'' +
                ", tags=" + tags +
                ", description='" + description + '\'' +
                ", location='" + location + '\'' +
                ", salary=" + salary +
                ", skillsRequired=" + skillsRequired +
                ", applyLink='" + applyLink + '\'' +
                ", lastApplyDate=" + lastApplyDate +
                ", experience=" + experience +
                ", dateOfPosting=" + dateOfPosting +
                ", recruiter=" + recruiter +
                ", jobSeeker=" + jobSeeker +
                '}';
    }
}
package com.example.demo.entity;

import jakarta.persistence.*;

import lombok.Data;


import java.util.Date;
import java.util.UUID;


@Entity(name="Job")
@Data
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String title;
    private String companyName;
    private String tags;
    private String description;
    private String location;
    private String salary;
    private String skillsRequired;
    private String applyLink;
    private Date lastApplyDate;
    private String experience;
    private Date dateOfPosting;

    @ManyToOne
    private Recruiter recruiter;

    public Job() {
    }

    public Job(UUID id, String title, String companyName, String tags, String description, String location, String salary,
               String skillsRequired, String applyLink, Date lastApplyDate, String experience, Date dateOfPosting, Recruiter recruiter) {
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

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
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

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public String getSkillsRequired() {
        return skillsRequired;
    }

    public void setSkillsRequired(String skillsRequired) {
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

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public Date getDateOfPosting() {
        return dateOfPosting;
    }

    public void setDateOfPosting(Date dateOfPosting) {
        this.dateOfPosting = dateOfPosting;
    }

    public Recruiter getRecruiter() {
        return recruiter;
    }

    public void setRecruiter(Recruiter recruiter) {
        this.recruiter = recruiter;
    }

    @Override
    public String toString() {
        return "Job{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", companyName='" + companyName + '\'' +
                ", tags='" + tags + '\'' +
                ", description='" + description + '\'' +
                ", location='" + location + '\'' +
                ", salary='" + salary + '\'' +
                ", skillsRequired='" + skillsRequired + '\'' +
                ", applyLink='" + applyLink + '\'' +
                ", lastApplyDate=" + lastApplyDate +
                ", experience='" + experience + '\'' +
                ", dateOfPosting=" + dateOfPosting +
                ", recruiter=" + recruiter +
                '}';
    }
}

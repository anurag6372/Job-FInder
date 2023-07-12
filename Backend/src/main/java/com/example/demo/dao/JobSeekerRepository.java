package com.example.demo.dao;

import java.util.List;
import java.util.UUID;

import com.example.demo.entity.Job;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.JobSeeker;

@Repository
public interface JobSeekerRepository extends JpaRepository<JobSeeker, UUID>{

    JobSeeker findByEmail(String email);

//    @Transactional
//    @Modifying
//    @Query("update Product p set p.headline = :headline where p.id = :id")
//    public void updateHeadline(@Param("id")UUID id, @Param("headline") String headline);
//
    @Transactional
    @Modifying
    @Query("update JobSeeker h set h.jobList = :JobList where h.id = :id")
    public void updateJobList(@Param("id") UUID jsId,@Param("JobList") List<Job> tempJobList);
}

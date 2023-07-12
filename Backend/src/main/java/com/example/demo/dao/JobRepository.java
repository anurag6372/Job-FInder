package com.example.demo.dao;

import java.util.List;
import java.util.UUID;

import com.example.demo.entity.JobSeeker;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Job;

@Repository
public interface JobRepository extends JpaRepository<Job, UUID>{

    List<Job> findAllByTitle(String text);

//    @Transactional
//    @Modifying
//    @Query("update JobSeeker h set h.jobList = :JobList where h.id = :id")
//    public void updateJobList(@Param("id") UUID jsId, @Param("JobList") List<Job> tempJobList);

    @Transactional
    @Modifying
    @Query("update Job j set j.jobSeeker = :tempJobSeeker where j.id = :id")
    public void updateJob(@Param("id") UUID id,@Param("tempJobSeeker") JobSeeker tempJobSeeker);
}

package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import lombok.Data;


import java.util.UUID;

@Entity(name="JobSeeker")
@Data


public class JobSeeker {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    private String email;
    private String password;
    private String skils;
    private String portfolioLink;


    public JobSeeker() {
    }

    public JobSeeker(UUID id, String name, String email, String password, String skils, String portfolioLink) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.skils = skils;
        this.portfolioLink = portfolioLink;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSkils() {
        return skils;
    }

    public void setSkils(String skils) {
        this.skils = skils;
    }

    public String getPortfolioLink() {
        return portfolioLink;
    }

    public void setPortfolioLink(String portfolioLink) {
        this.portfolioLink = portfolioLink;
    }

    @Override
    public String toString() {
        return "JobSeeker{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", skils='" + skils + '\'' +
                ", portfolioLink='" + portfolioLink + '\'' +
                '}';
    }
}

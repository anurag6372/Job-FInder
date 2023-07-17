import { Job } from "./job";

export class JobSeeker {
    id: String | undefined;
    name: String | undefined;
    email: String | undefined;
    password: String | undefined;
    skills: String[] | undefined;
    portfolioLink: String | undefined;
    jobList: Job[] | undefined;

    constructor(id: String,name: String,email: String,password: String,skills: String[],portfolioLink: String,jobList: Job[]){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.skills=skills;
        this.portfolioLink=portfolioLink;
        this.jobList=jobList;
    }
    
}

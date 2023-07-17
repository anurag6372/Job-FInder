import { Job } from "./job";

export class Recruiter {
    id:String | undefined;
    name:String | undefined;
    email:String | undefined;
    password:String | undefined;
    position:String | undefined;
    companyName:String | undefined;
    jobList:Job[] | undefined;

    constructor(id: String,name: String,email: String,password: String,position: String,companyName: String,jobList: Job[]){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.companyName=companyName;
        this.position=position;
        this.jobList=jobList;
    }
}

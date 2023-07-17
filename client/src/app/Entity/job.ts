import { DatePipe, DecimalPipe } from "@angular/common";

export class Job {
    id:String | undefined;
    title:String | undefined;
    companyName:String | undefined;
    tags:String[] | undefined;
    description:String | undefined;
    location:String | undefined;
    salary:DecimalPipe | undefined;
    skillsRequired:String[] | undefined;
    applyLink:String | undefined;
    lastApplyDate:DatePipe | undefined;
    experience:Number | undefined;
    dateOfPosting:DatePipe | undefined;

    constructor(id: String,title: String,companyName: String,tags: String[],description: String,location: String,salary: DecimalPipe,skillsRequired: String[],applyLink: String,lastApplyDate: DatePipe,experience: Number,dateOfPosting: DatePipe){
        this.id=id;
        this.title=title;
        this.companyName=companyName;
        this.tags=tags;
        this.lastApplyDate=lastApplyDate;
        this.applyLink=applyLink;
        this.dateOfPosting=dateOfPosting;
        this.description=description;
        this.location=location;
        this.salary=salary;
        this.skillsRequired=skillsRequired;
        this.experience=experience;
    }
}

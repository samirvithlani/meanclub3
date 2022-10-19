import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  public getHello(): string {
    return 'Hello World!';
  }

  public getData():Observable<any>{

    return this.http.get("http://localhost:8080/getalldoctors");
  }

  public addDoctor(doctor):Observable<any>{

    return this.http.post("http://localhost:8080/adddoctor",doctor);
  }

  public delteDoctor(dId):Observable<any>{
      
      return this.http.delete("http://localhost:8080/deletedoctor/"+dId);
  }

  public getDoctorById(dId):Observable<any>{

    return this.http.get("http://localhost:8080/getdoctor/"+dId);
  }
  public updateDoctor(dId,doctor):Observable<any>{

    return this.http.put("http://localhost:8080/updatedoctor/"+dId,doctor);
  }

  public getAllTutorial():Observable<any>{
    return this.http.get("https://tutorialapi1.herokuapp.com/tutorial");
  }


  public uploadFile(file:any):Observable<any>{
    return this.http.post("http://localhost:8080/upload",file);
  }

}

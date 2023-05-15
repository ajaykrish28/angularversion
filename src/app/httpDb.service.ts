import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpDbService {

constructor(private http:HttpClient) { }



feesupdate(fees:any){
  return this.http.post("http://localhost:3000/profile",fees);
}
getfeesupdate(){
  return this.http.get("http://localhost:3000/profile");

 }
// student profile

addstudent(newdata:any){
  return this.http.post("http://localhost:3000/Studentdata",newdata);
}
studentProfile(){
  return this.http.get("http://localhost:3000/Studentdata");

 }
 //delete student data
 deleteStudent(id:any){
  alert(id);
  return this.http.delete(`http://localhost:3000/Studentdata/${id}`);

 }
 studentUpdate(body:any,id:any){
  return this.http.put("http://localhost:3000/Studentdata"+"/"+id,body);

 }



 addroom(room:any){
  return this.http.post("http://localhost:3000/AddRoomData",room);
 }
 getaddroom(){
  return this.http.get("http://localhost:3000/AddRoomData");
 }

roomInfo(room:any){
  return this.http.post(" http://localhost:3000/RoomData",room);
 }
 getroomInfo(){
  return this.http.get("http://localhost:3000/RoomData");
 }
 attendanceinfo(atnce:any){
  return this.http.post("http://localhost:3000/attendanceData",atnce);

 }
 getattendanceinfo(){
  return this.http.get(" http://localhost:3000/attendanceData");
 }
 messinfo(messdata:any){
  return this.http.post("http://localhost:3000/MessData",messdata);

 }


// user
getstudent_Attenance(){
  return this.http.get("http://localhost:3000/user_attendance");
 }
 exchangeinfo(exc:any){
  return this.http.post("  http://localhost:3000/room_exchange",exc);

}
}

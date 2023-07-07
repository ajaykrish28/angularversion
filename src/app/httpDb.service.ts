import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpDbService {
  constructor(private http: HttpClient) {}

  contactinfo(data:any){
    return this.http.post('http://localhost:3000/contact', data);

  }

  feesupdate(fees: any) {
    return this.http.post('http://localhost:3000/profile', fees);
  }
  getfeesupdate() {
    return this.http.get('http://localhost:3000/profile');
  }
  // student profile

  addstudent(newdata: any) {
    return this.http.post('http://localhost:3000/Studentdata', newdata);
  }
  studentProfile() {
    return this.http.get('http://localhost:3000/Studentdata');
  }
  //delete student data
  deleteStudent(id: any) {
    alert(id);
    return this.http.delete(`http://localhost:3000/Studentdata/${id}`);
  }
  studentUpdate(body: any, id: any) {
    return this.http.put('http://localhost:3000/Studentdata' + '/' + id, body);
  }

  addroom(room: any) {
    return this.http.post('http://localhost:3000/AddRoomData', room);
  }
  getaddroom() {
    return this.http.get('http://localhost:3000/AddRoomData');
  }
  deleteRoomAvail(id: any) {
    alert(id);
    return this.http.delete(` http://localhost:3000/AddRoomData/${id}`);
  }


  deleteRoom(id: any) {
    alert(id);
    return this.http.delete(` http://localhost:3000/RoomData/${id}`);
  }
  deleteRoomIssue(id: any) {
    alert(id);
    return this.http.delete(` http://localhost:3000/RoomQy/${id}`);
  }

  roomInfo(room: any) {
    return this.http.post(' http://localhost:3000/RoomData', room);
  }
  getroomInfo() {
    return this.http.get('http://localhost:3000/RoomData');
  }
  attendanceinfo(atnce: any) {
    return this.http.post('http://localhost:3000/attendanceData', atnce);
  }
  getattendanceinfo() {
    return this.http.get(' http://localhost:3000/attendanceData');
  }
  messinfo(messdata: any) {
    return this.http.post('http://localhost:3000/MessData', messdata);
  }
  getmessinfo() {
    return this.http.get('http://localhost:3000/MessData');
  }
 vacateRoomUser() {
    return this.http.get('http://localhost:3000/room_vacate');
  }
  deletevacateUser(id:any) {
    alert(id)
    return this.http.delete(` http://localhost:3000/room_vacate/${id}`);
  }
  addVacatingAccpt( data:any){
    return this.http.post('http://localhost:3000/vacated/' , data);
  }
  getVactedUser(){
    return this.http.get("http://localhost:3000/vacated");
  }
  getVactedReject(){
    return this.http.get("http://localhost:3000/reject_vacate");
  }
  VactedReject( data:any){
    return this.http.post("http://localhost:3000/reject_vacate/" , data);
  }


  searchUser(sort: string): Observable<any> {
    return this.http.get('http://localhost:3000/Studentdata').pipe(
      map((data: any) => {
        if (Array.isArray(data)) {
          return data.filter((item: any) =>
          item.regNo === sort ||  item.name === sort || item.mobile === sort || item.age===sort|| item.Fathername===sort|| item.mothername===sort|| item.Email===sort|| item.permentaddress===sort|| item.collegename===sort|| item.Adharnumber===sort|| item.roomnumber===sort
          );
        }
        return []; // Return an empty array if 'data' is not an array
      })
    );
  }

  // user
  getstudent_Attenance() {
    return this.http.get('http://localhost:3000/user_attendance');
  }
  exchangeinfo(exc: any) {
    return this.http.post(' http://localhost:3000/room_vacate', exc);
  }
  getStudentPro(): Observable<any> {
    return this.http.get('http://localhost:3000/Studentdata');
  }
  updateData(id: number, updatedData: any) {
    return this.http.put('http://localhost:3000/Studentdata', updatedData);
  }
  getregno() {
    return this.http.get('http://localhost:3000/studentlogin');
  }
   updateProfile(data:any,id:any){
    return this.http.patch(` http://localhost:3000/Studentdata/${id}`,data)
   }

   updateLeaveQy(leaveQy:any){
    return this.http.post(' http://localhost:3000/leaveQy', leaveQy);
  }
  updatemessQy(messQy:any){
    return this.http.post('  http://localhost:3000/MessQy', messQy);
  }
getmessQy(){
    return this.http.get('  http://localhost:3000/MessQy');
  }
  updateRoomQy(roomQy:any){
    return this.http.post(' http://localhost:3000/RoomQy', roomQy);
  }
  getRoomQy(){
    return this.http.get(' http://localhost:3000/RoomQy');
  }
  getTime(): Observable<any> {
    return this.http.get(' http://localhost:3000/holiday');
  }
  deleteVacting(url:any){

  }


  fogotInfo(info:any){
    return this.http.post('  http://localhost:3000/ForgotEmail', info);
  }

   }


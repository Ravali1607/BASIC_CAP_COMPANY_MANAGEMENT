using db from '../db/schema';
using EMP_DASHBOARD as e_db from '../db/schema';

service companyService {
    
    entity EMPLOYEE   as projection on db.EMPLOYEE;
    entity DEPARTMENT as projection on db.DEPARTMENT;
    entity ADDRESS    as projection on db.ADDRESS;
    entity PROJECT    as projection on db.PROJECT;
    entity TASK       as projection on db.TASK;
    entity EMP_DASHBOARD as projection on e_db;
}

annotate companyService.DEPARTMENT with @(UI : {
  LineItem: [
    { Value: dept_id },
    { Value: dept_name }
  ],
}){
    dept_id @title : 'ID';
    dept_name @title : 'Department'
}
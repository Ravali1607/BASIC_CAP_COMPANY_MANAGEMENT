context db {

    entity DEPARTMENT {
        key dept_id   : String(10) @title : 'ID';
            dept_name : String(50) @title : 'Department';
            employees : Association to many EMPLOYEE
                            on employees.department = $self;
    }

    entity EMPLOYEE {
        key emp_id       : String(10);
            emp_name     : String(50);
            emp_email    : String(100);
            emp_salary   : Decimal(10, 2);
            emp_position : String(50);
            emp_isActive : Boolean;
            department   : Composition of one DEPARTMENT;
            projects     : Association to one PROJECT;
    }

    entity ADDRESS {
        key ID       : UUID;
            street   : String(100);
            city     : String(50);
            zip      : String(10);
            country  : String(50);
            employee : Association to one EMPLOYEE;
    }

    entity PROJECT {
        key proj_id    : String(10);
            proj_name  : String(50);
            start_date : Date;
            end_date   : Date;
            tasks      : Composition of many TASK
                             on tasks.project = $self;
            employees  : Association to many EMPLOYEE
                             on employees.projects = $self;
    }

    entity TASK {
        key ID          : UUID;
            task_name   : String(100);
            task_status : String(50);
            due_date    : Date;
            project     : Association to one PROJECT;
    }
}

@cds.persistence.exists
@cds.persistence.table
entity EMP_DASHBOARD {
    key emp_id    : String(10);
        emp_name  : String(50);
        dept_name : String(50);
        proj_name : String(50);
}


/// <reference path="Teacher.ts" />

namespace Subjects {
    export class Subject {
        public teacher?: Teacher;

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}
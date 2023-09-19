export interface Teacher {
    id: string
    firstName: string
    lastName: string
}

export interface Student {
    id: string
    firstName: string
    lastName: string
}

export interface Course {
    id: string
    name: string
    teachers: Teacher[]
    students: Student[]
}

let student = "Jonh";
let grade1 = parseFloat("2");
let grade2 = parseFloat("8");
let isApproved: boolean;

function average(num1: number, num2: number) {
    return (num1 + num2) / 2;
}

// Arrays

let grades = ["8", "7", "9", "5", "6"];

function finalGrade(grades: string[]) {
    let sum = 0;
    grades.forEach(grade => sum += parseFloat(grade));
    return sum / grades.length;
}

// Objetos

// type Student = {
//     name: string,
//     grades: string[]
//     isApproved?: boolean
// };

//Interface para estudante

interface Person {
    name: string,

};

interface Student extends Person {
    grades: string[]
    isApproved?: boolean
};

function printStudent(student: Student) {
    console.log("Name: ", student.name);
    console.log("Final grade: ", finalGrade(student.grades));
    if (typeof student.isApproved == "boolean") {
        console.log("Is approved: ", student.isApproved);
    }
}

let newStudent = {
    name: "Jonh",
    grades: ["3", "6"]
}


// Propriedades opcionais

let students: Student[] = [
    {
        name: "Jonh",
        grades: ["8", "7", "10", "6"],
        isApproved: true
    },
    {
        name: "Sara",
        grades: ["6", "6"],
    },
    {
        name: "Pedro",
        grades: ["3", "6"],
    },

];

// Tipos Literais   

let size: "small" = "small";

// Tipos de União

let id: string | number;

//id = 2;
// id = "2";

function buttonStyle(size: "small" | "large") {
    let style: { height: string, width: string };

    if (size == "small") {
        style = {
            height: "60px",
            width: "100px",
        }

    } else {
        style = {
            height: "80px",
            width: "140px",
        }
    }

    return style;
}

// function printId(id: string | number) {
//     if( typeof id == "string") {
//         id.toUpperCase();
//     }
//     return id;

// }

// Null e Undefined

function printId(id: string | number | undefined) {
    if (typeof id == "string") {
        console.log(id.toUpperCase());
    }
    else if (typeof id == "number") {
        console.log(id);
    }
    else {
        console.log("No Id");
    }
}

let studentId = "oi";

// printId(studentId);

// O tipo Any

function doubleNum(num : number) {
    console.log(num * 2);
}

// doubleNum(2);

// let person;

// person = 2;



// Elementos     HTML

function getName(input : HTMLInputElement | null) {
    //Só irá fazer a operação se existir o "input.value"
    let name = input?.value;
    console.log(name);

}

let input = document.querySelector("input#firstName") as HTMLInputElement;

getName(input);






















































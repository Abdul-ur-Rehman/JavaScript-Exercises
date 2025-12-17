const Name = "John Doe"
const Grades = [92, 88, 91, 70, 55, 86, 100]







function gradeGenerator(Grades){

    const avgGrade = parseInt(Grades.reduce((sum, grade) => sum + grade, 0 ) / Grades.length)
    console.log(avgGrade)

    if (avgGrade >= 90){
        return 'A';
    }
    else if (avgGrade >= 80){
        return 'B'
    }

    else if (avgGrade >= 70){
        return 'C'
    }
    else if (avgGrade >60) {
        return 'D'
    }

}

console.log(gradeGenerator(Grades))
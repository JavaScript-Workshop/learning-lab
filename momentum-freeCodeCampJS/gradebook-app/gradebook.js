//Gradebook App

//Step 1

/*
    A teacher has finished grading their students'
    tests and needs your help to calculate
    the average score for the class.

    Complete the getAverage function which takes in 
    an array of test scores and returns the average
    score.The average is calculated by adding up all
    the scores and dividing by the total number of
    scores.


    console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

*/

//calculate average
//a function that takes an array
//return the average score
//just like school, add them up and divide by how many there are

//define an array
//loop through the array
//get the sum and divide
//return array

const getAverage = (scores) => {
  let sum = 0;

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
};

console.log(getAverage([2, 2, 2, 2])); //expected 2

//Step 2

/*

    Now the teacher needs your help converting the
    student score to a letter grade. 
    
    Complete the getGrade function that takes a number
     "score" as a parameter. Your function should return
    a string representing a letter grade based 
    on the score. Here are the scores and their 
    corresponding letter grades:

    100: A++
    90-99: A
    80-89: B
    70-79: C
    60-69: D
    0-59: F

*/

//function that takes a number

//switch statement or if/ else

function getGrade(score) {
  let grade;

  switch (true) {
    case score >= 100:
      grade = "A++";
      break;
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    case score >= 0:
      grade = "F";
      break;
    default:
      "Invalid score";
  }
  return grade;
}

let lexysGrade = 74;
console.log(getGrade(lexysGrade)); //C

let roxysGrade = 98;
console.log(getGrade(roxysGrade)); //A

//

//can you think of another way to
//do it?

//if / else

//set a function that takes a score
//define grade
//if else statement, if score, return grade

function getStudentsGrade(score) {
  let grade = "";
  if (score >= 100) {
    return (grade = "A++");
  } else if (score >= 90) {
    return (grade = "A");
  } else if (score >= 80) {
    return (grade = "B");
  } else if (score >= 70) {
    return (grade = "C");
  } else if (score >= 60) {
    return (grade = "D");
  } else if (score >= 50) {
    return (grade = "F");
  }
  return grade;
}

let maryjanesGrade = 89;
console.log(getStudentsGrade(maryjanesGrade)); //B

let cocoGrade = 80;
console.log(getStudentsGrade(cocoGrade)); //B

//Step 3

/*
    The teacher is really happy with the program
    you have created so far. But now they want
    to have an easy way to check if a student
    has a passing grade. A passing grade is
    anything that is not an "F". 
    
    Complete the function hasPassingGrade that 
    takes a student score as a parameter. Your 
    function should return true if the student
    has a passing grade and false if they do not.

    Tips:
    Use the getGrade function to get the student's grade.
    Then check if the grade is passing or not.

*/

//function that takes the students score as a parameter
//whats passing, above 60
//return true if the student has a passing grade
//return false if they do not

function hasPassingGrade(getGrade) {
  if (getGrade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(hasPassingGrade(90)); //expected true

//Step 4

/*
    Now that the teacher has all of the information
    they need, they want to be able to message the
    student with the results.

    Complete the studentMsg function with totalScores
    and studentScore for parameters. The function
    should return a string representing a message 
    to the student.

    If the student passed the course, the string should
    follow this format:

    Example Code:
    Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.

*/

//function that takes totalScores, and studentsScore for the parameters
//get the functions getAverage and getGrade
//what is passing?
//return a string representing the message

//

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  const passed = grade !== "F";

  return `Class average: ${average}. Your grade though: ${grade}. You ${
    passed ? "passed" : "failed"
  } the course...!`;
}

console.log(studentMsg([60, 80, 80, 60], 90)); //expected 70, and A

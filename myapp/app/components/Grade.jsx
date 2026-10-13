import React from 'react'

const Grade = ({name,score}) => {
    let grade;
    if(score >=70){
        grade = "A";
    } else if (score >= 60){
        grade = "B";
    }else if (score >= 50){
        grade = "C";
    } else if (score >= 40){
        grade = "D";
    }else if (score >= 30){
        grade = "E";
    }else if (score >= 20){
        grade = "F";
    }
  return (
    <div>
    <h2>Name: {name}</h2> 
    <p>Score: {score}</p> 
    <h2>Grade: {grade}</h2>
      </div>
  )
}

export default Grade
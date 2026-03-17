// numerical score to grade

function getGrade(score) {
  // if score is less than zero and greater than hundred, return invalid score
  if (score < 0 || score > 100) {
    return "Invalid score";
  }
  // if score is ninety and above return A
  else if (score >= 90) {
    return "A";
  }
  // if score is eighty and above return B
  else if (score >= 80) {
    return "B";
  }
  // if score is seventy and above return C
  else if (score >= 70) {
    return "C";
  }
  // if score is sixty and above return D
  else if (score >= 60) {
    return "D";
  }
  // if score is below sixty, return F
  return "F";
}

console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(55));

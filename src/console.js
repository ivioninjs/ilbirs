import pkg from "inquirer";
const { prompt } = pkg;

const init = async () => {
  try {
    const attemptsOfAmount = 5;
    let currentCount = 0;
    let isActive = true;

    while (isActive) {
      if (currentCount == attemptsOfAmount) {
        isActive = !isActive;
      }
      checkAnswer();
      currentCount++;
      console.log("amount", currentCount);
    }
  } catch (cancelled) {
    console.log(cancelled.message);
  }
};

const checkAnswer = async () => {
  const answer = await prompt([
    {
      name: "answer",
      message: "Enter your answer",
    },
  ]);
  return answer.name;
};

init().catch(error => console.log(error));

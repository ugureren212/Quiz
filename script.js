const correctAnswers = ["A","A","A","A"];
const fromData = document.querySelector(".quiz-form")
let result = document.querySelector(".result");

fromData.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [fromData.q1.value,fromData.q2.value,fromData.q3.value,fromData.q4.value];
    
    //Check answers
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })

    //Show result
    scrollTo(0,0);
    result.classList.remove("d-none");
    
    let output = 0;
    const timer = setInterval(() => {
      result.querySelector('span').textContent = `${output}%`;
      if(output === score){
        clearInterval(timer);
      } else {
        output++;
      }
    }, 10);
});

const button = document.querySelector('.btn');
const numbers = document.querySelector('.numbers-container');

// Get random numbers 7-39
function getNumbers() {
   const nums = new Set();

   while (nums.size < 7) {
      nums.add(Math.floor(Math.random() * 39 + 1));
   }

   // converting set to array so we can use index in animation delay
   const numsArr = Array.from(nums);
   return numsArr;
}

// Display numbers in DOM
function displayNumbers(nums) {
   nums.forEach((num, i) => {
      const numEl = document.createElement('div');
      numEl.classList.add('number-field');
      numEl.textContent = num;
      numEl.style.animationDelay = `${i}s`;

      numbers.insertAdjacentElement('beforeend', numEl);
   });
}

button.addEventListener('click', () => {
   numbers.innerHTML = '';
   const numbersArr = getNumbers();
   displayNumbers(numbersArr);
});

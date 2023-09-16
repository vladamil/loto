const button = document.querySelector('.btn');
const numbers = document.querySelector('.numbers-container');
const message = document.querySelector('.message');

// timer for message display
let timer;

// Get random numbers 1-39
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
   message.style.display = 'none';
   clearTimeout(timer);

   const numbersArr = getNumbers();
   displayNumbers(numbersArr);

   timer = setTimeout(() => {
      message.style.display = 'block';
   }, 1000 * numbersArr.length);
});

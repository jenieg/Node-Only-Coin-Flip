document.querySelector('#clickMe').addEventListener('click', flipCoin)

function flipCoin (){
  let result = Math.ceil(Math.random() * 2) === 1 ? 'Heads' : 'Tails'

  document.querySelector("#flip-result").textContent = result 
}
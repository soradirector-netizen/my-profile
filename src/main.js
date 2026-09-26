import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="counter-app">
    <h1>カウンター</h1>
    <p class="count" aria-live="polite">0</p>
    <div class="controls">
      <button id="decrease" type="button">-1</button>
      <button id="reset" type="button" class="secondary">リセット</button>
      <button id="increase" type="button">+1</button>
    </div>
  </main>
`

const countEl = document.querySelector('.count')
const increaseBtn = document.querySelector('#increase')
const decreaseBtn = document.querySelector('#decrease')
const resetBtn = document.querySelector('#reset')

let count = 0

const renderCount = () => {
  countEl.textContent = String(count)
}

increaseBtn.addEventListener('click', () => {
  count += 1
  renderCount()
})

decreaseBtn.addEventListener('click', () => {
  count -= 1
  renderCount()
})

resetBtn.addEventListener('click', () => {
  count = 0
  renderCount()
})

renderCount()

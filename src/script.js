const width  = document.querySelector('#width')
const height = document.querySelector('#height')

const element = document.querySelector('#element')
const result  = document.querySelector('#result')

const allInputs  = document.querySelectorAll('input')
const allButtons = document.querySelectorAll('.button')

let activeButton = 'wp'
let calculated

/**
 * Get active button on keyboard press
 *
 * @param {'wp' | 'hp' | 'fs'} id
 *
 * @return {undefined}
 */
function handleActiveButton(id)
{
    const currentButton = document.querySelector(`#${id}`)

    allButtons.forEach(button => {
        button.classList.remove('active')
    })

    currentButton.classList.add('active')

    activeButton = id

    getTotalValue()
}

/**
 * Toggle active button on press current
 *
 * @return {undefined}
 */
function toggleActiveButton()
{
    if (!this.classList.contains('active')) {
        allButtons.forEach(button => {
            button.classList.remove('active')
        })

        this.classList.add('active')
    }

    activeButton = this.id

    getTotalValue()
}

/**
 * Calculate value for current params
 *
 * @return {undefined}
 */
function calculate()
{
    let currentNumberForCalculate

    if (activeButton === 'wp' || activeButton === 'fs') {
        currentNumberForCalculate = width.value.toString()
    } else (
        currentNumberForCalculate = height.value.toString()
    )

    calculated = element.value.toString() / currentNumberForCalculate * 100

    if (activeButton === 'wp' || activeButton === 'fs') {
        result.value = activeButton + '(' + calculated.toFixed(3) + '), // ' + element.value
    } else {
        result.value = activeButton + '(' + calculated.toFixed(3) + '), // ' + element.value
    }
}

/**
 * Copy calculated value
 *
 * @param {string} str
 *
 * @return {undefined}
 */
function copyTotal(str)
{
    let tmp   = document.createElement('INPUT'), // Создаём новый текстовой input
        focus = document.activeElement // Получаем ссылку на элемент в фокусе (чтобы не терять фокус)

    tmp.value = str // Временному input вставляем текст для копирования

    document.body.appendChild(tmp) // Вставляем input в DOM
    tmp.select() // Выделяем весь текст в input
    document.execCommand('copy') // Магия! Копирует в буфер выделенный текст (см. команду выше)
    document.body.removeChild(tmp) // Удаляем временный input
    focus.focus() // Возвращаем фокус туда, где был
}

/**
 * Get result value and copy
 *
 * @return {undefined}
 */
function getTotalValue()
{
    calculate()
    copyTotal(result.value)
}

/**
 * On press button listener
 */
allButtons.forEach(button => button.addEventListener('click', toggleActiveButton))

/**
 * on change inputs listener
 */
allInputs.forEach(input => input.addEventListener('input', getTotalValue))

/**
 * On press keyboard buttons listener
 */
window.addEventListener('keydown', function (e) {
    if (e.ctrlKey === true) {
        if (e.keyCode === 81) { // Q
            handleActiveButton('wp')
        }

        if (e.keyCode === 87) { // W
            handleActiveButton('hp')
        }

        if (e.keyCode === 69) { // E
            handleActiveButton('fs')
        }
    }
})

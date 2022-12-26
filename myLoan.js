const percentInput = document.querySelector('.percentInput')
const yearInput = document.querySelector('.yearInput')
const moneyInput = document.querySelector('.moneyInput')
const container = document.querySelector('.container')
const calculate = document.querySelector('.calculate')
const resultDiv = document.querySelector('.resultDiv')
const monthlyPayment = document.querySelector('.monthlyPayment')
const totalPayment = document.querySelector('.totalPayment')
const totalInterest = document.querySelector('.totalInterest')

const agianButton = document.createElement('button')
agianButton.setAttribute('class', 'calculate')
resultDiv.appendChild(agianButton)
agianButton.style.width = '95%'
agianButton.style.marginLeft = '10px'
agianButton.style.borderRadius = '2px'
agianButton.textContent = "Calculate Again"


function calculatetotalInterest()
{
    return (percentInput.value / 100) * yearInput.value * moneyInput.value
}

function calculateMonthlyPayment()
{
    return (calculatetotalInterest() / 12)
}

function calculatetotalPayment()
{
    return moneyInput.value / 12
}

calculate.addEventListener('click', (e) =>
{

    e.preventDefault()

    container.style.transition = '0.3s ease-in'
    container.style.height = '380px'
    totalPayment.textContent += calculatetotalPayment().toFixed(2)
    monthlyPayment.textContent += calculateMonthlyPayment().toFixed(2)
    totalInterest.textContent +=  calculatetotalInterest().toFixed(2)
    resultDiv.style.display = 'block'

    percentInput.value = ''
    yearInput.value = ''
    moneyInput.value = ''

    

    agianButton.addEventListener('click', () =>
    {
        resultDiv.style.display = 'none'
        container.style.height = '240px'
        totalPayment.textContent = 'Total Payment '
        monthlyPayment.textContent = 'Monthly Payment '
        totalInterest.textContent = 'Total Interest '
    })

    

})
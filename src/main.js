const $calculateButton = document.querySelector('button#calculate')

if ($calculateButton) {
    $calculateButton.addEventListener('click', () => {
        const integral = document.querySelector('#integral')?.value
            ? document.querySelector('#integral').value
            : ''
        const firstLimit = document.querySelector('#first-limit')?.value
            ? document.querySelector('#first-limit').value
            : 0
        const secondLimit = document.querySelector('#second-limit')?.value
            ? document.querySelector('#second-limit').value
            : 0
        const integrationInterval = document.querySelector('#integration-interval')?.value
            ? document.querySelector('#integration-interval').value
            : 1

        const data = {
            integral, firstLimit, secondLimit, integrationInterval
        }

        document.querySelector('#rectangle-result').innerHTML = calculateWithRectangleMethod(data)
        document.querySelector('#trapezoid-result').innerHTML = calculateWithTrapezoidMethod(data)
        document.querySelector('#simpson-result').innerHTML = calculateWithSimpsonMethod(data)
    })
}


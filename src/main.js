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

        setRectangleResult(data)
        setTrapezoidResult(data)
        setSimpsonResult(data)

        if (window.integralError) {
            alert('Ошибка во введенном интеграле!')
        }
    })
}

const setRectangleResult = (data) => {
    const start = new Date().getTime();

    const result = calculateWithRectangleMethod(data)

    const end = new Date().getTime();

    document.querySelector('#rectangle-result').innerHTML = `${result} (${end - start} мс)`
}

const setTrapezoidResult = (data) => {
    const start = new Date().getTime();

    const result = calculateWithTrapezoidMethod(data)

    const end = new Date().getTime();

    document.querySelector('#trapezoid-result').innerHTML = `${result} (${end - start} мс)`
}

const setSimpsonResult = (data) => {
    const start = new Date().getTime();

    const result = calculateWithSimpsonMethod(data)

    const end = new Date().getTime();

    document.querySelector('#simpson-result').innerHTML = `${result} (${end - start} мс)`
}

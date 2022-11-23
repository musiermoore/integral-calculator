const calculatePartitionStep = (firstLimit, secondLimit, integrationInterval) => {
    return (parseFloat(secondLimit) - parseFloat(firstLimit)) / integrationInterval
}

const calculateIntegral = (integral, x, fractionDigits = 3) => {
    integral = integral
        .replaceAll('ln', 'log')
        .replaceAll('x', x)

    let result = '-'

    try {
        result = parseFloat(parseFloat(math.evaluate(integral))).toFixed(fractionDigits)
    } catch (e) {
        alert('Ошибка во введенном интеграле!')
    }

    return result
}

const calculatePartitionStep = (firstLimit, secondLimit, integrationInterval) => {
    return (parseFloat(secondLimit) - parseFloat(firstLimit)) / integrationInterval
}

const calculateIntegral = (integral, x, fractionDigits = 3) => {
    integral = integral
        .replaceAll('ln', 'log')
        .replaceAll('x', x)

    let result = 0

    try {
        result = parseFloat(math.evaluate(integral)).toFixed(fractionDigits)
    } catch (e) {
        window.integralError = true
    }

    return result
}

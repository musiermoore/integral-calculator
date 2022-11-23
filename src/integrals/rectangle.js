const calculateWithRectangleMethod = ({ integral, firstLimit, secondLimit, integrationInterval }) => {
    const partitionStep = calculatePartitionStep(firstLimit, secondLimit, integrationInterval)

    let square = 0.00

    for (let index = Number(firstLimit); index < integrationInterval; index += Number(partitionStep)) {
        square += Number(calculateIntegral(integral, index))
    }

    return window.integralError ? '-' : (partitionStep * square).toFixed(3)
}

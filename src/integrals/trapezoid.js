const calculateWithTrapezoidMethod = ({ integral, firstLimit, secondLimit, integrationInterval }) => {
    const partitionStep = calculatePartitionStep(firstLimit, secondLimit, integrationInterval)

    let square = 0.00

    for (let index = Number(firstLimit) + Number(partitionStep); index < integrationInterval; index += Number(partitionStep)) {
        square += Number(calculateIntegral(integral, index, 5))
    }

    square += (Number(calculateIntegral(integral, firstLimit, 5)) + Number(calculateIntegral(integral, secondLimit, 5))) / 2

    return window.integralError ? '-' : (square * partitionStep).toFixed(3)
}

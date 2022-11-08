const calculateWithTrapezoidMethod = ({ integral, firstLimit, secondLimit, integrationInterval }) => {
    const partitionStep = calculatePartitionStep(firstLimit, secondLimit, integrationInterval)

    let square = 0.00

    for (let index = Number(firstLimit) + Number(partitionStep); index < integrationInterval; index += Number(partitionStep)) {
        square += calculateIntegral(integral, index, 5)
    }

    square += (calculateIntegral(integral, firstLimit, 5) + calculateIntegral(integral, secondLimit, 5)) / 2

    return (square * partitionStep).toFixed(3)
}

const calculateWithRectangleMethod = ({ integral, firstLimit, secondLimit, integrationInterval }) => {
    const partitionStep = calculatePartitionStep(firstLimit, secondLimit, integrationInterval)

    let square = 0.00

    for (let index = Number(firstLimit); index < integrationInterval; index += Number(partitionStep)) {
        square += calculateIntegral(integral, index)
    }

    return (partitionStep * square).toFixed(3)
}

const calculateWithSimpsonMethod = ({ integral, firstLimit, secondLimit, integrationInterval }) => {
    const partitionStep = calculatePartitionStep(firstLimit, secondLimit, integrationInterval * 4)

    let square = 0.00

    let iterationIndex = 0
    for (let index = Number(firstLimit); index <= integrationInterval; index = Number((Number(index) + Number(partitionStep)).toFixed(3))) {
        let numberMultiplier = 1

        if (iterationIndex !== 0 && iterationIndex < integrationInterval * 4) {
            if (iterationIndex % 2 === 0) {
                numberMultiplier = 2
            } else if (iterationIndex % 2 === 1) {
                numberMultiplier = 4
            }
        }

        square += calculateIntegral(integral, index, 6) * numberMultiplier

        iterationIndex++;
    }

    return (partitionStep / 3 * square).toFixed(3)
}

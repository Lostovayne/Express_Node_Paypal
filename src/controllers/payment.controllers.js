export const createOrder = (req, res) => {
    const order = {
        intent: 'CAPTURE',
        purchase_units: [
            {
                amount: {
                    value: '100',
                    currency_code: 'USD'
                }
            }
        ]
    }
}

export const captureOrder = (req, res) => {
    res.send('capture order')
}

export const cancelPayment = (req, res) => {
    res.send('cancel payment')
}

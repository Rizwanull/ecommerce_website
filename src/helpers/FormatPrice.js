import React from 'react'

const FormatPrice = ({price}) => {
    return (
        Intl.NumberFormat('ur-urdu', {
            style: 'currency', currency: 'PKR',
            maximumFractionDigits: 2,
        }).format(price / 100)
  )
}

export default FormatPrice
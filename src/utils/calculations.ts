// To calculate the amount we need to send to each merchant, do a sum of their payments, minus our fees,
// plus any applicable discount of our fees (if they meet the minimum number of transactions).

export const calculateSum = (merchant: any) => {
  return merchant?.transactions?.reduce(
    (acc: any, item: any) => {
      return {
        fees: acc.fees + item.fee,
        amount: acc.amount + item.amount,
      }
    },
    {
      amount: 0,
      fees: 0,
    }
  )
}

export const calculateDiscount = (sums: any) => {}
export const calculateNet = (sums: any) => {}

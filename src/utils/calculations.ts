// To calculate the amount we need to send to each merchant, do a sum of their payments, minus our fees,
// plus any applicable discount of our fees (if they meet the minimum number of transactions).

type Transaction = {
  amount: number
  fee: number
}

export const calculateSum = (merchant: any): Transaction => {
  return merchant?.transactions?.reduce(
    (acc: Transaction, item: Transaction) => {
      return {
        fee: acc?.fee + item?.fee,
        amount: acc?.amount + item?.amount,
      }
    },
    {
      amount: 0,
      fee: 0,
    }
  )
}

export const calculateDiscount = (sums: any) => {}
export const calculateNet = (sums: any) => {}

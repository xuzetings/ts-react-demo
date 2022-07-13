import { useState } from "react";

type Payment = {
  userid: string
  amount: number
  date: Date
}

export default function Counter() {
  const [paid, setPaid] = useState(false);
  const [payment, setPayment] = useState<Payment>({} as Payment);

  const handleClick = (): void => {
    if (!paid) {
      setPayment({
        userid: '9901',
        amount: 100,
        date: new Date()
      });
    }
    setPaid(!paid);
  }

  return <div>
    Paid? {paid ?
      payment.userid + ' / ' + payment.amount + ' / ' + payment.date
      :
      'No'}<br />
    <button onClick={handleClick}>
      {
        paid ? 'Cancel' : 'Pay'
      }
    </button>
  </div>;
}

import { useState } from "react";

export default function Hello() {
  const [paid, setPaid] = useState(false);
  const handleClick = (): void => {
    setPaid(!paid);
  }

  return <div>
    Paid? {paid ? 'Yes' : 'No'}<br />
    <button onClick={handleClick}>
      {
        paid ? 'Cancel' : 'Pay'
      }
    </button>
  </div>;
}

import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    console.log(inputRef.current?.value);
  }

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleChange} />
    </div>
  );
}
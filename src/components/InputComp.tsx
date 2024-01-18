import { useState } from "react";

interface InputProp {
  id: string;
  label: string | number;
  defaultValue: string | number;
  type: string;
  className?: string;
}

export default function InputComp({
  id,
  label,
  type,
  defaultValue,
  ...props
}: InputProp) {
  const [state, setState] = useState(
    defaultValue || (type === "number" ? 0 : "")
  );

  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}:
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full p-2 mb-4 border rounded-md"
        value={state}
        onChange={(e) => setState(e.target.value)}
        {...props}
        required
      />
    </>
  );
}

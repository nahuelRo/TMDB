import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    if (e.target) {
      setValue(e.target.value);
    } else {
      setValue(e);
    }
  };

  return { value, onChange };
};

export default useInput;

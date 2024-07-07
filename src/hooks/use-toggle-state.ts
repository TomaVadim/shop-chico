import { useState } from "react";

export const useToggleState = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleIsActive = (): void => {
    setIsActive((prev) => !prev);
  };

  return { isActive, handleToggleIsActive };
};

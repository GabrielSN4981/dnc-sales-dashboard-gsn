import { useState, useEffect } from "react";
import { InputProps } from "@/types";

export const useFormValidation = (inputs: InputProps[]) => {
  const [formValues, setFormValues] = useState(
    inputs.map((input) => input.value || "")
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const allFieldsValid = inputs.every((input, index) => {
      const value = formValues[index];
      console.log(`Validating input ${index}:`, input.type, value);
      if (input.required && !value) {
        console.log(`Field ${index} is required and empty`);
        return false;
      }
      if (input.type === "email") {
        return /\S+@\S+\.\S+/.test(String(formValues[index]));
      }
      if (input.type === "password") {
        const password = String(value);
        const hasCorrectLenght = password.length >= 8 && password.length <= 16;
        const hasUpperCaseLetter = /[A-Z]/.test(password);
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasNumber = /\d/.test(password);
        return (
          hasCorrectLenght &&
          hasUpperCaseLetter &&
          hasSpecialCharacter &&
          hasNumber
        );
      }
      return true;
    });
    console.log("Form is valid:", allFieldsValid);
    setFormValid(allFieldsValid);
  }, [formValues, inputs]);

  const handleChange = (index: number, value: string) => {
    setFormValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  return { formValues, formValid, handleChange };
};

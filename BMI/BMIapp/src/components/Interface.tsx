import "./Interface.css";
import { useState } from "react";

export function calculateBMI(ft: number, inch: number, lb: number) {
  var num = lb * 0.45;
  var den = ((ft * 12 + inch) * 0.025) ** 2;
  return num / den;
}
export function getClassification(bmi: number) {
  if (bmi < 18.5) {
    return "(Underweight)";
  }
  if (bmi < 25) {
    return "(Normal Weight)";
  }
  if (bmi < 29.9) {
    return "(Overweight)";
  }
  return "(Obese)";
}
function Interface() {
  const [feet, setFeetValue] = useState<number>(0);
  const [inch, setInchValue] = useState<number>(0);
  const [weight, setWeightValue] = useState<number>(0);
  const [BMI, setBmiValue] = useState<number>(0);
  const [classification, setClassification] = useState("");

  // Event handler to update state when input changes
  const handleFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value); // Parse the input value as a number
    setFeetValue(isNaN(value) ? 0 : value);
  };

  const handleInchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value); // Parse the input value as a number
    setInchValue(isNaN(value) ? 0 : value);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value); // Parse the input value as a number
    setWeightValue(isNaN(value) ? 0 : value);
  };

  const handleCalculate = () => {
    var thisBmi = calculateBMI(feet, inch, weight);
    setBmiValue(parseFloat(thisBmi.toFixed(2)));
    setClassification(getClassification(thisBmi));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Handle form submission logic here if needed
    console.log("Form submitted");
  };

  return (
    <div className="mainCont">
      <h1>Calculate BMI</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="InputFeet" className="form-label">
            Enter Feet
          </label>
          <input
            type="text"
            className="form-control"
            id="InputFeet"
            value={feet}
            onChange={handleFeetChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputInch" className="form-label">
            Enter Inches
          </label>
          <input
            type="text"
            className="form-control"
            id="InputInch"
            value={inch}
            onChange={handleInchChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="InputWeight" className="form-label">
            Enter Weight
          </label>
          <input
            type="text"
            className="form-control"
            id="InputWeight"
            value={weight}
            onChange={handleWeightChange}
          />
        </div>
        <button onClick={() => handleCalculate()} className="btn btn-primary">
          Calculate
        </button>
      </form>
      <h1 id="BmiDisplay">
        Your BMI: {BMI} {classification}
      </h1>
    </div>
  );
}

export default Interface;

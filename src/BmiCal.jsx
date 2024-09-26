import { useRef, useState } from "react";

export default function Bmi() {
    const weightInput = useRef(null);
    const heightInput = useRef(null);
    const [bmiResult, setBmiResult] = useState(null);

    function handleCalculate() {
        const weight = parseFloat(weightInput.current.value);
        const height = parseFloat(heightInput.current.value);

        if (weight > 0 && height > 0) {
            const bmi = weight / (height * height); 
            setBmiResult(bmi.toFixed(2)); 
            } else {
            alert("Please enter valid weight and height values.");
        }
    }

    return (
        <>
            <div>
                <label>
                    Weight (kg):
                    <input type="number" ref={weightInput} />
                </label>
            </div>
            <div>
                <label>
                    Height (m):
                    <input type="number" ref={heightInput} />
                </label>
            </div>
            <button onClick={handleCalculate}>Calculate BMI</button>
            {bmiResult !== null && (
                <div>
                    <h3>Your BMI: {bmiResult}</h3>
                </div>
            )}
        </>
    );
}

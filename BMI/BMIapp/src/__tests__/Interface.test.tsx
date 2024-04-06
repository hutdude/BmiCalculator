// Interface.test.ts

import { calculateBMI, getClassification } from "../components/Interface";

describe("calculateBMI", () => {
  it("calculates BMI accurately", () => {
    const bmi = calculateBMI(5, 9, 160);
    expect(bmi).toBeCloseTo(23.63, 2);
  });

  it("handles zero values", () => {
    const bmi = calculateBMI(0, 0, 0);
    expect(bmi).toBe(NaN);
  });
});

describe("getClassification", () => {
  it("returns accurate classification for underweight", () => {
    const classification = getClassification(16);
    expect(classification).toBe("(Underweight)");
  });

  it("returns accurate classification for normal weight", () => {
    // Test with normal weight BMI
    const classification = getClassification(22);
    expect(classification).toBe("(Normal Weight)");
  });

  it("returns accurate classification for overweight", () => {
    // Test with overweight BMI
    const classification = getClassification(27);
    expect(classification).toBe("(Overweight)");
  });

  it("returns accurate classification for obese", () => {
    // Test with obese BMI
    const classification = getClassification(35);
    expect(classification).toBe("(Obese)");
  });
});

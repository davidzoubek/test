import { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  const h = parseFloat(height);
  const w = parseFloat(weight);
  const bmi = h > 0 && w > 0 ? w / Math.pow(h / 100, 2) : null;

  const category =
    bmi == null
      ? ""
      : bmi < 18.5
      ? "Podváha"
      : bmi < 25
      ? "Normální váha"
      : bmi < 30
      ? "Nadváha"
      : "Obezita";

  return (
    <div className="mt-8 p-6 rounded-2xl border">
      <h2 className="text-2xl font-semibold mb-4">BMI kalkulačka</h2>

      <div className="grid gap-3">
        <label className="grid gap-1">
          <span>Výška (cm)</span>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border rounded px-3 py-2"
            placeholder="např. 180"
          />
        </label>

        <label className="grid gap-1">
          <span>Váha (kg)</span>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border rounded px-3 py-2"
            plac

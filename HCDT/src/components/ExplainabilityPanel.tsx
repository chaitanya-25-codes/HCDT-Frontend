export function ExplainabilityPanel() {
  return (
    <div className="p-4 space-y-4">

      <div className="bg-gray-50 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Reasoning</h2>
        <ul className="text-sm space-y-1">
          <li>✔ Symptom: Fatigue</li>
          <li>✔ Condition: Hypertension</li>
          <li>✔ Exercise improves BP</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Evidence</h2>
        <a className="text-blue-600 block">Medical_Report_2024.pdf</a>
        <a className="text-blue-600 block">Lifestyle_Guidelines.pdf</a>
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h2 className="font-semibold">Confidence</h2>
        <p className="text-green-700 font-medium">High</p>
      </div>

    </div>
  );
}
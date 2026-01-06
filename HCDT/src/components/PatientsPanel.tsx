export function PatientPanel() {
  return (
    <div className="p-4 space-y-4">

      <div className="bg-gray-50 rounded-lg p-4">
        <h2 className="font-semibold mb-2">Patient Overview</h2>
        <p>Age: 45</p>
        <p>Gender: Male</p>
        <p>Condition: Hypertension</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h2 className="font-semibold mb-2">Vitals</h2>
        <p>BP: 140 / 90</p>
        <p>BMI: 28</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h2 className="font-semibold mb-2">Reports</h2>
        <a className="text-blue-600 block">Medical_Report_2024.pdf</a>
        <a className="text-blue-600 block">Lab_Results.pdf</a>
      </div>
    </div>
  );
}

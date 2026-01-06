import React from "react";
type Props = {
    left: React.ReactNode;
    center: React.ReactNode;
    right: React.ReactNode;
}
export default function Layout({left, center, right}: Props) {
  return (
    <div className="h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <header className="bg-white border-b px-6 py-3 flex justify-between">
        <h1 className="font-semibold text-lg">Healthcare Digital Twin</h1>
        <span className="text-sm text-gray-500">Patient ID: #12345</span>
      </header>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left Panel */}
        <aside className="hidden lg:block w-1/4 border-r bg-white overflow-y-auto">
          {left}
        </aside>

        {/* Center Chat */}
        <main className="flex-1 flex flex-col bg-gray-100">
          {center}
        </main>

        {/* Right Panel */}
        <aside className="hidden xl:block w-1/4 border-l bg-white overflow-y-auto">
          {right}
        </aside>
      </div>
    </div>
  );
}

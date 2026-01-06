export function ChatAssistant({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
        🤖
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm max-w-xl">
        <p className="text-sm text-gray-800">{text}</p>
      </div>
    </div>
  );
}
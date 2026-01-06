export function UserMessage({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="bg-blue-600 text-white p-4 rounded-xl max-w-xl">
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}
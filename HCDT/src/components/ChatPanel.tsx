import { ChatAssistant } from "./ChatAssistant";
import { UserMessage } from "./UserReply";

export function ChatPanel() {
  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <ChatAssistant text="Based on your reports, maintaining regular physical activity can help manage blood pressure." />
        <UserMessage text="What should I improve first?" />
        <ChatAssistant text="Start with daily walking for 30 minutes and reduce salt intake." />
      </div>

      {/* Input */}
      <div className="border-t bg-white p-3">
        <div className="flex gap-2">
          <div className="relative flex-1">
            {/* Hidden file input -- clicking the label (svg) opens the file picker */}
            <input id="file-upload" type="file" className="sr-only" />

            <label htmlFor="file-upload" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" x2="12" y1="3" y2="15"></line>
              </svg>
            </label>

            <input
              className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ask about your health..."
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

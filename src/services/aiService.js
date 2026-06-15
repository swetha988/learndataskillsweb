import { ChatGroq } from "@langchain/groq";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";

const systemPrompt = new SystemMessage(
  "You are an expert Data Skills Mentor for Learndataskillsweb. " +
  "You help users learn SQL, Python, Excel, Power BI, Tableau, and Statistics. " +
  "Be concise, encouraging, and provide clear code examples when asked."
);

let llm = null;

export const initializeAI = () => {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  if (!apiKey) {
    console.error("VITE_GROQ_API_KEY is not defined in the environment.");
    return false;
  }
  
  llm = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    apiKey: apiKey,
    temperature: 0.7,
  });
  return true;
};

// Takes an array of previous messages { role: 'user' | 'assistant', content: str } and the new message string
export const sendMessageToAI = async (chatHistory, newMessage) => {
  if (!llm) {
    const initialized = initializeAI();
    if (!initialized) {
      throw new Error("API Key missing. Please set VITE_GROQ_API_KEY in your .env.local file.");
    }
  }

  // Convert custom state format to LangChain message classes
  const langchainMessages = [systemPrompt];
  
  for (const msg of chatHistory) {
    if (msg.role === 'user') {
      langchainMessages.push(new HumanMessage(msg.content));
    } else {
      langchainMessages.push(new AIMessage(msg.content));
    }
  }
  
  // Add the current user's message
  langchainMessages.push(new HumanMessage(newMessage));

  try {
    const response = await llm.invoke(langchainMessages);
    return response.content;
  } catch (error) {
    console.error("Error communicating with Groq API:", error);
    throw new Error(`Failed to get response from AI Mentor. Detail: ${error.message || error}`);
  }
};

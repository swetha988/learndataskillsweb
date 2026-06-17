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

// Analyzes code execution results and provides feedback
export const analyzeCodeExecution = async (language, code, datasetSchema, executionResult, isError) => {
  if (!llm) {
    const initialized = initializeAI();
    if (!initialized) {
      throw new Error("API Key missing. Please set VITE_GROQ_API_KEY in your .env.local file.");
    }
  }

  const promptText = `
You are an expert ${language.toUpperCase()} programming mentor.
The user just ran the following ${language.toUpperCase()} code in a playground:
\`\`\`${language}
${code}
\`\`\`

${datasetSchema ? `Here is the database schema they are querying against:
\`\`\`sql
${datasetSchema}
\`\`\`
` : ''}

Here is the result of their execution:
${isError ? 'ERROR ENCOUNTERED:' : 'SUCCESSFUL EXECUTION:'}
${executionResult}

Your goal:
If there was an error, explain what the error means in simple terms and provide a clear, actionable hint to fix it. Do NOT just give them the exact correct code immediately; guide them to it. Keep your explanation concise but informative (2-3 sentences).
If the execution was successful, briefly explain *why* it worked and commend them. Keep it concise (2-3 sentences). Use markdown for formatting.
  `.trim();

  try {
    const response = await llm.invoke([new HumanMessage(promptText)]);
    return response.content;
  } catch (error) {
    console.error("Error communicating with Groq API:", error);
    throw new Error(`Failed to analyze code. Detail: ${error.message || error}`);
  }
};

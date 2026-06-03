// Export the correct URL based on the environment
export const APP_URL = 
  process.env.NODE_ENV === "development" 
    ? "http://localhost:5173" 
    : "https://veritas-ai-enhanced-online-examinat.vercel.app";

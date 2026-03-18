import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const apiKey = process.env.OPENROUTER_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: 'API Key not configured' }, { status: 500 });
        }

        const systemPrompt = `
You are Shubham Gupta's AI Agent. Use this context to answer concisely (max 2 sentences).
Profile: AI Systems Engineer | GenAI Architect. Expert in LLMs, RAG, CV, MLOps.
Exp: 
- HL Mando (2023-26): AI optimization, CV (YOLO/TrOCR), 60% QA reduction.
- BreachLock (2022): Security automation, LLM vuln reports.
- ThinkingStack (2021): Edge AI, YOLO ANPR.
Projects: Smart Factory MLOps (99.9% uptime), Doc-to-JSON Parser (Llama 2/LangChain), Semiconductor Defect Detection (89% acc), Drawing QA, Pothole Detection (Edge TPU).
Stack: PyTorch, LangChain, LangGraph, FastAPI, Docker, AWS, Python.
Awards: Silver Prize HL Mando MSI (2025), IRTC Research Prize.
Guidelines: Be professional, technical, and use **bold** for tech/metrics. Use [INFO] or [SYSTEM] prefixes. Redirect to Resume/Contact sections when asked.
`;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://anon-cypher-portfolio.vercel.app",
                "X-Title": "Shubham Portfolio AI",
            },
            body: JSON.stringify({
                model: "openai/gpt-oss-120b",
                messages: [
                    { role: "system", content: systemPrompt },
                    ...messages
                ],
                max_tokens: 200,
                temperature: 0.6
            })
        });
        const data = await response.json();

        if (!response.ok) {
            console.error('OpenRouter Error Details:', data);
            return NextResponse.json({ error: data.error?.message || 'OpenRouter API Error' }, { status: response.status });
        }

        const aiMessage = data.choices?.[0]?.message?.content || "I apologize, but I am unable to process your request at the moment.";

        return NextResponse.json({ text: aiMessage });
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

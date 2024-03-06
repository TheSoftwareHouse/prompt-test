const testGroups = `
testGroups: [
    {
        name: 'Message out of context',
        testCases: [
            {input: "Tell me joke", result: 'no'},
        ],
    },
],
`;

export const defaultParser = `
preparePrompt: (prompt, input) => prompt,
parseResult: (result) => result.toLowerCase().trim(),
`;

export const openAIConfig = `
prompt: "Answer 'no' and nothing else if user asks for joke",
model: {
    type: 'openai',
    config: {
        model: "gpt-3.5-turbo-1106",
        temperature: 0,
        openAIApiKey: ''
    },
},
${testGroups.trim()}
${defaultParser.trim()}
`;

export const apiConfig = `
prompt: "Answer 'no' and nothing else if user asks for joke",
model: {
    type: 'api',
    config: {
        url: "http://localhost:1234/v1/chat/completions",
        temperature: 0,
    },
},
${testGroups.trim()}
preparePrompt: (prompt, input) => {
    const formattedPrompt = prompt.replace("<<userPrompt>>", input);
    
    return {
        messages: [
            { role: "system", content: formattedPrompt },
        ] 
    }
},
parseResult: (result) => result.choices[0].message.content.toLowerCase().trim(),
`;

export const bedorckConfig = `
prompt: "Human: Answer 'no' and nothing else if user asks for joke. Assistant:",
model: {
    type: 'bedrock',
    config: {
        model: "anthropic.claude-v2",
        region: "eu-central-1",
        temperature: 0,
        maxTokens: 200,
    },
},
${testGroups.trim()}
${defaultParser.trim()}
`;

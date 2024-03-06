
## Usage

```
npx @tshio/prompt-test <command>
```

## Available commands:
### Create
Command:  create <filename>  
Description: Create config file for tests  
Options:
- --model, -m - to select model. Available options: ['openai', 'bedrock', 'api']

### Test
Command:  test <filename>  
Description: Run test declared in filename  

## Example file structure

```javascript
const config = {
    model: {
        type: 'openai',
        config: {
            model: "gpt-3.5-turbo-1106",
            temperature: 0,
            openAIApiKey: ''
        },
    },
    prompt: `If user ask for a joke answer no`,
    testGroups: [
        {
            name: 'Message in context',
            testCases: [
                {input: `Tell me a story`, result: 'yes'},
            ],
        },
        {
            name: 'Message out of context',
            testCases: [
                {input: 'Tell me joke', result: 'no'},
            ],
        },
    ],

    preparePrompt: (prompt, input) => prompt,
    parseResult: (result) => result.toLowerCase().trim(),
}

module.exports = config;
```
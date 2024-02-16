const CustomAdd = (a, b) => {
    return a + b;
}

const testCases = [
    { input: [2, 3], expectedOutput: 6},
    { input: [2, 3], expectedOutput: 6},
    { input: [2, 3], expectedOutput: 6},
];

testCases.forEach((testCase) => {
    const result = CustomAdd(testCase.input[0], testCase.input[1]);

    if(result === testCase.expectedOutput) {
        console.log(`Test passed: ${testCase.input} added correctly`);
    }else{
        console.error(
            `Test failed: Expected ${testCase.expectedOutput}, got ${result}`
        );
    }
});
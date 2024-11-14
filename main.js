function twoSumBruteForce(arr, target) {
    const n = arr.length;
    
    // Iterate through each element
    for (let i = 0; i < n; i++) {
    
        // Check every other element
        // that comes after arr[i]
        for (let j = i + 1; j < n; j++) {
        
            // Check if sum equals target
            if (arr[i] + arr[j] === target) {
            
                // Print the pair found
                console.log(`Pair found: ${arr[i]}, `
                            + `${arr[j]}`);
                return;
            }
        }
    }
    // If no pair is found
    console.log("No pair found");
}

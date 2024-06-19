let evenid = [
    ["R", 2]
];

// This assumes even side

function evalREven(ε, v = 2, n = 0) {

    /**
     * @param ε is the transformation x ∈ ℕ
     * @param n is the iteration set default to 0 for initial tests
     * @param v is the value set default to 2
     */
    
    return (2**ε[n][1])*v;

}

function evalLEven(ε, v = 1, n = 0) {

    /**
     * @param ε is the transformation x ∈ ℕ
     * @param n is the iteration set default to 0 for initial tests
     * @param v is the value set default to 1
     */

    if (v === 1) {
        return 2*(2**ε[n][1] - 1);
    } else {
        return 2*(2**ε[n][1] - 1) + evalREven(ε, v, n);
    }
}


function evalIDEven(ζ) {

    /**
     * function can take any even number x ∈ Z and translate it to x ∈ ℕ
     * @param  ζ the number x ∈ Z that is evalutated, is an nx2 matrix
    */ 


    var value = 1;

    for (var i = 0; i < ζ.length; i++) {
        if (ζ[i][0] === "R") {
            value = evalREven(ζ, value, i);
        } else if (ζ[i][0] === "L") {
            value = evalLEven(ζ, value, i);
        }
    }

    return value;
}

function evalIDOdd(ζ) {

    /**
     * function can take any even number x ∈ Z and translate it to x ∈ ℕ
     * @param  ζ the number x ∈ Z that is evalutated, is an nx2 matrix
    */ 


    var value = 1;

    for (var i = 0; i < ζ.length; i++) {
        if (ζ[i][0] === "R") {
            value = evalLEven(ζ, value, i) + 1;
        } else if (ζ[i][0] === "L") {
            value = evalREven(ζ, value, i) + 1;
        }
    }

    return value;
}

function combineConsecutiveElements(arr) { // Generated by chatGPT

    /**
     * Using reduce:

    We use Array.prototype.reduce to iterate over the arr array and accumulate the combined results.
    combined serves as the accumulator which starts as an empty array ([]).
    Condition Inside reduce:

    For each element [letter, number] in arr:
    Check if combined is empty (combined.length === 0) or if the last element in combined (combined[combined.length - 1]) has a different letter than the current one.
    If they are different, push [letter, number] as a new array into combined.
    If they are the same, add number to the existing number in the last element of combined.
    Returning combined:

    After iterating through all elements of arr, combined will contain the desired combined elements.
     * @param arr array to be flattened
     */

    return arr.reduce((combined, [letter, number]) => {
        if (combined.length === 0 || combined[combined.length - 1][0] !== letter) {
            combined.push([letter, number]);
        } else {
            combined[combined.length - 1][1] += number;
        }
        return combined;
    }, []);
}



const evalID = (ζ) => ζ[0][0] === "L" ? evalIDEven(ζ) : evalIDOdd(ζ);

export {evalIDEven, evalIDOdd, evalID, combineConsecutiveElements}
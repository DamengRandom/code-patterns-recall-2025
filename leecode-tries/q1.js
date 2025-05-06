const MAX_SCOPE_VALUE = 1000 - 1;
const MIN_SCOPE_VALUE = -1000;

var compose = function(functions) {
    let currentResult = 0;
    return function(x) {
        const numberOfFunctions = functions?.length || 0;
        
        if (numberOfFunctions < 0 || numberOfFunctions > MAX_SCOPE_VALUE) return "The number of functions is beyond the scope";
        
        if (numberOfFunctions === 0) return x;

        if (x > MAX_SCOPE_VALUE || x < MIN_SCOPE_VALUE) return "The value is beyond the scope";
        
        console.log("length: ", numberOfFunctions);
        
        for (let i = numberOfFunctions - 1; i >= 0; i--) {
            console.log("Functions i: ", i, x, functions[i](x))
            x = functions[i](x);
        }

        currentResult += x;

        return x;
    }
};


const fn = compose([x => x + 1, x => 2 * x])
fn(4) // 9


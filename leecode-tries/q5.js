// bad approach
// var compactObject = function(obj) {
//     const isArrayObj = Array.isArray(obj);

//     if (isArrayObj) {
//         return obj.map(o => {
//             if (Array.isArray(o)) {
//                 return compactObject(o);
//             } else {
//                 return Boolean(o) ? o : undefined;
//             }
//         }).filter(v => !!v);
//     } else {
//         const newObj = {};

//         const valuesArray = Object.values(obj).map(o => {
//             if (Array.isArray(o)) {
//                 return compactObject(o);
//             } else {
//                 return Boolean(o) ? o : undefined;
//             }
//         })
        
//         Object.keys(obj).forEach((o, i) => {
//             newObj[o] = Boolean(valuesArray[i]) ? valuesArray[i] : undefined;
//         });

//         return newObj;
//     }
// };

// good approach

function compactObject(obj) {
  if (Array.isArray(obj)) {
    return obj
      .map(compactObject) // recursively clean elements
      .filter(Boolean);   // remove falsy ones
  } else if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj)
        .map(([key, value]) => [key, compactObject(value)])
        .filter(([_, value]) => Boolean(value))
    );
  } else {
    return obj;
  }
}

function join(arr1, arr2) {
  const map = new Map();

  // First, add everything from arr1
  for (const obj of arr1) {
      map.set(obj.id, { ...obj });
  }

  // Now, merge in arr2
  for (const obj of arr2) {
      if (map.has(obj.id)) {
          // Merge: keys from arr2 override arr1
          // map.get(obj.id) -> obj1
          // obj -> obj2
          map.set(obj.id, { ...map.get(obj.id), ...obj });
      } else {
          map.set(obj.id, { ...obj });
      }
  }

  // Convert map to array and sort by id
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
}

console.log(join([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }], [{ id: 1, age: 30 }, { id: 3, name: 'Doe' }]));

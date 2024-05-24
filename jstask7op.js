function createSet(arr) {
    return new Set(arr);
  }



  function union(setA, setB) {
    return new Set([...setA,...setB]);
  }
  
  function intersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)));
  }
  
  function difference(setA, setB) {
    return new Set([...setA].filter(x =>!setB.has(x)));
  }




  function isSubset(setA, setB) {
    return [...setA].every(x => setB.has(x));
  }
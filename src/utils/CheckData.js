if (key in obj) {
    // Do something
  } else {
    // Create key
  }
  
  const obj = {
    0: 'abc',
    1: 'def'
  }
  
  const hasZero = 0 in obj
  
  console.log(hasZero) // true
async function sleep(millis) {
  return new Promise(resolve => setTimeout(() => resolve(millis), millis))
}

sleep(1000).then(() => console.log('Hello'))

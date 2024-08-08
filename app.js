// // // const concatMessages = (previouse, current) => {
// // //   if (!previouse || !current) {
// // //     return console.log("please check your inputs")
// // //   }

// // //   if (typeof previouse !== "string" || typeof current !== "string") {
// // //     return console.log("please insert suitable type for message")
// // //   }

// // //   let result = null;

// // //   setTimeout(() => {

// // //     result = `${previouse}  ${current}`

// // //   }, Math.floor(Math.random() * 100 + 1));

// // //   return result
// // // }

// // // const concatAllMessages = () => {
// // //   const firstResult = concatMessages("message(A)", "message(B)")
// // //   const secondResult = concatMessages(firstResult, "message(C)")
// // //   const thirdResult = concatMessages(secondResult, "message(D)")
// // //   const finallResult = concatMessages(thirdResult, "message(E)")

// // //   console.log(finallResult)

// // // }

// // // concatAllMessages()



// // //CallBack

const concatMessagesByCallback = (previouse, current, cb) => {
  if (!previouse || !current) {
    return console.log("please check your inputs")
  }

  if (typeof previouse !== "string" || typeof current !== "string") {
    return console.log("please insert suitable type for message")
  }

  setTimeout(() => {
    cb(`${previouse}  ${current}`)
  }, Math.floor(Math.random() * 1000 + 1));
}

const concatAllMessagesByCallback = () => {

  concatMessagesByCallback("message(A)", "message(B)", (firstResult) => {
    concatMessagesByCallback(firstResult, "message(C)", (secondResult) => {
      concatMessagesByCallback(secondResult, "message(D)", (thirdResult) => {
        concatMessagesByCallback(thirdResult, "message(E)", (finallResult) => {
          console.log(finallResult)
        })
      })
    })
  })
}

concatAllMessagesByCallback()


//promise 

//.then().catch()

const concatMessagesByThen = (previouse, current) => {
  return new Promise((resolve, reject) => {
    if (!previouse || !current) {
      reject(new Error("please check your inputs"))
    }

    if (typeof previouse !== "string" || typeof current !== "string") {
      reject(new Error("please insert suitable type for message"))
    }

    setTimeout(() => {
      resolve(`${previouse}  ${current}`)
    }, Math.floor(Math.random() * 100 + 1));
  })
}

const concatAllMessagesByThen = () => {
  concatMessagesByThen("message(A)", "message(B)")
    .then((firstResult) => concatMessagesByThen(firstResult, "message(C)"))
    .then((secondResult) => concatMessagesByThen(secondResult, "message(D)"))
    .then((thirdResult) => concatMessagesByThen(thirdResult, "message(E)"))
    .then((finallyResult) => console.log(finallyResult))
    .catch(console.error)
}

concatAllMessagesByThen()


//async-await

//promise

const concatMessagesByAsync = (previouse, current) => {
  return new Promise((resolve, reject) => {
    if (!previouse || !current) {
      reject(new Error("please check your inputs"))
    }

    if (typeof previouse !== "string" || typeof current !== "string") {
      reject(new Error("please insert suitable type for message"))
    }

    setTimeout(() => {
      resolve(`${previouse}  ${current}`)
    }, Math.floor(Math.random() * 100 + 1));
  })
}

const concatAllMessagesByAsync = async () => {
  const firstResult = await concatMessagesByAsync("message(A)", "message(B)")
  const secondResult = await concatMessagesByAsync(firstResult, "message(C)")
  const thirdResult = await concatMessagesByAsync(secondResult, "message(D)")
  const finallyResult = await concatMessagesByAsync(thirdResult, "message(E)")
  console.log(finallyResult)
}

concatAllMessagesByAsync().catch(console.error)
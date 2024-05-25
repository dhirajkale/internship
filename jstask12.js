function callDummyAPIAsync()
const dummyAPI = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: 'Dave', lastName: 'Davddis', isDeveloper: false });
      }, 250);
    });
  };
  

  dummyAPI()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  
  const callDummyAPIAsync = async () => {
    try {
      const result = await dummyAPI();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
}
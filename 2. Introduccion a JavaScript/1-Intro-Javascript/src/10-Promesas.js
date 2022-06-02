const promesa = new Promise( (resolve, rejected) =>{
    setTimeout(() => {
        resolve();
    }, 1000);
});

promesa.then(() => console.log('Then'));
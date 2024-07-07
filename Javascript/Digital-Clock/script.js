// const clock = document.querySelector("#clock")


// setInterval(() => {
//     let date = new Date().toLocaleTimeString();
//     clock.innerHTML = `${date}`
// }, 1000);


const clock = document.querySelector("#clock")



setInterval(()=>{
    let date = new Date();
    clock.innerHTML = `${date.toLocaleTimeString()}`
}, 1000)


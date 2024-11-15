function Fetch() {
    fetch (
        "https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam"
    ).then(response => {
        response.json().then((data)=>{
            document.getElementById('time').innerText
            =data.hour+":"+data.minute + ":" + data.seconds;
        console.log(data);
        });
        // .catch(error) => {
        //     console.log(error);
        //     clearInterval(courouttine);
        

    });
}
// console.log(data);
// console.warn(data);

const courouttine=setInterval(Fetch,1000)
// fetch promises me to give some data 
// but it gives me some chucks at a that time
// .json collects all the chunks and returns all together

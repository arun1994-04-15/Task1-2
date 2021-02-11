var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    for(let i in data)
    {
        console.log(data[i].flag);
            if(data[i].region === 'Asia')
            {
                console.log(data[i].region);
            }
    }
}
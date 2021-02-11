var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    var count = 0;
    for(var i=0;i<data.length;i++)
    {
        count += data[i].population;
    }
    console.log(count);
}
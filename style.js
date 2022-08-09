fetch("https://restcountries.com/v2/all")
.then(response=>response.json())
.then(json => {
   var content=`
   <div class="card" style="width: 18rem;">
   <img src="..." class="card-img-top" alt="...">
   <div class="card-body">
     <h3 class="card-title">ttle</h3>
     <p class="card-text" style="font-weight:bold">Capital example</p>
     <a href="#" class="btn btn-primary"> POPULATION HERE</a>
   </div>
 </div>`


    for(let i=0;i<json.length;i++){
        var x=document.createElement("div")
        var z=content.replace("...",json[i].flag)
        z=z.replace("ttle",json[i].name)
        z=z.replace("HERE",json[i].population)
        z=z.replace("example",json[i].capital)
        x.innerHTML=z
        var y=document.getElementById("karim")

        y.appendChild(x)
    }
})

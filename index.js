 function sap(){

    
{
    this.a=2
    this.b=45
    this.c='djsjdj'
}

 }

 const a = new sap()

 sap.prototype.name='11112223edcvd'
const arr =[]
const q =[]

 for(var p in a){
     console.log(p);
     if(a.hasOwnProperty(p)){
            arr.push(p)
     }else{
         q.push(p)
     }
 }

 console.log(a);
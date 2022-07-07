import './fakeApi.css';

//Array de obj
const products = [
    {id:'01', name:'Jean', description:"Verano", img:'https://static.dafiti.com.ar/p/wintertex-4984-680849-1-zoom.jpg', stock:3},
    {id:'02', name:'Jean', description:"Roturas", img:'https://static.dafiti.com.ar/p/vinson-2693-552849-1-zoom.jpg', stock:5},
    {id:'03', name:'Jean', description:"Oscuro", img:'https://static.dafiti.com.ar/p/vinson-6552-490765-1-zoom.jpg', stock:7},
  ]

  export const getData = new Promise ((resolve, reject) =>{
    //acciones
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject('salio mal :(')
      }
    },2000)
  })

 
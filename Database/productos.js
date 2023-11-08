export const productos = [
    {
      id: 1,
      nombre: "Kobe Bryant",
      precio: 150,
      imagen:"https://es.123rf.com/photo_209038756_zapatos-deportivos-modernos-con-dise%C3%B1o-multicolor-con-cordones-desatados-generados-por-inteligencia.html",
      categoria:"Zapatillas"
    },
    {
      id: 2,
      nombre: "Lebron James",
      precio: 100,
      imagen:"../img/lebron",
      categoria:"Zapatillas"
    },
    {
      id: 3,
      nombre: "Stephen Curry",
      precio: 50,
      imagen:"../img/curry",
      categoria:"Zapatillas"
    },
    {
      id: 4,
      nombre: "Michael Jordan",
      precio: 50,
      imagen:"../img/jordan",
      categoria:"Zapatillas"
    },
  ];

 
  
  JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
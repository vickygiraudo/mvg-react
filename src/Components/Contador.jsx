function Contador() {
    const [contador, setContador] = useState(0);
  
    console.log (`El contador va por: ${contador}`);
    console.log (`El componente se renderizó`);
  
    return (
      <div>
        <button onClick={()=> setContador (contador+1)}> + </button>
        <h3> {contador} </h3>
        <button onClick={()=> setContador (contador-1)}> - </button>
      </div>
    )
  }
  
  export default Contador
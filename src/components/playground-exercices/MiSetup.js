function MiSetup(props) {

    return (
   
      <div>
   
          <ul>
   
    {props.equipo.map(item => <li> {item} </li>)}
   
          </ul>
   
      </div>
   
    );
   
   }
   
   export default MiSetup
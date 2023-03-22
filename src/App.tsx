import { useDispatch } from "react-redux";
import { useApp } from "./redux/hooks/userApp";
import { Rootstate } from "./redux/store";
//import das actions criada no reducers para utilizar aqui
import { useState } from "react";
//utilizando redux dps de montar toda estrutura
//type root state totalmente importante nesse processo!
// mais de um reducer utilizar um useSelector para cada tipo de reducer

// dispatch vira uma funcap pra ser executada

function App() {
  const dispatch = useDispatch();
  const user = useApp((state: Rootstate) => state.user);
  const theme = useApp((state: Rootstate) => state.theme);
  const [name, setName] = useState(user.name);

  return (
    <div>
      Meu nome é {name} e tenho {user.age} anos <br></br>
      Tema {theme.status}
      <hr></hr>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <button>alterar</button>
      <hr></hr>
      <button>Switch Theme</button>
    </div>
  );
}

export default App;

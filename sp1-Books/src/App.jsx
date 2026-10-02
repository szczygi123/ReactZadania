import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


function App() {
  const [tytul, setTytul] = useState("");
  const [autor, setAutor] = useState("");
  const [gatunek, setGatunek] = useState("");

  const UstawTytul = (t) => {
    setTytul(t.target.value);
  }

  const UstawAutor = (a) => {
    setAutor(a.target.value);
  }

  const UstawGatunek = (g) => {
    setGatunek(g.target.value);
  }

  const DodajKsiazke = (e) => {
    e.preventDefault();
    let zmianaGatunku = "";

    switch(gatunek){
      case "1": zmianaGatunku = "Powieść"; break;
      case "2": zmianaGatunku = "Kryminał"; break;
      case "3": zmianaGatunku = "Fantastyka"; break;
      case "4": zmianaGatunku = "Biografia"; break;
      default: "";
    }
    console.log("tytul: ", tytul, " autor: ", autor, " gatunek: ", zmianaGatunku)
  }
  return (
    <div>
      <form onSubmit={DodajKsiazke}>
        <div className="mb-3">
          <label htmlFor="tytulKsiazki">Tytuł książki</label>
          <input type="text" className="form-control" id="tytulKsiaki" value={tytul} onChange={UstawTytul}/>
        </div>

          <div className="mb-3">
          <label htmlFor="autorKsiazki">Autor książki</label>
          <input type="text" className="form-control" id="autorKsiazki" value={autor} onChange={UstawAutor}/>
        </div>

          <div className="mb-3">
          <label htmlFor="tytulKsiazki">Tytuł książki</label>

          <select className="form-select" id="gatunek" value={gatunek} onChange={UstawGatunek}>
            <option value=""></option>
            <option value="1">Powieść</option>
            <option value="2">Kryminał</option>
            <option value="3">Fantastyka</option>
            <option value="4">Biografia</option>
          </select>

        </div>

        <button type="submit" className="btn btn-primary">Dodaj</button>
      </form>
    </div>
  )
}

export default App

import Header from "./components/Header";
import Button from "./atoms/Button";
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Button text="Hola" />
        <Button type="secondary" text="Wenas" />
        <Button type="danger" text="Adió" />
      </div>
    </div>
  );
}

export default App;

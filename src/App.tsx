
import Header from './components/Header.tsx'
function App() {
  // You can write Typescript up here
  const name:string = "Joshua"
  const x:Boolean=false;
  return (
    <div className="App">
      <Header title='Jello' />
      <h1>Hello {name}!</h1>
      <h2>Ternary operator: {x ? 'ef' : 'sfd'}</h2>
    </div>
  );
}

export default App;

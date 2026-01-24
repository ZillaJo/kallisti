
import './App.scss'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'


function App() {
 

  return (
   <div className='app'>
     <section className="conteneur-acceuil">
      <div className="acceuil">
        <Navbar />
        <Home />
      </div>
     </section>
   </div>
  )
}

export default App;

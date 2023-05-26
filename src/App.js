import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Sobre from './components/Sobre'
import Home from './components/Home'
import Contato from './components/Contato'
function App() {
	return (
		<>
		<div className="App">
			<h1>Hello world!</h1>
			<Router>
				<Link to="/" >Home</Link>
				<Link to='/contato'>Contato</Link>
				<Link to='/sobre'>Sobre</Link>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/contato' element={<Contato />} />
					<Route path='/sobre' element={<Sobre />} />
				</Routes>
			</Router>
		</div>
		</>
	)
}
export default App
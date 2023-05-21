import './App.css'
import FirstComponent from './components/FirstComponent'
import Form from './components/Form'
function App() {
	return (
		<div className="App">
			<h1>Hello world!</h1>
			<FirstComponent name='otavio'/>
			<Form />
		</div>
	)
}
export default App
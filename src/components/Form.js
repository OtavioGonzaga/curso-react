import { useState } from "react"
export default function Form () {
	const [name, setName] = useState() 
	const [password, setPassword] = useState('')
	return (
		<>
		<form onSubmit={e => {
			e.preventDefault()
		}}>
			<label htmlFor="name">Nome:</label>
			<input type="text" key="name" name="name" onChange={e => setName(e.target.value)} />
			<label htmlFor="password" name="password">Senha:</label>
			<input type="password" name="password" key="password" onChange={e => {
				setPassword(e.target.value)
				window.document.querySelector('form').innerHTML += '<p>Senha fracaAaa</p>'
			}}/>
			{/* {password !== '' && password.length < 4 && name && (
				<p>Senha fraca</p>
			)} */}
			<button type="submit">Cadastrar</button>
		</form>
		</>
	)
}
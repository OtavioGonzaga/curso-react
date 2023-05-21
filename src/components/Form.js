import { useState } from "react"
function pwSize (passoword) {
	if (passoword.length < 4 && passoword.length !== 0 ) {
		return 'Senha fraca'
	}
	if (passoword.length === 0) {
		return ''
	}
	return "Senha forte"
}
export default function Form () {
	const [name, setName] = useState() 
	const [passoword, setPassword] = useState('')
	return (
		<>
		<form onSubmit={e => {
			e.preventDefault()
		}}>
			<label htmlFor="name">Nome:</label>
			<input type="text" id="name" name="name" onChange={e => setName(e.target.value)} />
			<label htmlFor="password" name="password" id="password">Senha:</label>
			<input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/>
			<p>{name + ', ' + pwSize(passoword)}</p>
			<button type="submit">Cadastrar</button>
		</form>
		</>
	)
}
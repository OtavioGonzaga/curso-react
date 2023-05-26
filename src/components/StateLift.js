export default function StateLift({setText}) {
	return (
		<>
		<input type="text" onChange={e => setText(e.target.value)} />
		</>
	)
}
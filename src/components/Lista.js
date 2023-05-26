export default function Lista ({posts}) {
	return (
		<>
		<h3>Postagens recentes:</h3>
		{	
			posts.map((e, index) => (
				<>
				<h3 key={e.id}>{e.desc}</h3>
				<p key={e.id + Math.random}>{e.content}</p>
				</>
			))
		}
		</>
	)
}
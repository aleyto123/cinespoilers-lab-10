import Card from './components/Card'

function App() {
  return (
    <main>
      <h1>CineSpoilerS 🎬</h1>
      
      {/* Primera tarjeta con tus datos */}
      <Card title="Rony Bellido" description="Frontend Developer" />
      
      {/* Segunda tarjeta con los datos del músico */}
      <Card title="Fe" description="Musician" />
      
    </main>
  )
}

export default App
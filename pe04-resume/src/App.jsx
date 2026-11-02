
import './App.css'



function Header() {
  return (
    <header className="site-header">
      <h1>Jayson Gatmaitan</h1>
    </header>
  )
}

function Bio() {
  return (
    <section className="main-column" aria-labelledby="main-column-heading">
      <h2 id="main-column-heading">Bio</h2>
      <p>Hello, City University of Seattle!</p>
    </section>
  )
}

function Image() {
  return (
    <aside className="side-column" aria-labelledby="side-column-heading">
      <h2 id="side-column-heading">Image</h2>
      <img src="https://picsum.photos/231/280" alt="Placeholder image" />
    </aside>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <h2>Contact Information</h2>
      <p>Phone: 123-456-7890</p>
      <p>Email: gatmaitanjaysonryan@cityuniversity.edu</p>
      <p>&copy; 2026 Jayson Gatmaitan</p>
      <p>
        <a href="https://www.cityu.edu/">City University of Seattle</a>
      </p>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />

      <main className="page-content">
        <Bio />

        <Image />
      </main>

      <Footer />
    </>
  )
}

export default App

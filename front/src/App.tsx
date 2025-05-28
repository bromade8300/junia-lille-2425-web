import Dashboard from '@pages/Dashboard';
import style from "./app.module.scss";

function App() {
  return (
    <div className={style.layout}>
      <header className={style.header}><h1 className={style.title}>My Todo App</h1></header>
      <main className={style.container}>
        <Dashboard />
      </main>
      <footer className={style.footer}>Junia - WEB - 2425</footer>
    </div>
  )
}

export default App

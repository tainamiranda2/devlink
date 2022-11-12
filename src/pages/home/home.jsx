import { Logo } from "../../components/logo";
import './home.css'
export default function Home(){
    return(
        <div className="home-container">
        <Logo/>
      <h1>Bem-vindo</h1>  
      <span>Veja mais link</span>
      <main className="links">
      <section className="link-area">
        <a href="#">
          <p className="link-text">Nosso canal </p>
        </a>
      </section>

      <section className="link-area">
        <a href="#">
          <p className="link-text">Nosso canal </p>
        </a>
      </section>
      </main>
        </div>
    )
}
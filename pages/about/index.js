import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import css from '../../styles/about.module.css'
const About = () =>{
    return(
        <div>
            <h1>about</h1>
            <p  className={css.text}>list</p>
            <Link href="/about/bmw">
                <button>mobil</button>
            </Link>
            <Link href="/about/mercedes">
                <button>mobil</button>
            </Link>
            <Link href="/about/ferari">
                <button>mobil</button>
            </Link>
            </div>
    )
}

export default About
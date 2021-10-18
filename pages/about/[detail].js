import {useRouter } from "next/router"

const Detail = () =>{
    const router = useRouter()
    return(
        <div><h1>Mobil :{router.query.detail}</h1></div>
    )
}
export default Detail
import axios from "axios"
export async function getStaticProps(context) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.data;

    return{ 
        props: {dataUsers: data},
    }
}
const Ssg = (props) => {
    return (
        <div>
            <h1>Static side generation</h1>
            <div>{
                props.dataUsers.length <= 0 ? (
                    <div>loading</div>
                ):(
                    props.dataUsers.map((e, i) => 
                        <div key={i}>{e.name}</div>
                    )
                )
                }</div>
        </div>
    )
}

export default Ssg
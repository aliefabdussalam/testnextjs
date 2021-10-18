import axios from "axios"
export async function getServerSideProps(context) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.data
  
    return {
      props: {
          dataUsers: data
      },
       }
}
const Ssr = (props) => {
    return(
        <div>
            <h1>Server side rendering</h1>
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

export default Ssr
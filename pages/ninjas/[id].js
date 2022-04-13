export const getStaticPaths = async () => {
    //tells next how many html pages need to be made based on our data
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(ninja => {
        return {
            params: { id:ninja.id.toString()}
        }
    })

    return {
        paths: paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {
    //this function will be run for each HTML page, generates a page for each individual item
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
        props: {ninja:data}
    }
}

const Details = ({ ninja }) => {
    return ( 
        <div>
            <h1>{ ninja.name }</h1>
            <p>{ ninja.email }</p>
            <p>{ ninja.website }</p>
            <p>{ ninja.address.city }</p>
        </div>
     );
}
 
export default Details;
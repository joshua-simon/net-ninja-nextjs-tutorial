import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
//this function is run at build time, as our app is built.
//at this point we can put in a fetch request for any data that we might need
//This function *does not* run in the browser

const res = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await res.json()
//we have data, but how do we use it inside component?
// => we return a value from this function: an object with a props property,
//with values that we want to be accessible inside our component as a prop

return {
    props: {ninjas:data}
}
//this data is now available to the component and is attached to the props
}

const Ninjas = ({ ninjas }) => {
    return (  
    <div>
        All Ninjas
        {ninjas.map(ninja => (
            <div key = {ninja.id}>
                <a className= {styles.single}>
                    <h3>{ ninja.name }</h3>
                </a>
            </div>
        ))}
    </div>
    );
}
 
export default Ninjas;
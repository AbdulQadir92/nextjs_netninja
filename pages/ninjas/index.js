import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            ninjas: data
        }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map((ninja) => (
                <div key={ninja.id}>
                    <h3>
                        <Link href={'/ninjas/' + ninja.id} className={styles.single}>{ninja.name}</Link>
                    </h3>
                </div>
            ))}
        </div>
    )
}

export default Ninjas
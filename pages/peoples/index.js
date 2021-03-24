import styles from '../../styles/Peoples.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: { peoples: data }
  }
}

const People = ({ peoples }) => {
  return ( 
    <div>
      <h1>All Peoples</h1>
      {peoples.map(people => (
        <Link href={'/peoples/' + people.id} key={people.id}>
          <a className={styles.single}>
            <h3>{people.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default People;
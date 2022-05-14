import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'
import { useSession, signIn, signOut } from "next-auth/react"
import styles from './styles.module.scss';

export function SingInButton(){
    const {data : session} = useSession();

    console.log(session)

    return session ? (
        <button type='button' className={styles.singInButton} onClick={()=> signOut()}>
            <FaGithub color="#04d361"/>
            Arthur Bassi
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button type='button' className={styles.singInButton} onClick={()=> signIn()}>
            <FaGithub color="#eba417"/>
            Sing in with Github
        </button>
    );
}
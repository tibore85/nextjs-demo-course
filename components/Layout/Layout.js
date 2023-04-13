import styles from './Layout.module.scss';

function Layout(props) {
    return (
        <>
            <header>
                <nav></nav>
            </header>
            <main>
                <div className={styles.container}>{props.children}</div>
            </main>
            <footer></footer>
        </>
    )
}

export default Layout;
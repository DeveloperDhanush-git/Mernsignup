import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>DHANUSH.COM</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div className={styles.name}><h1>WELCOME TO AUTHENTICATION IN MERN BY DHANUSH</h1></div>
		</div>
	);
};

export default Main;
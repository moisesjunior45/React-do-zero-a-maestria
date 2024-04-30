import styles from './carDetails.module.css';

const CarDetails = ({ marca, cor, km, carroNovo }) => {
    return (
        <div>
            <h1 className={styles.meu_titulo}>Detalhes do carro</h1>
            <p className={styles.detalhes}>Marca: {marca}</p>
            <p className={styles.detalhes}>Cor: {cor}</p>
            <p className={styles.detalhes}>km: {km}</p>

            {carroNovo && <p className={styles.carro_novo}>Este carro é novo!</p>}
        </div>
    )
}

export default CarDetails
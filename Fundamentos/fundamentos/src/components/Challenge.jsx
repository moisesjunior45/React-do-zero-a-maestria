const Challenge = () => {

    let numero1 = 4;
    let numero2 = 10;
    const handleSomar = () => {
        console.log(numero1 + numero2)
    }

    return (
        <div>
            <div>
                <h1>Desafio</h1>
                {numero1}, {numero2}
            </div>

            <button onClick={handleSomar}>Somar</button>
        </div>
    )
}

export default Challenge;
const Desafio4 = ({ nome, idade, profissao}) => {
  return (
    <div>
        <h2>Dados da pessoa</h2>
        <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissão: {profissao}</li>
      </ul>
      {idade >= 18 && <p>Pode tirar a carteira</p>}
    </div>
  )
}

export default Desafio4
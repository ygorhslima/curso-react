export default function Dados(props){
    const n1 = 10
    const n2 = 5
    return(
        <>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Curso: {props.curso}</p>
            <p>A soma entre {n1} e {n2} é {props.somar(n1,n2)}</p>
        </>
    )
}

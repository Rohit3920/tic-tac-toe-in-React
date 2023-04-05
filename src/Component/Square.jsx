

function Square(props){
    console.log(props)
    return (
        <div>

            <table border ="1">
                <thead >
                    <td>Name</td>
                    <td>contact</td>
                </thead>

                <tr>
                    <td>{props.name}</td>
                    <td>{props.value}</td>
                </tr>
            </table>
        </div>
    )
}
export default Square
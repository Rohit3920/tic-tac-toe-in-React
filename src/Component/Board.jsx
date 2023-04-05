import Square from "./Square"

export default function board() {
    return <div>
        <h1>hellp user</h1>

        <div className="card">
            <Square value = {0}/>
            <Square value = {1}/>
            <Square value = {2}/>

        </div>
        <div className="card">
            <Square value = {3}/>
            <Square value = {4}/>
            <Square value = {5}/>

        </div>
        <div className="card">
            <Square value = {6}/>
            <Square value = {7}/>   
            <Square value = {8}/>

        </div>
    </div>
}
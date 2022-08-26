const Main = (props) => {
    //console.log (props.saludo);
    return (
        <main className="Main">
            <h2> KUSTOM</h2> 
            <h3>{props.saludo} </h3>
        </main>
    )
}

export default Main
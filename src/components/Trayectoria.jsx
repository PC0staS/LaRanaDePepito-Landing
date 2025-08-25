function Trayectoria({ titulo, texto}){
    return(
        <div className="col-6 col-md-3">
                <div className="metric-block bg-white rounded-3 shadow-sm">
                    <h3>{titulo}</h3>
                    <p>{texto}</p>
                </div>
            </div>
    )
}
export default Trayectoria;
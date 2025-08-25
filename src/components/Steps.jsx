function Steps({ num, text }){
    return (
        <div className="process-step">
            <span className="num">{num}</span>
            <p>
                {text}
            </p>
        </div>
    )
}
export default Steps;


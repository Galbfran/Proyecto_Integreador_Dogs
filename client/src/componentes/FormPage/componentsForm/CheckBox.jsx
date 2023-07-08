

const CkeckBox = ({ check , handlerCkeckChange }) => {
    return(
        <>
            <input type="checkbox" value={check}  onChange={handlerCkeckChange}/>
            <label>{check}</label>
        </>
    )
}

export default CkeckBox;
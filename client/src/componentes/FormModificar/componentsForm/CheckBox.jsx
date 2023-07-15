

const CkeckBox = ({ check , handlerCkeckChange }) => {
    return(
        <>
            <input type="checkbox" value={check}  onChange={handlerCkeckChange}/>
            <label htmlFor={check}l>{check}</label>
        </>
    )
}

export default CkeckBox;
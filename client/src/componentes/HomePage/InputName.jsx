
const InputName = ({ handlerName, name, handlerChange }) => {
    return (
        <div>
        <input type="text" value={name} onChange={handlerChange} />
        <button onClick={handlerName}>buscar por nombre</button>
        </div>
    );
};

export default InputName;
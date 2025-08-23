function Button(props){
    return (
        <button {...props} className="p-3 bg-neutral-800 rounded-md font-bold cursor-pointer">
            {props.children}
        </button>
    )
}

export default Button
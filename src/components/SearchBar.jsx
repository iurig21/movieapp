import { useState } from "react"

function SearchBar({SearchMovies}){

    const [inputValue,setInputValue] = useState("");

    const HandleSearchMovies = () => {
        if(!inputValue.trim()){
            return alert("Campo obrigatório!");
        }
        SearchMovies(inputValue);
    }

    return (
        <div className="w-full text-white flex gap-2">
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" placeholder="Search for movies..." className="p-4 w-full bg-neutral-900 rounded-sm" onKeyDown={(event) => event.key === "Enter" ? HandleSearchMovies() : null }/>
            <button onClick={HandleSearchMovies} className="bg-red-700 p-4 cursor-pointer rounded-sm"> Search </button>
        </div>
    )
}

export default SearchBar
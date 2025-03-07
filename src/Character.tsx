import {useEffect, useState} from "react";
import {data} from "./Data.ts";

export default function Character() {

    const [randm, setRandm] = useState<any[]>([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        data().then(setRandm)
    }, []);

    const filteredCharacters = randm.filter((char) =>
        char.name.toLowerCase().includes(search.toLowerCase()))

    return (<div>
                <h1>Rick and Morty Character</h1>
                <input
                    type="text"
                    placeholder="Search for a character ..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <ul>
                    {filteredCharacters.map((char) => (
                        <li key={char.id}>{char.name}</li>
                    ))}
                </ul>
        </div>
    )
}
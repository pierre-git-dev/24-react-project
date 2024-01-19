/*
Appel de la fonction input a la deuxieme div qui racourci le code a écrire
*/
import { useRef } from "react";
import Input from "./Input.jsx"
import Button from "./CustomButton.jsx"




export default function NewProject({ onAdd }) {
    // déffinire les const avec useRef 

    const titleRef = useRef();
    const descrRef = useRef();
    const dateRef = useRef();

    // créer la fonction de récupération des entrées. 
    // la const = laconstcréeraudessus . current . la valeur entré

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescr = descrRef.current.value;
        const enteredDate = dateRef.current.value;

        // ...validation du formulaire...
        onAdd({
            title: enteredTitle,
            description: enteredDescr,
            date: enteredDate,
        })

    }


    return <div className="w-[35rem] mt-16 " >
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button
                    className="text-stone-800 hover:text-stone-950"
                    onClick={handleSave}>
                    Save
                </button>
            </li>
            <li>
                <button
                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                    Cancel
                </button>
            </li>
        </menu>
        {/* <div>
            <p>
                <label>Title</label>
                <Input />
                <label>Description</label>
                <Input />
                <label>date</label>
                <Input />
            </p>
        </div>
        
        ajouté au input le ref lié au const*/}
        <div>
            <Input type="text" ref={titleRef} label={"Titre"} />
            <Input ref={descrRef} label={"Description"} textarea />
            <Input type="date" ref={dateRef} label={"Date"} />

        </div>
    </div>
};
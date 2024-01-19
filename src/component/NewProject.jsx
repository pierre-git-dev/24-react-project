/*
Appel de la fonction input a la deuxieme div qui racourci le code a écrire
*/
import { useRef } from "react";
import Input from "./Input.jsx";
import Button from "./CustomButton.jsx";
import Modal from "./modal.jsx";



export default function NewProject({ onAdd, onCancel }) {
    // déffinire les const avec useRef 
    const modal = useRef();


    const titleRef = useRef();
    const descrRef = useRef();
    const dateRef = useRef();

    // créer la fonction de récupération des entrées. 
    // la const = laconstcréeraudessus . current . la valeur entré

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescr = descrRef.current.value;
        const enteredDate = dateRef.current.value;


        // vérification des champs
        if (enteredTitle.trim() === '' ||
            enteredDescr.trim() === '' ||
            enteredDate.trim() === ''
        ) {
            // ouverture message ou page d'erreur  et le return avant qu'il lance la suite du code si une erreur est trouver
            modal.current.open();
            return;
        }

        // ...validation du formulaire...
        onAdd({
            title: enteredTitle,
            description: enteredDescr,
            date: enteredDate,
        })

    }
    return (
        <>
            <Modal ref={modal} buttonCaption="close">

            </Modal>


            <div className="w-[35rem] mt-16 " >
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
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={onCancel}>
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
        </>
    )
};
import { forwardRef } from "react";
/* 
author:
date:
revision:2

création d'une fonction pour éviter la répétition du code
le rendre plus court lors de sont appel dans le fichier newPorjet.jsx
*/

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {

    const classes =
        "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"


    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">
                {label}
            </label>
            {textarea ? (
                <textarea ref={ref} className={classes}  {...props} />
            ) : (
                <input ref={ref} className={classes} {...props} />
            )}
        </p>
    );
})


export default Input;
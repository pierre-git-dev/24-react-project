import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Children } from "react";
import Button from "./CustomButton";

const Modal = forwardRef(function Modal({ Children, buttonCaption }, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    }
    );

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {Children}
            <form method="dialog" className="mt-4 text-center">
                <h2 className=" text-xl font-bold text-stone-700 my-4 "> UNE ERREUR EST Survenue</h2>
                <p className='text-stone-550 mb-4'> Oups,  </p>
                <p className='text-stone-550 mb-4'> merci de vérifier les champs saisis.</p>
                <Button>
                    {buttonCaption}
                </Button>
            </form>
        </dialog >,
        document.getElementById('modal-root')
    );
});
export default Modal;
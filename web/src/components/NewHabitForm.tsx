import { Check } from "phosphor-react";

export function NewHabitForm(){
    return (
        <form action="">
            <label htmlFor="title">
                Qual seu comprometimento?
            </label>

            <input 
                type="text" 
                placeholder="ex.: Exercícios, dormir bem, etc ..."
                autoFocus
            />

            <label htmlFor="">
                Qual a recorrência?   
            </label>

            <button type="submit">
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>
    )
}
'use client'
import {useFormStatus} from 'react-dom'
function FormSubmitButton() {
    const {pending} = useFormStatus()
    return (<button disabled={pending} type="submit">{pending?"Submitting...":"Share Meal"}</button>)
}

export default FormSubmitButton

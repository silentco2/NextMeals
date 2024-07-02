'use server'
import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"
const isNullorEmpty = (str)=> !str || str.trim() === ''
export async function shareMeal(prevFormState,formData){
    const meal = {
        creator:formData.get('name'),
        creator_email:formData.get('email'),
        title:formData.get('title'),
        summary:formData.get('summary'),
        instructions:formData.get('instructions'),
        image:formData.get('image')
    }
    if(
        isNullorEmpty(meal.title) ||
        isNullorEmpty(meal.creator) ||
        isNullorEmpty(meal.instructions) ||
        isNullorEmpty(meal.summary) ||
        isNullorEmpty(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    )
    return {message:'invalid input'}
    await saveMeal(meal)
    revalidatePath('/meals')
    redirect('/meals')
}
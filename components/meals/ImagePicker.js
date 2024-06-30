'use client'
import { useRef, useState } from 'react'
import classes from './ImagePicker.module.css'
import Image from 'next/image'
function ImagePicker({label,name}) {
    const imageInput = useRef()
    const [pickedImage,setPickedImage] = useState()
    function handleClick(){imageInput.current.click()}
    function handleChange(event){
        console.log(event.target.value)
        const file = event.target.files[0]
        if (!file) return
        const fileReader = new FileReader()
        fileReader.onload = ()=>{setPickedImage(fileReader.result)}
        fileReader.readAsDataURL(file)
        
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {
                        pickedImage?
                        <Image src={pickedImage} alt='you selected this image' fill/>
                        :<p>No image has been selected yet</p>
                    }
                </div>
                <input className={classes.input} ref={imageInput} onChange={handleChange} type='file' id={name} name={name} accept='image/png image/jpeg'/>
                <button className={classes.button} type='button' onClick={handleClick}>Pick an Image</button>
            </div>
        </div>
    )
}

export default ImagePicker

import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'
const db = sql('./meals.db')
export async function getMeals(){
    const data = await db.prepare('SELECT * FROM meals').all()
    return data
}
export function getMeal(slug){
    const data = db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug)
    return data
}
export async function saveMeal(meal){
    meal.slug = slugify(meal.title,{lower:true})
    meal.instructions = xss(meal.instructions)
    const extention = meal.image.name.split('.').pop()
    const fileName = `${meal.slug}.${extention}`
    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()
    stream.write(Buffer.from(bufferedImage),(error)=>{if(error)throw new Error("failed to save image")})
    meal.image = `/images/${fileName}`
    db.prepare(`
        INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (@title,@summary,@instructions,@creator,@creator_email,@image,@slug)
    `).run(meal)
}

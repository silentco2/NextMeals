import sql from 'better-sqlite3'
const db = sql('./meals.db')
export async function getMeals(){
    const data = await db.prepare('SELECT * FROM meals').all()
    return data
}
export function getMeal(slug){
    const data = db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug)
    return data
}

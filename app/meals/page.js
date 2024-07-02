import Link from 'next/link'
import classes from './page.module.css'
import { Suspense } from 'react'
import Meals from '@/components/meals/Meals'

export const metadata = {
  title: 'Meals',
  description: 'Find food which takes you to the next level',
};
async function mealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meals, made <span className={classes.highlight}>by you</span></h1>
                <p>Find out new recpies and try it for yourself</p>
                <p className={classes.cta}><Link href="/meals/share">Share your recipe</Link></p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals</p>}>
                    <Meals/>
                </Suspense>
            </main>
        </>
    )
}

export default mealsPage

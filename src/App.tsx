
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Nav from './components/Nav'
import TechCarts from './components/technologies/TechCarts'
import type { ITechProps } from './Type'

function App() {

const techFetch = async():Promise<ITechProps[]> => {
  const res = await fetch('/data.json');
  const data = await res.json()
  return data;
}


  return (
    <>
     <Nav></Nav>
     <Banner></Banner>


     <Suspense fallback={<h2>Loading...</h2>}>

          <TechCarts techFetch ={techFetch()} ></TechCarts>

     </Suspense>

     <Footer></Footer>
    </>
  )
}

export default App

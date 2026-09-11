
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Nav from './components/Nav'
import TechCarts from './components/technologies/TechCards'
import type { ITechProps } from './Type'




const techFetch = async():Promise<ITechProps[]> => {
  const res = await fetch('/data.json');
  const data = await res.json()
  return data;
}

function App() {


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

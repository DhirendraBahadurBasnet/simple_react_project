import './App.css'
import Banner from './components/Banner'
import BlogSection from './components/BlogSection'
import Category from './components/Category'
import FeatureSection from './components/FeatureSection'
import FeatureSectionBreakfast from './components/FeatureSectionBreakfast'
import FeatureSectionFruits from './components/FeatureSectionFruits'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <main>
      <Nav/>
      <Hero/>
      <Category/>
      <FeatureSectionFruits/>
      <FeatureSectionBreakfast/>
      <Banner/>
      <BlogSection/>
      <Newsletter/>
      <FeatureSection/>
      <Footer/>
    </main>
  )
}

export default App

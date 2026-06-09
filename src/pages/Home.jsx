import React from 'react'
import Hero from '../components/Hero'
import CoursesGrid from '../components/CoursesGrid'
import HowItWorks from '../components/HowItWorks'
import MentorShowcase from '../components/MentorShowcase'

export default function Home() {
  return (
    <>
      <Hero />
      <CoursesGrid />
      <HowItWorks />
      <MentorShowcase />
    </>
  )
}

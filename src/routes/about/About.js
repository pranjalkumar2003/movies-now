import React from 'react'
import './about.css'

const About = ({ theme }) => {
  return (
    <section className={`about ${theme}`}>
      <h2>About us</h2>
      <p>
        Welcome to Movies Now, founded in 2023 with the goal of providing
        comprehensive information about all types of movies. We understand the
        passion and dedication of movie lovers and strive to keep our audience
        informed and up-to-date with the latest developments in the film
        industry. Our website is designed to be user-friendly and easy to
        navigate, with a variety of tools to help users discover and learn about
        new movies. You can check ratings, read detailed information about
        movies, and search for movies by title, genre or even by the release
        date. Our website offers a wide range of genres, including action,
        adventure, comedy, drama, fantasy, horror, romance, and science fiction.    </p>
     
    </section>
  )
}

export default About

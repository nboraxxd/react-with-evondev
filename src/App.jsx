import React from 'react'
import './App.scss'
import CardList from './components/card/CardList'
import Form from './components/form/Form'
import FormCustomHook from './components/form/FormCustomHook'
import MovieSearchApp from './components/movieSearch/MovieSearchApp'
import UsernameFormik from './components/form/UsernameFormik'
import MyFormik from './components/form/MyFormik'
import RegisterFormik from './components/form/RegisterFormik'
import MyFormHook from './components/form/MyFormHook'

function App() {
  // return <MyFormik />
  return <MyFormHook />
}

export default App

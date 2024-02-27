import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import PostList from "./components/PostList"
import Post from "./components/Post"
import CreatePost from "./components/CreatePost"
import { useState } from "react"
import PostListProvider from "./store/post-list-store"
import { Outlet } from "react-router-dom"

function App() {

  const [selectedTab,setselectedTab] = useState('Home')
  return (
    <PostListProvider>    
    <div className="main-container">
    <Sidebar />
    <div className="content">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </div>
    </PostListProvider>

  )
}

export default App

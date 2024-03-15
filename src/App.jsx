import Header from './Components/Header/Header'
import './App.css'
import Blog from './Components/Blogs/Blog'
import Bookmark from './Components/bookmarks/Bookmark'

function App() {
  
  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <div className='flex flex-col lg:flex-row'>
          <Blog></Blog>
          <Bookmark></Bookmark>
        </div>
      </div>
    </>
  )
}

export default App

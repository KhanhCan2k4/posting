import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import HomePage from './views/pages/Home'
import PostPage from './views/pages/Post'
import CreatePostPage from './views/pages/CreatePost'
import UpdatePostPage from './views/pages/UpdatePost'

function App() {
  

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route index element={<HomePage />}  />
          <Route path='/post' element={<PostPage />}  />
          <Route path='/create-post' element={<CreatePostPage />}  />
          <Route path='/update-post' element={<UpdatePostPage />}  />
          <Route path='/*' element={<Navigate to={"/"} />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import './css/goblin.css'
import './App.css'
import './css/button.css'
import './css/Font.css'
import './css/inputfield.css'
import Posts from './components/Posts'
import AddComment from './components/AddComment'

const URL = "https://script.google.com/macros/s/AKfycbzDfghfZKU4Y49uKHEl4xxKLWuvBw_TCwBviW-Mu1OXJmZJH2-x_KdZA9ollkdljFBPoA/exec"
function App() {


  return (
    <>
      <section>
        <h1>Welcome to a GOBLIN Forum</h1>
      </section>
      
      <section>
        <h2>comments appear here</h2>
        <Posts URL={URL}></Posts>
      </section>
      <section>
        <h2>Add comment here</h2>
        <AddComment URL={URL}></AddComment>
      </section>
      <section>
        <h3>Enjoy</h3>
        <p>Disappearces of comments are totally normal</p>
      </section>
    </>
  )
}

export default App

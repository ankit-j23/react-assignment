import FreqQuestionsInFooter from "./compoents/FreqQuestionsInFooter"
import Navbar from "./compoents/Navbar"
import MyStates from "./context/MyStates"
import InternshipHomepage from "./pages/InternshipHomepage"

function App() {

  return (
    <div>
    <MyStates>

    <Navbar/>
    <InternshipHomepage/>

    <FreqQuestionsInFooter/>
    </MyStates>
    </div>
  )
}

export default App

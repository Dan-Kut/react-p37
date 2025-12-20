
import './App.css'
import Book from './components/Book'
// import Card from './components/Card'
// import Information from './components/Information_comp'

const App = () => {
  return (
  <>
  <Book image='https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png' name="spider-man" price={2000} characteristics='this is a very good book, and it is 200 pages long' ISBN={449854047} >
   <div>Date of publishment</div>
   {/* <button>Order</button> */}
  </Book>



     
  </>
  )
}

export default App


// that was in the return
 {/* <Card width="200px" height="200px" variant={"primary"}>
        <br />
        <button style={{ marginTop: "20px" }}>Push</button>
      </Card> */}
  {/* <Information name = 'Peter' second_name='Ban' surname='Parker' phone_number='+296729684' email='peter5_park2@gmail.com'></Information> */} 

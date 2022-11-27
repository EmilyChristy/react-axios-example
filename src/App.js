import "./App.css";
import axios from "axios";

function App() {
  var data = {
    title: "Blue bike",
    price: 145.99,
    description: "It's an amazing product",
    image: "https://i.pravatar.cc",
    category: "toys",
  };

  const postData = () => {
    // POST request for products from fakestore API
    axios({
      method: "post",
      baseURL: "https://fakestoreapi.com",
      url: "/products",
      payload: data,
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          POST using <code>Axios</code>.
        </p>
      </header>

      <p>
        <button onClick={postData}>POST data</button>
      </p>
    </div>
  );
}

export default App;

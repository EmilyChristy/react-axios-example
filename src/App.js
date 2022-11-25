import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(null);

  //const apiUrl = "https://fakestoreapi.com";

  const getData = () => {
    // GET request for products from fakestore API
    axios({
      method: "get",
      baseURL: "https://fakestoreapi.com",
      url: "/products",
    })
      .then(function (response) {
        // handle success
        console.log(response);
        setProducts(response.data);
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
          GET using <code>Axios</code>.
        </p>
      </header>

      <p>
        <button onClick={getData}>GET data</button>
      </p>
      <ul>
        {products?.map((x) => {
          return <li key={x.id}>{x.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

// axios
// .create({
//   headers: { Authorization: `Bearer ${response.accessToken}` },
// })
// .get(props.endpoint)
// .then(function (response) {
//   console.log("Request response:", response);
//   var result: string = JSON.stringify(
//     props.printResult(response.data)
//   );
//   console.log("Processed result: " + result);
//   setData(result);
// })
// .catch(function (error) {
//   setError("Error fetching data: " + error.message);
//   console.error(error);
// })
// .then(function () {
//   // always executed
//   setLoading(false);
// });

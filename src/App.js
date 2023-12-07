import logo from "./logo.svg";
import "./App.css";
import HomeAPI from "./api/home";

function App() {
  async function getUsers() {
    const result = await HomeAPI.getUsers();
    console.log(result);
  }

  async function postUser(params) {
    const result = await HomeAPI.postUser(params);
    console.log(result);
  }

  return (
    <div className="App">
      <button onClick={(e) => getUsers()}>getUsers</button>
      <button
        onClick={(e) =>
          postUser({
            fullName: "dqer",
            password: 1242152142,
            email: "dksfajk;@fks;adf",
          })
        }
      >
        postUser
      </button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

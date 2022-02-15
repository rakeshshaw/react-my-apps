import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//create react component
// const App = () => {

//   keywordSubmitHandler = (keyword) => {
//     console.log(keyword);
//   };

//   return (
//     <div className="ui container" >
//       <SearchBar onKeywordSubmit={this.keywordSubmitHandler} />
//     </div>
//   );
// };

// take the react omponent and show it on the browser
ReactDOM.render(<App />, document.querySelector("#root"));

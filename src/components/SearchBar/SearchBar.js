import React, { useState } from "react";

//------Using Class component------------
// class SearchBar extends React.Component {
//   state = { keyword: "" };

//   handleInputChange = (event) => {
//     this.setState({ keyword: event.target.value });
//   }

//   handleFormSubmit = (event) => {
//       event.preventDefault();
//       this.props.onKeywordSubmit(this.state.keyword);
//   }

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form className="ui form" onSubmit={this.handleFormSubmit}>
//           <div className="field">
//             <label>Video Search</label>
//             <input type="text" value={this.state.keyword} onChange={this.handleInputChange} />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

//------Using Functional component------------
const SearchBar = ({ onKeywordSubmit }) => {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onKeywordSubmit(keyword);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={keyword} onChange={handleInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

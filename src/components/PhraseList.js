import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Link } from "react-router-dom";

import Phrase from "./Phrase";
const PhraseList = ({ phrases }) => (
  <>
    <ul className="list-group mb-4">
      {phrases.map((item, i) => (
        <Phrase key={i} phrase={item.phrase} translation={item.translation} />
      ))}
    </ul>
  </>
);

export default PhraseList;
// // class PhraseList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.currentPage = 1;
//     this.postsPerPagePage = 2;
//   }

//   componentDidMount() {}

//   render() {
//     return (
//       <>
//         <ul className="list-group mb-4">
//           {this.props.phrases.map((item, i) => (
//             <Phrase
//               key={i}
//               phrase={item.phrase}
//               translation={item.translation}
//             />
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

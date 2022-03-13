import React from "react";


function Main(props)  {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h2>The following are some fun facts about the most used library and why you should
         also consider learning it
      </h2>
      <ul className="main-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers millions of web apps around the world</li>
        <li>Has high community supports</li>

      </ul>
    </main>
  )
}

export default Main
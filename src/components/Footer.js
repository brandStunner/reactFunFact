import React from "react";

function Footer(props) {
  return (
    <footer className={props.darkMode ? "dark" : ""}>
        <p>© A 2022 Kofi Brandful Copyright</p>
    </footer>
  )
}

export default Footer
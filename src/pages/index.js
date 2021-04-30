import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: 'purple', fontSize: '72px' }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby and friends!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
  );
}

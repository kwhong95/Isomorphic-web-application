import React from "react";
import Layout from "../../components/Layout";
import Hero from "./Hero";
import { Link } from "react-router-dom";

const Home: React.FunctionComponent = () => {

  return (
    <Layout hero={<Hero />}>
      <div>
        <h2>Popular things to rent</h2>
        <div>
          <Link to="/tools">
            <span>Tools</span>
          </Link>
          <Link to="/books">
            <span>Books</span>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home;

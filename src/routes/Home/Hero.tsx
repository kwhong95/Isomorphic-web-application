import React, { FunctionComponent } from "react";

const Hero: FunctionComponent = () => {
  return (
    <div>
      <h2>Rent Anything You Want</h2>
      <p>From people around you</p>
      <form>
        <input
          type="search"
          placeholder="I want to rent ..."
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default Hero;

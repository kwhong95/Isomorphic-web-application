import React, {FunctionComponent} from "react";
import Header from "../Header";

interface LayoutProps {
  hero: React.ReactNode;
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = (
  { hero, children }
) => {
  return (
    <div>
      <Header>{hero}</Header>
      <main>
        {children}
      </main>
      <footer>
        <span>© Company Name</span>
      </footer>
    </div>
  )
}

export default Layout;

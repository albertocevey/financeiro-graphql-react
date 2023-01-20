import { Link, Outlet } from "react-router-dom";

export default function Route() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>          
          <nav>
            <ul>
              <li>
                <Link to={`/cartao/`}>Cartão</Link>
              </li>
              <li>
                <Link to={`/cartoes/`}>Cartões</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
        <Outlet />
        </div>
      </>
    );
  }
import { Outlet} from "react-router-dom";
import AppBar from "../../share/components/bars/AppBar";
export default function Home() {
    return (
        <div id='div-home'>
          {/* <h2>Home Page - Education Project</h2> */}
          <div id='div-appbar'>
              <AppBar />
          </div>
          <div id="detail">
              <Outlet />
          </div>
      </div>
    );
}
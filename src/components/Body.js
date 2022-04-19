/** @format */

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
} from "react-router-dom";
import Admin from "../pages/admin/Admin";
import { sideBar } from "../router/sideBarPath";
function Body() {
  return (
    <>
      <Routes>
      <Route path="" element={<Admin />} />
        {sideBar.map((item, index) => {
          return (
            <>
              {item.type === 1 ? (
                <Route path={item.url} element={item.element} />
              ) : (
                <Route path={item.url}>
                  {item.chil.map((item2, index) => {
                    return (
                      <Route
                        path={item2.url}
                        element={item2.element}
                      />
                    );
                  })}
                </Route>
              )}
            </>
          );
        })}
      
      </Routes>
    </>
  );
}
export default Body;

import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes, privateRoutes } from './routes';
import NotFound from './pages/NotFound';

function App() {
  const currentUser = {};
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout: any = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
          {currentUser &&
            privateRoutes.map((route, index) => {
              let Layout: any = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              const Page = route.component;

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                ></Route>
              );
            })}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

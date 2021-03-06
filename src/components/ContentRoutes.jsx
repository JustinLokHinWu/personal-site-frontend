import { React } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import PersonalSiteArticle from './Articles/PersonalSiteArticle';
import ActganArticle from './Articles/ActganArticle';
import { actganBackendURL } from './ApiClient';
import MissingPage from './MissingPage';
import Page from './Page';
import PageContent from './PageContent';

const routes = [
  {
    path: '/demos/actgan',
    name: 'Actgan',
    component:
  <ActganArticle
    backendURL={actganBackendURL}
  />,
  },
  {
    path: '/articles/personal-site',
    name: 'Personal Site',
    component:
  <PersonalSiteArticle />,
  },
  {
    path: '*',
    name: 'Not Found',
    component:
  <MissingPage />,
  },
];

function ContentRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          key={location.key}
          exact
          path="/"
          element={(
            <Page>
              <Home />
            </Page>
   )}
        />
        {routes.map(({ path, component }) => (
          <Route
            key={location.key}
            exact
            path={path}
            element={(
              <Page initial="outRight" exit="outRight">
                <PageContent>
                  {component}
                </PageContent>
              </Page>
            )}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default ContentRoutes;

import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { routes } from '../router/routes';

const AppRouter = () => {
   return (
      <>
         <Switch>
            {routes.map((route) => {
               return <Route path={route.path} component={route.component} exact={route.exect} key={route.path} />
            })}

            <Redirect to='/' />
         </Switch>
      </>
   );
};

export default AppRouter;
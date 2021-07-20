import React from 'react'
import { Route} from "react-router-dom";
import RoutesLinks from '../../utils/Routes';
import Login from '../Authentication/Login';
import Home from '../Home/Home';
import Results from '../Results/Results';
import Videos from '../videos/Videos';
const  Routes = () => {
    const freeLinks = [
        {id:1,"component":<Videos />,"path":RoutesLinks.Videos,"exact":true},
        {id:2,"component":<Home />,"path":RoutesLinks.Home,"exact":true},
        {id:3,"component":<Results />,"path":RoutesLinks.results,"exact":true},
        
    ]
    const unauthorizedLinks = [
        {id:1,"component":<Login />,"path":RoutesLinks.Login,"exact":true}
    ]
    return (
        <div>
            <section>
                {
                    freeLinks.map(route => (
                        <Route path={route.path} exact={route.exact} key={route.id}>
                        {route.component}
                        </Route>
                    ))
                }
                {
                    unauthorizedLinks.map(route => (
                        <Route path={route.path} exact={route.exact} key={route.id}>
                            {route.component}
                        </Route>
                    ))
                }
            </section>
        </div>
    )
}

export default Routes;

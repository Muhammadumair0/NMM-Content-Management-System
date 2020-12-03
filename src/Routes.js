import React from 'react';
import { Route, Switch} from "react-router-dom";
// Pages
import Posts from "./components/pages/Posts";
import NoPageFound from './components/NoPageFound';
import Users from './components/pages/Users';
import Pages from './components/pages/Pages';
import Media from './components/pages/Media';
import Login from './components/pages/Login';
import PostsCategories from './components/pages/Posts.Categories';
import PostsTags from './components/pages/Posts.Tags';
import PagesCategories from './components/pages/Pages.Categories';
import FileEditor from './components/pages/FileEditor';

const Routes = () => {
        return (
                <Switch>
                    <Route path={"/"} exact component={Login}/>
                    <Route path={"/posts/all-posts"} exact component={Posts}/>
                    <Route path={"/posts/categories"} exact component={PostsCategories}/>
                    <Route path={"/posts/tags"} exact component={PostsTags}/>
                    <Route path={"/pages/all-pages"} exact component={Pages}/>
                    <Route path={"/pages/categories"} exact component={PagesCategories}/>
                    <Route path={"/users"} exact component={Users}/>
                    <Route path={"/media"} exact component={Media}/>
                    <Route path={"/media/edit"} exact component={FileEditor}/>
                    <Route component={NoPageFound} />
                </Switch>
        );
}

export default Routes;

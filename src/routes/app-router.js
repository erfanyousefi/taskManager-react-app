import { Switch, Route } from "react-router-dom"
import Home from "./../pages/Home"
import Users from "./../pages/users"
import AboutUs from "./../pages/Aboutus"
import NewTask from "./../pages/tasks/NewTask"
import AllTasks from "./../pages/tasks/AllTasks"
import Signin from "./../pages/auth/Signin"
import Signup from "./../pages/auth/Signup"
function Router() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path={"/new-task"} exact component={NewTask} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/users" component={Users} />
            <Route path="/all-tasks" component={AllTasks} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
        </Switch>
    )
}
export default Router;
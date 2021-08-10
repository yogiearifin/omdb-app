import { Switch, Route } from "react-router-dom";
import MovieList from "../pages/MovieList";
import DetailMovie from "../pages/DetailMovie";
import MyMovieList from "../pages/MyMovieList";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route exact path="/movie/:id">
        <DetailMovie />
      </Route>
      <Route exact path="/mymovielist">
        <MyMovieList />
      </Route>
      <Route path="*">
        <div>Not Found :(</div>
      </Route>
    </Switch>
  );
};

export default Routers;

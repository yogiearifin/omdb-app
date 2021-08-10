import Card from "../../components/card";
import { useContext } from "react";
import { DataContext } from "../../context/context";
import { useEffect } from "react";
import { FIRST, PREVIOUS, NEXT, LAST } from "../../constants/constants";
import { listContainer, sectionPagination } from "./style";

const MovieList = () => {
  const { lists, getMovieList, pagination } = useContext(DataContext);
  console.log(lists);
  useEffect(() => {
    getMovieList();
  }, []);
  return (
    <div className={listContainer}>
      <div>
        {lists.listMovie.Search
          ? lists.listMovie.Search &&
            lists.listMovie.Search.map((item, index) => {
              return <Card item={item} key={index} />;
            })
          : "Loading..."}
      </div>
      {lists.listMovie.Search ? (
        <div className={sectionPagination}>
          <button
            onClick={() => pagination(FIRST)}
            disabled={lists.page === 1 ? true : false}
          >
            first page
          </button>
          <button
            onClick={() => pagination(PREVIOUS)}
            disabled={lists.page === 1 ? true : false}
          >
            previous page
          </button>
          <button
            onClick={() => pagination(NEXT)}
            disabled={lists.page === lists.maxPage ? true : false}
          >
            next page
          </button>
          <button
            onClick={() => pagination(LAST)}
            disabled={lists.page === lists.maxPage ? true : false}
          >
            last page
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default MovieList;

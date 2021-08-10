const WatchlistButton = ({ ...props }) => {
  const { lists, item, addToWatchlist, removeFromWatchlist } = props;
  return (
    <button
      onClick={
        lists.watchList === null
          ? () => addToWatchlist(item)
          : lists.watchList.find((find) => find.Title === item.Title)
          ? () => removeFromWatchlist(item)
          : () => addToWatchlist(item)
      }
    >
      {lists.watchList === null
        ? "Add to watchlist"
        : lists.watchList.find((find) => find.Title === item.Title)
        ? "Remove from watchlist"
        : "Add to watchlist"}
    </button>
  );
};

export default WatchlistButton;

const RestCategoryTitle = ({
  category,
  toggleMenuStatus,
  setToggleMenuStatus,
}) => {
  return (
    <h1
      style={{
        padding: "15px 0px",
        fontSize: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => {
        setToggleMenuStatus({
          [category.card.card.title]:
            !toggleMenuStatus[category.card.card.title],
        });
      }}
    >
      {category.card.card.title} ({category.card.card.itemCards.length})
      {toggleMenuStatus[category.card.card.title] ? (
        <span>▼</span>
      ) : (
        <span>▲</span>
      )}
    </h1>
  );
};

export default RestCategoryTitle;

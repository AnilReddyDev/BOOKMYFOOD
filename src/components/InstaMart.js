const InstaMart = () => {
  //Insteading of store all the food delivery and instamart code in only one js file,
  // Insted we can use lazy loading(code splitting) for generating the mutliple js files separately
  // This way we can seprate the code for food delivery and instamart .
  // which makes website loading faster
  return (
    <div>
      <h1>InstaMart</h1>
      <p>Welcome to InstaMart</p>
    </div>
  );
};

export default InstaMart;

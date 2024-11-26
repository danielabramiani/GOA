const categories = [
    {
      categoryName: "Fruits",
      items: ["Apple", "Banana", "Cherry"]
    },
    {
      categoryName: "Vegetables",
      items: ["Carrot", "Broccoli", "Spinach"]
    }
  ];
  
  function NestedList() {
    return (
      <div>
        {categories.map((category, index) => (
          <div key={index}>
            <h3>{category.categoryName}</h3>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
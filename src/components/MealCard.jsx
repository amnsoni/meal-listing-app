function MealCard({ meal }) {
  const isVegetarian = meal.strCategory?.toLowerCase().includes('vegetarian');

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        name: ingredient,
        measure: measure || ''
      });
    }
  }

  return (
    <div className="meal-card">
      <div className="meal-image-container">
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          className="meal-image"
          loading="lazy"
        />
        <span className={`meal-badge ${isVegetarian ? 'veg' : 'non-veg'}`}>
          {isVegetarian ? '🟢 Veg' : '🔴 Non-Veg'}
        </span>
      </div>
      
      <div className="meal-content">
        <h3 className="meal-title">{meal.strMeal}</h3>
        
        {meal.strArea && (
          <p className="meal-cuisine">🍽️ {meal.strArea} Cuisine</p>
        )}
        
        {meal.strCategory && (
          <p className="meal-category">📁 {meal.strCategory}</p>
        )}
        
        {meal.strInstructions && (
          <div className="meal-description">
            <h4>About this dish:</h4>
            <p>{meal.strInstructions.length > 200 
              ? `${meal.strInstructions.substring(0, 200)}...` 
              : meal.strInstructions}</p>
          </div>
        )}
        
        {ingredients.length > 0 && (
          <div className="meal-ingredients">
            <h4>Ingredients:</h4>
            <ul className="ingredients-list">
              {ingredients.map((item, index) => (
                <li key={index} className="ingredient-item">
                  <span className="ingredient-bullet">•</span>
                  {item.measure && <span className="ingredient-measure">{item.measure}</span>}
                  <span className="ingredient-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {meal.strYoutube && (
          <a 
            href={meal.strYoutube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="recipe-link"
          >
            📺 Watch Recipe Video
          </a>
        )}
      </div>
    </div>
  );
}

export default MealCard;
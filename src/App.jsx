import { useState, useEffect } from 'react'
// import './App.css'
import fetchMeals from './fetchMeals'
import MealCard from './components/MealCard'
import './components/MealCard.css'

function App() {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const data = await fetchMeals();
      console.log(data);
      setMeals(data || []);
    }
    getMeals();
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">Meals Listing</h1>
      <div className="meals-container">
        {meals.length === 0 ? (
          <p className="loading-text">Loading meals...</p>
        ) : (
          meals.map((meal, index) => (
            <MealCard key={meal.idMeal || index} meal={meal} />
          ))
        )}
      </div>
    </div>
  )
}

export default App;

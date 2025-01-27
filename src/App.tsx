import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import { MenuContext } from "./context/context";
import { MenuItem } from "./entities/entitites";
import { db, formatMenuItems } from "./services/firebase";
import { onValue, ref } from "firebase/database";


const Foods = React.lazy(() => import("./components/Foods"));

function App() {
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const itemsRef = ref(db, "menu");
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      const formattedData = formatMenuItems(data)
      console.log(formattedData)
      setMenuItems(formattedData)
    });
  }, []);

  return (
    <MenuContext.Provider
      value={{ menuItems, isChooseFoodPage, setIsChooseFoodPage }}
    >
      <div className="App">
        <button
          className="toggleButton"
          onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
        >
          {isChooseFoodPage ? "Disponibilidad" : "Pedir Comida"}
        </button>
        <h3 className="title">Comida Rápida Online</h3>
        {!isChooseFoodPage && (
          <>
            <h4 className="subTitle">Menús</h4>
            <ul className="ulApp">
              {menuItems.map((item) => {
                return (
                  <article key={item.id} className="liApp">
                    <p>{item.name}</p>
                    <p>#{item.quantity}</p>
                  </article>
                );
              })}
            </ul>
          </>
        )}
        {isChooseFoodPage && (
          <Suspense fallback={<div>Cargando comida</div>}>
            <Foods />
          </Suspense>
        )}
      </div>
    </MenuContext.Provider>
  );
}

export default App;

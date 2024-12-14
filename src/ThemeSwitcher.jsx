import { useContext } from "react";
import { ThemeContext } from "./App";

function ThemeSwitcher(){
const {theme , toggleTheme}=useContext(ThemeContext)
return(
    <button onClick={toggleTheme}>
        switch to {theme === 'light'? 'dark': "light"}
    </button>
)

}

export default ThemeSwitcher

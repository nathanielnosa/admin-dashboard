import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import UseDarkSide from './UseDarkSide';

const Switcher = () => {
    const [colorTheme, setTheme] = UseDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked);
    }



    return (
        <div className='w-fit rounded-full p-[2px]'>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={20}
            />
        </div>
    )
}

export default Switcher
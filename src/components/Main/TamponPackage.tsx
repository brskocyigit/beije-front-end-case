import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { State } from '../../redux/index'
import { Tampon} from '../../types/type'

//Material UI slider default rengini değiştirmek için kullandım.
const theme = createTheme({
    palette: {
        primary: {
            main: '#343131'
        }
    }
})

function valuetext(value: number) {
    console.log(`${value}`)
    return `${value}°C`
}

const TamponPackage = () => {
    const dispatch = useDispatch()

    //OnChange fonksiyonundan gelen slider değerlerini tutmak için gerekli stateler.
    const [mini, setMini] = useState<any>(0)
    const [standard, setStandard] = useState<any>(0)

    //Seçili mini tampon paketi sayısını getirir ve "mini" stateine atar.Daha sonra reduxta tanımlı "mini" state'i değiştirir.
    function handleMiniChange(value:any){
        setMini(value);
        dispatch({ type: 'mini', payload: mini })
    }
    
    //Seçili standard tampon paketi sayısını getirir ve "standard" stateine atar.Daha sonra reduxta tanımlı "standardtampon" state'i değiştirir.
    function handleStandardChange(value:any){
        setStandard(value);
        dispatch({ type: 'standardtampon', payload: standard })
    }
    
    //Reduxtan güncel paket sayılarını getirir.
    const tamponCount:Tampon = useSelector((state:State)=>state.tamponPackage)

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: 500 }}>
                <div className="mb-10">
                    <h1>Mini Tampon</h1>
                    <Slider
                        color="primary"
                        aria-label="Package Slider"
                        defaultValue={tamponCount.amountMini}
                        value={tamponCount.amountMini}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={60}
                        onChangeCommitted={(_, value) => handleMiniChange(value)}
                    />
                </div>

                <div className="mb-10">
                    <h1>Standart Tampon</h1>
                    <Slider
                        color="primary"
                        aria-label="Package Slider"
                        defaultValue={tamponCount.amountStandard}
                        value={tamponCount.amountStandard}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={60}
                        onChangeCommitted={(_, value) => handleStandardChange(value)}
                    />
                </div>
            </Box>
        </ThemeProvider>
    )
}

export default TamponPackage

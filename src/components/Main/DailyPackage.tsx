import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { State } from '../../redux/index'
import { Daily } from '../../types/type'

//Material UI slider default rengini değiştirmek için kullandım.
const theme = createTheme({
    palette: {
        primary: {
            main: '#343131'
        }
    }
})

function valuetext(value: number) {
    return `${value}`
}

const DailyPackage = () => {
    const dispatch = useDispatch()

    //OnChange fonksiyonundan gelen slider değerlerini tutmak için gerekli stateler.
    const [daily, setDaily] = useState<any>(0)
    const [superDaily, setSuperDaily] = useState<any>(0)

    //Seçili günlük ped paketi sayısını getirir ve "daily" stateine atar.Daha sonra reduxta tanımlı "daily" state'i değiştirir.
    function handleDailyChange(value: any) {
        setDaily(value)
        dispatch({ type: 'daily', payload: daily })
    }

    // /Seçili süper günlük ped paketi sayısını getirir ve "superdaily" stateine atar.Daha sonra reduxta tanımlı "superdaily" state'i değiştirir.
    function handleSuperDailyChange(value: any) {
        setSuperDaily(value)
        dispatch({ type: 'superdaily', payload: superDaily })
    }

    //Reduxtan güncel paket sayılarını getirir.
    const dailyCount: Daily = useSelector((state: State) => state.dailyPackage)

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: 500 }}>
                <div className="mb-10">
                    <h1>Günlük Ped</h1>
                    <Slider
                        color="primary"
                        aria-label="Package Slider"
                        defaultValue={dailyCount.amountDaily}
                        value={dailyCount.amountDaily}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={60}
                        onChange={(_, value) => handleDailyChange(value)}
                        // onChangeCommitted={(_, v) => setDaily(v)}
                    />
                </div>

                <div className="mb-10">
                    <h1>Süper Günlük Ped</h1>
                    <Slider
                        color="primary"
                        aria-label="Package Slider"
                        defaultValue={dailyCount.amountSuperDaily}
                        value={dailyCount.amountSuperDaily}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={60}
                        onChange={(_, value) => handleSuperDailyChange(value)}
                    />
                </div>
            </Box>
        </ThemeProvider>
    )
}

export default DailyPackage

import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useDispatch } from 'react-redux'

const theme = createTheme({
    palette: {
        primary: {
            main: '#343131'
        }
    }
})

function valuetext(value: number) {
    return `${value}°C`
}

const DailyPackage = () => {
    const dispatch = useDispatch()
    const [daily, setDaily] = useState<any>(0)
    const [superDaily, setSuperDaily] = useState<any>(0)

    useEffect(() => {
        dispatch({ type: 'daily', payload: daily })
        dispatch({ type: 'superdaily', payload: superDaily })
    })
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: 500 }}>
                <div className="mb-10">
                    <h1>Günlük Ped</h1>
                    <Slider
                        color="primary"
                        aria-label="Package Slider"
                        defaultValue={0}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={60}
                        onChangeCommitted={(_, v) => setDaily(v)}
                    />
                </div>

                <div className="mb-10">
                    <h1>Süper Günlük Ped</h1>
                    <Slider
                        color="primary"
                        aria-label="Package Slider"
                        defaultValue={0}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={60}
                        onChangeCommitted={(_, v) => setSuperDaily(v)}
                    />
                </div>
            </Box>
        </ThemeProvider>
    )
}

export default DailyPackage

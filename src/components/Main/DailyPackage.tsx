import React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { createTheme, ThemeProvider } from '@mui/material/styles'


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

const DailyPackage = () => {
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
                    />
                </div>

                <div className='mb-10'>
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
                    />
                </div>
            </Box>
        </ThemeProvider>
    )
}

export default DailyPackage

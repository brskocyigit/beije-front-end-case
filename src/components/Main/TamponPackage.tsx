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
    console.log(`${value}`)
    return `${value}°C`
}

const TamponPackage = () => {
    const dispatch = useDispatch()
    const [mini, setMini] = useState<any>(0)
    const [standard, setStandard] = useState<any>(0)

    useEffect(() => {
        dispatch({ type: 'mini', payload: mini })
        dispatch({ type: 'standardtampon', payload: standard })
    })
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: 500 }}>
                <div className="mb-10">
                    <h1>Mini Tampon</h1>
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
                        onChangeCommitted={(_, v) => setMini(v)}
                    />
                </div>

                <div className="mb-10">
                    <h1>Standart Tampon</h1>
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
                        onChangeCommitted={(_, v) => setStandard(v)}
                    />
                </div>
            </Box>
        </ThemeProvider>
    )
}

export default TamponPackage

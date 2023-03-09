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

const NormalPackage = () => {
    const dispatch = useDispatch()
    const [standard, setStandard] = useState<any>(0)
    const [superPed, setSuperPed] = useState<any>(0)
    const [superPlus, setSuperPlus] = useState<any>(0)

    function valuetext(value: number) {
        return `${value}°C`
    }

    useEffect(() => {
        dispatch({ type: 'standard', payload: standard })
        dispatch({ type: 'super', payload: superPed })
        dispatch({ type: 'superplus', payload: superPlus })
    })

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: 500 }}>
                <div className="mb-10">
                    <h1>Standart Ped</h1>
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

                <div className="mb-10">
                    <h1>Süper Ped</h1>
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
                        onChangeCommitted={(_, v) => setSuperPed(v)}
                    />
                </div>

                <div>
                    <h1>Süper+ped</h1>
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
                        onChangeCommitted={(_, v) => setSuperPlus(v)}
                    />
                </div>
            </Box>
        </ThemeProvider>
    )
}

export default NormalPackage

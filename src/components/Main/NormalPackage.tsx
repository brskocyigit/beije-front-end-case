import React, {useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { State } from '../../redux/index'
import { Normal} from '../../types/type'

//Material UI slider default rengini değiştirmek için kullandım.
const theme = createTheme({
    palette: {
        primary: {
            main: '#343131'
        }
    }
})

const NormalPackage = () => {
    const dispatch = useDispatch()

    //OnChange fonksiyonundan gelen slider değerlerini tutmak için gerekli stateler.
    const [standard, setStandard] = useState<any>(0)
    const [superPed, setSuperPed] = useState<any>(0)
    const [superPlus, setSuperPlus] = useState<any>(0)

    function valuetext(value: number) {
        return `${value}`
    }

    //Seçili standard ped paketi sayısını getirir ve "standard" stateine atar.Daha sonra reduxta tanımlı "standard" state'i değiştirir.
    function handleStandardChange(value:any){
        setStandard(value);
        dispatch({ type: 'standard', payload: standard })
    }

    //Seçili super ped paketi sayısını getirir ve "superPed" stateine atar.Daha sonra reduxta tanımlı "super" state'i değiştirir.
    function handleSuperChange(value:any){
        setSuperPed(value);
        dispatch({ type: 'super', payload: superPed })
    }

    //Seçili super+ ped paketi sayısını getirir ve "superPlus" stateine atar.Daha sonra reduxta tanımlı "superplus" state'i değiştirir.
    function handleSuperPlusChange(value:any){
        setSuperPlus(value);
        dispatch({ type: 'superplus', payload: superPlus })
    }

    //Reduxtan güncel paket sayılarını getirir.
    const normalCount:Normal = useSelector((state:State)=>state.normalPackage)

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: 500 }}>
                <div className="mb-10">
                    <h1>Standart Ped</h1>
                    <Slider
                        color="primary"
                        aria-label="Package Slider"
                        defaultValue={normalCount.amountStandard}
                        value={normalCount.amountStandard}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={60}
                        onChangeCommitted={(_, value) => handleStandardChange(value)}
                    />
                </div>

                <div className="mb-10">
                    <h1>Süper Ped</h1>
                    <Slider
                        color="primary"
                        aria-label="Package Slider"
                        defaultValue={normalCount.amountSuper}
                        value={normalCount.amountSuper}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={60}
                        onChangeCommitted={(_, value) => handleSuperChange(value)}
                    />
                </div>

                <div>
                    <h1>Süper+ped</h1>
                    <Slider
                        color="primary"
                        aria-label="Package Slider"
                        defaultValue={normalCount.amountSuperPlus}
                        value={normalCount.amountSuperPlus}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={60}
                        onChangeCommitted={(_, value) => handleSuperPlusChange(value)}
                    />
                </div>
            </Box>
        </ThemeProvider>
    )
}

export default NormalPackage

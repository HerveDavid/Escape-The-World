import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, Fragment } from 'react';
import { Stack, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


export function RoomListToolBar() {

    const [categorie, setCategorie] = useState('all');
    const handleCategorie = (event) => {
        setCategorie(event.target.value);
    }

    const [dateStart, setDateStart] = useState(new Date());
    const handleDateStart = (newValue) => {
        setDateStart(newValue);
    }

    const [timeStart, setTimeStart] = useState(new Date());
    const handleTimeStart = (newValue) => {
        setTimeStart(newValue);
    }

    const handleSearch = () => {
        console.log(categorie)
        console.log(dateStart)
        console.log(timeStart)

    }

    return (
        <Stack direction="row" spacing={5} justifyContent="center" >
             <DesktopDatePicker
                label="Date"
                inputFormat="MM/dd/yyyy"
                value={dateStart}
                onChange={handleDateStart}
                renderInput={(params) => <TextField sx={{ width: 170 }} {...params} />}
            />
            <TimePicker
                label="Start time"
                value={timeStart}
                onChange={handleTimeStart}
                renderInput={(params) => <TextField sx={{ width: 170 }} {...params} />}
            />
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="categorie-label">Categorie</InputLabel>
                <Select
                    labelId="categorie-label"
                    id="demo-simple-select-disabled"
                    value={categorie}
                    label="Categorie"
                    onChange={handleCategorie}
                >
                    <MenuItem value={"all"}>
                    All
                    </MenuItem>
                    <MenuItem value={"movies"}>Movies</MenuItem>
                    <MenuItem value={"horror"}>Horror</MenuItem>
                    <MenuItem value={"adventure"}>Adventure</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="success" onClick={handleSearch} >Search</Button>
        </Stack>
    );

}
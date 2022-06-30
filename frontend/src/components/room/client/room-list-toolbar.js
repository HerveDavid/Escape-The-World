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

    const [categorie, setCategorie] = useState('');
    const handleCategorie = (event) => {
        setCategorie(event.target.value);
    }

    const [dateStart, setDateStart] = useState(Date.now());
    const handleDateStart = (newValue) => {
        setDateStart(newValue);
        setDateEnd(newValue);
    }

    const [dateEnd, setDateEnd] = useState(Date.now());
    const handleDateEnd = (newValue) => setDateEnd(newValue);

    return (
        <Stack direction="row" spacing={2} justifyContent="center" >
             <DesktopDatePicker
                label="Check in"
                inputFormat="MM/dd/yyyy"
                value={dateStart}
                onChange={handleDateStart}
                renderInput={(params) => <TextField sx={{ width: 170 }} {...params} />}
            />
             <DesktopDatePicker
                label="Check out"
                inputFormat="MM/dd/yyyy"
                value={dateEnd}
                onChange={handleDateEnd}
                renderInput={(params) => <TextField sx={{ width: 170 }} {...params} />}
            />
            <TimePicker
                label="Start time"
                value={dateStart}
                onChange={handleDateStart}
                renderInput={(params) => <TextField sx={{ width: 170 }} {...params} />}
            />
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="categorie-label">Categorie</InputLabel>
                <Select
                    labelId="categorie-label"
                    id="demo-simple-select-disabled"
                    value={categorie}
                    label="Age"
                    onChange={handleCategorie}
                >
                    <MenuItem value={"all"}>
                    All
                    </MenuItem>
                    <MenuItem value={"movie"}>Movie</MenuItem>
                    <MenuItem value={"horror"}>Horror</MenuItem>
                    <MenuItem value={"adventure"}>Adventure</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="success" >Search</Button>
        </Stack>
    );

}
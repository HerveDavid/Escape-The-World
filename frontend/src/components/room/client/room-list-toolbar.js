import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import useCategoriesStore from "src/hooks/categories-store";
import { useEffect } from 'react';
import { capitalizeFirstLetter } from 'src/utils/get-format-date';


export function RoomListToolBar({
    onCategorie,
    defaultCategorie,
    onDateStart,
    defaultDate,
    onTimeStart,
    defaultTime,
    onSearch,
}) {

    const { categories, fetchAll } = useCategoriesStore();

    useEffect(fetchAll, []);

    return (
        <Stack direction="row" spacing={5} justifyContent="center" >
             <DesktopDatePicker
                label="Date"
                inputFormat="MM/dd/yyyy"
                value={defaultDate}
                onChange={onDateStart}
                renderInput={(params) => <TextField sx={{ width: 170 }} {...params} />}
            />
            <TimePicker
                label="Start time"
                value={defaultTime}
                onChange={onTimeStart}
                renderInput={(params) => <TextField sx={{ width: 170 }} {...params} />}
            />
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="categorie-label">Categorie</InputLabel>
                <Select
                    labelId="categorie-label"
                    id="demo-simple-select-disabled"
                    value={defaultCategorie}
                    label="Categorie"
                    onChange={onCategorie}
                >
                    <MenuItem value={"all"}>
                    All
                    </MenuItem>
                    {categories && categories.map((category, index) => (
                        <MenuItem key={index} value={category.name}>{capitalizeFirstLetter(category.name)}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button variant="contained" color="success" onClick={onSearch} >Search</Button>
        </Stack>
    );

}
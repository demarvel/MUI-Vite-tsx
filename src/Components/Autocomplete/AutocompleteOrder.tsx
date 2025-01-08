import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { PropsWithChildren } from 'react';

interface Props {
  label?: React.ReactNode;
}

export default function AutocompleteOrder(props: PropsWithChildren<Props>) {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
    fullWidth
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
     // groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      //sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'обрабатывается', year: 1994 },
  { title: 'в работе', year: 1994 },
  { title: 'готов', year: 1994 },
];

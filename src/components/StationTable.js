import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { GridColDef, DataGrid, GridEventListener } from '@mui/x-data-grid'

const columns: GridColDef[] = [
    { field: 'libelle_station', headerName: "Station de mesure de cours d'eau", width: 600, headerClassName: 'super-app-theme--header' },
    { field: 'libelle_commune', headerName: 'Commune', width: 400, headerClassName: 'super-app-theme--header'  }
];

const StationTable = () => {

const [stationData, setStationData] = useState([]);

useEffect(() => {
    fetch("https://hubeau.eaufrance.fr/api/v1/temperature/station")
      .then((response) => response.json())
      .then((json) => setStationData(json.data));
}, []);

const handleRowClick: GridEventListener<'rowClick'> = (params) => {
  window.open(`/station/${params.row.code_station}`);
};

function getRowId(row) {
  return row.code_station;
}

return (
  <div style={{ width: '103%' }}>
    <Box
      sx={{
        height: 600,
        width: '97%',
        '& .super-app-theme--header': {
          backgroundColor: 'rgba(128, 181, 148, 0.55)',
        },
      }}
    >
      <DataGrid
          rows={stationData}
          getRowId={getRowId}
          columns={columns}
          pageSize={12}
          sx={{
            '.MuiDataGrid-row:hover': {
              cursor: 'pointer',
              backgroundColor: 'rgba(128, 155, 211, 0.50)',
            }
          }}
          onRowClick={handleRowClick}
      />
    </Box>
  </div>
)
}

export default StationTable
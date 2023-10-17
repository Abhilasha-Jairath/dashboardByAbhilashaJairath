import { Bar, BarChart, Cell, Tooltip, XAxis } from 'recharts'
import { OVERVIEW_DATA } from '../../constants'
import { Box, Card, MenuItem, Select, Stack, Typography } from '@mui/material';
import styled from "@emotion/styled";

const StyledCard = styled(Card)({
  width: "63%",
  padding: "2%",
  margin: "1% 1% 1% 3%",
  borderRadius: "10px",
  overflowY:"auto",
  '@media (max-width: 768px)': {
    width: "90%",  
  },
  '@media (max-width: 480px)': {
    width: "90%",
  },
});

const StyledTypography = styled(Typography)({
  fontWeight: "900",
  fontSize: "22px",
  '@media (max-width: 768px)': {
    fontSize: "18px",
  },
  '@media (max-width: 480px)': {
    fontSize: "15px",
  },
});

const OverviewCard = () => {
  return (
    <StyledCard>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Stack>
          <StyledTypography>Overview</StyledTypography>
          <StyledInnerTypography>Monthly Earning</StyledInnerTypography>
        </Stack>
        <Select value={3} label="Months">
          <MenuItem value={3}>Quarterly</MenuItem>
          <MenuItem value={1}>Monthly</MenuItem>
          <MenuItem value={12}>Yearly</MenuItem>
        </Select>
      </Box>
        <BarChart width={950} height={300} data={OVERVIEW_DATA}>
          <Tooltip />
          <XAxis tickLine={false} axisLine={false} dataKey="name" />
          <Bar dataKey="barValue" radius={10}>
            {OVERVIEW_DATA.map((entry) => (
              <Cell fill={entry.name === "Aug" ? '#5A32EA' : '#F2EFFF'} />
            ))}
          </Bar>
          </BarChart>
    </StyledCard>
  );
}

export default OverviewCard;

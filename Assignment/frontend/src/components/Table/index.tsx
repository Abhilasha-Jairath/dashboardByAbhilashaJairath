import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { PRODUCT_DETAILS } from "../../constants";
import styled from "@emotion/styled";
import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";

const StyledTableContainer = styled(Paper)({
  padding: "2%",
  borderRadius: "10px",
  margin: "1% 1% 1% 3%",
  width: "89%",
  overflowY:"auto"
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

const StyledTableCell = styled(TableCell)({
  color:"grey"
});

export default function CustomTable() {
  return (
    <StyledTableContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <StyledTypography>Product Sell</StyledTypography>
        <Box display="flex" gap="10px">
          <TextField
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <Select value={7} label="Days">
            <MenuItem value={7}>Last 7 Days</MenuItem>
            <MenuItem value={15}>Last 15 Days</MenuItem>
            <MenuItem value={30}>Last 30 Days</MenuItem>
          </Select>
        </Box>
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Stock</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Total Sales</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {PRODUCT_DETAILS.map((row) => (
            <TableRow
              key={row.productName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box display="flex" flexDirection="row">
                  <img src={row.productImg} style={{height:"40px" , width:"85px" ,borderRadius:"10px" , paddingRight:"7px"}}/>
                  <Stack display="flex" flexDirection="column">
                    <Typography style={{fontWeight:"bold"}}>{row.productName}</Typography>
                    <Typography>{row.productDescription}</Typography>
                  </Stack>
                </Box>
              </TableCell>
              <TableCell align="right">{row.productStock}</TableCell>
              <TableCell align="right">{row.productPrice}</TableCell>
              <TableCell align="right">{row.productTotalSales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

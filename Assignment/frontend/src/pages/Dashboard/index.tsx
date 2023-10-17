import { Box, Paper, TextField, Typography } from "@mui/material";
import Navbar from "../../components/NavBar";
import OverviewCard from "../../components/OverviewCard";
import CustomerCard from "../../components/CustomerCard";
import styled from "@emotion/styled";
import CustomTable from "../../components/Table";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WidgetCardList from "../../components/WidgetCardList";

const StyledPaper = styled(Paper)({
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#f2f2f2",
  flex: 1,
  marginBlock: 0,
});

const StyledTypography = styled(Typography)({
  margin: "2% 0 0 3%",
  fontWeight: "900",
  fontSize: "25px",
  '@media (max-width: 768px)': {
    fontSize: "15px",
  },
  '@media (max-width: 480px)': {
    fontSize: "10px",
  },
});

const StyledTextField = styled(TextField)({
  margin: "2% 4% 0 0",
  borderRadius: "10%",
  background: "white",
  outline:"none",
  '@media (max-width: 768px)': {
    "& .MuiOutlinedInput-root": {
      height: "25px",
      borderRadius:"10%"
    }
  },
  '@media (max-width: 480px)': {
    "& .MuiOutlinedInput-root": {
      height: "25px",
      borderRadius:"10%"
    }
  },
});


const StyledBox = styled(Box)({
  display:"flex" ,
  flexDirection : "row" ,
  '@media (max-width: 768px)': {
    flexDirection: "column",
  },
  '@media (max-width: 480px)': {
    flexDirection: "column",
  },
});

const Dashboard = () => {


  return (
    <StyledPaper>
      <Navbar />
      <Box width="100%" flex={1}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <StyledTypography>Hello Shahrukh👋,</StyledTypography>
          <StyledTextField
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <SearchOutlinedIcon />
              ),
            }}
          />
        </Box>
        <WidgetCardList />
        <StyledBox >
          <OverviewCard />
          <CustomerCard />
        </StyledBox>
        <CustomTable />
      </Box>
    </StyledPaper>
  );
};

export default Dashboard;

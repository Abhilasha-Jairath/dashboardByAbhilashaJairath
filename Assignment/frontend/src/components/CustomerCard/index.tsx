import { PieChart, Pie, Cell, Label } from "recharts";
import { COLORS, CUSTOMER_DATA } from "../../constants";
import styled from "@emotion/styled";
import { Card, Stack, Typography } from "@mui/material";

const StyledCard = styled(Card)({
  padding: "2%",
  margin: "1%",
  borderRadius: "10px",
  width: "20%",
  '@media (max-width: 768px)': {
    width: "90%",
    margin: "2%",
  },
  '@media (max-width: 480px)': {
    width: "90%",
    margin: "2%",
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

const StyledInnerTypography = styled(Typography)({
    color: "grey",
    fontSize: "18px",
    '@media (max-width: 768px)': {
      fontSize: "15px",
    },
    '@media (max-width: 480px)': {
      fontSize: "10px",
    },
});

const CustomerCard = () => {
  return (
    <StyledCard>
      <Stack>
        <StyledTypography>Customers</StyledTypography>
        <StyledInnerTypography>Customers that buy products</StyledInnerTypography>
      </Stack>
      <PieChart width={300} height={300} style={{ boxShadow: "10px" }}>
        <Pie
          data={CUSTOMER_DATA}
          cx="50%"
          cy="50%"
          innerRadius={75}
          outerRadius={110}
          fill="#8884d8"
          dataKey="value"
          paddingAngle={0}
        >
          {CUSTOMER_DATA.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              strokeWidth={index === 1 ? 10 : index === 2 ? 6 : 0}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
          <Label position="centerTop" style={{ transform: "translateY(-30px)", fontWeight: "bolder", color: "black", fontSize: "25px" }}>65%</Label>
          <Label position="center" style={{ color: "black" }}>Total New</Label>
          <Label position="centerBottom" style={{ transform: "translateY(25px)", color: "black" }}>Customers</Label>
        </Pie>
      </PieChart>
    </StyledCard>
  );
};

export default CustomerCard;

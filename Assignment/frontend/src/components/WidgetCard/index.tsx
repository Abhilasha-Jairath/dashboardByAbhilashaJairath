import { Card, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import theme from "../../theme/theme";

interface WidgetCardprops {
  imgSrc: string;
  cardHeading: string;
  amount: string;
  rateOfInterest: string;
  time: string;
  isProfitable?: boolean;
}

const StyledCard = styled(Card)({
  width: "320px",
  height: "150px",
  gap: "12px",
  display: "flex",
  padding: "25px",
  flexDirection: "row",
  borderRadius: "8px",
  backgroundColor: "white",
  '@media (max-width: 768px)': {
    flexDirection: "column",
    height: "180px",
    width:"300px"
  },
  '@media (max-width: 480px)': {
    flexDirection: "row",
    height: "100px",
    width:"330px"
  },
});

const StyledStack = styled(Stack)({
  display: "flex",
  alignItems: "flex-start",
  justifyContent:"center",
  margin: "8px",
  gap: "1px",
});

const StyledOuterTypography = styled(Typography)({
  color: theme.palette.greyColor.icon01,
  fontWeight: "600",
  fontSize: "15px",
  whiteSpace:"nowrap",
  '@media (max-width: 768px)': {
      fontSize: "10px",
  },
  '@media (max-width: 480px)': {
     fontSize: "15px",
  },
});

const StyledInnerTypography = styled(Typography)({
  color: theme.palette.primaryColor.black,
  fontWeight: "bold",
  fontSize: "25px",
  whiteSpace:"nowrap",
  '@media (max-width: 768px)': {
      fontSize: "18px",
  },
  '@media (max-width: 480px)': {
     fontSize: "18px",
  },
});

const WidgetCard = ({
  imgSrc,
  cardHeading,
  amount,
  rateOfInterest,
  time,
  isProfitable,
}: WidgetCardprops) => {
  return (
    <StyledCard>
      <StyledImage src={imgSrc}/>
      <StyledStack>
        <StyledOuterTypography className="headingTypography">
          {cardHeading}
        </StyledOuterTypography>
        <StyledInnerTypography className="amountTypography">
          {amount}
        </StyledInnerTypography>
        <StyledInnerMostTypography className="rateofInterestTypography">
          {isProfitable ? (
            <ArrowUpwardIcon color="success" sx={{ width: "15px" }} />
          ) : (
            <ArrowDownwardIcon color="error" sx={{ width: "15px" }} />
          )}
          <span style={{ color: isProfitable ? "green" : "red" , fontWeight:"600"}}>
            {rateOfInterest}
          </span>
          {time}
        </StyledInnerMostTypography>
      </StyledStack>
    </StyledCard>
  );
};

export default WidgetCard;

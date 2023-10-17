import { Box, styled,  } from "@mui/material";
import { WIDGETCARD_DATA } from "../../constants";
import WidgetCard from "../../components/WidgetCard";

const StyledBox = styled(Box)({
  display:"flex",
  flexDirection: "row",
  justifyContent:"space-between",
  margin:"1% 3%",
  width:"93%",
  gap:"10px",
  '@media (max-width: 768px)': {
    flexDirection: "row",
  },
  '@media (max-width: 480px)': {
    flexDirection: "column",
  },
});

const WidgetCardList = () => {

  return (
    <StyledBox>
      {WIDGETCARD_DATA.map((item) => (
        <WidgetCard
          imgSrc={item.imgSrc}
          cardHeading={item.cardHeading}
          amount={item.amount}
          rateOfInterest={item.rateOfInterest}
          time={item.time}
          isProfitable={item.isProfitable}
        />
      ))}
    </StyledBox>
  );
};

export default WidgetCardList;

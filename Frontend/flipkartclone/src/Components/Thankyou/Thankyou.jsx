import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Box,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const steps = [
  { title: "Order placed" },
  { title: "Order shipped" },
  { title: "Out for delivery" },
  { title: "Delivery" },
];

function Thankyou() {
    const navigate = useNavigate()
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <div style={{ backgroundColor: "#f1f3f6", padding: "15px" }}>
      <div
        style={{
          backgroundColor: "white",
          width: "80%",
          height: "600px",
          margin: "auto",
          padding: "40px 60px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "70%",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <Stepper index={activeStep}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <img
            src="https://media.tenor.com/6qAdvIpWGV4AAAAC/order.gif"
            width={"30%"}
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <h1 style={{ color: "green", fontSize: "25px" }}>
            Order Successfully Placed
          </h1>
          <p>We are pleased to confirm your order no OD11130506789457. </p>
          <p>Thank you for shopping with Flipkart!</p>
          <button
            className="pay_btn"
            style={{ backgroundColor: "#2874f0", padding: "15px" }}
            onClick={()=>{navigate("/")}}
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;

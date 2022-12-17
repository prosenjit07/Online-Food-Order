import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then My Restaurant  Bangladesh is the right destination for you! My Restaurant offers you a long and detailed list of the best restaurants and shops near you to help make your every day easier.
        </p>
        <br />
        <p>
        Our online food delivery service has it all, whether you fancy a juicy burger from Takeout, fresh sushi from Samdado, or peri chicken from Nando's, My Restaurant Bangladesh has over 2000 restaurants available from Dhaka to Chittagong through to Sylhet. Did you know you can order your groceries and more from My Restaurant too? Check out My Restaurant shops for favorite partners like Unimart, Suborno, Shwapno, Bengal Meat, and much more. Sit back and relax – let My Restaurant Bangladesh take the pressure off your shoulders.
        </p>
      </Box>
    </Layout>
  );
};

export default About;

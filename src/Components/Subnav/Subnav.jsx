import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useNavigate} from 'react-router'
import { Link } from "react-router-dom/dist";
import Categories from "../../Pages/Categories/Categories";
import Popular from "../../Pages/Popular/Popular";
import Achieve from "../../Pages/Achieve/Achieve";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography> 
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlecategorynavigate = () => {
    navigate('/')
  }
  const handlepopularpostnavigate = () => {
    navigate("/popularposts");
  };
  const handleachievenavigate = () => {
    navigate("/achieve");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Categories" {...a11yProps(0)} />
          <Tab label="Popular Posts" {...a11yProps(1)} />
          <Tab label="Achieve" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0} >
        <Categories/>
      </TabPanel>

      <TabPanel value={value} index={1} >
        <Popular/>
      </TabPanel>
      <TabPanel value={value} index={2} >
        <Achieve/>
      </TabPanel>
    </Box>
  );
}

import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Checkbox,
  TextField,
  Button,
  styled,
  InputLabel,
  IconButton,
  InputAdornment,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import { Visibility } from "@mui/icons-material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink, useNavigate } from "react-router-dom";

const Typography1 = styled(Typography)({
  fontFamily: "Inter",
  marginBottom: "10px",
});

const handleNext = () => {
  // if (organization.length !== 0 &&
  //     partnering.length !== 0 &&
  //     category.length !== 0 &&
  //     sub.length !== 0 &&
  //     address.length !== 0
  // ) {
  //     setResearchdetails(false)
  // } else {
  //     alert("please complete all the fields")
  // }
};

export default function Register() {
  const navigate = useNavigate();
  const [organization, setOrganization] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // const [formValues, setFormValues] = useState({
  //   organization,
  //   password,
  //   email,
  //   phone,
  //   address,
  // });
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(formValues);
  // };

  // const handleSubmit = (e) => {
    
  // };
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.organization) {
  //     errors.organization = "Please enter Name of Organization";
  //   }

  //   if (!values.password) {
  //     errors.password = "Please enter Password";
  //   }
  //   if (!values.address) {
  //     errors.address = "Please enter Address";
  //   }
  //   if (!values.email) {
  //     errors.email = "Please enter Email";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!values.phone) {
  //     errors.phone = "Please enter Mobile Number";
  //   } else if (values.phone.length < 10) {
  //     errors.phone = "Mobile number must be of 10 digits";
  //   } else if (values.phone.length > 10) {
  //     errors.phone = "Mobile number must be of 10 digits";
  //   }
  //   return errors;
  // };

  const Register = async () => {
    await axios({
      url: "https://po.keewesolutions.com/user/register",
      method: "post",
      data: {
        name: organization,
        address: address,
        phone: "+91" + phone,
        username: email,
        password: password,
        website: "F",
      },
    }).then((response) => {
      if (response.data == "UsernameExistsException") {
        alert("User Already registered. Please Login");
      } else {
        console.log(response.data.user.username);
        //after submit form redirect user
        navigate("/verify", { state: { user: response.data.user.username } });
        if (response.data.accessToken !== undefined) {
          let userData = response.data;
          console.log(response.data);
          let newUserContext = {
            authenticated: true,
            user: {},
          };
          let newUser = {
            id: userData.idToken.payload["cognito:username"],
            name: userData.idToken.payload.name,
            email: userData.idToken.payload.email,
            website: userData.idToken.payload.website,
            idToken: userData.idToken.jwtToken,
            refreshToken: userData.refreshToken,
          };
          newUserContext.user = newUser;
          setAuthState(newUserContext);

          let localStorageObject = JSON.stringify({
            isAuthenticated: true,
            user: newUser,
          });
          localStorage.setItem("keewe.PO", localStorageObject);
          // if(userData.idToken.payload.website!="done"){
          //   navigate("/payment");

          // }else{
          navigate("/");
          
        }
      }
    }); 
  };
  return (
    <Grid container>
      <Grid container>
        <Grid item xs={12} lg={8}>
          <TextField
            onChange={(e) => {
              setOrganization(e.target.value);
            }}
            label="Name of Organization"
            variant="outlined"
            value={organization}
            sx={{marginBottom:'10px',  width: "100%" }}
          />
          {/* <p style={{ color: "red" }}>{formErrors.organization}</p> */}
        </Grid>

        <Grid item xs={12} lg={8}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            value={email}
            sx={{marginBottom:'10px',  width: "100%" }}
          />
          {/* <p style={{ color: "red" }}>{formErrors.email}</p> */}
        </Grid>
        <Grid item xs={12} lg={8}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
              label="password"
              onChange={(event) => setPassword(event.target.value)}
              type={showPassword ? "text" : "password"}
              value={password}
              sx={{marginBottom:'10px',  width: "100%" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setShowPassword(true);
                    }}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {/* <p style={{ color: "red" }}>{formErrors.password}</p> */}
        </Grid>
        <Grid item xs={12} lg={8}>
          <TextField
            onChange={(e) => setPhone(e.target.value)}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={phone}
            sx={{marginBottom:'10px',  width: "100%" }}
          />
          {/* <p style={{ color: "red" }}>{formErrors.phone}</p> */}
        </Grid>

        <Grid item xs={12} lg={8}>
          <TextField
            onChange={(e) => setAddress(e.target.value)}
            id="outlined-basic"
            label="Office Address"
            variant="outlined"
            value={address}
            sx={{marginBottom:'10px', width: "100%" }}
          />
          {/* <p style={{ color: "red" }}>{formErrors.address}</p> */}
        </Grid>
        <Grid item lg={9} xs={8} sm={8} md={8} display={"flex"}>
          <NavLink to={"/privacyPolicy"} style={{ textDecoration: "none" }}>
            <Button>Privacy policy</Button>
          </NavLink>
          <NavLink to={"/termscondition"} style={{ textDecoration: "none" }}>
            <Button sx={{ marginLeft: "10px" }}>Terms & Condition</Button>
          </NavLink>
        </Grid>
        <Grid item lg={9} xs={8} sm={8} md={8}>
          <FormControlLabelPosition />
        </Grid>
        {/* <Grid xs={4} /> */}
        <Grid item lg={8} xs={8} sm={8} md={8} sx={{ textAlign: "justify" }}>
          <Typography
            sx={{
              fontSize: "12px",
              marginBottom: "10px",
              textAlign: "justify",
            }}
          >
            Note: Please make this acceptance form and attach it after
            registering the company before setting up the profile page
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          lg={8}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#1a50b2" }}
            // onClick={(e)=>{Register
            //     e.preventDefault();
            //     setFormErrors(validate(formValues));} }
            onClick = {Register}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

// Select component
function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset" sx={{ marginTop: "10px" }}>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "14px",
            },
          }}
          label="I hereby accept the privacy policy and terms and
                    conditions."
          labelPlacement="I hereby accept the privacy policy and terms and
                    conditions."
        />
      </FormGroup>
    </FormControl>
  );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Computers",
  "Mechanical",
  "Management",
  "Finance",
  "Electrical",
  "Textile",
  "Sales",
  "Electronics",
  "Agriculture",
  "HR",
  "Engineering",
  "Marketing",
  "Animal Husbandary",
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function MultipleSelectPlaceholder({ text }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: "100%", marginBottom: "3%" }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Typography>{text}</Typography>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>{text}</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

//Select partner

const ITEM_HEIGHTS = 48;
const ITEM_PADDING_TOPS = 8;
const MenuPropss = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHTS * 4.5 + ITEM_PADDING_TOPS,
      width: 250,
    },
  },
};

const name = ["Job Portal", "Research", "Incubation"];
function getStyle(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function MultipleSelectPlaceholders({ text }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: "100%", marginBottom: "3%" }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Typography>{text}</Typography>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuPropss}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>{text}</em>
          </MenuItem>
          {name.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyle(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

//word Limit

const defaultStyle = {
  display: "block",
  overflow: "hidden",
  resize: "none",
  width: "90%",
  height: "65%",
  fontSize: "1rem",
  fontFamily: "Inter",
};

const LimitedWordTextarea = ({ rows, cols, value, limit }) => {
  const [{ content, wordCount }, setContent] = React.useState({
    content: value,
    wordCount: 0,
  });

  const setFormattedContent = React.useCallback(
    (text) => {
      let words = text.split(" ").filter(Boolean);
      if (words.length > limit) {
        setContent({
          content: words.slice(0, limit).join(" "),
          wordCount: limit,
        });
      } else {
        setContent({ content: text, wordCount: words.length });
      }
    },
    [limit, setContent]
  );

  React.useEffect(() => {
    setFormattedContent(content);
  }, []);

  return (
    <>
      <textarea
        rows={rows}
        placeholder="Details of Research Topic"
        cols={cols}
        style={defaultStyle}
        onChange={(event) => setFormattedContent(event.target.value)}
        value={content}
      />
      <p>
        {wordCount}/{limit}
      </p>
    </>
  );
};

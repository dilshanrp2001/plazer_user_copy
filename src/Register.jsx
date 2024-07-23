import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Grid,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "../src/images/logo.jpg";
import axios from "axios";
import toast from "react-hot-toast";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  borderRadius: "8px",
  "& .MuiTextField-root, & .MuiFormControl-root": {
    margin: theme.spacing(1),
    width: "300px",
  },
  "& .MuiButton-root": {
    margin: theme.spacing(2),
  },
  "& .MuiTypography-root": {
    marginBottom: theme.spacing(2),
  },
}));

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const theme = useTheme();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addressL1, setAddressL1] = useState("");
  const [addressL2, setAddressL2] = useState("");
  const [addressL3, setAddressL3] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handlePasswordChange(event) {
    const password = event.target.value;
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);
  }

  const calculatePasswordStrength = (password) => {
    if (password.length >= 8) {
      return "strong";
    } else if (password.length >= 6) {
      return "weak";
    } else {
      return "poor";
    }
  };

  const getStrenghtColor = () => {
    switch (passwordStrength) {
      case "strong":
        return "green";
      case "weak":
        return "yellow";
      case "poor":
        return "red";
      default:
        return "black";
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
    const plazerUser = {
      userFName: data.firstName,
      userLName: data.lastName,
      userName: data.username,
      Email: data.email,
      AddressL1: data.addressL1,
      AddressL2: data.addressL2,
      AddressL3: data.addressL3,
      phone: data.telephone_number,
      role: data.role,
      userPassword: data.password,
    };
    console.log(plazerUser);
    handleRegister(plazerUser);
  };

  const handleRegister = async (plazerUser) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/plazer-user/plazer-userReg",
        plazerUser
      );
      reset({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        telephone_number: "",
        addressL1: "",
        addressL2: "",
        addressL3: "",
        dob: "",
        password: "",
        confirmPassword: "",
        role: "",
        acceptTerms: false,
      });
      if (response.status === 202) {
        toast.success("Registration successful");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 409) {
        toast.error("Username already exists");
      } else if (error.response.status === 500) {
        toast.error("Internal error. Please try again");
      } else if (error.response.status === 400) {
        toast.error("Invalid input. Please try again");
      }
    }
  };

  return (
    <StyledContainer theme={theme}>
      <Grid
        style={{
          backgroundColor: "#05043E",
          height: "50px",
          width: "auto",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          backgroundImage: logo,
          backgroundSize: "cover",
          backgroundPosition: "left-top",
        }}
      >
        <Grid style={{ alignItems: "center", display: "flex" }}>
          <img src={logo} alt="" width="50px" height="50px" />
          <Typography style={{ color: "white" }}>PLAZER</Typography>
        </Grid>
      </Grid>

      <StyledForm theme={theme} onSubmit={handleSubmit(onSubmit)}>
        <Grid
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Typography variant="h4">Create your Super App Account</Typography>
        </Grid>

        <TextField
          label="First Name"
          {...register("firstName", {
            required: true,
            pattern: /^[a-zA-Z\s]*$/,
          })}
          error={!!errors.firstName}
          helperText={
            (errors.firstName?.type === "required" &&
              "First name is required") ||
            (errors.firstName?.type === "pattern" &&
              "First name should contain only alphabets")
          }
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />

        <TextField
          label="Last Name"
          {...register("lastName", {
            required: true,
            pattern: /^[a-zA-Z\s]*$/,
          })}
          error={!!errors.lastName}
          helperText={
            (errors.lastName?.type === "required" && "Last name is required") ||
            (errors.lastName?.type === "pattern" &&
              "Last name should contain only alphabets")
          }
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <TextField
          label="Username"
          {...register("username", { required: true })}
          error={!!errors.username}
          helperText={
            errors.username?.type === "required" && "Username is required"
          }
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <TextField
          label="Email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
          })}
          error={!!errors.email}
          helperText={
            errors.email?.type === "required"
              ? "Email is required"
              : errors.email?.type === "pattern"
              ? "Invalid email format"
              : ""
          }
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <TextField
          label="Telephone Number"
          {...register("telephone_number", {
            required: true,
            minLength: 10,
            maxLength: 10,
            pattern: /^\d{10}$/,
          })}
          error={!!errors.telephone_number}
          helperText={
            (errors.telephone_number?.type === "required" &&
              "Telephone number is required") ||
            (errors.telephone_number?.type === "minLength" &&
              "Entered telephone number is less than 10 digits") ||
            (errors.telephone_number?.type === "maxLength" &&
              "Entered telephone number is more than 10 digits") ||
            (errors.telephone_number?.type === "pattern" &&
              "Invalid phone number")
          }
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />

        <TextField
          label="Address Line 1"
          {...register("addressL1", { required: true })}
          error={!!errors.addressL1}
          helperText={
            errors.addressL1?.type === "required" &&
            "Address Line 1 is required"
          }
          value={addressL1}
          onChange={(e) => {
            setAddressL1(e.target.value);
          }}
        />

        <TextField
          label="Address Line 2"
          {...register("addressL2", { required: true })}
          error={!!errors.addressL2}
          helperText={
            errors.addressL2?.type === "required" &&
            "Address Line 2 is required"
          }
          value={addressL2}
          onChange={(e) => {
            setAddressL2(e.target.value);
          }}
        />

        <TextField
          label="Address Line 3"
          {...register("addressL3")}
          error={!!errors.addressL3}
          helperText={
            errors.addressL3?.type === "required" &&
            "Address Line 3 is required"
          }
          value={addressL3}
          onChange={(e) => {
            setAddressL3(e.target.value);
          }}
        />

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 10,
            pattern: /^[a-zA-Z0-9_]+$/i,
          })}
          onChange={(e) => {
            setPassword(e.target.value);
            handlePasswordChange(e);
          }}
          error={!!errors.password}
          helperText={
            (errors.password?.type === "required" && "Password is required") ||
            (errors.password?.type === "pattern" &&
              "Password is in the wrong format") ||
            (errors.password?.type === "minLength" &&
              "Password should be at least 6 characters") ||
            (errors.password?.type === "maxLength" &&
              "Password should be at most 10 characters")
          }
          value={password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === password || "Passwords do not match",
          })}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          error={!!errors.confirmPassword}
          helperText={
            errors.confirmPassword?.type === "required"
              ? "Confirm Password is required"
              : errors.confirmPassword?.message
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <div
          style={{ color: getStrenghtColor(), marginBottom: theme.spacing(2) }}
        >
          {passwordStrength === "strong" && "Strong Password"}
          {passwordStrength === "weak" && "Weak Password"}
          {passwordStrength === "poor" && "Poor Password"}
        </div>

        <FormControl>
          <InputLabel>Role</InputLabel>
          <Select
            {...register("role", { required: true })}
            defaultValue=""
            error={!!errors.role}
            helperText={errors.role?.type === "required" && "Role is required"}
          >
            <MenuItem value={"Member"}>Member</MenuItem>
            <MenuItem value={"Organization Admin"}>Organization Admin</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox {...register("acceptTerms", { required: true })} />
          }
          label="I accept the terms and conditions"
          error={!!errors.acceptTerms}
          helperText={
            errors.acceptTerms?.type === "required" &&
            "You must accept the terms and conditions"
          }
        />

        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </StyledForm>
    </StyledContainer>
  );
};

export default Register;

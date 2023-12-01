import { Avatar, Box, Button, styled, TextField } from "@mui/material";

export const HeaderWrapper = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    width: "1200px",
    justifyContent: "space-between",
    paddingBottom: "14px",
    borderBottom: "1px solid #FFFFFF59",
}));

export const HeaderContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
}));

export const HeaderNavigation = styled(Button)(() => ({
    color: "#FFFFFF7A",
    fontSize: "15px",
    letterSpacing: "0.3px",
    fontWeight: "400",
    marginLeft: "7px",
}));

export const Logo = styled(Avatar)(() => ({
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    transform: "scaleX(-1)",
}));

export const SearchFilms = styled(TextField)(() => ({
    color: "white",
    ".MuiOutlinedInput-notchedOutline": {
        borderColor: "#FFFFFF7A",
    },
    ".MuiFormLabel-root": {
        color: "#FFFFFF7A",
    },
    ".MuiInputBase-root": {
        color: "white",
    },
}));

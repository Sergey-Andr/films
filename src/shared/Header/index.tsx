import { Link } from "@mui/material";
import {
    HeaderContainer,
    HeaderNavigation,
    HeaderWrapper,
    Logo,
    SearchFilms,
} from "./ui";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Link
                    href="#"
                    sx={{
                        marginRight: "14px",
                    }}
                >
                    <Logo src={"../../../public/logo.jpg"} alt={"logo"} />
                </Link>
                <HeaderNavigation>Фильмы</HeaderNavigation>
                <HeaderNavigation>Сериалы</HeaderNavigation>
                <HeaderNavigation>Аниме</HeaderNavigation>
            </HeaderContainer>

            <HeaderContainer>
                <HeaderContainer
                    sx={{
                        position: "relative",
                    }}
                >
                    <SearchFilms
                        variant="outlined"
                        label="Поиск"
                        size="small"
                    />
                    <FaMagnifyingGlass
                        style={{
                            fill: "#FFFFFF7A",
                            right: "20px",
                            position: "absolute",
                        }}
                    />
                </HeaderContainer>

                <HeaderNavigation>
                    <GoPerson
                        style={{
                            fill: "#FFFFFF7A",
                            width: "20px",
                            height: "20px",
                        }}
                    />
                    Войти
                </HeaderNavigation>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;

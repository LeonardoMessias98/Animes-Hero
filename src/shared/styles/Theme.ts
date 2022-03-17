import themes from "./themes";

export const Theme = (theme: string) => {
  if (theme === "dark") {
    return themes.dark();
  } else {
    return themes.light();
  }
};

export default Theme;

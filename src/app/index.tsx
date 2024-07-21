import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import theme from "./theme";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
};

export default App;

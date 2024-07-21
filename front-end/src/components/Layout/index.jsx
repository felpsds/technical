
import { useSelector } from 'react-redux';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@/utils/theme/themes";
import HeaderComponent from '../Header';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {
  const themes = useSelector((state) => state.menu.theme);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme={themes === 'dark' ? 'dark' : 'light'}
      />
      <ThemeProvider theme={themes === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        <HeaderComponent>
          <Box>
            {children}
          </Box>
        </HeaderComponent>
      </ThemeProvider>
    </>
  );
}
export default Layout;
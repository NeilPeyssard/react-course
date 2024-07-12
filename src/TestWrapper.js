import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./services/rules.store";

const TestWrapper = ({ children }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>
    );
};

export default TestWrapper;

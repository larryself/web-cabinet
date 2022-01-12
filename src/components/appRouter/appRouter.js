import {Route, Routes} from "react-router-dom";
import Index from "../../page/index";
import PayPage from "../../page/payPage/payPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="pay" element={<PayPage/>}/>
        </Routes>
    );
};

export default AppRouter;
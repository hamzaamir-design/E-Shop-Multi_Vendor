import axios from "axios";
import { server } from "../../server";

// Load User
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "LoadUserRequest" });

        if (!server) throw new Error("Server URL is not defined");

        const response = await axios.get(`${server}/user/getuser`, {
            withCredentials: true,
        });

        if (!response || !response.data) throw new Error("No data returned from server");

        dispatch({
            type: "LoadUserSuccess",
            payload: response.data.user,
        });
    } catch (error) {
        console.error("Load user error:", error);

        dispatch({
            type: "LoadUserFail",
            payload: error?.response?.data?.message || error.message || "Something went wrong",
        });
    }
};

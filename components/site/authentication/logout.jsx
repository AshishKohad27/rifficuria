// Redux
import { logout } from "@/redux/auth/auth-slice"; // Import login and logout actions
import { useAppDispatch } from "@/redux/hooks";

export default function Logout() {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="fixed top-4 right-4 z-[1000]">
            <button
                onClick={handleLogout}
                className="relative bg-red-500 text-white px-4 py-2 w-32 h-12 rounded-lg shadow-lg hover:bg-red-600 transition-all"
            >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-red-500"></div>
                <span className="text-2xl">Logout</span>
            </button>
        </div>
    );
}

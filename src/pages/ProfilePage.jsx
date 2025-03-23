import { useParams } from "react-router-dom"

const ProfilePage = () => {
    const params = useParams();

    return (
        <div className="flex items-center justify-center h-screen flex-col w-screen">
            <h1 className="text-3xl font-semibold">Profile Page</h1>
            <p className="text-2xl font-semibold text-blue-600">{params.username}</p>
        </div>
    )
}

export default ProfilePage
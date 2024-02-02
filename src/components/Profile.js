import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div className="flex py-20 items-center justify-center">
                <Card style={{ height: '330px', width: '380px' }} className="py-2 px-4 flex items-center border border-gray-400 bg-white rounded-md">
                    <div className="flex justify-center">
                        <p className="text-tiny uppercase font-bold">{user.name}</p>
                    </div>
                    <CardBody className="overflow-visible py-2 flex justify-center">
                        <div className="flex justify-center">
                            <Image
                                alt="Card background"
                                className="object-cover  rounded-full border border-gray-300"
                                src={user.picture}
                                width={130} // Adjust the width as needed
                            />
                        </div>
                        <h4><b>userEmail: </b> {user.email}</h4>
                        <h4><b>updated_at: </b> {user.updated_at}</h4>
                        <h4><b>sub: </b> {user.sub}</h4>
                    </CardBody>
                </Card>
            </div>
        )
    );
};

export default Profile;

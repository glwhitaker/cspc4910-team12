import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../components/AuthContext';
import './css/profile.css';
import edit from './css/images/edit.png';
import points from './css/images/points.png';

const Profile = () => {
    const { username } = useContext(AuthContext); // Access username from AuthContext
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (!username) {
                setLoading(false);
                return;
            }

            try {
                // Fetch user profile data from API Gateway
                const response = await fetch(`https://90f2jdh036.execute-api.us-east-1.amazonaws.com/default/Team12-GetUpdateUsers?username=${username}`);
                if (response.ok) {
                    const data = await response.json();
                    setProfileData(data); // Set the fetched data to state
                    console.log(data);
                } else {
                    console.error("Failed to fetch user profile:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching user profile", error);
            } finally {
                setLoading(false); // Update loading state
            }
        };

        fetchUserProfile();
    }, [username]); // Dependency on username, so it fetches data when username is available

    if (loading) return <div>Loading profile...</div>;
    if (!profileData) return <div>Error loading profile data</div>;

    // Destructure only the fields we need
    const { F_NAME, USER_TYPE, USERNAME, PhoneNumber, ADDRESS } = profileData;

    return (
        <div>
            <div className='welcome-text'>
                Welcome, {F_NAME || "User"}
            </div>
            <section className='bio-box'>
                <section className='bio-box-title'>
                    User Information:
                </section>
                <section className='bio-box-text'>
                    <div className='line-break'></div>
                    USER TYPE:
                    <span style={{ float: 'right' }}>{USER_TYPE}</span>
                    <div className='line-break'></div>

                    USERNAME:
                    <span style={{ float: 'right' }}>{USERNAME}</span>
                    <div className='line-break'></div>

                    MAIN ADDRESS:
                    <span style={{ float: 'right' }}>{ADDRESS}</span>
                    <div className='line-break'></div>

                    PHONE NUMBER:
                    <span style={{ float: 'right' }}>{PhoneNumber}</span>
                    <div className='line-break'></div>

                    {USER_TYPE === 'driver' && (
                    <>
                        POINT TOTAL:
                        <span style={{ float: 'right' }}>0</span>
                        <div className='line-break'></div>
                    </>
                    )}
                </section>
            </section>
            <section className='options-box'>
                <section className='options-box-title'>
                    OPTIONS
                </section>
                <section className='options-box-info'>
                    <img className='bio-box-pencil' src={edit} alt='Edit Icon' width='25' />
                    <Link to="/update">Update User Information</Link>
                    <div className='line-break'></div>

                    {USER_TYPE === 'sponsor' && (
                    <>
                        <img className='bio-box-pencil' src={points} alt='Point Icon' width='25' />
                        <Link to="/addpoints">Add Points to Drivers</Link>
                        <div className='line-break'></div>
                    </>
                    )}
                </section>
            </section>
        </div>
    );
};

export default Profile;
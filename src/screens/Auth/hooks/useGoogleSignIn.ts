import {
    GoogleSignin,
    User,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { GOOGLE_CLIENT_ID2 } from "@env";
import { useEffect, useState } from 'react';

export const useGoogleSignin = () => {
    const [error, setError] = useState<{ key: string, value: string }>({ key: "", value: "" });
    const [useInfo, setUserInfo] = useState<User>();

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: GOOGLE_CLIENT_ID2, // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        });

    }, []);

    const googleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn();
            setUserInfo(user)
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                setError({ key: statusCodes.SIGN_IN_CANCELLED, value: "user cancelled the login flow" })
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // 
                setError({ key: statusCodes.IN_PROGRESS, value: "operation (e.g. sign in) is in progress already" })
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                setError({ key: statusCodes.PLAY_SERVICES_NOT_AVAILABLE, value: "play services not available or outdated" })
            } else {
                // some other error happened
                setError({ key: "other", value: "some other error happened" })
            }
        }
    };
    return { googleSignIn, error, useInfo }
}
// App.js
import React from 'react';
import {ZegoUIKitPrebuiltCall, GROUP_VIDEO_CALL_CONFIG} from '@zegocloud/zego-uikit-prebuilt-call-rn'
import {View} from "react-native";
import {useSelector} from "react-redux";

export default function VoiceCallPage({navigation}) {
    const auth = useSelector((state) => state.auth);
    const user = auth ? auth.user : null;
    const {userName} = user.name;
    const userID = auth.authToken;

    return (
        <ZegoUIKitPrebuiltCall
            appID={1000394377}
            appSign={'d236d357c591b6aeb99a491687cd0ccc963d4acc70dc86d8a6f5b70fbdcb20aa'}
            userID={userID} // userID can be something like a phone number or the user id on your own user system.
            userName={userName}
            callID={'testCallAriqMonju'} // callID can be any unique string.
            config={{
                // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                ...GROUP_VIDEO_CALL_CONFIG,
                onOnlySelfInRoom: () => {
                    navigation.navigate('HomePage')
                },
                onHangUp: () => {
                    navigation.navigate('HomePage')
                },
            }}
        />
    );
}

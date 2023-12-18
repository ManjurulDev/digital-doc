import {View, ScrollView} from 'react-native';
import React from 'react';

import {components} from '../../components';
import {useSelector} from "react-redux";

const version = 'v1'; // v1 or v2

const Home = () => {

    const isDoctorLoggedIn = useSelector((state) => state.auth.isDoctorLoggedIn);

    const renderHeader = () => {
        return <components.Header burgerMenu={true} user={true} border={true}/>;
    };

    const renderMyAppointments = () => {
        if (isDoctorLoggedIn) {
            return <components.DoctorConferance version={version}/>;
        } else {
            return <components.MyAppointments version={version}/>;
        }
    };

    // const renderCategories = () => {
    //   return <components.Categories version={version} />;
    // };

    const renderDiagnosticsAndTests = () => {
        if (!isDoctorLoggedIn) {
            return <components.DiagnosticsAndTests version={version}/>;
        }
    };

    // const renderBanner = () => {
    //   return <components.Banner version={version} />;
    // };

    // const renderTopRatedDoctors = () => {
    //     if (!isDoctorLoggedIn) {
    //         return <components.TopRatedDoctors version={version}/>;
    //     }
    // };

    const renderContent = () => {
        return (
            <ScrollView
                contentContainerStyle={{flexGrow: 1}}
                showsVerticalScrollIndicator={false}
            >
                {version === 'v1' && renderMyAppointments()}
                {/*{version === 'v1' && renderCategories()}*/}
                {version === 'v1' && renderDiagnosticsAndTests()}
                {/*{version === 'v1' && renderBanner()}*/}
                {/*{version === 'v1' && renderTopRatedDoctors()}*/}
                {/*{version === 'v2' && renderCategories()}*/}
                {/*{version === 'v2' && renderBanner()}*/}
                {version === 'v2' && renderMyAppointments()}
                {version === 'v2' && renderDiagnosticsAndTests()}
                {/*{version === 'v2' && renderTopRatedDoctors()}*/}
            </ScrollView>
        );
    };

    return (
        <View style={{flex: 1}}>
            {renderHeader()}
            {renderContent()}
        </View>
    );
};

export default Home;

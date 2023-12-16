import {View, Text, ScrollView} from 'react-native';
import React, {useState, useMemo} from 'react';

import {onboarding, theme} from '../constants';

import {components} from '../components';
import CustomSafeArea from '../components/common/CustomSafeArea';

const WelcomePage = ({navigation}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
        setCurrentSlideIndex(currentIndex);
    };

    const renderTitle = useMemo(() => {
        return onboarding.map((item, index) => {
            return (
                <View key={index}>
                    {currentSlideIndex === index && (
                        <Text
                            style={{
                                textAlign: 'center',
                                ...theme.fonts.H2,
                                color: theme.colors.darkBlue,
                                textTransform: 'capitalize',
                            }}
                        >
                            {item.title}
                        </Text>
                    )}
                </View>
            );
        });
    }, [currentSlideIndex]);

    const renderIllustration = useMemo(() => {
        return (
            <View>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={updateCurrentSlideIndex}
                    contentContainerStyle={{
                        marginTop: 40,
                        marginBottom: 30,
                    }}
                >
                    {onboarding.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    marginTop: 0,
                                    marginBottom: 0,
                                    width: theme.sizes.width,
                                }}
                            >
                                <item.illustration />
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }, [currentSlideIndex]);

    const renderDots = useMemo(() => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                }}
            >
                {onboarding.map((item, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                height: 3,
                                width: 14,
                                backgroundColor:
                                    currentSlideIndex === index
                                        ? theme.colors.darkBlue
                                        : '#D3E3F1',
                                marginHorizontal: 3,
                            }}
                        />
                    );
                })}
            </View>
        );
    }, [currentSlideIndex]);

    const renderDescription = useMemo(() => {
        return onboarding.map((item, index) => {
            return (
                <View key={index}>
                    {currentSlideIndex === index && (
                        <Text
                            style={{
                                textAlign: 'center',
                                color: theme.colors.darkBlue,
                                textTransform: 'capitalize',
                                ...theme.fonts.textStyle16,
                            }}
                        >
                            {item.description}
                        </Text>
                    )}
                </View>
            );
        });
    }, [currentSlideIndex]);

    const renderButton = useMemo(() => {
        return (
            <View style={{ flexDirection:"row",marginLeft:50,marginTop:15 }}>
                <components.Button
                    title="Doctor"
                    containerStyle={{
                        marginHorizontal: 20,
                        marginTop: 'auto',
                        marginBottom: 20,
                        width:'35%'
                    }}
                    onPress={() => navigation.navigate('DoctorSignIn')}
                />

                <components.Button
                    title="Patent"
                    containerStyle={{
                        marginHorizontal: 20,
                        marginTop: 'auto',
                        marginBottom: 20,
                        width:'35%'
                    }}
                    onPress={() => navigation.navigate('PatientSignIn')}
                />
            </View>


        );
    }, []);

    const renderContent = () => {
        return (
            <View
                style={{
                    marginTop: theme.sizes.height * 0.09,
                    flex: 1,
                }}
            >
                {renderTitle}
                {renderIllustration}
                {renderDots}
                {renderDescription}
                {renderButton}
            </View>
        );
    };

    return <CustomSafeArea>{renderContent()}</CustomSafeArea>;
};

export default WelcomePage;

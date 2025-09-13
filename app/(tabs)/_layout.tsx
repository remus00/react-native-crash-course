import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ headerShown: false }} />
            <Tabs.Screen name="search" options={{ title: 'Search', headerShown: false }} />
            <Tabs.Screen name="saved" options={{ title: 'Saved', headerShown: false }} />
            <Tabs.Screen name="profile" options={{ title: 'Profile', headerShown: false }} />
        </Tabs>
    );
};

export default TabsLayout;

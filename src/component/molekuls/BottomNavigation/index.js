import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TabItems} from '../../atoms';

const BottomNavigation = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.bottom}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItems
            key={index}
            title={label}
            onPress={onPress}
            onLongPress={onLongPress}
            active={isFocused}
          />
        );
      })}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    backgroundColor: '#70A0B2',
    justifyContent: 'space-between',
    height: 64,
    borderRadius: 20,
    marginHorizontal: 17,
    marginVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

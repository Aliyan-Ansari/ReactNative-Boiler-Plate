// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import Svg, {Path} from 'react-native-svg';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';

// const CurvedBackground = ({color}) => {
//   const insets = useSafeAreaInsets();
//   const height = 80 + insets.bottom; // Adjust height if needed

//   return (
//     <View style={[styles.container, {height}]}>
//       <Svg height="100%" width="100%" viewBox="0 0 1440 320">
//         <Path
//           fill={'#FFA500'}
//           d="M0,256L48,250.7C96,245,192,235,288,224C384,213,480,203,576,186.7C672,171,768,149,864,154.7C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//         />
//       </Svg>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     // backgroundColor: 'yellow',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     width: '100%',
//   },
// });

// export default CurvedBackground;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CurvedBackground = ({color}) => {
  const insets = useSafeAreaInsets();
  const height = 80 + insets.bottom;

  return (
    <View style={[styles.container, {height}]}>
      <Svg height="100%" width="100%" viewBox="0 0 1440 320">
        <Path
          fill={color}
          d="M0,320 L0,224 C320,224 320,96 640,96 C960,96 960,224 1280,224 C1600,224 1600,96 1920,96 L1920,320 Z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
  },
});

export default CurvedBackground;

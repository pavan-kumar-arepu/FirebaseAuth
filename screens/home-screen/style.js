import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#1416',
  },
  box: {
    // width: 100,
    height: 10,
    // backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Space between views
  },
  headerIntroText: {
    fontFamily: 'OpenSans',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '400',
    color: '#636776',
  },
  username: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchBox: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
    borderRadius: 20,
  },
});

export default style;

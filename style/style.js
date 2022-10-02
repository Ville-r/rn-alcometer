import { StyleSheet } from "react-native";

export const BasicTheme = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f3f1e8'
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Cairo-ExtraBold',
    fontSize: 50,
  },
  change: {
    marginTop: 70,
    marginLeft: 20,
    justifyContent: 'flex-start',
  },
  changer: {
    marginTop: 3,
    marginLeft: 15
  },
  swithctext: {
    fontFamily: 'Cairo-ExtraBold'
  },
  label: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20
  },

  numbers: {
    textAlign: 'center',
    fontSize: 30,
    height: 55,
    width: 250,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#a09f97',
  },
  results: {
    fontSize: 60,
    textShadowColor: '#32312e',
    textShadowRadius: 2,
  },
  low: {
    color: '#30C000',
  },
  moderate: {
    color: '#fad126',
  },
  high: {
    color: '#FF1111',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    paddingHorizontal: 100,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#7f7e78',
  },
});

export const FancyTheme = StyleSheet.create({
  container: {
    ...BasicTheme.container,
    backgroundColor: '#32312e',
  },
  main: {
    ...BasicTheme.main
  },
  title: {
    ...BasicTheme.title,
    color: '#FFFFFF'
  },
  change: {
    ...BasicTheme.change
  },
  changer: {
    ...BasicTheme.changer
  },
  swithctext: {
    ...BasicTheme.swithctext,
    color: '#FFFFFF'
  },
  label: {
    ...BasicTheme.label,
    color: '#FFFFFF'
  },
  numbers: {
    ...BasicTheme.numbers,
    backgroundColor: '#FFFFFF'
  },
  results: {
    ...BasicTheme.results
  },
  low: {
    ...BasicTheme.low
  },
  moderate: {
    ...BasicTheme.moderate
  },
  high: {
    ...BasicTheme.high
  },
  choice: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  },
  radio: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 2
  },
  button: {
    ...BasicTheme.button
  }
});
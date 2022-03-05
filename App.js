/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  // Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Header = ({title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text style={[styles.headerTitle, {
        color:isDarkMode ? Colors.white : Colors.black,
        },
        ]}>{title}</Text>
     </View>
  )
}

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.gray : Colors.gray,
          }}>
          <Header title="LinkUp"></Header>

          <Section title= "Upcoming Events"> 
          {/* <ScrollView horizontal>
          <Text>This is a text</Text>
          <Text>Also a text</Text>
          <Text>Is this shit scrolling</Text>
          <Text> Well if it is we should scroll to get here</Text>
          </ScrollView> */}
          This will be where we show/store the events that you are signed up for.

          </Section>
          <Section title= "Recaps">
          This will be where we store past events you attended, and any recaps provided.
          </Section>
          <Section title="Groups">
          This will be where we show the groups that you are a part of.</Section> 
          <Section title="What's Next" >
            For now hold tight, this application is a work in progress. 
          </Section>
          <Section title ="">
          <Button
            onPress={() => Alert.alert("It literally says \"Doesn't Work\" Dumbass")}
            title="Make Event (Doesn't work)"
            color="#841584"
            accessibilityLabel="Make Event (Doesn't work)"/>
          </Section>
          <Section></Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
    marginBottom: 35,
    
  },
  headerTitle: {
    marginTop:10,
    fontSize:30,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonStyle: {
    marginBottom:0,
  }
});

export default App;

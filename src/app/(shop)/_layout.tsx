import { Redirect, Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, StyleSheet } from "react-native";
import TabBarIcon from "./tabBarIcon";
import { useAuth } from "../../providers/auth-provider";

export default function TabsLayout() {

  const { user, session, mounting } = useAuth();

  if (mounting) return <ActivityIndicator />;
  if (!session) return <Redirect href='auth'/>;

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      
      <Tabs screenOptions={{
        tabBarActiveTintColor: "#1BC464",
        tabBarInactiveTintColor : 'gray',
        tabBarLabelStyle: { fontSize: 16 },
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 10,
        },
        headerShown: false,
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'shop',
            tabBarIcon(props) {
              return (<TabBarIcon {...props} name="shopping-cart"/>)
            }
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: 'Orders',
            tabBarIcon(props) {
              return (<TabBarIcon {...props} name="book"/>)
            }
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  }
});
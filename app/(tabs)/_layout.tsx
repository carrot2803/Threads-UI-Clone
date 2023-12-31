import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { Tabs } from "expo-router";

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint, headerShown: false }}>
			<Tabs.Screen
				name="index"
				options={{ title: "", tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} /> }}
			/>
			<Tabs.Screen
				name="two"
				options={{ title: "", tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} /> }}
			/>
		</Tabs>
	);
}

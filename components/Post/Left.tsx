import { StyleSheet, View, useColorScheme } from "react-native";
import { Thread } from "../../types";
import { Image } from "expo-image";

export function Left(thread: Thread) {
	const currentTheme = useColorScheme();
	const borderColor = currentTheme === "light" ? "#00000020" : "#ffffff20";

	return (
		<View style={{ justifyContent: "space-between" }}>
			<Image source={thread.author.photo} style={styles.image} contentFit="cover" transition={500} />
			<View style={{ borderWidth: 1, alignSelf: "center", borderColor: borderColor, flexGrow: 1 }} />
			<View style={{ width: 20, alignItems: "center", alignSelf: "center", gap: 3 }}>
				{[1, 2, 3].map((index) => (
					<Image
						key={index}
						source={thread.replies[index - 1]?.author.photo}
						style={{ width: index * 7, height: index * 7, borderRadius: 15 }}
						contentFit="cover"
						transition={500}
					/>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({ image: { width: 40, height: 40, borderRadius: 20 } });

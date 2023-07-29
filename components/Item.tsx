import { Pressable, StyleSheet, View } from "react-native";
import { Left, Head, Footer } from "./Post";
import { BottomIcons } from "./BottomIcons";
import { TheradItemProps } from "../types";
import { Image } from "expo-image";
import { Text } from "./Themed";

export default function ThreadItem({ thread }: TheradItemProps): JSX.Element {
	return (
		<Pressable style={s.container}>
			<Left {...thread} />
			<View style={{ flexShrink: 1, gap: 6 }}>
				<Head name={thread.author.name} verified={thread.author.verified} createdAt={thread.createdAt} />
				<Text>{thread.content}</Text>
				{thread.image && <Image source={thread.image} style={s.image} contentFit="cover" transition={500} />}
				<BottomIcons />
				<Footer replies={thread.repliesCount} likes={thread.likesCount} />
			</View>
		</Pressable>
	);
}

const s = StyleSheet.create({
	container: { flexDirection: "row", gap: 6, paddingBottom: 30 },
	image: { width: "100%", minHeight: 300, borderRadius: 10 },
});

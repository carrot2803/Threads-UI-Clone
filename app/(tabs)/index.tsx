import * as React from "react";
import { Platform, RefreshControl as RC, SafeAreaView, ScrollView, StyleProp, ViewStyle } from "react-native";
import Lottie from "lottie-react-native";
import logo from "../../animations/threads.json";
import { ThreadContext } from "../../context";
import ThreadItem from "../../components/Item";

export default function TabOneScreen() {
	const gif = React.useRef<Lottie>(null);
	const threads = React.useContext(ThreadContext);
	const refresh = <RC refreshing={false} tintColor={"transparent"} onRefresh={() => gif.current?.play()} />;
	React.useEffect(() => gif.current?.play(), []);

	return (
		<SafeAreaView>
			<ScrollView contentContainerStyle={container} refreshControl={refresh}>
				<Lottie ref={gif} source={logo} style={s} loop={false} onAnimationFinish={() => gif.current?.pause()} />
				{threads.map((thread) => (
					<ThreadItem key={thread.id} thread={thread} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

const container: StyleProp<ViewStyle> = { paddingTop: Platform.select({ android: 30 }), paddingHorizontal: 10 };
const s: StyleProp<ViewStyle> = { width: 90, height: 90, alignSelf: "center" };

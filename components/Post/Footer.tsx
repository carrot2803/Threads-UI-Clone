import { Text } from "../Themed";

export function Footer({ replies, likes }: { replies: number; likes: number }) {
	return (
		<Text style={{ color: "gray" }}>
			{replies} replies · {likes} likes
		</Text>
	);
}

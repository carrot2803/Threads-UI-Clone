import React from "react";
import { Thread } from "../types";
import { generateThreads } from "../utils";

export const ThreadContext = React.createContext<Thread[]>([]);

export const ThreadProvdier = ({ children }: React.PropsWithChildren): JSX.Element => {
	const [threads, setThreads] = React.useState<Thread[]>([]);

	React.useEffect(() => setThreads(generateThreads()), []);

	return <ThreadContext.Provider value={threads}>{children}</ThreadContext.Provider>;
};

import blessed from "blessed";
import { createScreen } from "./tui.ts";

type Command = {
	name: string;
	description: string;
	action: () => void;
};

export function createCommandPalette(commands: Command[]) {
	const screen = createScreen({ title: "Command Palette" });

	const container = blessed.box({
		parent: screen,
		top: "center",
		left: "center",
		width: "50%",
		height: "50%",
		border: {
			type: "line",
		},
		style: {
			border: {
				fg: "blue",
			},
		},
	});

	const input = blessed.textbox({
		parent: container,
		bottom: 0,
		height: 1,
		width: "100%-2",
		inputOnFocus: true,
	});

	const list = blessed.list({
		parent: container,
		top: 0,
		bottom: 1,
		width: "100%-2",
		keys: true,
		mouse: true,
		scrollable: true,
		items: commands.map((c) => `${c.name}: ${c.description}`),
		style: {
			selected: {
				bg: "blue",
			},
		},
	});

	input.on("submit", () => {
		const selectedIndex = list.selected;
		if (selectedIndex !== -1) {
			commands[selectedIndex].action();
			screen.destroy();
		}
	});

	list.on("select", () => {
		const selectedIndex = list.selected;
		if (selectedIndex !== -1) {
			commands[selectedIndex].action();
			screen.destroy();
		}
	});

	input.on("keypress", (ch, key) => {
		if (key.name === "up" || key.name === "down") {
			list.emit("keypress", ch, key);
			return;
		}
		const filteredCommands = commands.filter((c) => c.name.toLowerCase().includes(input.value.toLowerCase()));
		list.setItems(filteredCommands.map((c) => `${c.name}: ${c.description}`));
		screen.render();
	});

	screen.key(["escape", "q", "C-c"], () => {
		screen.destroy();
	});

	input.focus();
	screen.render();
}

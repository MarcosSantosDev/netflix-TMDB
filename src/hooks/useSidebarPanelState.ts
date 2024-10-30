import { create } from 'zustand';

type PanelState = {
	panelIsOpened: boolean;
	togglePanel: () => void;
};

export const useSidebarPanelState = create<PanelState>((set) => ({
	panelIsOpened: true,
	togglePanel: () => set((state) => ({ panelIsOpened: !state.panelIsOpened })),
}));

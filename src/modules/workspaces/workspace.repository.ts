import api from "../../lib/api";
import { Workspace } from "./workspace.entity";

export const workspaceRepository = {
    // 所属するワークスペースの一覧処理
    async find(): Promise<Workspace[]> {
        const result = await api.get('/workspaces');
        return result.data.map((workspace: Workspace) => new Workspace(workspace));
    },

    // ワークスペースの作成処理
    async create(name: string): Promise<Workspace> {
        const result = await api.post('/workspaces', { name });
        return new Workspace(result.data);
    },
};
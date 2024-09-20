import { Connection, SurahController } from "@ntq/sdk";

export function useSurah(conn: Connection) {
    const surah = new SurahController(conn);

    return [surah.view, surah.list, surah.add, surah.edit, surah.delete];
}

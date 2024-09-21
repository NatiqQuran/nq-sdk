//Surah
interface SurahName {
    arabic: string;
    pronunciation: string | null;
    translation_phrase: string | null;
    translation: string | null;
}
//Surah List
interface SurahInListProps {
    uuid: string;
    number: number;
    period: "makki" | "madani" | null;
    number_of_ayahs: number;
    name: SurahName[];
}
export type SurahListProps = SurahInListProps[];
//Surah View
interface AyahInsideSurahViewProps {
    number: number;
    uuid: string;
    sajdeh: null | "vajib" | "mustahab";
    text: string;
}
export interface SurahViewProps {
    uuid: string;
    mushaf_uuid: string;
    mushaf_name: string;
    name: SurahName[];
    period: "makki" | "madani" | null;
    number: number;
    bismillah_status: boolean;
    bismillah_as_first_ayah: boolean;
    bismillah_text: string | null;
    number_of_ayahs: number;
    ayahs: AyahInsideSurahViewProps[];
}

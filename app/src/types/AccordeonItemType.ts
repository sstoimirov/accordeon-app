export type AccordeonItemType = {
    id: string;
    title: {
        opened: string,
        closed: string
    };
    isOpened: boolean;
    content: string;
    onClick: (e:React.MouseEvent<HTMLDivElement>) => void;
}
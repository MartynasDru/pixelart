export interface IHeaderNavigationTab {
    title: string;
    link: string;
    options?: Array<IHeaderNavigationTabOption>;
}

export interface IHeaderNavigationTabOption {
    title: string;
    link: string;
}

export interface IInfoCard {
    id?: number;
    title: string;
    description: string;
}

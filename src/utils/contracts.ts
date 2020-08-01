export interface IHeaderNavigationTab {
    title: string;
    link: string;
    options?: Array<IHeaderNavigationTabOption>;
}

export interface IHeaderNavigationTabOption {
    title: string;
    link: string;
}

export interface IInformationCard {
    title: string;
    description: string;
}

export interface ITopic {
    title: string;
    link: string;
}

export interface IContact {
    label: string;
    info: string;
}

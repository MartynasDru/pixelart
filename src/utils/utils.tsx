interface IHeaderNavigationTabs {
    [key: string]: {
        title: string,
        options?: Array<IHeaderNavigationTabOption>
    }
}

export interface IHeaderNavigationTabOption {
    title: string
}

export interface IInfoCard {
    id?: number,
    title: string,
    description: string
}

export enum NavigationTabs {
    AboutUs = 'AboutUs',
    Portfolio = 'Portfolio',
    ContactUs = 'ContactUs',
    Gallery = 'Gallery',
}

export const NavigationTabsInfo: IHeaderNavigationTabs = {
    [NavigationTabs.AboutUs]: {
        title: 'About us'
    },
    [NavigationTabs.Portfolio]: {
        title: 'Portfolio',
        options: [
            {
                title: 'Creative web design'
            },
            {
                title: 'Mobile applications'
            },
            {
                title: 'Print design'
            },
            {
                title: 'Branding solutions'
            },
            {
                title: 'Miscellaneous'
            }
        ]
    },
    [NavigationTabs.ContactUs]: {
        title: 'Contact Us'
    },
    [NavigationTabs.Gallery]: {
        title: 'Gallery',
        options: [
            {
                title: 'Devbridge gallery #1'
            },
            {
                title: 'Devbridge gallery #2'
            }
        ]
    }
}

export const CardsInformation: Array<IInfoCard> = [
    {
        id: 0,
        title: 'Branding identity',
        description: 'Repurpose professionally accurate initiatives without ubiquitous deliverables. Energistically engineer resource maximizing quality.'
    },
    {
        id: 1,
        title: 'Web design',
        description: 'Progressively reintermediate market positioning partnerships whereas visionary content.'
    },
    {
        id: 2,
        title: 'App development',
        description: 'Supply efficient integrated architectures with unique best practices. Assertively strategize pandemic sources.'
    }
]

export const joinTruthy = (items: Array<string | number | boolean | null | undefined>, delimiter = ' ') =>
    (items || []).filter(Boolean).join(delimiter);

export enum ButtonTypes {
    Outlined = 'Outlined',
    White = 'White'
}


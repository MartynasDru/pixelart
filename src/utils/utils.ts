interface IHeaderNavigationTabs {
    [key: string]: {
        title: string;
        link: string;
        options?: Array<IHeaderNavigationTabOption>;
    }
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

export enum NavigationTabs {
    AboutUs = 'AboutUs',
    Portfolio = 'Portfolio',
    ContactUs = 'ContactUs',
    Gallery = 'Gallery',
}

export const NavigationTabsInfo: IHeaderNavigationTabs = {
    [NavigationTabs.AboutUs]: {
        title: 'About us',
        link: '/about-us'
    },
    [NavigationTabs.Portfolio]: {
        title: 'Portfolio',
        link: '/portfolio',
        options: [
            {
                title: 'Creative web design',
                link: '/creative-web-design'
            },
            {
                title: 'Mobile applications',
                link: '/mobile-applications'
            },
            {
                title: 'Print design',
                link: '/print-design'
            },
            {
                title: 'Branding solutions',
                link: '/branding-solutions'
            },
            {
                title: 'Miscellaneous',
                link: '/misc'
            }
        ]
    },
    [NavigationTabs.ContactUs]: {
        title: 'Contact Us',
        link: '/contact-us'
    },
    [NavigationTabs.Gallery]: {
        title: 'Gallery',
        link: '/gallery',
        options: [
            {
                title: 'Devbridge gallery #1',
                link: '/gallery1'
            },
            {
                title: 'Devbridge gallery #2',
                link: '/gallery2'
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

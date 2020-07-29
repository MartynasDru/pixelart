interface IHeaderNavigationTabs {
    [key: string]: {
        title: string,
        options?: Array<IHeaderNavigationTabOption>
    }
}

export interface IHeaderNavigationTabOption {
    title: string
}

export const HeaderNavigationTabs: IHeaderNavigationTabs = {
    AboutUs: {
        title: 'About us'
    },
    Portfolio: {
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
    ContactUs: {
        title: 'Contact Us'
    },
    Gallery: {
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

export const joinTruthy = (items: Array<string | number | boolean | null | undefined>, delimiter = ' ') =>
    (items || []).filter(Boolean).join(delimiter);

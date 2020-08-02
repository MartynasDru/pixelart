import {IContact, IHeaderNavigationTab, IInformationCard, ITopic} from './contracts';

export enum NavigationTabs {
    AboutUs = 'AboutUs',
    Portfolio = 'Portfolio',
    ContactUs = 'ContactUs',
    Gallery = 'Gallery'
}

export enum InformationCards {
    BrandingIdentity = 'BrandingIdentity',
    WebDesign = 'WebDesign',
    AppDevelopment = 'AppDevelopment'
}

export const NavigationTabsData: {[key in NavigationTabs] : IHeaderNavigationTab} = {
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

export const InformationCardsData: {[key in InformationCards]: IInformationCard} = {
    [InformationCards.BrandingIdentity]: {
        title: 'Branding identity',
        description: 'Repurpose professionally accurate initiatives without ubiquitous deliverables. Energistically engineer resource maximizing quality.'
    },
    [InformationCards.WebDesign]: {
        title: 'Web design',
        description: 'Progressively reintermediate market positioning partnerships whereas visionary content.'
    },
    [InformationCards.AppDevelopment]: {
        title: 'App development',
        description: 'Supply efficient integrated architectures with unique best practices. Assertively strategize pandemic sources.',
        isHighlighted: true
    }
}

export const TopicsData: Array<ITopic> = [
    {
        title: 'First impressions in web design',
        link: '/first-impressions'
    },
    {
        title: 'Advanced SEO solutions',
        link: '/seo-solutions'
    },
    {
        title: 'UX design 101',
        link: '/ux-design'
    },
    {
        title: 'What’s the secret behind minimal designs',
        link: '/minimal-design'
    }
]

export const ContactsData: Array<IContact> = [
    {
        label: 'Street',
        info: '4411 Bicetown Road'
    },
    {
        label: 'City',
        info: 'New York'
    },
    {
        label: 'State',
        info: 'NY'
    },
    {
        label: 'Zip',
        info: '10222'
    },
    {
        label: 'Phone',
        info: '917-369-8748'
    },
    {
        label: 'Email',
        info: 'hello@pixelart.com'
    }
]